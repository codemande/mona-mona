import { apiFetch } from "./http.js";
import { notifyError } from "./notify.js";
import { getRecaptchaToken } from "../utils/recaptcha.js";

const DELAY = 350;

const wait = (ms = DELAY) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBrands() {
  try {
    const data = await apiFetch("/device-brands/get-all-website");
    return data.map((brand) => ({ id: brand.device_brand_id, name: brand.name }));
  } catch {
    notifyError("We couldn't load device brands. Please try again shortly.");
    return [];
  }
}

export async function getModelsByBrand(brandId) {
  try {
    const data = await apiFetch(`/device-models/website-by-device-brand/${brandId}`);
    return data.map((model) => ({
      id: model.device_model_id,
      name: model.model_name,
      // Confirmed against the old site (GetProtected.tsx:536): the annual
      // protection price shown to users is `subscription_amount`, not the
      // device's retail `price`. Plain decimal string, full annual amount,
      // no naira/kobo scaling.
      price: Number(model.subscription_amount),
    }));
  } catch {
    notifyError("We couldn't load models for that brand. Please try again shortly.");
    return [];
  }
}

export async function getProtectionPrice(brandId, modelId) {
  const models = await getModelsByBrand(brandId);
  const model = models.find((m) => m.id === modelId);
  if (!model) throw new Error("Model not found");
  return { price: model.price, model };
}

// A NG number can arrive as +234..., 234..., 0..., or a bare 10-digit
// local number. Key on the significant digits so format variants of the
// same line dedupe against each other; the original string is kept for
// display/`tel:`.
function ngDedupeKey(rawPhone) {
  const digits = rawPhone.replace(/\D/g, "");
  if (digits.startsWith("234")) return digits.slice(3);
  if (digits.startsWith("0")) return digits.slice(1);
  return digits;
}

// Isolated on purpose: the real partner object's schema was confirmed by
// curling GET /businesses/all-website against the test backend. Every
// field translation lives here so only this function needs to change if
// the schema shifts.
function mapPartnerToStore(partner) {
  // Every team member's number, then the business's own fallback number —
  // `partner.phone` (as originally assumed from the old-site study) does
  // not exist on the real object, so `business_phone_number` is the
  // correct fallback field. Collected in this order, then deduped so the
  // same line in different formats only shows once.
  const candidates = [
    ...(partner.team_members ?? []).map((m) => m?.phone_number),
    partner.business_phone_number,
  ].filter(Boolean);

  const seen = new Set();
  const phones = [];
  for (const raw of candidates) {
    const key = ngDedupeKey(raw);
    if (seen.has(key)) continue;
    seen.add(key);
    phones.push(raw);
  }

  return {
    id: partner.business_id,
    name: partner.name,
    address: partner.address ?? "",
    city: partner.city ?? "",
    state: partner.state ?? "",
    // Kept raw/unformatted, mirroring the old site's plain phone display.
    phones,
    image: partner.logo_url || "/store-placeholder.svg",
  };
}

export async function getStores(filters = {}) {
  const { state, city, query } = filters;
  const params = new URLSearchParams();
  // Confirmed via curl: the UI's "State" filter maps to the backend's
  // `location` param, not `city`. `state` here is the backend-accepted
  // value from src/data/nigerianStates.js (copied from the old, live site
  // — see that file's comment), not a display label.
  if (state) params.set("location", state);
  if (city) params.set("city", city);
  if (query) params.set("search", query);
  // No pagination control in the UI today — request one large page so all
  // matching stores come back at once, matching the prior all-at-once
  // mock behavior. Confirmed the endpoint honors `limit` and returns
  // `{ partners, total, page, limit, totalPages }`.
  params.set("limit", "100");

  try {
    const data = await apiFetch(`/businesses/all-website?${params.toString()}`);
    return data.partners.map(mapPartnerToStore);
  } catch {
    notifyError("We couldn't load partner stores. Please try again shortly.");
    return [];
  }
}

export async function submitContact(payload) {
  // KNOWN BLOCKER: VITE_RECAPTCHA_SITE_KEY is a production secret and is
  // not available in this environment — getRecaptchaToken throws
  // "Missing reCAPTCHA site key." until the lead dev supplies it. Callers
  // route that failure to a toast (see Support.jsx), not a crash.
  const token = await getRecaptchaToken(
    import.meta.env.VITE_RECAPTCHA_SITE_KEY || "",
    "contact_form"
  );
  return apiFetch("/notifications/contact-form-submission", {
    method: "POST",
    body: JSON.stringify({ ...payload, recaptchaToken: token }),
  });
}

export async function submitPartnerApplication(payload) {
  // Same known reCAPTCHA-site-key blocker as submitContact above.
  const token = await getRecaptchaToken(
    import.meta.env.VITE_RECAPTCHA_SITE_KEY || "",
    "partner_application"
  );
  return apiFetch("/notifications/partner-application-form-submission", {
    method: "POST",
    body: JSON.stringify({ ...payload, recaptchaToken: token }),
  });
}

export async function submitFinancing(payload) {
  await wait(600);
  return { success: true, payload };
}

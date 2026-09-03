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

// New-site-only feature: the old (live) site never builds WhatsApp links
// from partner data, it just prints the raw phone. Ours does, so the
// number has to actually resolve to a valid wa.me link. Assumes every
// partner number is Nigerian — flagged for lead-dev awareness, since
// nothing in the payload states a country explicitly.
function normalizeNgWhatsapp(rawPhone) {
  if (!rawPhone || rawPhone === "N/A") return "";
  const digits = rawPhone.replace(/\D/g, "");
  if (digits.startsWith("234")) return digits;
  if (digits.startsWith("0")) return `234${digits.slice(1)}`;
  if (digits.length === 10) return `234${digits}`;
  return "";
}

// Isolated on purpose: the real partner object's schema was confirmed by
// curling GET /businesses/all-website against the test backend (only the
// phone-fallback chain was known ahead of time). Every field translation
// lives here so only this function needs to change if the schema shifts.
function mapPartnerToStore(partner) {
  const rawPhone =
    // `partner.phone` (as originally assumed from the old-site study) does
    // not exist on the real object — the business's own number comes back
    // as `business_phone_number`. Corrected to match what the API actually
    // returns.
    partner.team_members?.[0]?.phone_number ?? partner.business_phone_number ?? "N/A";

  return {
    id: partner.business_id,
    name: partner.name,
    // TODO: confirm with backend — no opening-hours field observed on the
    // partner object. No source to map from, so this is a plain fallback,
    // not a guess at a field name.
    hours: "",
    address: partner.address ?? "",
    city: partner.city ?? "",
    state: partner.state ?? "",
    // Kept raw/unformatted, mirroring the old site's plain phone display.
    phone: rawPhone,
    whatsapp: normalizeNgWhatsapp(rawPhone),
    image: partner.logo_url || "/store-placeholder.svg",
    // The old (live) site never displays `category` on a partner card —
    // it's only ever used as an outgoing filter param, never rendered. So
    // this mirrors that: no services/tags shown on the store card.
    // TODO: if the business later wants service tags on the card, the
    // backend needs to expose a coded field for it — `category` is a
    // free-text business type ("Sales and Repair Partners"), not a set of
    // discrete services, and there's still no `hours` field either.
    services: [],
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

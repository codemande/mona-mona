// Mirrors the old site's recaptcha.ts: dynamically injects the reCAPTCHA
// v3 script (once, shared across concurrent callers) and returns a fresh
// token for a given action, just before a form submit.

const SCRIPT_ID = "recaptcha-v3";
let loadPromise = null;

function loadScript(siteKey) {
  if (typeof window !== "undefined" && window.grecaptcha) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load reCAPTCHA script.")),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script."));
    document.head.appendChild(script);
  }).catch((err) => {
    // Don't cache a failed load — let the next call retry from scratch.
    loadPromise = null;
    throw err;
  });

  return loadPromise;
}

export async function getRecaptchaToken(siteKey, action) {
  if (!siteKey) throw new Error("Missing reCAPTCHA site key.");

  await loadScript(siteKey);

  if (!window.grecaptcha) throw new Error("reCAPTCHA failed to initialize.");

  const token = await new Promise((resolve, reject) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(siteKey, { action })
        .then(resolve)
        .catch(() => reject(new Error("reCAPTCHA failed to initialize.")));
    });
  });

  if (!token) throw new Error("Empty reCAPTCHA token.");
  return token;
}

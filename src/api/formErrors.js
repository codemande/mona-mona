// Shared parser for the two POST forms' backend validation errors, mirrors
// the old site: each message is prefixed with the offending payload field
// name (e.g. "email must be a valid email address"). Kept out of
// http.js — that wrapper stays generic; only these two forms care about
// field-prefixed messages.
//
// Verified against the real test backend: only some message variants are
// actually prefixed with the literal JSON key (e.g. "first_name must be a
// string") — the more common "First name is required" / "X must be
// between..." variants use a capitalized human label instead, which this
// regex does not match against payloadKeys, so those fall through to
// generalErrors rather than a specific field. That's the old site's own
// behavior being mirrored here, not a new gap introduced by this parser.
export function parseFieldErrors(apiError, payloadKeys) {
  const fieldErrors = {};
  const generalErrors = [];
  let recaptchaError = null;

  const raw = apiError?.body?.message;
  const messages = Array.isArray(raw) ? raw : raw ? [raw] : [];

  for (const message of messages) {
    // Confirmed against the real backend: reCAPTCHA validation failures
    // ("Invalid reCAPTCHA", "reCAPTCHA token is required") arrive inside
    // this same body.message field/array, not only as a client-side
    // getRecaptchaToken() throw — route them the same way either path
    // surfaces, per the old site's convention.
    if (message.includes("reCAPTCHA") || message.includes("recaptcha")) {
      recaptchaError = message;
      continue;
    }
    const match = /^([a-zA-Z0-9_.]+)\s+/.exec(message);
    const field = match?.[1];
    if (field && payloadKeys.includes(field)) {
      fieldErrors[field] = message;
    } else {
      generalErrors.push(message);
    }
  }

  return { fieldErrors, generalErrors, recaptchaError };
}

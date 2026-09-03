// The old (live) site has no login form or session of its own — "login"
// is just a link out to one of these two separate apps. Single source of
// truth for both destinations, used by Header.jsx, Login.jsx, and the
// CustomerLogin.jsx / PartnerLogin.jsx redirect stubs.
export const CUSTOMER_APP_URL = "https://app.monaprotect.com";
export const PARTNER_APP_URL = "https://partners.monaprotect.com";

import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import { PARTNER_APP_URL } from "../utils/externalLinks.js";
import styles from "./LoginForm.module.css";

// The old site has no partner login form or session — it just links out
// to partners.monaprotect.com. This route is kept only as a defensive
// redirect for anyone with a bookmarked/shared /partner-login link.
export default function PartnerLogin() {
  useEffect(() => {
    window.location.replace(PARTNER_APP_URL);
  }, []);

  return (
    <>
      <Seo title="Partner Login" description="Log in to your Mona Partner Store account." path="/partner-login" />

      <Section tone="blue" narrow>
        <SectionHeader eyebrow="Partner Login" title="Welcome Back, Partner" align="center" />
        <div className={styles.formCard}>
          <div className={styles.success}>
            <ExternalLink size={40} aria-hidden="true" />
            <h3>Redirecting you to your Partner account…</h3>
            <p>
              If nothing happens,{" "}
              <a href={PARTNER_APP_URL}>continue to partners.monaprotect.com</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

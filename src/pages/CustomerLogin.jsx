import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import { CUSTOMER_APP_URL } from "../utils/externalLinks.js";
import styles from "./LoginForm.module.css";

// The old site has no customer login form or session — it just links out
// to app.monaprotect.com. This route is kept only as a defensive redirect
// for anyone with a bookmarked/shared /customer-login link.
export default function CustomerLogin() {
  useEffect(() => {
    window.location.replace(CUSTOMER_APP_URL);
  }, []);

  return (
    <>
      <Seo title="Customer Login" description="Log in to your Mona customer account." path="/customer-login" />

      <Section tone="blue" narrow>
        <SectionHeader eyebrow="Customer Login" title="Welcome Back" align="center" />
        <div className={styles.formCard}>
          <div className={styles.success}>
            <ExternalLink size={40} aria-hidden="true" />
            <h3>Redirecting you to your Mona account…</h3>
            <p>
              If nothing happens,{" "}
              <a href={CUSTOMER_APP_URL}>continue to app.monaprotect.com</a>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Seo from "../components/layout/Seo.jsx";
import { submitLogin } from "../api/client.js";
import styles from "./LoginForm.module.css";

// TODO: wire real auth
export default function PartnerLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await submitLogin(form);
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <>
      <Seo title="Partner Login" description="Log in to your Mona Partner Store account." path="/partner-login" />

      <Section tone="blue" narrow>
        <SectionHeader eyebrow="Partner Login" title="Welcome Back, Partner" align="center" />
        <div className={styles.formCard}>
          {success ? (
            <div className={styles.success}>
              <CheckCircle2 size={40} aria-hidden="true" />
              <h3>You're logged in</h3>
              <p>This is a demo experience. Your Partner Store dashboard would appear here.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                id="email"
                label="Business Email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                required
                value={form.password}
                onChange={update("password")}
              />
              <Button type="submit" disabled={submitting} className={styles.submitBtn}>
                {submitting ? "Logging in…" : "Log In"}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

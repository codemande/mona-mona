import { useState } from "react";
import { MessageCircle, Mail, Phone, Wrench } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Select from "../components/ui/Select.jsx";
import Textarea from "../components/ui/Textarea.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import { useToast } from "../components/ui/Toast.jsx";
import { submitContact } from "../api/client.js";
import { ApiError } from "../api/http.js";
import { parseFieldErrors } from "../api/formErrors.js";
import {
  homeFaqs,
  protectionFaqs,
  buyFaqs,
  fixFaqs,
  storesFaqs,
} from "../data/faqs.js";
import { nigerianStates } from "../data/nigerianStates.js";
import { waGenericLink } from "../utils/waLink.js";
import styles from "./Support.module.css";

const EMPTY_FORM = { first_name: "", last_name: "", email: "", location: "", message: "" };

const allFaqs = [...homeFaqs, ...protectionFaqs, ...buyFaqs, ...fixFaqs, ...storesFaqs];

const channels = [
  { icon: MessageCircle, title: "WhatsApp", value: "+234 704 810 0101", href: waGenericLink() },
  { icon: Mail, title: "Email", value: "hello@monaprotect.com", href: "mailto:hello@monaprotect.com" },
  { icon: Phone, title: "Phone", value: "+234 704 810 0101", href: "tel:+2347048100101" },
];

const CONTACT_PAYLOAD_KEYS = Object.keys(EMPTY_FORM);

export default function Support() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mirrors the old site's blanket required-field check — `location` is
    // intentionally excluded, it isn't required there either.
    if (!form.first_name || !form.last_name || !form.email || !form.message) {
      showToast({ type: "error", message: "Please fill in all required fields" });
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await submitContact(form);
      showToast({ type: "success", message: "Form submitted successfully! We will get back to you soon." });
      setForm(EMPTY_FORM);
    } catch (err) {
      if (err instanceof ApiError) {
        const { fieldErrors, generalErrors, recaptchaError } = parseFieldErrors(err, CONTACT_PAYLOAD_KEYS);
        setErrors(fieldErrors);
        if (recaptchaError) {
          showToast({ type: "error", message: "We couldn't verify you're human right now. Please try again shortly." });
        } else {
          showToast({
            type: "error",
            message: generalErrors[0] ?? "We couldn't send your message. Please try again.",
          });
        }
      } else if (err instanceof Error && err.message.includes("reCAPTCHA")) {
        showToast({ type: "error", message: "We couldn't verify you're human right now. Please try again shortly." });
      } else {
        showToast({ type: "error", message: "We couldn't send your message. Please try again." });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Support"
        description="Get help from Mona — WhatsApp, email, phone, repair requests, and frequently asked questions."
        path="/support"
      />

      <PageHero
        title="We're Here to Help."
        subtitle="Reach us on WhatsApp, email or phone, or browse answers to common questions below."
      />

      <Section>
        <div className={styles.channelGrid}>
          {channels.map((c) => (
            <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className={styles.channelCard}>
              <c.icon size={22} aria-hidden="true" />
              <div>
                <h3>{c.title}</h3>
                <p>{c.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.helpLinks}>
          <div className={styles.helpLink}>
            <Wrench size={18} aria-hidden="true" />
            <span>Need a repair request? Visit a Partner Store or message us on WhatsApp.</span>
          </div>
        </div>
      </Section>

      <Section tone="soft" narrow>
        <SectionHeader eyebrow="Contact Us" title="Send Us a Message" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <Input
              id="first_name"
              label="First Name"
              placeholder="Enter First Name"
              required
              value={form.first_name}
              onChange={update("first_name")}
              error={errors.first_name}
            />
            <Input
              id="last_name"
              label="Last Name"
              placeholder="Enter Last Name"
              required
              value={form.last_name}
              onChange={update("last_name")}
              error={errors.last_name}
            />
          </div>
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter Email Address"
            required
            value={form.email}
            onChange={update("email")}
            error={errors.email}
          />
          <Select
            id="location"
            label="Location"
            placeholder="Select State"
            value={form.location}
            onChange={update("location")}
            error={errors.location}
          >
            {nigerianStates.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </Select>
          <Textarea
            id="message"
            label="Message"
            placeholder="Enter your message here..."
            rows={5}
            required
            value={form.message}
            onChange={update("message")}
            error={errors.message}
          />
          <Button type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </Section>

      <Section narrow>
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <Accordion items={allFaqs} />
      </Section>
    </>
  );
}

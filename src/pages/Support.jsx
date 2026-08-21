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
import {
  homeFaqs,
  protectionFaqs,
  buyFaqs,
  fixFaqs,
  storesFaqs,
} from "../data/faqs.js";
import { waGenericLink } from "../utils/waLink.js";
import styles from "./Support.module.css";

const allFaqs = [...homeFaqs, ...protectionFaqs, ...buyFaqs, ...fixFaqs, ...storesFaqs];

const channels = [
  { icon: MessageCircle, title: "WhatsApp", value: "+234 704 810 0101", href: waGenericLink() },
  { icon: Mail, title: "Email", value: "hello@monaprotect.com", href: "mailto:hello@monaprotect.com" },
  { icon: Phone, title: "Phone", value: "+234 704 810 0101", href: "tel:+2347048100101" },
];

export default function Support() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContact(form);
      showToast({ type: "success", message: "Your message has been sent. We'll get back to you shortly." });
      setForm({ name: "", email: "", topic: "", message: "" });
    } catch {
      showToast({ type: "error", message: "We couldn't send your message. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Support"
        description="Get help from Mona — WhatsApp, email, phone, repair requests, complaints, and frequently asked questions."
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
            <Input id="name" label="Full Name" required value={form.name} onChange={update("name")} />
            <Input
              id="email"
              label="Email Address"
              type="email"
              required
              value={form.email}
              onChange={update("email")}
            />
          </div>
          <Select
            id="topic"
            label="Topic"
            placeholder="Select a topic"
            required
            value={form.topic}
            onChange={update("topic")}
          >
            <option value="protection">Smartphone Protection</option>
            <option value="buy">Buy Now, Get Protected & Pay Later</option>
            <option value="fix">Fix Now, Get Protected & Pay Later</option>
            <option value="partner">Partner Store</option>
            <option value="complaint">Complaint</option>
            <option value="other">Other</option>
          </Select>
          <Textarea
            id="message"
            label="Message"
            rows={5}
            required
            value={form.message}
            onChange={update("message")}
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

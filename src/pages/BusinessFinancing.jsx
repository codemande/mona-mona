import { useState } from "react";
import { PackagePlus, Wallet, Store, TrendingUp, ShieldCheck, ClipboardCheck, Users, Rocket } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import Select from "../components/ui/Select.jsx";
import Textarea from "../components/ui/Textarea.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import FeatureGrid from "../components/widgets/FeatureGrid.jsx";
import StepList from "../components/widgets/StepList.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import ImageBand from "../components/widgets/ImageBand.jsx";
import StickyMobileCta from "../components/widgets/StickyMobileCta.jsx";
import { useToast } from "../components/ui/Toast.jsx";
import { submitFinancing } from "../api/client.js";
import { financingFaqs } from "../data/faqs.js";
import businessFinancing from "../assets/business/business-financing.jpg";
import styles from "./ApplicationPage.module.css";

const helps = [
  { icon: PackagePlus, title: "Stock More Inventory", description: "Bring in more eligible devices to sell." },
  { icon: Store, title: "Expand Your Store", description: "Fund a new location or renovation." },
  { icon: Wallet, title: "Manage Cash Flow", description: "Smooth out seasonal demand swings." },
  { icon: TrendingUp, title: "Grow Faster", description: "Take on more customers with working capital." },
];

const whyGrow = [
  { icon: ShieldCheck, title: "Trusted Process", description: "A clear, transparent assessment and approval process." },
  { icon: Users, title: "Partner-First", description: "Designed for existing Mona Partner Stores." },
  { icon: ClipboardCheck, title: "Simple Application", description: "Apply online in minutes." },
  { icon: Rocket, title: "Ongoing Support", description: "Dedicated support throughout your financing term." },
];

const steps = [
  { title: "Apply Online", description: "Submit your business details using the form below." },
  { title: "Assessment", description: "Mona's financing partners assess your eligibility." },
  { title: "Approval", description: "Receive a financing decision and terms." },
  { title: "Funds Disbursed", description: "Access funds to grow your business." },
];

export default function BusinessFinancing() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ businessName: "", partnerId: "", amountNeed: "", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitFinancing(form);
      showToast({ type: "success", message: "Your application has been submitted for review." });
      setForm({ businessName: "", partnerId: "", amountNeed: "", message: "" });
    } catch {
      showToast({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Business Financing"
        description="Business financing for Mona Partner Stores, provided by Mona's financing partners and subject to eligibility and approval."
        path="/business-financing"
      />

      <PageHero
        title="Grow Your Business With Confidence."
        subtitle="Business financing designed for Mona Partner Stores looking to expand inventory and operations."
        primary={{ label: "Apply for Business Financing", href: "#apply" }}
        trust={["For Partner Stores", "Simple Application", "Dedicated Support"]}
      />

      <Section>
        <SectionHeader eyebrow="What It Helps With" title="What Financing Helps You Do" />
        <FeatureGrid items={helps} />
      </Section>

      <Section tone="soft">
        <ImageBand src={businessFinancing} alt="A Mona Partner Store owner reviewing business financing options" ratio="3 / 4">
          <SectionHeader eyebrow="Eligibility" title="Who Can Apply" />
          <p className={styles.paragraph}>
            Existing Mona Partner Stores in good standing can apply for business financing to
            support inventory purchases and business growth.
          </p>
        </ImageBand>
      </Section>

      <Section>
        <SectionHeader eyebrow="Why Mona" title="Why Grow With Mona" />
        <FeatureGrid items={whyGrow} />
      </Section>

      <Section tone="soft" narrow>
        <SectionHeader eyebrow="How It Works" title="From Application to Funding" />
        <StepList steps={steps} />
      </Section>

      <FaqSection items={financingFaqs} />

      <Section id="apply" narrow>
        <SectionHeader eyebrow="Apply" title="Apply for Business Financing" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            id="businessName"
            label="Business Name"
            required
            value={form.businessName}
            onChange={update("businessName")}
          />
          <Input
            id="partnerId"
            label="Partner Store ID"
            required
            value={form.partnerId}
            onChange={update("partnerId")}
          />
          <Select
            id="amountNeed"
            label="Estimated Financing Need"
            placeholder="Select a range"
            required
            value={form.amountNeed}
            onChange={update("amountNeed")}
          >
            <option value="under-1m">Under ₦1,000,000</option>
            <option value="1m-5m">₦1,000,000 – ₦5,000,000</option>
            <option value="5m-plus">Above ₦5,000,000</option>
          </Select>
          <Textarea
            id="message"
            label="Tell us how you plan to use this financing"
            rows={4}
            value={form.message}
            onChange={update("message")}
          />
          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Apply for Business Financing"}
          </Button>
        </form>
        <p className={styles.disclaimer}>
          Business financing is provided by Mona's financing partners and is subject to
          eligibility, assessment and approval.
        </p>
      </Section>

      <CTABand
        title="Ready to Scale Your Store?"
        subtitle="Apply for financing built for Mona Partner Stores."
        primary={{ label: "Apply for Business Financing", href: "#apply" }}
      />

      <StickyMobileCta label="Apply for Business Financing" href="#apply" />
    </>
  );
}

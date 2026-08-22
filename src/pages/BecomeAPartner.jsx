import { useState } from "react";
import { Store, TrendingUp, Users, Wallet, ClipboardList, ShieldCheck, HandCoins, Rocket } from "lucide-react";
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
import { submitPartnerApplication } from "../api/client.js";
import { partnerFaqs } from "../data/faqs.js";
import { nigerianStates } from "../data/nigerianStates.js";
import businessPartner from "../assets/business/business-partner.webp";
import styles from "./ApplicationPage.module.css";

const walkInTable = [
  { situation: "Phone works fine, wants protection", service: "Smartphone Protection" },
  { situation: "Phone is damaged, never protected before", service: "Fix Now, Get Protected & Pay Later" },
  { situation: "Wants a new phone, needs to pay over time", service: "Buy Now, Get Protected & Pay Later" },
  { situation: "Already has Mona Protection, phone damaged", service: "Repair under existing plan" },
];

const whyPartner = [
  { icon: TrendingUp, title: "New Revenue Streams", description: "Offer protection, financing and repairs alongside your existing business." },
  { icon: Users, title: "More Foot Traffic", description: "Become a destination for customers seeking Mona services." },
  { icon: Wallet, title: "Business Financing", description: "Access financing to grow your inventory as a partner." },
  { icon: ShieldCheck, title: "Trusted Brand", description: "Operate under a NAICOM-regulated protection framework." },
];

const businessBenefits = [
  { icon: Rocket, title: "Faster Growth", description: "Convert more walk-ins into completed sales and repairs." },
  { icon: HandCoins, title: "Flexible Support", description: "Offer customers financing options you couldn't before." },
  { icon: ClipboardList, title: "Simple Onboarding", description: "Guided setup with dedicated partner support." },
  { icon: Store, title: "Marketing Visibility", description: "Get listed on the Mona Partner Store locator." },
];

const steps = [
  { title: "Apply Online", description: "Submit your store details using the form below." },
  { title: "Verification", description: "Our team verifies your store and documentation." },
  { title: "Onboarding", description: "Get trained on Mona's products and systems." },
  { title: "Go Live", description: "Start serving customers as an authorised Mona Partner Store." },
];

export default function BecomeAPartner() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ storeName: "", type: "", state: "", phone: "", message: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitPartnerApplication(form);
      showToast({ type: "success", message: "Application received. Our team will reach out shortly." });
      setForm({ storeName: "", type: "", state: "", phone: "", message: "" });
    } catch {
      showToast({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Become a Partner Store"
        description="Join the Mona Partner network and offer Smartphone Protection, repairs, and Buy Now / Fix Now, Get Protected & Pay Later to your customers."
        path="/become-a-partner"
      />

      <PageHero
        title="Grow Your Business With Mona."
        subtitle="Join a network of authorised Partner Stores offering Smartphone Protection, repairs, and pay-later solutions."
        primary={{ label: "Apply to Become a Partner", href: "#apply" }}
        trust={["Licensed by NAICOM", "Nationwide Network", "Dedicated Partner Support"]}
      />

      <Section tone="soft">
        <SectionHeader eyebrow="Every Walk-In, A Solution" title="Every Customer Should Leave With A Solution" />
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer Situation</th>
                <th>Mona Service</th>
              </tr>
            </thead>
            <tbody>
              {walkInTable.map((row) => (
                <tr key={row.situation}>
                  <td data-label="Customer Situation">{row.situation}</td>
                  <td data-label="Mona Service">{row.service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Why Partner" title="Why Partner With Mona" />
        <FeatureGrid items={whyPartner} />
      </Section>

      <Section tone="soft">
        <ImageBand src={businessPartner} alt="A Mona Partner Store owner serving a customer" ratio="3 / 4" reverse>
          <SectionHeader eyebrow="Eligibility" title="Who Can Become a Partner" />
          <p className={styles.paragraph}>
            Smartphone retailers and repair centres with a physical storefront in Nigeria can apply
            to join the Mona Partner network. We look for stores committed to great customer
            service and eligible device sales or repairs.
          </p>
        </ImageBand>
      </Section>

      <Section>
        <SectionHeader eyebrow="Benefits" title="Why Businesses Choose Mona" />
        <FeatureGrid items={businessBenefits} />
      </Section>

      <Section tone="soft" narrow>
        <SectionHeader eyebrow="How It Works" title="From Application to Go-Live" />
        <StepList steps={steps} />
      </Section>

      <Section narrow className={styles.financeTeaser}>
        <SectionHeader
          eyebrow="Business Financing"
          title="Need Financing to Grow?"
          subtitle="Existing Mona Partner Stores can apply for business financing to support inventory and expansion."
          align="center"
        />
        <Button to="/business-financing" variant="outline">
          Learn About Business Financing
        </Button>
      </Section>


      <Section id="apply" tone="soft" narrow>
        <SectionHeader eyebrow="Apply" title="Apply to Become a Partner Store" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            id="storeName"
            label="Store Name"
            required
            value={form.storeName}
            onChange={update("storeName")}
          />
          <Select
            id="type"
            label="Store Type"
            placeholder="Select store type"
            required
            value={form.type}
            onChange={update("type")}
          >
            <option value="retail">Retail Store</option>
            <option value="repair">Repair Centre</option>
            <option value="both">Retail & Repair</option>
          </Select>
          <Select
            id="state"
            label="State"
            placeholder="Select your state"
            required
            value={form.state}
            onChange={update("state")}
          >
            {nigerianStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
          <Input
            id="phone"
            label="Phone Number"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
          />
          <Textarea
            id="message"
            label="Tell us about your business"
            rows={4}
            value={form.message}
            onChange={update("message")}
          />
          <Button type="submit" disabled={submitting}>
            {submitting ? "Submitting…" : "Apply to Become a Partner"}
          </Button>
        </form>
      </Section>

      <FaqSection items={partnerFaqs} />

      <CTABand
        title="Ready to Grow With Mona?"
        subtitle="Join our network of authorised Partner Stores today."
        primary={{ label: "Apply to Become a Partner", href: "#apply" }}
      />

      <StickyMobileCta label="Apply to Become a Partner" href="#apply" />
    </>
  );
}

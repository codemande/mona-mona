import { useState } from "react";
import { Store, TrendingUp, Users, Wallet, ClipboardList, ShieldCheck, HandCoins, Rocket, CircleDollarSign } from "lucide-react";
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
import { ApiError } from "../api/http.js";
import { parseFieldErrors } from "../api/formErrors.js";
import { partnerFaqs } from "../data/faqs.js";
import { nigerianStates } from "../data/nigerianStates.js";
import businessPartner from "../assets/business/business-partner.webp";
import styles from "./ApplicationPage.module.css";

// The old site's *partner application* form sends lowercase/hyphenated
// state values (e.g. "abia", "akwa-ibom", "rivers") — a different
// convention from nigerianStates.js's `value`, which matches the store
// locator's `location` filter (e.g. "Port-Harcourt" for Rivers). Derived
// here from each state's display label rather than duplicating a second
// hardcoded list; FCT is the one confirmed exception, kept as the same
// string the filter uses.
// TODO: confirm with backend — this transform is inferred from a few
// examples in the old site's code (abia, akwa-ibom, rivers, FCT); it has
// not been verified against the test API for every one of the 36 states.
function toPartnerStateValue(state) {
  if (state.value === "Federal Capital Territory (FCT)") return state.value;
  return state.label.toLowerCase().replace(/\s+/g, "-");
}

const partnerStateOptions = nigerianStates.map((s) => ({
  label: s.label,
  value: toPartnerStateValue(s),
}));

const EMPTY_FORM = {
  contact_name: "",
  business_name: "",
  email: "",
  phone_number: "",
  state: "",
  partnership_type: "",
  description: "",
};

const PARTNER_PAYLOAD_KEYS = Object.keys(EMPTY_FORM);

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
  { icon: CircleDollarSign, title: "Business Loans", description: "Access business financing of up to ₦100 million, subject to eligibility." },
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

// Mirrors the old site's validateForm: sequential checks, each with its
// own toast, stopping at the first failure.
function validateForm(form, showToast) {
  if (!form.contact_name.trim()) {
    showToast({ type: "error", message: "Please enter your contact name." });
    return false;
  }
  if (!form.business_name.trim()) {
    showToast({ type: "error", message: "Please enter your business name." });
    return false;
  }
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
    showToast({ type: "error", message: "Please enter a valid email address." });
    return false;
  }
  if (!form.phone_number.trim()) {
    showToast({ type: "error", message: "Please enter your phone number." });
    return false;
  }
  if (!form.state) {
    showToast({ type: "error", message: "Please select your state." });
    return false;
  }
  if (!form.partnership_type) {
    showToast({ type: "error", message: "Please select a partnership type." });
    return false;
  }
  if (!form.description.trim()) {
    showToast({ type: "error", message: "Please tell us about your company." });
    return false;
  }
  return true;
}

export default function BecomeAPartner() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(form, showToast)) return;
    setErrors({});
    setSubmitting(true);
    try {
      await submitPartnerApplication(form);
      showToast({ type: "success", message: "Application submitted successfully! We will get back to you soon." });
      setForm(EMPTY_FORM);
    } catch (err) {
      if (err instanceof ApiError) {
        const { fieldErrors, generalErrors, recaptchaError } = parseFieldErrors(err, PARTNER_PAYLOAD_KEYS);
        setErrors(fieldErrors);
        if (recaptchaError) {
          showToast({ type: "error", message: "We couldn't verify you're human right now. Please try again shortly." });
        } else {
          showToast({
            type: "error",
            message: generalErrors[0] ?? "Something went wrong. Please try again.",
          });
        }
      } else if (err instanceof Error && err.message.includes("reCAPTCHA")) {
        showToast({ type: "error", message: "We couldn't verify you're human right now. Please try again shortly." });
      } else {
        showToast({ type: "error", message: "Something went wrong. Please try again." });
      }
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
            id="contact_name"
            label="Contact Name"
            placeholder="Enter Full Name"
            required
            value={form.contact_name}
            onChange={update("contact_name")}
            error={errors.contact_name}
          />
          <Input
            id="business_name"
            label="Business Name"
            placeholder="Enter Business Name"
            required
            value={form.business_name}
            onChange={update("business_name")}
            error={errors.business_name}
          />
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
          <Input
            id="phone_number"
            label="Phone Number"
            type="tel"
            placeholder="Enter Phone Number"
            required
            value={form.phone_number}
            onChange={update("phone_number")}
            error={errors.phone_number}
          />
          <Select
            id="state"
            label="State"
            placeholder="Select State"
            required
            value={form.state}
            onChange={update("state")}
            error={errors.state}
          >
            {partnerStateOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </Select>
          <Select
            id="partnership_type"
            label="Partnership Type"
            placeholder="Select Partnership Type"
            required
            value={form.partnership_type}
            onChange={update("partnership_type")}
            error={errors.partnership_type}
          >
            <option value="Sales Partner">Sales Partner</option>
            <option value="Repair Partner">Repair Partner</option>
          </Select>
          <Textarea
            id="description"
            label="Tell us about your company"
            placeholder="Tell us about your company and why you want to partner with Mona Protect"
            rows={4}
            required
            value={form.description}
            onChange={update("description")}
            error={errors.description}
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

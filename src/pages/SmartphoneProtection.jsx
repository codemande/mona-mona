import { Smartphone, Droplet, LayoutGrid, Zap, XCircle, ShieldCheck, Clock, Users } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import FeatureGrid from "../components/widgets/FeatureGrid.jsx";
import StepList from "../components/widgets/StepList.jsx";
import ProtectionCalculator from "../components/widgets/ProtectionCalculator.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import ImageBand from "../components/widgets/ImageBand.jsx";
import StickyMobileCta from "../components/widgets/StickyMobileCta.jsx";
import { protectionFaqs } from "../data/faqs.js";
import { waProtectionLink } from "../utils/waLink.js";
import lifestyleCustomer from "../assets/lifestyle/lifestyle-person.webp";
import appleColor from "../assets/brands/apple-color.svg";
import samsungColor from "../assets/brands/samsung-color.svg";
import googleColor from "../assets/brands/google-color.svg";
import styles from "./ProductPage.module.css";

const covered = [
  { icon: Smartphone, title: "Screen Damage", description: "Cracked or shattered screens from accidental drops." },
  { icon: Droplet, title: "Liquid Damage", description: "Spills and accidental exposure to water." },
  { icon: LayoutGrid, title: "Back Glass Damage", description: "Cracks to the rear glass panel." },
  { icon: Zap, title: "Other Accidental Damage", description: "Everyday accidents beyond the screen and back glass." },
];

const notCovered = [
  "Theft",
  "Loss",
  "Intentional damage",
  "Wear & tear",
  "Battery degradation",
  "Software issues",
];

const steps = [
  {
    title: "Choose Your Phone",
    description: (
      <>
        Select your brand and model to see your protection price{" "}
        <a href="#calculator" className={styles.inlineLink}>here</a>.
      </>
    ),
  },
  { title: "Visit a Partner Store", description: "Take your phone for a quick physical inspection at an authorised Mona Partner Store." },
  { title: "Get Protected", description: "After Inspection and Payment, your one-year Smartphone Protection plan is activated instantly." },
];

const whyMona = [
  { icon: ShieldCheck, title: "Licensed & Regulated by NAICOM", description: "Underwritten in partnership with a NAICOM-licensed insurer." },
  { icon: Clock, title: "Fast Activation", description: "Get protected instantly after your inspection at a Partner Store." },
  { icon: Users, title: "Nationwide Partner Stores", description: "A growing network of authorised stores across Nigeria." },
  { icon: XCircle, title: "No Hidden Terms", description: "Clear coverage, clearly explained, before you commit." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smartphone Protection",
  provider: { "@type": "Organization", name: "Mona Protect" },
  areaServed: "NG",
  description: "One-year protection for eligible Apple iPhone, Samsung Galaxy and Google Pixel devices, covering screen, liquid, back glass and other accidental damage.",
};

export default function SmartphoneProtection() {
  return (
    <>
      <Seo
        title="Smartphone Protection"
        description="Protect your eligible Apple iPhone, Samsung Galaxy or Google Pixel against screen, liquid, back glass and accidental damage for one year."
        path="/smartphone-protection"
        jsonLd={jsonLd}
      />

      <PageHero
        title="Protect Your Smartphone Before Accidents Happen."
        subtitle="One year of protection against screen damage, liquid damage, back glass damage and other accidental damage for eligible Apple iPhone, Samsung Galaxy and Google Pixel devices."
        // primary={{ label: "Check Protection Price", href: "#calculator" }}
        // secondary={{ label: "Find a Partner Store", to: "/partner" }}
        trust={["Licensed by NAICOM", "Authorised Partner Stores", "Trusted by Thousands"]}
      />

      <Section id="calculator">
        <SectionHeader eyebrow="Protection Calculator" title="Check Your Protection Price" />
        <ProtectionCalculator />
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="Supported Brands" title="Built for the Phones You Already Own" />
        <FeatureGrid
          columns={3}
          items={[
            { logo: appleColor, logoClass: "logoApple", title: "Apple iPhone", description: "Eligible iPhone 12 and newer models." },
            { logo: samsungColor, logoClass: "logoSamsung", title: "Samsung Galaxy", description: "Eligible Galaxy A, S and Z series models." },
            { logo: googleColor, logoClass: "logoGoogle", title: "Google Pixel", description: "Eligible Pixel 4 and newer models." },
          ]}
        />
      </Section>

      <Section>
        <SectionHeader eyebrow="Coverage" title="What's Covered" />
        <FeatureGrid items={covered} />
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="Coverage" title="What's Not Covered" />
        <ul className={styles.exclusionList}>
          {notCovered.map((item) => (
            <li key={item}>
              <XCircle size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section narrow>
        <SectionHeader eyebrow="How It Works" title="Three Simple Steps" />
        <StepList steps={steps} />
      </Section>

      <Section tone="soft">
        <ImageBand src={lifestyleCustomer} alt="A customer using their protected smartphone" ratio="3 / 4" reverse>
          <SectionHeader eyebrow="Why Mona" title="Why Choose Mona" />
          <FeatureGrid columns={2} items={whyMona} />
        </ImageBand>
      </Section>

      <FaqSection items={protectionFaqs} />

      <CTABand
        title="Protect Your Phone in Minutes."
        subtitle="Check your price and visit a Partner Store to get covered."
        primary={{ label: "Check Protection Price", href: "#calculator" }}
        secondary={{ label: "Find a Partner Store", to: "/partner" }}
        whatsapp={{ label: "Continue on WhatsApp", href: waProtectionLink() }}
      />

      <StickyMobileCta label="Check Protection Price" href="#calculator" />
    </>
  );
}

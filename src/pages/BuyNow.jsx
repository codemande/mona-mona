import { Smartphone, ShieldCheck, Wallet, Store, ShoppingBag, Sparkles, HandCoins, Tag } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import FeatureGrid from "../components/widgets/FeatureGrid.jsx";
import StepList from "../components/widgets/StepList.jsx";
import StoreLocator from "../components/widgets/StoreLocator.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import ImageBand from "../components/widgets/ImageBand.jsx";
import StickyMobileCta from "../components/widgets/StickyMobileCta.jsx";
import { buyFaqs } from "../data/faqs.js";
import { waBuyLink } from "../utils/waLink.js";
import lifestyleStore from "../assets/lifestyle/lifestyle-store.webp";
import styles from "./ProductPage.module.css";

const benefits = [
  { icon: ShoppingBag, title: "Choose Your Phone" },
  { icon: ShieldCheck, title: "One-Year Protection Included" },
  { icon: Wallet, title: "Pay Over Time" },
  { icon: Store, title: "Trusted Partner Stores" },
];

const whyBuy = [
  { icon: Tag, title: "Transparent Pricing", description: "Know exactly what your phone and protection cost upfront." },
  { icon: ShieldCheck, title: "Protection From Day One", description: "One year of Smartphone Protection included, no extra step." },
  { icon: HandCoins, title: "Flexible Payments", description: "Spread the cost of your phone over time." },
  { icon: Sparkles, title: "Eligible Devices Only", description: "Curated eligible Apple, Samsung and Google models." },
];

const steps = [
  { title: "Visit a Partner Store", description: "Find a participating Mona Partner Store near you." },
  { title: "Choose Your Phone", description: "Pick an eligible Apple iPhone, Samsung Galaxy or Google Pixel." },
  { title: "Get Approved", description: "Complete a quick approval process in-store." },
  { title: "Protection Included", description: "Your phone comes with one year of Smartphone Protection." },
  { title: "Pay Over Time", description: "Spread your payments according to your plan." },
];

const coverage = [
  "Screen damage",
  "Liquid damage",
  "Back glass damage",
  "Other accidental damage",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Buy Now, Get Protected & Pay Later",
  provider: { "@type": "Organization", name: "Mona Protect" },
  areaServed: "NG",
  description: "Buy an eligible smartphone with one year of protection included and pay over time at a Mona Partner Store.",
};

export default function BuyNow() {
  return (
    <>
      <Seo
        title="Buy Now, Get Protected & Pay Later"
        description="Get the smartphone you want with one year of protection included, and pay over time at an authorised Mona Partner Store."
        path="/buy-now-get-protected-pay-later"
        jsonLd={jsonLd}
      />

      <PageHero
        title="Get The Smartphone You Want. Protect It From Day One."
        subtitle="Buy an eligible Apple iPhone, Samsung Galaxy or Google Pixel with one year of protection included, and pay over time."
        primary={{ label: "Find a Partner Store", href: "#locator" }}
        secondary={{ label: "See Supported Devices", to: "/supported-devices" }}
        trust={["Licensed by NAICOM", "Authorised Partner Stores", "Trusted by Thousands"]}
      />

      <Section>
        <FeatureGrid columns={4} items={benefits} />
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="Supported Brands" title="Choose From Eligible Devices" />
        <FeatureGrid
          columns={3}
          items={[
            { icon: Smartphone, title: "Apple iPhone", description: "Eligible iPhone 13 and newer models." },
            { icon: Smartphone, title: "Samsung Galaxy", description: "Eligible Galaxy S and Z series models." },
            { icon: Smartphone, title: "Google Pixel", description: "Eligible Pixel 7 and newer models." },
          ]}
        />
      </Section>

      <Section>
        <ImageBand src={lifestyleStore} alt="A customer at a Mona Partner Store retail counter" ratio="3 / 4" reverse>
          <SectionHeader eyebrow="Why Mona" title="Why Buy Through Mona" />
          <FeatureGrid columns={2} items={whyBuy} />
        </ImageBand>
      </Section>

      <Section tone="soft" narrow>
        <SectionHeader eyebrow="How It Works" title="From Store Visit to Ownership" />
        <StepList steps={steps} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Included" title="Why Protection Matters" />
        <ul className={styles.exclusionList}>
          {coverage.map((item) => (
            <li key={item}>
              <ShieldCheck size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="locator" tone="soft">
        <SectionHeader eyebrow="Partner Stores" title="Find A Store Near You" />
        <StoreLocator initialService="buy" />
      </Section>

      <FaqSection items={buyFaqs} />

      <CTABand
        title="Your Next Phone, Protected From The Start."
        subtitle="Find a Partner Store and walk out with a phone and a protection plan."
        primary={{ label: "Find a Partner Store", href: "#locator" }}
        whatsapp={{ label: "Continue on WhatsApp", href: waBuyLink() }}
      />

      <StickyMobileCta label="Find a Partner Store" href="#locator" />
    </>
  );
}

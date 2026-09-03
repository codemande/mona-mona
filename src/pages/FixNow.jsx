import { HeartHandshake, Wrench, ShieldCheck, Wallet, Clock, Smartphone, Droplet, LayoutGrid, Zap } from "lucide-react";
import { Link } from "react-router-dom";
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
import { fixFaqs } from "../data/faqs.js";
import { waFixLink } from "../utils/waLink.js";
import lifestyleRepair from "../assets/lifestyle/lifestyle-repair.webp";
import appleColor from "../assets/brands/apple-color.svg";
import samsungColor from "../assets/brands/samsung-color.svg";
import googleColor from "../assets/brands/google-color.svg";
import styles from "./ProductPage.module.css";

const supportedDevices = [
  { logo: appleColor, logoClass: "logoApple", title: "Apple iPhone", description: "Eligible iPhone 12 and newer models." },
  { logo: samsungColor, logoClass: "logoSamsung", title: "Samsung Galaxy", description: "Eligible Galaxy A, S and Z series models." },
  { logo: googleColor, logoClass: "logoGoogle", title: "Google Pixel", description: "Eligible Pixel 7 and newer models." },
];

const whyFix = [
  { icon: Wrench, title: "Repair First", description: "Get your device fixed by an authorised technician." },
  { icon: ShieldCheck, title: "Protection After", description: "One year of Smartphone Protection begins after repair." },
  { icon: Wallet, title: "Pay Over Time", description: "Spread the cost of your repair with a down payment from 25%, subject to eligibility." },
  { icon: Clock, title: "Fast Turnaround", description: "Most repairs are completed the same day, in-store." },
];

const steps = [
  { title: "Visit a Partner Store", description: "Find a Mona Repair Partner Store near you." },
  { title: "Get Your Phone Inspected", description: "A technician assesses the damage." },
  { title: "Apply for Financing", description: "Submit your application and, if approved, make your required down payment." },
  { title: "Repair Completed & Protected", description: "Your device is repaired on-site, and your one-year Smartphone Protection plan is activated." },
  { title: "Pay Over Time", description: "Spread your remaining balance over time." },
];

const included = [
  { icon: Smartphone, title: "Screen Damage" },
  { icon: Droplet, title: "Liquid Damage" },
  { icon: LayoutGrid, title: "Back Glass Damage" },
  { icon: Zap, title: "Other Accidental Damage" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fix Now, Get Protected & Pay Later",
  provider: { "@type": "Organization", name: "Mona Protect" },
  areaServed: "NG",
  description: "Repair a damaged smartphone, get one year of protection afterward, and pay over time at a Mona Partner Store.",
};

export default function FixNow() {
  return (
    <>
      <Seo
        title="Fix Now, Get Protected & Pay Later"
        description="Repair your damaged smartphone today, get one year of protection afterward, and pay over time at an authorised Mona Partner Store."
        path="/fix-now-get-protected-pay-later"
        jsonLd={jsonLd}
      />

      <PageHero
        title="Repair Today. Stay Protected Tomorrow."
        subtitle="Get your already damaged Apple iPhone, Samsung Galaxy or Google Pixel repaired, receive one year of protection afterward, and pay over time."
        // primary={{ label: "Find a Repair Partner", href: "#locator" }}
        // secondary={{ label: "See Supported Devices", to: "/supported-devices" }}
        trust={["Licensed by NAICOM", "Authorised Partner Stores", "Trusted by Thousands"]}
      >
        <div className={styles.calloutBox}>
          <div className={styles.calloutIcon}>
            <HeartHandshake size={22} aria-hidden="true" />
          </div>
          <div className={styles.calloutText}>
            <h3>Already Protected With Mona?</h3>
            <p>You don't need Fix Now Pay Later, just visit a Partner Store under your existing plan and get a free repair.</p>
          </div>
          <Link to="/partners">
            <ShieldCheck size={16} aria-hidden="true" /> Find a Partner Store
          </Link>
        </div>
      </PageHero>

      <Section>
        <SectionHeader eyebrow="Supported Devices" title="Repairs for Eligible Devices" />
        <FeatureGrid columns={3} items={supportedDevices} />
      </Section>

      <Section tone="soft">
        <ImageBand src={lifestyleRepair} alt="A technician repairing a smartphone at a Mona Partner Store" ratio="3 / 4">
          <SectionHeader eyebrow="Why Mona" title="Why Choose Fix Now" />
          <FeatureGrid columns={2} items={whyFix} />
        </ImageBand>
      </Section>

      <Section narrow>
        <SectionHeader eyebrow="How It Works" title="From Damage to Protected" />
        <StepList steps={steps} />
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="Included" title="What's Included After Your Repair" />
        <FeatureGrid items={included} />
      </Section>

      <Section id="locator">
        <SectionHeader eyebrow="Partner Stores" title="Find A Repair Partner Near You" />
        <StoreLocator />
      </Section>

      <FaqSection items={fixFaqs} />

      <CTABand
        title="Don't Let Damage Wait."
        subtitle="Find a repair partner and get protected right after."
        primary={{ label: "Find a Repair Partner", href: "#locator" }}
        whatsapp={{ label: "Continue on WhatsApp", href: waFixLink() }}
      />

      <StickyMobileCta label="Find a Repair Partner" href="#locator" />
    </>
  );
}

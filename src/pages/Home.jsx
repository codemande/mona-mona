import { motion } from "framer-motion";
import { ShieldCheck, Droplet, LayoutGrid, Zap, Store, Users } from "lucide-react";
import Container from "../components/ui/Container.jsx";
import Section, { SectionHeader, Eyebrow } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import HeroBlobs from "../components/widgets/HeroBlobs.jsx";
import DeviceShowcase from "../components/widgets/DeviceShowcase.jsx";
import JourneyCards from "../components/widgets/JourneyCards.jsx";
import PartnerLogos from "../components/widgets/PartnerLogos.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import ImageBand from "../components/widgets/ImageBand.jsx";
import StickyMobileCta from "../components/widgets/StickyMobileCta.jsx";
import useCountUp from "../hooks/useCountUp.js";
import { fadeInUp, staggerContainer, slideInRight } from "../styles/motion.js";
import { homeFaqs } from "../data/faqs.js";
import { stores } from "../data/stores.js";
import { waGenericLink } from "../utils/waLink.js";
import lifestyleCustomer from "../assets/lifestyle/lifestyle-customer.jpg";
import styles from "./Home.module.css";

const protectionItems = [
  { icon: ShieldCheck, label: "Screen Damage" },
  { icon: Droplet, label: "Liquid Damage" },
  { icon: LayoutGrid, label: "Back Glass Damage" },
  { icon: Zap, label: "Other Accidental Damage" },
];

function AppleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.6.95 3.5.95.865 0 2.222-1.01 3.86-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.856 4.42 2.896 4.44z" />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-9-9 8.9 8.9 0 0 1 6.2 2.5" strokeLinecap="round" />
      <path d="M13 12h8" strokeLinecap="round" />
    </svg>
  );
}

const storeCount = stores.length;
const stateCount = new Set(stores.map((s) => s.state)).size;

function StatTile({ value, suffix = "", label }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className={styles.statTile} ref={ref}>
      <span className={styles.statValue}>
        {animated}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mona Protect",
    url: "https://monaprotect.com",
    description: "Mona is Nigeria's smartphone ownership platform, licensed and regulated by NAICOM.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mona Protect",
    url: "https://monaprotect.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://monaprotect.com/supported-devices?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Powering Smartphone Ownership in Nigeria"
        description="Protect your eligible smartphone, repair a damaged one and pay over time, or buy your next phone with protection included. Licensed and regulated by NAICOM."
        path="/"
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <HeroBlobs />
        <Container className={styles.heroInner}>
          <motion.div
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.badge}>
              <ShieldCheck size={14} aria-hidden="true" />
              <span>Licensed &amp; Regulated by NAICOM</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              Powering Smartphone Ownership <span>in Nigeria.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.subtitle}>
              Protect your eligible smartphone, repair a damaged one and pay over time, or buy
              your next phone with protection included.
            </motion.p>
            <motion.div variants={fadeInUp} className={styles.brandStrip}>
              <span className={styles.brandEyebrow}>Supporting eligible:</span>
              <div className={styles.brandRow}>
                <span className={styles.brandItem}>
                  <AppleGlyph />
                  <span>iPhone</span>
                </span>
                <span className={styles.brandItem}>
                  <span className={styles.samsungMark}>SAMSUNG</span>
                  <span>Galaxy</span>
                </span>
                <span className={styles.brandItem}>
                  <GoogleGlyph />
                  <span>Pixel</span>
                </span>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.actions}>
              <Button to="/smartphone-protection" size="lg">
                Protect My Phone
              </Button>
              <Button to="/partner-stores" variant="outline" size="lg">
                Find a Partner Store
              </Button>
            </motion.div>
            <motion.ul variants={fadeInUp} className={styles.trust}>
              <li>
                <ShieldCheck size={18} aria-hidden="true" />
                Licensed by NAICOM
              </li>
              <li>
                <Store size={18} aria-hidden="true" />
                Authorised Partner Stores
              </li>
              <li>
                <Users size={18} aria-hidden="true" />
                Trusted by Thousands
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <DeviceShowcase />
          </motion.div>
        </Container>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Choose Your Journey"
          title="How Can We Help You Today?"
          align="left"
        />
        <JourneyCards />
      </Section>

      <Section tone="soft">
        <div className={styles.protectGrid}>
          <div className={styles.protectText}>
            <Eyebrow>What We Protect</Eyebrow>
            <h2 className={styles.protectTitle}>Protection That Covers Everyday Accidents</h2>
            <p className={styles.protectSubtitle}>
              One-year protection for eligible Apple iPhone, Samsung Galaxy and Google Pixel
              devices, activated after a quick inspection at a Partner Store.
            </p>
            <Button to="/smartphone-protection">Check Protection Price</Button>
          </div>
          <div className={styles.protectTiles}>
            {protectionItems.map((item) => (
              <div key={item.label} className={styles.tile}>
                <item.icon size={22} aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <p className={styles.protectNote}>
          Available for eligible Apple iPhone, Samsung Galaxy and Google Pixel devices after a
          successful inspection at an authorised Mona Partner Store.
        </p>
      </Section>

      <Section tone="blue">
        <SectionHeader eyebrow="Our Network" title="Built With Trusted Partners" align="center" />
        <PartnerLogos />
        <div className={styles.statRow}>
          <StatTile value={storeCount} suffix="+" label="Partner Stores" />
          <StatTile value={stateCount} suffix="+" label="States Covered" />
          <div className={styles.statTile}>
            <span className={styles.statValue}>
              <ShieldCheck size={28} aria-hidden="true" />
            </span>
            <span className={styles.statLabel}>Licensed &amp; Regulated by NAICOM</span>
          </div>
        </div>
        <p className={styles.naicomNote}>
          Licensed and regulated by the National Insurance Commission (NAICOM).
        </p>
      </Section>

      <Section>
        <ImageBand src={lifestyleCustomer} alt="A customer using their protected smartphone" ratio="3 / 4">
          <Eyebrow>Why Mona</Eyebrow>
          <h2 className={styles.bandTitle}>Whatever Your Smartphone Needs, Start With Mona.</h2>
          <p className={styles.bandSubtitle}>
            Protect your eligible smartphone, repair a damaged one and pay over time, or buy your
            next phone with protection included.
          </p>
          <Button to="/smartphone-protection">Protect My Phone</Button>
        </ImageBand>
      </Section>

      <FaqSection items={homeFaqs} />

      <CTABand
        title="Whatever Your Smartphone Needs, Start With Mona."
        subtitle="Protection, repairs, or your next phone — Mona has a path for you."
        primary={{ label: "Protect My Phone", to: "/smartphone-protection" }}
        secondary={{ label: "Find a Partner Store", to: "/partner-stores" }}
        whatsapp={{ label: "Continue on WhatsApp", href: waGenericLink() }}
      />

      <StickyMobileCta label="Protect My Phone" to="/smartphone-protection" />
    </>
  );
}

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
import { fadeInUp, staggerContainer, slideInRight } from "../styles/motion.js";
import { homeFaqs } from "../data/faqs.js";
import { waGenericLink } from "../utils/waLink.js";
import lifestyleCustomer from "../assets/lifestyle/lifestyle-customer.webp";
import appleRaw from "../assets/brands/apple.svg?raw";
import samsungRaw from "../assets/brands/samsung.svg?raw";
import pixelRaw from "../assets/brands/pixel.svg?raw";
import styles from "./Home.module.css";

const protectionItems = [
  { icon: ShieldCheck, label: "Screen Damage" },
  { icon: Droplet, label: "Liquid Damage" },
  { icon: LayoutGrid, label: "Back Glass Damage" },
  { icon: Zap, label: "Other Accidental Damage" },
];

// Tight content bounding boxes (measured via SVGGraphicsElement.getBBox) so each
// mark scales to its true visual size instead of the padded square viewBox.
const appleMarkup = appleRaw
  .replace("<svg ", '<svg fill="currentColor" ')
  .replace(/viewBox="[^"]*"/, 'viewBox="2.22 0 19.55 24"');
const samsungMarkup = samsungRaw
  .replace("<svg ", '<svg fill="currentColor" ')
  .replace(/viewBox="[^"]*"/, 'viewBox="0 10.17 24 3.67"');
const pixelMarkup = pixelRaw
  .replace("<svg ", '<svg fill="currentColor" ')
  .replace(/viewBox="[^"]*"/, 'viewBox="0.31 0 23.39 24"');

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
                  <span
                    className={`${styles.brandGlyph} ${styles.brandGlyphApple}`}
                    dangerouslySetInnerHTML={{ __html: appleMarkup }}
                  />
                  <span>iPhone</span>
                </span>
                <span className={styles.brandDivider} aria-hidden="true" />
                <span className={styles.brandItem}>
                  <span
                    className={`${styles.brandGlyph} ${styles.brandGlyphSamsung}`}
                    dangerouslySetInnerHTML={{ __html: samsungMarkup }}
                  />
                  <span>Galaxy</span>
                </span>
                <span className={styles.brandDivider} aria-hidden="true" />
                <span className={styles.brandItem}>
                  <span
                    className={`${styles.brandGlyph} ${styles.brandGlyphPixel}`}
                    dangerouslySetInnerHTML={{ __html: pixelMarkup }}
                  />
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

      <Section id="journeys">
        <SectionHeader
          eyebrow="Choose Your Journey"
          title="How Can We Help You Today?"
          align="center"
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
        <div className={styles.naicomBadge}>
          <ShieldCheck size={16} aria-hidden="true" />
          <span>Licensed &amp; Regulated by NAICOM</span>
        </div>
      </Section>

      <Section>
        <ImageBand src={lifestyleCustomer} alt="A customer using their protected smartphone" ratio="3 / 4">
          <Eyebrow>Why Mona</Eyebrow>
          <h2 className={styles.bandTitle}>Whatever Your Smartphone Needs, Start With Mona.</h2>
          <p className={styles.bandSubtitle}>
            Protect your eligible smartphone, repair a damaged one and pay over time, or buy your
            next phone with protection included.
          </p>
          {/* <Button to="/smartphone-protection">Protect My Phone</Button> */}
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

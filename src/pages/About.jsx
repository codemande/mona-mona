import { ShieldCheck, ShoppingBag, Wrench, HeartHandshake, Target, Eye, Users, Award, Globe, Handshake } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import FeatureGrid from "../components/widgets/FeatureGrid.jsx";
import PartnerLogos from "../components/widgets/PartnerLogos.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import ImageBand from "../components/widgets/ImageBand.jsx";
import { aboutFaqs } from "../data/faqs.js";
import lifestyleHandover from "../assets/lifestyle/lifestyle-handover.jpg";
import styles from "./About.module.css";

const whatWeDo = [
  { icon: ShieldCheck, title: "Smartphone Protection", description: "One-year protection for eligible devices." },
  { icon: ShoppingBag, title: "Buy Now, Get Protected & Pay Later", description: "New phones with protection included." },
  { icon: Wrench, title: "Fix Now, Get Protected & Pay Later", description: "Repairs followed by protection." },
  { icon: HeartHandshake, title: "Partner Store Network", description: "A growing network across Nigeria." },
];

const whyChoose = [
  { icon: Award, title: "Licensed & Regulated", description: "Regulated by NAICOM for consumer trust." },
  { icon: Globe, title: "Nationwide Reach", description: "A growing footprint across Nigerian cities." },
  { icon: Handshake, title: "Partner-Powered", description: "Delivered through trusted local businesses." },
  { icon: Users, title: "Customer-First", description: "Built around real ownership situations Nigerians face." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Mona Protect",
  description: "Mona is Nigeria's smartphone ownership platform, licensed and regulated by NAICOM.",
};

export default function About() {
  return (
    <>
      <Seo
        title="About Mona"
        description="Mona is Nigeria's smartphone ownership platform — licensed and regulated by NAICOM, powering protection, repairs and pay-later smartphone ownership."
        path="/about"
        jsonLd={jsonLd}
      />

      <PageHero
        title="Powering Smartphone Ownership in Nigeria."
        subtitle="Mona is Nigeria's smartphone ownership platform — helping people protect, repair, and buy the smartphones they rely on every day."
        trust={["Licensed by NAICOM", "Authorised Partner Stores", "Trusted by Thousands"]}
      />

      <Section>
        <ImageBand src={lifestyleHandover} alt="A Mona Partner Store team member handing over a protected smartphone" ratio="3 / 4">
          <SectionHeader eyebrow="Our Story" title="Why We Built Mona" />
          <p className={styles.paragraph}>
            Smartphones are essential to how Nigerians work, connect and transact — yet accidental
            damage, loss of value, and the upfront cost of a new phone remain real barriers. Mona
            was built to close that gap: a technology platform that makes protecting, repairing and
            owning a smartphone simpler, through a trusted network of Partner Stores across Nigeria.
          </p>
        </ImageBand>
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="What We Do" title="Four Ways We Help" />
        <FeatureGrid items={whatWeDo} />
      </Section>

      <Section>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <Target size={22} aria-hidden="true" />
            <h3>Our Mission</h3>
            <p>To make smartphone ownership more accessible, secure and resilient for every Nigerian.</p>
          </div>
          <div className={styles.missionCard}>
            <Eye size={22} aria-hidden="true" />
            <h3>Our Vision</h3>
            <p>A Nigeria where accidental damage never has to mean going without a phone.</p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="Why Mona" title="Why Choose Mona" />
        <FeatureGrid items={whyChoose} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Our Network" title="Our Partners" align="center" />
        <PartnerLogos />
      </Section>

      <Section tone="blue">
        <div className={styles.joinGrid}>
          <div className={styles.joinCard}>
            <h3>For Customers</h3>
            <p>Protect, repair, or buy your next smartphone through Mona's Partner Store network.</p>
            <Button to="/smartphone-protection" variant="outline">
              Get Started
            </Button>
          </div>
          <div className={styles.joinCard}>
            <h3>For Businesses</h3>
            <p>Join the Mona Partner network and offer protection and pay-later solutions.</p>
            <Button to="/become-a-partner" variant="outline">
              Become a Partner
            </Button>
          </div>
        </div>
      </Section>

      <FaqSection items={aboutFaqs} />

      <CTABand
        title="Join the Mona Network."
        subtitle="Whether you're protecting a phone or growing a business, Mona has a path for you."
        primary={{ label: "Protect My Phone", to: "/smartphone-protection" }}
        secondary={{ label: "Become a Partner", to: "/become-a-partner" }}
      />
    </>
  );
}

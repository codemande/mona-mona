import { useParams, Navigate, Link } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import { guides } from "../data/guides.js";
import styles from "./GuideDetail.module.css";

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.id === slug);

  if (!guide) return <Navigate to="/guides" replace />;

  return (
    <>
      <Seo title={guide.title} description={guide.excerpt} path={`/guides/${slug}`} />

      <Section narrow>
        <p className={styles.breadcrumb}>
          <Link to="/guides">Guides</Link> / {guide.category}
        </p>
        <span className={styles.category}>{guide.category}</span>
        <h1 className={styles.title}>{guide.title}</h1>
        <p className={styles.excerpt}>{guide.excerpt}</p>

        <div className={styles.body}>
          <p>
            {guide.excerpt} Whether you're weighing up Smartphone Protection, planning a repair,
            or exploring Buy Now, Get Protected & Pay Later, understanding how Mona's products
            work helps you make a confident decision for your device.
          </p>
          <p>
            Every Mona product is built around real ownership situations: a phone that still
            works and needs protecting, a phone that's already damaged, or a new phone you want
            to own without paying the full cost upfront. Visit an authorised Mona Partner Store to
            get started, or chat with us on WhatsApp for guidance.
          </p>
        </div>
      </Section>

      <CTABand
        title="Ready to Get Started?"
        subtitle="Protect, repair, or buy your next smartphone with Mona."
        primary={{ label: "Protect My Phone", to: "/smartphone-protection" }}
        secondary={{ label: "Find a Partner Store", to: "/partner-stores" }}
      />
    </>
  );
}

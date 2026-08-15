import { useParams, Navigate, Link } from "react-router-dom";
import { ShieldCheck, Smartphone, Droplet, LayoutGrid, Zap, ClipboardCheck } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Seo from "../components/layout/Seo.jsx";
import FeatureGrid from "../components/widgets/FeatureGrid.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import { devices, findModel, brandLabel } from "../data/devices.js";
import { protectionFaqs } from "../data/faqs.js";
import { waProtectionLink } from "../utils/waLink.js";
import styles from "./ModelDetail.module.css";

const coverage = [
  { icon: Smartphone, title: "Screen Damage" },
  { icon: Droplet, title: "Liquid Damage" },
  { icon: LayoutGrid, title: "Back Glass Damage" },
  { icon: Zap, title: "Other Accidental Damage" },
];

export default function ModelDetail() {
  const { brand, model: modelId } = useParams();
  const model = findModel(brand, modelId);

  if (!model) return <Navigate to="/supported-devices" replace />;

  const brandName = brandLabel(brand);
  const related = (devices[brand] ?? []).filter((m) => m.id !== modelId).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${model.name} Smartphone Protection`,
      brand: brandName,
      offers: {
        "@type": "Offer",
        priceCurrency: "NGN",
        price: model.price,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Supported Devices", item: "https://monaprotect.com/supported-devices" },
        { "@type": "ListItem", position: 2, name: brandName, item: `https://monaprotect.com/supported-devices/${brand}` },
        { "@type": "ListItem", position: 3, name: model.name, item: `https://monaprotect.com/supported-devices/${brand}/${modelId}` },
      ],
    },
  ];

  return (
    <>
      <Seo
        title={`${model.name} Protection in Nigeria`}
        description={`Check the Smartphone Protection price for the ${model.name} and get covered for screen, liquid, back glass and accidental damage.`}
        path={`/supported-devices/${brand}/${modelId}`}
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <Section animate={false}>
          <p className={styles.breadcrumb}>
            <Link to="/supported-devices">Supported Devices</Link> /{" "}
            <Link to={`/supported-devices/${brand}`}>{brandName}</Link> / {model.name}
          </p>
          <h1 className={styles.title}>{model.name} Protection in Nigeria</h1>
          <p className={styles.subtitle}>
            Protect your {model.name} against screen damage, liquid damage, back glass damage and
            other accidental damage for one year.
          </p>

          <div className={styles.priceCard}>
            <div>
              <p className={styles.priceLabel}>One-Year Protection Price</p>
              <p className={styles.price}>₦{model.price.toLocaleString("en-NG")}</p>
            </div>
            <div className={styles.priceActions}>
              <Button to="/partner-stores">Check Eligibility</Button>
              <Button href={waProtectionLink(model.name)} variant="whatsapp">
                Continue on WhatsApp
              </Button>
            </div>
          </div>

          <div className={styles.inspection}>
            <ClipboardCheck size={18} aria-hidden="true" />
            <span>Your {model.name} must pass a physical inspection at an authorised Mona Partner Store before protection can be activated.</span>
          </div>
        </Section>
      </section>

      <Section tone="soft">
        <SectionHeader eyebrow="Coverage" title={`What's Covered On Your ${model.name}`} />
        <FeatureGrid items={coverage} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Available Services" title="Mona Services For This Device" />
        <div className={styles.serviceLinks}>
          <Link to="/smartphone-protection" className={styles.serviceLink}>
            <ShieldCheck size={18} aria-hidden="true" />
            Smartphone Protection
          </Link>
          <Link to="/buy-now-get-protected-pay-later" className={styles.serviceLink}>
            <ShieldCheck size={18} aria-hidden="true" />
            Buy Now, Get Protected & Pay Later
          </Link>
          <Link to="/fix-now-get-protected-pay-later" className={styles.serviceLink}>
            <ShieldCheck size={18} aria-hidden="true" />
            Fix Now, Get Protected & Pay Later
          </Link>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="soft">
          <SectionHeader eyebrow="Related Models" title={`More ${brandName} Models`} />
          <div className={styles.relatedGrid}>
            {related.map((m) => (
              <Link key={m.id} to={`/supported-devices/${brand}/${m.id}`} className={styles.relatedCard}>
                <span>{m.name}</span>
                <span className={styles.relatedPrice}>from ₦{m.price.toLocaleString("en-NG")}/yr</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <FaqSection items={protectionFaqs} />

      <CTABand
        title={`Protect Your ${model.name} Today.`}
        subtitle="Visit a Partner Store to complete your inspection and get covered."
        primary={{ label: "Find a Partner Store", to: "/partner-stores" }}
        whatsapp={{ label: "Continue on WhatsApp", href: waProtectionLink(model.name) }}
      />
    </>
  );
}

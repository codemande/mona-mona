import { useParams } from "react-router-dom";
import { ShieldCheck, Wrench, ShoppingBag, HeartHandshake } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import StoreLocator from "../components/widgets/StoreLocator.jsx";
import FaqSection from "../components/widgets/FaqSection.jsx";
import StickyMobileCta from "../components/widgets/StickyMobileCta.jsx";
import { storesFaqs } from "../data/faqs.js";
// TODO: still reads static mock data for the JSON-LD block and the
// initial city-filtered list below — src/api/client.js's getStores() now
// hits the real /businesses/all-website endpoint, but this direct import
// was left as-is for this step to keep scope isolated. Reconcile these two
// sources (e.g. drive both from getStores()) in a later pass.
import { stores } from "../data/stores.js";
import mapPlaceholder from "../assets/misc/map-placeholder.webp";
import styles from "./PartnerStores.module.css";

const quickFilters = [
  { icon: ShieldCheck, label: "Smartphone Protection", service: "protection" },
  { icon: Wrench, label: "Phone Repairs", service: "repairs" },
  { icon: ShoppingBag, label: "Buy Now, Get Protected & Pay Later", service: "buy" },
  { icon: HeartHandshake, label: "Fix Now, Get Protected & Pay Later", service: "fix" },
];

export default function PartnerStores() {
  const { city } = useParams();
  const title = city ? `Mona Partner Stores in ${city}` : "Find A Mona Partner Store Near You.";

  const listedStores = city ? stores.filter((s) => s.city === city) : stores;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listedStores.map((store, index) => ({
      "@type": "LocalBusiness",
      position: index + 1,
      name: store.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: store.address,
        addressLocality: store.city,
        addressRegion: store.state,
        addressCountry: "NG",
      },
      telephone: store.phone,
    })),
  };

  return (
    <>
      <Seo
        title={city ? `Partner Stores in ${city}` : "Partner Stores"}
        description="Find an authorised Mona Partner Store near you for Smartphone Protection, repairs, or Buy Now / Fix Now, Get Protected & Pay Later."
        path={city ? `/partner-stores/${city}` : "/partner-stores"}
        jsonLd={jsonLd}
      />

      <PageHero
        title={title}
        subtitle="Search by state, city or service to find an authorised Mona Partner Store."
        trust={["Licensed by NAICOM", "Authorised Partner Stores", "Trusted by Thousands"]}
      />

      <Section tone="soft">
        <div className={styles.quickFilters}>
          {quickFilters.map((item) => (
            <div key={item.label} className={styles.quickFilter}>
              <item.icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="search-partner-stores">
        <SectionHeader eyebrow="Store Locator" title="Search Partner Stores" />
        <StoreLocator initialCity={city ?? ""} />
      </Section>

      {/* <Section tone="soft">
        <SectionHeader eyebrow="Map" title="Partner Stores Near You" />
        {/* TODO: replace with Google Maps / Mapbox */}
        {/* <div className={styles.mapFrame}>
          <img src={mapPlaceholder} alt="" aria-hidden="true" loading="lazy" className={styles.mapImage} />
        </div> */}
      {/* </Section> } */}

      <FaqSection items={storesFaqs} />

      <StickyMobileCta label="Search Partner Stores" href="#search-partner-stores" />
    </>
  );
}

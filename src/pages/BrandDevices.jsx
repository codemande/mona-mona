import { useParams, Navigate, Link } from "react-router-dom";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import DeviceGrid from "../components/widgets/DeviceGrid.jsx";
import { brands, devices, brandLabel } from "../data/devices.js";
import styles from "./BrandDevices.module.css";

export default function BrandDevices() {
  const { brand } = useParams();
  const models = devices[brand];

  if (!models) return <Navigate to="/supported-devices" replace />;

  const name = brandLabel(brand);

  return (
    <>
      <Seo
        title={`${name} Protection`}
        description={`Check Smartphone Protection pricing for every eligible ${name} model.`}
        path={`/supported-devices/${brand}`}
      />

      <PageHero
        title={`${name} Protection in Nigeria.`}
        subtitle={`Browse eligible ${name} models and check your one-year Smartphone Protection price.`}
      />

      <Section>
        <SectionHeader eyebrow={name} title={`Eligible ${name} Models`} />
        <DeviceGrid brand={brand} models={models} />
      </Section>

      <Section tone="soft">
        <SectionHeader eyebrow="Other Brands" title="Browse Other Brands" />
        <div className={styles.otherBrands}>
          {brands
            .filter((b) => b.id !== brand)
            .map((b) => (
              <Link key={b.id} to={`/supported-devices/${b.id}`} className={styles.brandLink}>
                {b.name}
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}

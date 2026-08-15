import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import DeviceGrid from "../components/widgets/DeviceGrid.jsx";
import { brands, devices } from "../data/devices.js";

export default function SupportedDevices() {
  return (
    <>
      <Seo
        title="Supported Devices"
        description="See every eligible Apple iPhone, Samsung Galaxy and Google Pixel model supported by Mona Protect."
        path="/supported-devices"
      />

      <PageHero
        title="Supported Devices."
        subtitle="Browse eligible Apple iPhone, Samsung Galaxy and Google Pixel models and check your Smartphone Protection price."
      />

      {brands.map((brand) => (
        <Section key={brand.id} tone={brand.id === "samsung" ? "soft" : "default"}>
          <SectionHeader eyebrow={brand.name} title={`${brand.name} Models`} />
          <DeviceGrid brand={brand.id} models={devices[brand.id]} />
        </Section>
      ))}
    </>
  );
}

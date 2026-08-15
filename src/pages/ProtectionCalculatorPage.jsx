import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import ProtectionCalculator from "../components/widgets/ProtectionCalculator.jsx";

export default function ProtectionCalculatorPage() {
  return (
    <>
      <Seo
        title="Protection Calculator"
        description="Check your Smartphone Protection price for an eligible Apple iPhone, Samsung Galaxy or Google Pixel in seconds."
        path="/protection-calculator"
      />

      <Section tone="blue" narrow>
        <SectionHeader
          eyebrow="Protection Calculator"
          title="What Would It Cost To Protect Your Phone?"
          subtitle="Select your brand and model to see your one-year Smartphone Protection price."
          align="center"
        />
        <ProtectionCalculator />
      </Section>
    </>
  );
}

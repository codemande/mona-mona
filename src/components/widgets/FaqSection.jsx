import { Link } from "react-router-dom";
import Section, { SectionHeader } from "../ui/Section.jsx";
import Accordion from "../ui/Accordion.jsx";
import styles from "./FaqSection.module.css";

export default function FaqSection({ items, viewAllLink = true, tone = "default" }) {
  return (
    <Section tone={tone} narrow>
      <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
      <Accordion items={items} />
      {viewAllLink && (
        <Link to="/support" className={styles.viewAll}>
          View all FAQs →
        </Link>
      )}
    </Section>
  );
}

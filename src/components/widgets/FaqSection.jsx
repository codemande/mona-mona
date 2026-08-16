import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "../ui/Section.jsx";
import Accordion from "../ui/Accordion.jsx";
import styles from "./FaqSection.module.css";

export default function FaqSection({ items, viewAllLink = true, tone = "default" }) {
  return (
    <Section tone={tone} containerClassName={styles.container}>
      <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
      <Accordion items={items} />
      {viewAllLink && (
        <Link to="/support" className={styles.viewAll}>
          View all FAQs
          <ArrowRight size={16} className={styles.viewAllArrow} aria-hidden="true" />
        </Link>
      )}
    </Section>
  );
}

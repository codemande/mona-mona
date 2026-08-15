import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import { guides } from "../data/guides.js";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../styles/motion.js";
import styles from "./Guides.module.css";

export default function Guides() {
  return (
    <>
      <Seo
        title="Guides"
        description="Learn about smartphone protection, repairs, and pay-later ownership in Nigeria with Mona's learning centre."
        path="/guides"
      />

      <PageHero
        title="Guides & Learning Centre."
        subtitle="Practical guides on smartphone protection, repairs, and owning a phone in Nigeria."
      />

      <Section>
        <SectionHeader eyebrow="Guides" title="Latest Articles" />
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {guides.map((guide) => (
            <motion.div key={guide.id} variants={fadeInUp}>
              <Link to={`/guides/${guide.id}`} className={styles.card}>
                <span className={styles.category}>{guide.category}</span>
                <h3 className={styles.title}>{guide.title}</h3>
                <p className={styles.excerpt}>{guide.excerpt}</p>
                <span className={styles.readMore}>
                  Read guide <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

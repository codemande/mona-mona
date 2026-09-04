import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/widgets/PageHero.jsx";
import EmptyState from "../components/ui/EmptyState.jsx";
import { guides } from "../data/guides.js";
import { formatDate } from "../utils/guideMeta.js";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../styles/motion.js";
import styles from "./Guides.module.css";

function publishedTimestamp(guide) {
  const t = new Date(guide.publishedDate).getTime();
  return Number.isNaN(t) ? 0 : t;
}

export default function Guides() {
  const sortedGuides = [...guides].sort(
    (a, b) => publishedTimestamp(b) - publishedTimestamp(a)
  );

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
        {guides.length === 0 ? (
          <EmptyState
            icon={BookOpen}
            title="Guides are on the way"
            message="We're putting together helpful guides on smartphone protection, repairs, and ownership. Check back soon."
          />
        ) : (
          <>
            <SectionHeader eyebrow="Guides" title="Latest Articles" />
            <motion.div
              className={styles.grid}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {sortedGuides.map((guide) => (
                <motion.div key={guide.id} variants={fadeInUp}>
                  <Link to={`/guides/${guide.id}`} className={styles.card}>
                    {guide.cover && (
                      <div className={styles.cardCover}>
                        <img
                          src={guide.cover}
                          alt={guide.coverAlt || guide.title || ""}
                          loading="lazy"
                          className={styles.cardCoverImage}
                        />
                      </div>
                    )}
                    <div className={styles.cardBody}>
                      <span className={styles.category}>{guide.category}</span>
                      <h3 className={styles.title}>{guide.title}</h3>
                      <p className={styles.excerpt}>{guide.excerpt}</p>
                      <div className={styles.cardFooter}>
                        {formatDate(guide.publishedDate) && (
                          <span className={styles.cardDate}>{formatDate(guide.publishedDate)}</span>
                        )}
                        <span className={styles.readMore}>
                          Read guide <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </Section>
    </>
  );
}

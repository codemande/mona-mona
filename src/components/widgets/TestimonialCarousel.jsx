import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials.js";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import styles from "./TestimonialCarousel.module.css";

export default function TestimonialCarousel() {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {testimonials.map((t) => (
        <motion.figure key={t.name} className={styles.card} variants={fadeInUp}>
          <Quote size={22} className={styles.quoteIcon} aria-hidden="true" />
          <blockquote className={styles.quote}>{t.quote}</blockquote>
          <figcaption className={styles.author}>
            {t.name} · {t.city}
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}

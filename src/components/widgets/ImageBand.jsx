import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeInUp, viewportOnce } from "../../styles/motion.js";
import styles from "./ImageBand.module.css";

export default function ImageBand({
  src,
  alt = "",
  decorative = false,
  reverse = false,
  ratio = "3 / 4",
  eager = false,
  fit = "cover",
  children,
}) {
  return (
    <div className={`${styles.band} ${reverse ? styles.reverse : ""}`}>
      <motion.div
        className={styles.imageCol}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={reverse ? slideInRight : slideInLeft}
      >
        <div className={styles.frame} style={{ aspectRatio: ratio }}>
          <img
            src={src}
            alt={decorative ? "" : alt}
            aria-hidden={decorative ? "true" : undefined}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            className={styles.image}
            style={{ objectFit: fit }}
          />
        </div>
      </motion.div>
      <motion.div
        className={styles.textCol}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    </div>
  );
}

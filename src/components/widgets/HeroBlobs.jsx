import { motion } from "framer-motion";
import { blob } from "../../styles/motion.js";
import styles from "./HeroBlobs.module.css";

export default function HeroBlobs() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <motion.span className={`${styles.blob} ${styles.blobOne}`} variants={blob} animate="animate" />
      <motion.span
        className={`${styles.blob} ${styles.blobTwo}`}
        variants={blob}
        animate="animate"
        transition={{ delay: 1.5 }}
      />
    </div>
  );
}

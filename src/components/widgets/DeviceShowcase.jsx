import { motion } from "framer-motion";
import styles from "./DeviceShowcase.module.css";

// TODO: replace with final brand device photography
export default function DeviceShowcase() {
  return (
    <motion.div
      className={styles.showcase}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className={`${styles.phone} ${styles.phoneBack}`}>
        <div className={styles.notch} />
        <span className={styles.label}>Pixel</span>
      </div>
      <div className={`${styles.phone} ${styles.phoneMiddle}`}>
        <div className={styles.punchHole} />
        <span className={styles.label}>Galaxy</span>
      </div>
      <div className={`${styles.phone} ${styles.phoneFront}`}>
        <div className={styles.dynamicIsland} />
        <span className={styles.label}>iPhone</span>
      </div>
    </motion.div>
  );
}

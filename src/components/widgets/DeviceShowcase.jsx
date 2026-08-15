import { motion, useReducedMotion } from "framer-motion";
import heroDevices from "../../assets/hero/hero-devices.png";
import styles from "./DeviceShowcase.module.css";

export default function DeviceShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.showcase}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <motion.div
        className={styles.frame}
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={heroDevices}
          alt="Protected iPhone, Samsung Galaxy and Google Pixel smartphones"
          loading="eager"
          fetchPriority="high"
          className={styles.image}
        />
      </motion.div>
    </motion.div>
  );
}

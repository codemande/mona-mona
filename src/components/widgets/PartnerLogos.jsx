import { motion } from "framer-motion";
import { partnerLogos } from "../../data/partners.js";
import { fadeIn, viewportOnce } from "../../styles/motion.js";
import styles from "./PartnerLogos.module.css";

export default function PartnerLogos() {
  return (
    <motion.div
      className={styles.row}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
    >
      {partnerLogos.map((partner) => (
        <span key={partner.id} className={styles.logo}>
          {partner.name}
        </span>
      ))}
      <span className={styles.more}>and more…</span>
    </motion.div>
  );
}

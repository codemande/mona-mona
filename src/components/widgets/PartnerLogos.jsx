import { motion } from "framer-motion";
import { partnerLogos } from "../../data/partners.js";
import { fadeIn, viewportOnce } from "../../styles/motion.js";
import styles from "./PartnerLogos.module.css";

const track = [...partnerLogos, ...partnerLogos];

export default function PartnerLogos() {
  return (
    <motion.div
      className={styles.wrap}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
    >
      <div className={styles.marquee}>
        <div className={styles.track}>
          {track.map((partner, i) => (
            <span key={`${partner.id}-${i}`} className={styles.logo}>
              {partner.name}
            </span>
          ))}
        </div>
      </div>
      <span className={styles.more}>and more…</span>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { partnerLogos } from "../../data/partners.js";
import { fadeIn, viewportOnce } from "../../styles/motion.js";
import axaMansard from "../../assets/partners/axa_mansard.png";
import oxygenX from "../../assets/partners/OxygenX.jpg";
import veend from "../../assets/partners/Veend.jpeg";
import princePhones from "../../assets/partners/prince_phones_gadget.jpeg";
import styles from "./PartnerLogos.module.css";

// "make-way" source photo is a signboard shot on a dark wall — illegible once
// grayscaled to marquee size, so it falls back to the styled text chip instead.
const logoAssets = {
  "axa-mansard": axaMansard,
  oxygenx: oxygenX,
  veend: veend,
  "prince-phones": princePhones,
};

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
          {track.map((partner, i) => {
            const asset = logoAssets[partner.id];
            return (
              <div key={`${partner.id}-${i}`} className={styles.chip}>
                {asset ? (
                  <img src={asset} alt={partner.name} loading="lazy" className={styles.logoImg} />
                ) : (
                  <span className={styles.logoText}>{partner.name}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <span className={styles.more}>and more…</span>
    </motion.div>
  );
}

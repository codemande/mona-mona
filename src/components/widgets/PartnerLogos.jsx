import { motion } from "framer-motion";
import { partnerLogos } from "../../data/partners.js";
import { fadeIn, viewportOnce } from "../../styles/motion.js";
import axaMansard from "../../assets/partners/mansard.svg";
import oxygenX from "../../assets/partners/oxygen.svg";
import veend from "../../assets/partners/veend.svg";
import princePhones from "../../assets/partners/prince_phone_gadget.svg";
import gadgetiStore from "../../assets/partners/gadgetistore.svg";
import isellr from "../../assets/partners/isellr.svg";
import styles from "./PartnerLogos.module.css";

const logoAssets = {
  "axa-mansard": axaMansard,
  oxygenx: oxygenX,
  veend: veend,
  "prince-phones": princePhones,
  gadgetistore: gadgetiStore,
  isellr: isellr,
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

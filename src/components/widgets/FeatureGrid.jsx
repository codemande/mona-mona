import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import styles from "./FeatureGrid.module.css";

export default function FeatureGrid({ items, columns = 4 }) {
  return (
    <motion.div
      className={styles.grid}
      style={{ "--cols": columns }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {items.map((item) => (
        <motion.div key={item.title} className={styles.item} variants={fadeInUp}>
          {item.icon && (
            <div className={styles.iconWrap}>
              <item.icon size={22} aria-hidden="true" />
            </div>
          )}
          <h3 className={styles.title}>{item.title}</h3>
          {item.description && <p className={styles.description}>{item.description}</p>}
        </motion.div>
      ))}
    </motion.div>
  );
}

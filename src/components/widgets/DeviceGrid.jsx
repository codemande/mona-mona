import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import styles from "./DeviceGrid.module.css";

export default function DeviceGrid({ brand, models }) {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {models.map((model) => (
        <motion.div key={model.id} variants={fadeInUp}>
          <Link to={`/supported-devices/${brand}/${model.id}`} className={styles.card}>
            <span className={styles.name}>{model.name}</span>
            <span className={styles.price}>
              from ₦{model.price.toLocaleString("en-NG")}/yr
            </span>
            <ChevronRight size={18} className={styles.chevron} aria-hidden="true" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

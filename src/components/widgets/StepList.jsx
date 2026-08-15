import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import styles from "./StepList.module.css";

export default function StepList({ steps }) {
  return (
    <motion.ol
      className={styles.list}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {steps.map((step, index) => (
        <motion.li key={step.title} className={styles.step} variants={fadeInUp}>
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}

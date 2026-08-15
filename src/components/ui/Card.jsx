import { motion } from "framer-motion";
import { fadeInUp } from "../../styles/motion.js";
import styles from "./Card.module.css";

export default function Card({ children, className = "", hover = true, as: Tag = "div", ...rest }) {
  const classes = `${styles.card} ${hover ? styles.hover : ""} ${className}`;

  if (Tag === "div") {
    return (
      <motion.div className={classes} variants={fadeInUp} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

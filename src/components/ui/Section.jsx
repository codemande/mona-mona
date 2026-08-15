import { motion } from "framer-motion";
import Container from "./Container.jsx";
import { fadeInUp, viewportOnce } from "../../styles/motion.js";
import styles from "./Section.module.css";

export default function Section({
  children,
  tone = "default",
  className = "",
  containerClassName = "",
  animate = true,
  narrow = false,
  ...rest
}) {
  const toneClass = styles[tone] ?? "";
  const content = (
    <Container className={`${narrow ? styles.narrow : ""} ${containerClassName}`}>
      {children}
    </Container>
  );

  if (!animate) {
    return (
      <section className={`${styles.section} ${toneClass} ${className}`} {...rest}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      className={`${styles.section} ${toneClass} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
      {...rest}
    >
      {content}
    </motion.section>
  );
}

export function Eyebrow({ children }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className = "" }) {
  return (
    <div className={`${styles.header} ${align === "center" ? styles.center : ""} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

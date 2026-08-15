import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import HeroBlobs from "./HeroBlobs.jsx";
import { fadeInUp, staggerContainer } from "../../styles/motion.js";
import styles from "./PageHero.module.css";

export default function PageHero({
  badge = "Licensed & Regulated by NAICOM",
  title,
  subtitle,
  primary,
  secondary,
  trust,
  children,
}) {
  return (
    <section className={styles.hero}>
      <HeroBlobs />
      <Container className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {badge && (
            <motion.div variants={fadeInUp} className={styles.badge}>
              <ShieldCheck size={14} aria-hidden="true" />
              <span>{badge}</span>
            </motion.div>
          )}
          <motion.h1 variants={fadeInUp} className={styles.title}>
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p variants={fadeInUp} className={styles.subtitle}>
              {subtitle}
            </motion.p>
          )}
          {(primary || secondary) && (
            <motion.div variants={fadeInUp} className={styles.actions}>
              {primary && (
                <Button to={primary.to} href={primary.href} size="lg">
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button to={secondary.to} href={secondary.href} variant="outline" size="lg">
                  {secondary.label}
                </Button>
              )}
            </motion.div>
          )}
          {trust && trust.length > 0 && (
            <motion.ul variants={fadeInUp} className={styles.trust}>
              {trust.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </motion.ul>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

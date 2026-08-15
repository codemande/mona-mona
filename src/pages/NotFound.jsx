import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import Section from "../components/ui/Section.jsx";
import Button from "../components/ui/Button.jsx";
import Seo from "../components/layout/Seo.jsx";
import { fadeInUp } from "../styles/motion.js";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />

      <Section animate={false} className={styles.section}>
        <motion.div className={styles.content} initial="hidden" animate="visible" variants={fadeInUp}>
          <div className={styles.iconWrap}>
            <Compass size={28} aria-hidden="true" />
          </div>
          <p className={styles.eyebrow}>404</p>
          <h1 className={styles.title}>We Couldn't Find That Page.</h1>
          <p className={styles.subtitle}>
            The page you're looking for may have moved or no longer exists.
          </p>
          <div className={styles.actions}>
            <Button to="/">Back to Home</Button>
            <Button to="/support" variant="outline">
              Contact Support
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button.jsx";
import styles from "./StickyMobileCta.module.css";

export default function StickyMobileCta({ label, to, href }) {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return undefined;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const show = pastHero && !footerVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.bar}
          initial={reduceMotion ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Button to={to} href={href} size="lg" className={styles.ctaBtn}>
            {label}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

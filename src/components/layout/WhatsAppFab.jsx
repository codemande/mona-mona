import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waGenericLink } from "../../utils/waLink.js";
import styles from "./WhatsAppFab.module.css";

export default function WhatsAppFab() {
  const [hiddenInHero, setHiddenInHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isMobile = window.innerWidth <= 640;
      setHiddenInHero(isMobile && window.scrollY < window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <motion.a
      href={waGenericLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with Mona on WhatsApp"
      style={{ pointerEvents: hiddenInHero ? "none" : "auto" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: hiddenInHero ? 0 : 1, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}

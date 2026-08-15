import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waGenericLink } from "../../utils/waLink.js";
import styles from "./WhatsAppFab.module.css";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={waGenericLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with Mona on WhatsApp"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </motion.a>
  );
}

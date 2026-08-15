import { motion } from "framer-motion";
import { ShieldCheck, Wrench, ShoppingBag, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import { fadeInUp, staggerContainer, viewportOnce } from "../../styles/motion.js";
import { waBuyLink, waFixLink } from "../../utils/waLink.js";
import styles from "./JourneyCards.module.css";

const journeys = [
  {
    key: "protect",
    icon: ShieldCheck,
    accent: "protect",
    title: "Protect My Phone",
    description:
      "Your phone is working perfectly. Protect it against screen damage, liquid damage, back glass damage and accidental damage for one year.",
    cta: { label: "Check Protection Price", to: "/smartphone-protection" },
  },
  {
    key: "fix",
    icon: Wrench,
    accent: "fix",
    title: "My Phone Is Already Damaged",
    description:
      "Didn't protect your phone before the damage? Repair it today, get one-year protection after your repair and pay over time.",
    cta: { label: "Find a Repair Partner", to: "/fix-now-get-protected-pay-later" },
    whatsapp: waFixLink(),
  },
  {
    key: "buy",
    icon: ShoppingBag,
    accent: "buy",
    title: "I Need A New Phone",
    description:
      "Buy an eligible smartphone, get one-year protection included and pay over time.",
    cta: { label: "Find a Partner Store", to: "/buy-now-get-protected-pay-later" },
    whatsapp: waBuyLink(),
  },
  {
    key: "existing",
    icon: HeartHandshake,
    accent: "existing",
    title: "I Already Have Mona Protection",
    description:
      "Has your protected phone been damaged? Visit any authorised Mona Partner Store and we'll help you get back up and running.",
    cta: { label: "Find a Partner Store", to: "/partner-stores" },
  },
];

export default function JourneyCards() {
  return (
    <motion.div
      className={styles.grid}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}
    >
      {journeys.map((journey) => {
        const Icon = journey.icon;
        return (
          <motion.div key={journey.key} className={styles.card} variants={fadeInUp}>
            <div className={`${styles.iconWrap} ${styles[journey.accent]}`}>
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className={styles.title}>{journey.title}</h3>
            <p className={styles.description}>{journey.description}</p>
            <Button to={journey.cta.to} size="sm" className={styles.cta}>
              {journey.cta.label}
            </Button>
            {journey.whatsapp && (
              <a href={journey.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
                or Continue on WhatsApp →
              </a>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

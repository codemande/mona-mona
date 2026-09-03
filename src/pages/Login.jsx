import { User, Store, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import { fadeInUp, staggerContainer } from "../styles/motion.js";
import { CUSTOMER_APP_URL, PARTNER_APP_URL } from "../utils/externalLinks.js";
import styles from "./Login.module.css";

const options = [
  {
    icon: User,
    title: "Customer Login",
    description: "Access your Smartphone Protection plan, repairs, and account details.",
    href: CUSTOMER_APP_URL,
  },
  {
    icon: Store,
    title: "Partner Login",
    description: "Manage your Mona Partner Store, applications, and financing.",
    href: PARTNER_APP_URL,
  },
];

export default function Login() {
  return (
    <>
      <Seo title="Login" description="Choose an account type to log in to Mona." path="/login" />

      <Section tone="blue">
        <SectionHeader eyebrow="Login" title="How Would You Like to Log In?" align="center" />
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {options.map((opt) => (
            <motion.div key={opt.title} variants={fadeInUp}>
              <a
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <div className={styles.iconWrap}>
                  <opt.icon size={24} aria-hidden="true" />
                </div>
                <h3>{opt.title}</h3>
                <p>{opt.description}</p>
                <span className={styles.cta}>
                  Continue <ArrowRight size={16} />
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}

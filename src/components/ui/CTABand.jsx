import { MessageCircle } from "lucide-react";
import Section from "./Section.jsx";
import Button from "./Button.jsx";
import styles from "./CTABand.module.css";

export default function CTABand({
  title,
  subtitle,
  primary,
  secondary,
  whatsapp,
}) {
  return (
    <Section>
      <div className={styles.band}>
        <div className={styles.glow} aria-hidden="true" />
        <span className={`${styles.shape} ${styles.shapeOne}`} aria-hidden="true" />
        <span className={`${styles.shape} ${styles.shapeTwo}`} aria-hidden="true" />
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.actionsCol}>
            <div className={styles.actions}>
              {primary && (
                <Button variant="onDark" size="lg" to={primary.to} href={primary.href}>
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button
                  variant="outline"
                  size="lg"
                  to={secondary.to}
                  href={secondary.href}
                  className={styles.secondaryOnDark}
                >
                  {secondary.label}
                </Button>
              )}
            </div>
            {whatsapp && (
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
                <MessageCircle size={16} aria-hidden="true" />
                {whatsapp.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

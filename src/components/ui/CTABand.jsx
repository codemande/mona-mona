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
    <Section tone="navy" className={styles.band}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
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
          {whatsapp && (
            <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
              {whatsapp.label}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}

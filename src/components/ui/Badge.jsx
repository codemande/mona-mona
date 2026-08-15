import styles from "./Badge.module.css";

export default function Badge({ children, icon: Icon, tone = "blue", className = "" }) {
  return (
    <span className={`${styles.badge} ${styles[tone]} ${className}`}>
      {Icon && <Icon size={14} aria-hidden="true" />}
      {children}
    </span>
  );
}

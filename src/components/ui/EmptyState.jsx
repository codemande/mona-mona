import styles from "./EmptyState.module.css";

export default function EmptyState({ icon: Icon, title, message, children }) {
  return (
    <div className={styles.empty}>
      {Icon && <Icon size={32} aria-hidden="true" />}
      {title && <h3>{title}</h3>}
      {message && <p>{message}</p>}
      {children}
    </div>
  );
}

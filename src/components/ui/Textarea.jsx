import { forwardRef } from "react";
import styles from "./Field.module.css";

const Textarea = forwardRef(function Textarea(
  { label, error, id, className = "", ...rest },
  ref
) {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={ref}
        className={`${styles.control} ${error ? styles.errorState : ""} ${className}`}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
});

export default Textarea;

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Field.module.css";

const Select = forwardRef(function Select(
  { label, error, id, children, placeholder, className = "", ...rest },
  ref
) {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.selectWrap}>
        <select
          id={id}
          ref={ref}
          className={`${styles.control} ${styles.select} ${error ? styles.errorState : ""} ${className}`}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {children}
        </select>
        <ChevronDown size={18} className={styles.selectIcon} aria-hidden="true" />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
});

export default Select;

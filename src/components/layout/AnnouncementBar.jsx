import { ShieldCheck } from "lucide-react";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <ShieldCheck size={14} aria-hidden="true" />
      <span>Licensed &amp; Regulated by NAICOM</span>
    </div>
  );
}

import { Navigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import { legalContent } from "../data/legal.js";
import styles from "./Legal.module.css";

export default function Legal({ type }) {
  const content = legalContent[type];
  if (!content) return <Navigate to="/" replace />;

  return (
    <>
      <Seo title={content.title} description={`${content.title} for Mona Protect (Mona Technologies Ltd, RC 7480610).`} path={`/${type}`} />

      <Section narrow>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.updated}>Mona Technologies Ltd (RC 7480610) · Last updated August 2026</p>

        <div className={styles.body}>
          {content.sections.map((section) => (
            <div key={section.heading} className={styles.block}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Seo from "../components/layout/Seo.jsx";
import { legalContent } from "../data/legal.js";
import styles from "./Legal.module.css";

const EMAIL_RE = /([\w.+-]+@[\w-]+\.[\w.-]+)/g;

// The source text is plain strings (verbatim from the old site) with email
// addresses inline, e.g. "Email: dpo@monaprotect.com." — turn those into
// mailto links without altering the wording around them.
function linkifyEmails(text) {
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  const re = new RegExp(EMAIL_RE);
  while ((match = re.exec(text))) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    parts.push(
      <a key={key++} href={`mailto:${match[0]}`} className={styles.link}>
        {match[0]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

// Some clauses embed line breaks (rendered as <br/> in the old site, e.g. the
// lettered a./b./c. runs in the Claims section) — preserve those as line breaks.
function renderText(text) {
  if (!text) return null;
  return text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {linkifyEmails(line)}
    </Fragment>
  ));
}

function Clause({ clause }) {
  return (
    <div className={styles.clause}>
      <p className={styles.clauseLine}>
        {clause.number && <span className={styles.clauseNumber}>{clause.number}</span>}
        <span>{renderText(clause.text)}</span>
      </p>

      {clause.bullets && (
        <ul className={styles.bullets}>
          {clause.bullets.map((item, i) => (
            <li key={i}>{linkifyEmails(item)}</li>
          ))}
        </ul>
      )}

      {clause.paragraphs?.map((p, i) => (
        <p key={i} className={styles.clauseParagraph}>
          {renderText(p)}
        </p>
      ))}

      {clause.children && (
        <div className={styles.children}>
          {clause.children.map((child) => (
            <Clause key={child.number} clause={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function LegalSection({ section }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionHeading}>
        {section.number}. {section.heading}
      </h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className={styles.plainParagraph}>
          {renderText(p)}
        </p>
      ))}

      {section.clauses?.map((clause) => (
        <Clause key={clause.number} clause={clause} />
      ))}
    </section>
  );
}

export default function Legal({ type }) {
  const content = legalContent[type];
  if (!content) return <Navigate to="/" replace />;

  return (
    <>
      <Seo title={content.title} description={`${content.title} for Mona Protect (Mona Technologies Ltd, RC 7480610).`} path={`/${type}`} />

      <Section narrow>
        <h1 className={styles.title}>{content.title}</h1>
        <div className={styles.dates}>
          <p>
            <strong>Effective Date:</strong> {content.effectiveDate}
          </p>
          <p>
            <strong>Last Updated:</strong> {content.lastUpdated}
          </p>
        </div>

        {content.intro?.map((p, i) => (
          <p key={i} className={styles.plainParagraph}>
            {p}
          </p>
        ))}

        <div className={styles.body}>
          {content.sections.map((section) => (
            <LegalSection key={section.number} section={section} />
          ))}
        </div>
      </Section>
    </>
  );
}

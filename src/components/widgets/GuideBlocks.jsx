import { motion } from "framer-motion";
import StepList from "./StepList.jsx";
import Button from "../ui/Button.jsx";
import Callout from "../ui/Callout.jsx";
import { fadeInUp, viewportOnce } from "../../styles/motion.js";
import styles from "./GuideBlocks.module.css";

function Block({ block }) {
  switch (block.type) {
    case "heading":
      return <h2 className={styles.heading}>{block.text}</h2>;

    case "subheading":
      return <h3 className={styles.subheading}>{block.text}</h3>;

    case "paragraph":
      return <p className={styles.paragraph}>{block.text}</p>;

    case "list":
      return (
        <ul className={styles.list}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "steps":
      return <StepList steps={block.items} />;

    case "table":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} data-label={block.columns[j]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      return <Callout>{block.text}</Callout>;

    case "cta":
      return (
        <div className={styles.ctaWrap}>
          <Button to={block.to} variant={block.variant}>
            {block.label}
          </Button>
        </div>
      );

    default:
      if (import.meta.env.DEV) {
        console.warn(`GuideBlocks: unknown block type "${block.type}"`);
      }
      return null;
  }
}

export default function GuideBlocks({ blocks }) {
  if (!blocks?.length) return null;

  return (
    <motion.div
      className={styles.blocks}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </motion.div>
  );
}

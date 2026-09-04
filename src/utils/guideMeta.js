const WORDS_PER_MINUTE = 200;

export function formatDate(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function calculateReadTime(blocks) {
  if (!Array.isArray(blocks)) return 1;

  const words = blocks.reduce((total, block) => {
    switch (block.type) {
      case "heading":
      case "subheading":
      case "paragraph":
      case "callout":
        return total + countWords(block.text);
      case "list":
        return total + (block.items ?? []).reduce((sum, item) => sum + countWords(item), 0);
      case "steps":
        return (
          total +
          (block.items ?? []).reduce(
            (sum, step) => sum + countWords(step.title) + countWords(step.description),
            0
          )
        );
      case "table":
        return (
          total +
          (block.columns ?? []).reduce((sum, col) => sum + countWords(col), 0) +
          (block.rows ?? []).reduce(
            (sum, row) => sum + row.reduce((rowSum, cell) => rowSum + countWords(cell), 0),
            0
          )
        );
      default:
        return total;
    }
  }, 0);

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

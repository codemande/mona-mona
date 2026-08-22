import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MAX_RETRY_FRAMES = 20;

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    let attempts = 0;

    const tryScroll = () => {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < MAX_RETRY_FRAMES) {
        frame = requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return null;
}

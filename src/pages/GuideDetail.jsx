import { useParams, Navigate, Link } from "react-router-dom";
import Section, { SectionHeader } from "../components/ui/Section.jsx";
import CTABand from "../components/ui/CTABand.jsx";
import Accordion from "../components/ui/Accordion.jsx";
import Seo, { SITE_URL } from "../components/layout/Seo.jsx";
import GuideBlocks from "../components/widgets/GuideBlocks.jsx";
import { guides } from "../data/guides.js";
import { formatDate, calculateReadTime } from "../utils/guideMeta.js";
import styles from "./GuideDetail.module.css";

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = guides.find((g) => g.id === slug);

  if (!guide) return <Navigate to="/guides" replace />;

  const publishedDate = formatDate(guide.publishedDate);
  const readTime = calculateReadTime([...(guide.blocks ?? []), ...(guide.closingBlocks ?? [])]);
  const metaItems = [guide.author && `By ${guide.author}`, publishedDate, `${readTime} min read`].filter(
    Boolean
  );

  const path = `/guides/${slug}`;

  // Built per-request from route params (mirrors PartnerStores.jsx's
  // dynamic jsonLd) rather than hoisted like Home.jsx's static schemas,
  // since it depends on which post matched the slug.
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    description: guide.metaDescription || guide.excerpt,
    datePublished: guide.publishedDate,
    dateModified: guide.publishedDate,
    author: { "@type": "Organization", name: guide.author },
    publisher: { "@type": "Organization", name: "Mona Protect" },
    ...(guide.cover ? { image: `${SITE_URL}${guide.cover}` } : {}),
    mainEntityOfPage: `${SITE_URL}${path}`,
  };

  const faqLd = guide.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <Seo
        title={guide.metaTitle || guide.title}
        description={guide.metaDescription || guide.excerpt}
        path={path}
        jsonLd={[articleLd, faqLd].filter(Boolean)}
      />

      <Section narrow>
        <p className={styles.breadcrumb}>
          <Link to="/guides">Guides</Link> / {guide.category}
        </p>
        <span className={styles.category}>{guide.category}</span>
        <h1 className={styles.title}>{guide.title}</h1>
        <p className={styles.excerpt}>{guide.excerpt}</p>

        {metaItems.length > 0 && (
          <div className={styles.meta}>
            {metaItems.map((item, i) => (
              <span key={i} className={styles.metaItem}>
                {i > 0 && (
                  <span className={styles.metaDot} aria-hidden="true">
                    ·
                  </span>
                )}
                {item}
              </span>
            ))}
          </div>
        )}

        {guide.cover && (
          <div className={styles.cover}>
            <img
              src={guide.cover}
              alt={guide.coverAlt || guide.title || ""}
              loading="eager"
              fetchPriority="high"
              className={styles.coverImage}
            />
          </div>
        )}

        <div className={styles.body}>
          <GuideBlocks blocks={guide.blocks} />

          {guide.faqs?.length > 0 && (
            <div className={styles.faqs}>
              <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
              <Accordion items={guide.faqs} />
            </div>
          )}

          <GuideBlocks blocks={guide.closingBlocks} />
        </div>
      </Section>

      <CTABand
        title="Ready to Get Started?"
        subtitle="Protect, repair, or buy your next smartphone with Mona."
        primary={{ label: "Protect My Phone", to: "/smartphone-protection" }}
        secondary={{ label: "Find a Partner Store", to: "/partners" }}
      />
    </>
  );
}

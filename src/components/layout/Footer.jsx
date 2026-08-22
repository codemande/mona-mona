import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import Container from "../ui/Container.jsx";
import naicomLogo from "../../assets/brands/naicom.png";
import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Products",
    links: [
      { label: "Protect My Phone", to: "/smartphone-protection" },
      { label: "Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later" },
      { label: "Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later" },
      { label: "Protection Calculator", to: "/protection-calculator" },
    ],
  },
  {
    heading: "For Businesses",
    links: [
      { label: "Become a Partner Store", to: "/become-a-partner" },
      { label: "Business Financing", to: "/business-financing" },
      { label: "Partner Login", to: "/partner-login" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Mona", to: "/about" },
      { label: "Guides", to: "/guides" },
      { label: "Support", to: "/support" },
      { label: "WhatsApp", href: "https://wa.me/2347048100101" },
    ],
  },
];

const legalLinks = [
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy" },
  { label: "Protection Terms", to: "/protection-terms" },
];

function InstagramGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function LinkedinGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11 17v-4a2.5 2.5 0 0 1 5 0v4" />
    </svg>
  );
}

const socials = [
  { label: "Instagram", href: "https://instagram.com/monaprotect", Icon: InstagramGlyph },
  { label: "X (Twitter)", href: "https://twitter.com/monaprotect", Icon: XGlyph },
  { label: "LinkedIn", href: "https://linkedin.com/company/monaprotect", Icon: LinkedinGlyph },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.mainRow}>
          <div className={styles.brandBlock}>
            <Link to="/" className={styles.logo}>
              <img
                src="/mona-white-C8WIf_xA.png"
                alt="Mona Protect"
                className={styles.logoImg}
                width="157"
                height="36"
                loading="lazy"
              />
            </Link>
            <p className={styles.tagline}>
              Premium smartphone protection across Nigeria — licensed and regulated by NAICOM.
            </p>
            <img
              src={naicomLogo}
              alt="Licensed and regulated by NAICOM"
              className={styles.naicomLogo}
              width="81"
              height="80"
              loading="lazy"
            />
            <div className={styles.socials}>
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linkGrid}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.linkCol}>
                <h3 className={styles.colHeading}>{col.heading}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.to ? (
                        <Link to={link.to}>{link.label}</Link>
                      ) : (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomMeta}>
            <span>© {year} Mona Technologies Ltd (RC 7480610). All rights reserved.</span>
            <span className={styles.sep} aria-hidden="true">·</span>
            <span className={styles.bottomItem}>
              <MapPin size={13} aria-hidden="true" />
              Plot 502, Dalaba Street, Off Michael Okpara Way, Wuse Zone 5, Abuja
            </span>
            <span className={styles.sep} aria-hidden="true">·</span>
            <a href="mailto:hello@monaprotect.com" className={styles.bottomItem}>
              <Mail size={13} aria-hidden="true" />
              hello@monaprotect.com
            </a>
            <span className={styles.sep} aria-hidden="true">·</span>
            <a href="tel:+2347048100101" className={styles.bottomItem}>
              <Phone size={13} aria-hidden="true" />
              +234 704 810 0101
            </a>
          </div>

          <ul className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

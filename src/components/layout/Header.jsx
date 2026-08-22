import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";
import { dropdownVariants, mobileMenuVariants } from "../../styles/motion.js";
import { waGenericLink } from "../../utils/waLink.js";
import whatsappRaw from "../../assets/brands/whatsapp.svg?raw";
import styles from "./Header.module.css";

// currentColor so the mark inherits .mobileWa's existing icon color instead
// of shipping its own fixed fill.
const whatsappMarkup = whatsappRaw.replace("<svg ", '<svg fill="currentColor" ');

const productLinks = [
  { label: "Protect My Phone", to: "/smartphone-protection", description: "Protect an eligible phone that still works." },
  { label: "Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later", description: "Get a new phone with protection included." },
  { label: "Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later", description: "Repair, get protected, and pay over time." },
];

const businessLinks = [
  { label: "Become a Partner Store", to: "/become-a-partner", description: "Join the Mona Partner network." },
  { label: "Business Financing", to: "/business-financing", description: "Grow your inventory with financing." },
  { label: "Partner Support", to: "/support", description: "Get help as a Mona Partner." },
];

const loginLinks = [
  { label: "Customer Login", to: "/customer-login" },
  { label: "Partner Login", to: "/partner-login" },
];

const navItems = [
  { label: "Products", dropdown: productLinks },
  { label: "Protection Calculator", to: "/protection-calculator" },
  { label: "Partner Stores", to: "/partner-stores" },
  // { label: "Supported Devices", to: "/supported-devices" },
  { label: "For Businesses", dropdown: businessLinks },
  { label: "Support", to: "/support" },
];

function DesktopDropdown({ label, items, isOpen, onEnter, onLeave, wide }) {
  return (
    <div className={styles.navItem} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button type="button" className={styles.navLink} aria-expanded={isOpen}>
        {label}
        <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${styles.dropdown} ${wide ? styles.dropdownWide : ""}`}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {items.map((item) => (
              <Link key={item.label} to={item.to} className={styles.dropdownItem}>
                <span className={styles.dropdownItemLabel}>{item.label}</span>
                {item.description && (
                  <span className={styles.dropdownItemDesc}>{item.description}</span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const enter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <>
      <AnnouncementBar />
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <Container className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img
              src="/mona.png"
              alt="Mona Protect"
              className={styles.logoImg}
              width="140"
              height="32"
              loading="eager"
            />
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) =>
              item.dropdown ? (
                <DesktopDropdown
                  key={item.label}
                  label={item.label}
                  items={item.dropdown}
                  isOpen={openDropdown === item.label}
                  onEnter={() => enter(item.label)}
                  onLeave={leave}
                  wide
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className={styles.actions}>
            <div
              className={styles.navItem}
              onMouseEnter={() => setLoginOpen(true)}
              onMouseLeave={() => setLoginOpen(false)}
            >
              <button type="button" className={styles.loginBtn} aria-expanded={loginOpen}>
                Login
                <ChevronDown size={16} className={`${styles.chevron} ${loginOpen ? styles.chevronOpen : ""}`} />
              </button>
              <AnimatePresence>
                {loginOpen && (
                  <motion.div
                    className={styles.dropdown}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {loginLinks.map((item) => (
                      <Link key={item.label} to={item.to} className={styles.dropdownItem}>
                        <span className={styles.dropdownItemLabel}>{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button to="/smartphone-protection" size="sm">
              Get Started
            </Button>
          </div>

          <div className={styles.mobileActions}>
            <a
              href={waGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileWa}
              aria-label="Chat with Mona on WhatsApp"
            >
              <span
                className={styles.mobileWaIcon}
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: whatsappMarkup }}
              />
            </a>
            <button
              type="button"
              className={styles.hamburger}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.mobileTop}>
              <Link to="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                <img
                  src="/mona.png"
                  alt="Mona Protect"
                  className={styles.logoImg}
                  width="140"
                  height="32"
                  loading="eager"
                />
              </Link>
              <button
                type="button"
                className={styles.hamburger}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className={styles.mobileNav}>
              {productLinks.map((item) => (
                <Link key={item.label} to={item.to} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link to="/protection-calculator" onClick={() => setMobileOpen(false)}>
                Protection Calculator
              </Link>
              <Link to="/partner-stores" onClick={() => setMobileOpen(false)}>
                Partner Stores
              </Link>
              <Link to="/supported-devices" onClick={() => setMobileOpen(false)}>
                Supported Devices
              </Link>
              {businessLinks.map((item) => (
                <Link key={item.label} to={item.to} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link to="/support" onClick={() => setMobileOpen(false)}>
                Support
              </Link>
              <Link to="/customer-login" onClick={() => setMobileOpen(false)}>
                Customer Login
              </Link>
              <Link to="/partner-login" onClick={() => setMobileOpen(false)}>
                Partner Login
              </Link>
            </nav>

            <div className={styles.mobileFooter}>
              <Button to="/smartphone-protection" size="lg" onClick={() => setMobileOpen(false)} className={styles.mobileCta}>
                Get Started
              </Button>
              <Button href={waGenericLink()} variant="whatsapp" size="lg" className={styles.mobileCta}>
                <MessageCircle size={18} /> Continue on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

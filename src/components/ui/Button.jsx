import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonTap } from "../../styles/motion.js";
import styles from "./Button.module.css";

const MotionLink = motion.create(Link);

const Button = forwardRef(function Button(
  { variant = "primary", size = "md", to, href, as, className = "", children, ...rest },
  ref
) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (to) {
    return (
      <MotionLink to={to} className={classes} ref={ref} {...buttonTap} {...rest}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    const isHashLink = href.startsWith("#");
    return (
      <motion.a
        href={href}
        className={classes}
        ref={ref}
        target={rest.target ?? (isHashLink ? undefined : "_blank")}
        rel={rest.rel ?? (isHashLink ? undefined : "noopener noreferrer")}
        {...buttonTap}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} ref={ref} {...buttonTap} {...rest}>
      {children}
    </motion.button>
  );
});

export default Button;

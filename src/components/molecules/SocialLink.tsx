import { memo } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/atoms/Icon";
import { socialLinkVariants } from "@/utils/animations";
import { socialLinkStyles } from "@/utils/styles";
import { type SocialLinkProps } from "@/utils/types";
import clsx from "clsx";
import { isValidUrl } from "@/utils/helpers";

// Enhanced with aria-describedby and stricter validation
const SocialLink = ({
  href,
  icon,
  ariaLabel,
  className = "",
}: SocialLinkProps) => {
  if (!isValidUrl(href)) {
    console.warn("SocialLink requires a valid href");
    return null;
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      aria-describedby={`social-link-${ariaLabel.toLowerCase().replace(/\s/g, "-")}`}
      variants={socialLinkVariants}
      whileHover="hover"
      whileTap="tap"
      className={clsx(socialLinkStyles.base, className)}
    >
      <Icon icon={icon} className={socialLinkStyles.icon} aria-hidden="true" />
      <span
        id={`social-link-${ariaLabel.toLowerCase().replace(/\s/g, "-")}`}
        className="sr-only"
      >
        {ariaLabel}
      </span>
    </motion.a>
  );
};

export default memo(SocialLink);

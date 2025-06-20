import { memo, useState } from "react";
import { motion } from "framer-motion";
import { usePortfolioStore } from "@/utils/config";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";
import { Mail, MapPin, Github } from "lucide-react";
import { containerVariants } from "@/utils/animations";
import { contactStyles } from "@/utils/styles";
import { isValidUrl } from "@/utils/helpers";
import { TypographyVariant, Variant, Size } from "@/utils/types";
import clsx from "clsx";

// Enhanced with mailto validation and analytics
const Contact = () => {
  const { contact } = usePortfolioStore();
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const handleEmailClick = () => {
    if (!contact.email || !isValidUrl(`mailto:${contact.email}`)) {
      console.warn("Invalid email address");
      return;
    }
    setIsEmailLoading(true);
    // Placeholder for analytics tracking
    // trackEvent('contact', 'email_click', contact.email);
    setTimeout(() => setIsEmailLoading(false), 1000);
  };

  if (!contact) {
    console.warn("Contact section requires portfolio store data");
    return null;
  }

  return (
    <motion.section
      className={clsx(contactStyles.base, "w-full")}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="region"
      aria-labelledby="contact-title"
    >
      <div className={contactStyles.container}>
        <motion.div
          className={contactStyles.header}
          variants={containerVariants}
        >
          <Typography
            variant={TypographyVariant.H2}
            id="contact-title"
            className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-3 xs:mb-4"
            role="heading"
            aria-level={2}
          >
            {contact.title}
          </Typography>
          <Typography
            variant={TypographyVariant.P}
            className="text-sm xs:text-base sm:text-lg text-accent max-w-2xl mx-auto"
          >
            {contact.description}
          </Typography>
        </motion.div>

        <div className={contactStyles.cardGrid} role="list">
          <motion.div
            className={contactStyles.card}
            variants={containerVariants}
            role="listitem"
          >
            <div className={contactStyles.iconWrapper}>
              <Icon
                icon={Mail}
                className={contactStyles.icon}
                aria-hidden="true"
              />
            </div>
            <Typography
              variant={TypographyVariant.H3}
              className="font-semibold mb-2 text-base xs:text-lg"
              role="heading"
              aria-level={3}
            >
              Email Me
            </Typography>
            <Typography
              variant={TypographyVariant.P}
              className="text-accent text-sm xs:text-base"
              aria-label={`Email: ${contact.email || "Not provided"}`}
            >
              {contact.email || "Not provided"}
            </Typography>
          </motion.div>

          <motion.div
            className={contactStyles.card}
            variants={containerVariants}
            role="listitem"
          >
            <div className={contactStyles.iconWrapper}>
              <Icon
                icon={MapPin}
                className={contactStyles.icon}
                aria-hidden="true"
              />
            </div>
            <Typography
              variant={TypographyVariant.H3}
              className="font-semibold mb-2 text-base xs:text-lg"
              role="heading"
              aria-level={3}
            >
              Location
            </Typography>
            <Typography
              variant={TypographyVariant.P}
              className="text-accent text-sm xs:text-base"
              aria-label="Location: Guntur, Andhra Pradesh, IN"
            >
              Guntur, Andhra Pradesh, IN
            </Typography>
          </motion.div>
        </div>

        <motion.div
          className={contactStyles.buttonContainer}
          variants={containerVariants}
          role="group"
          aria-label="Contact actions"
        >
          <Button
            href={contact.email ? `mailto:${contact.email}` : "#"}
            variant={Variant.Primary}
            size={Size.Medium}
            ariaLabel="Send email"
            className="px-5 xs:px-6 sm:px-8"
            disabled={!contact.email || !isValidUrl(`mailto:${contact.email}`)}
            loading={isEmailLoading}
            onClick={handleEmailClick}
            icon={<Mail className="w-5 h-5" />}
          >
            Send Email
          </Button>
          {isValidUrl(contact.githubUrl) && (
            <Button
              href={contact.githubUrl}
              variant={Variant.Outline}
              size={Size.Medium}
              ariaLabel="Visit GitHub profile"
              className="px-5 xs:px-6 sm:px-8"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Github className="w-5 h-5" />}
            >
              GitHub
            </Button>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(Contact);

import { Github, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '@/utils/constants';
import { memo } from 'react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactElement> = {
  github: <Github size={20} aria-hidden="true" />,
  twitter: <Twitter size={20} aria-hidden="true" />,
  mail: <Mail size={20} aria-hidden="true" />,
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Hemanth. All rights reserved.
          </p>
          <nav aria-label="Social media links">
            <ul className="flex gap-6">
              {socialLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                  >
                    {iconMap[link.icon]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
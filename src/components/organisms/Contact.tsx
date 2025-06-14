import { memo } from 'react';
import { usePortfolioStore } from '@/utils/config';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Typography from '@/components/atoms/Typography';
import { Mail, MapPin, Github } from 'lucide-react';
import { containerPadding } from '@/utils/styles';
import { TypographyVariant, Variant, Size } from '@/utils/types';

const Contact = () => {
  const { contact } = usePortfolioStore();

  return (
    <section
      className={`py-16 bg-background ${containerPadding}`}
      role="region"
      aria-labelledby="contact-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <Typography
            variant={TypographyVariant.H2}
            id="contact-title"
            className="text-4xl font-bold mb-4"
          >
            Get In Touch
          </Typography>
          <Typography 
            variant={TypographyVariant.P} 
            className="text-lg text-accent max-w-2xl mx-auto"
          >
            {contact.description || "Let's work together to create something amazing. I'm always open to discussing new opportunities."}
          </Typography>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon={Mail} className="w-6 h-6 text-blue-600" />
            </div>
            <Typography variant={TypographyVariant.H3} className="font-semibold mb-2">
              Email Me
            </Typography>
            <Typography variant={TypographyVariant.P} className="text-accent">
              {contact.email || "your.email@example.com"}
            </Typography>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon icon={MapPin} className="w-6 h-6 text-green-600" />
            </div>
            <Typography variant={TypographyVariant.H3} className="font-semibold mb-2">
              Location
            </Typography>
            <Typography variant={TypographyVariant.P} className="text-accent">
              Guntur, Andhra Pradesh, IN
            </Typography>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={`mailto:${contact.email}`}
            variant={Variant.Primary}
            size={Size.Medium}
            ariaLabel="Send email"
            className="px-8"
          >
            <Icon icon={Mail} className="mr-2 w-5 h-5" />
            Send Email
          </Button>
          
          <Button
            href="https://github.com/hemanthscode"
            variant={Variant.Outline}
            size={Size.Medium}
            ariaLabel="View GitHub profile"
            className="px-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={Github} className="mr-2 w-5 h-5" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
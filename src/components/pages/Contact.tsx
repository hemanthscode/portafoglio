import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { memo } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      reset();
      alert('Message sent successfully!');
    } catch {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-16 bg-background" id="contact">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-lg mx-auto space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              placeholder="Your name"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.name.message}
              </motion.p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
              })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              placeholder="your.email@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              rows={5}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
              placeholder="Your message"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-sm text-red-500"
              >
                {errors.message.message}
              </motion.p>
            )}
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full py-3 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default memo(Contact);
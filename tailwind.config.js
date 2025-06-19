/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        text: 'var(--text)',
        accent: 'var(--accent)',
        background: 'var(--background)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

/* Changes and Best Practices:
- Configured content paths for Tailwind purging.
- Extended theme with custom CSS variables and font stack.
- Testing: Verify custom colors and fonts apply correctly.
- Deployment: Optimized for minimal CSS output in production.
*/
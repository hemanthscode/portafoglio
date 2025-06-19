Hemanth Sayimpu Portfolio
A modern, responsive portfolio showcasing Hemanth Sayimpu's projects and skills as a full-stack developer.
Features

Built with React, TypeScript, and Tailwind CSS
Responsive design with custom xs breakpoint (475px)
Accessible (WCAG 2.1 AA) with ARIA attributes
Optimized for performance (Core Web Vitals)
Deployed on GitHub Pages with /portfolio/ base path
Animations powered by Framer Motion
State management with Zustand
Lazy-loaded images with custom LazyImage component

Project Structure
my-portfolio/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── LazyImage.tsx
│   │   │   └── Typography.tsx
│   │   ├── molecules/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── SocialLink.tsx
│   │   ├── organisms/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroGeometric.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── WorkTimeline.tsx
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── Home.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── WorkPage.tsx
│   ├── utils/
│   │   ├── animations.ts
│   │   ├── config.ts
│   │   ├── helpers.ts
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── eslint.config.js
└── README.md

Setup

Clone the repository:git clone https://github.com/hemanthscode/portfolio.git
cd portfolio


Install dependencies:npm install


Run the development server:npm run dev



Build and Deployment

Build the project:npm run build

Output is generated in the dist/ folder.
Deploy to GitHub Pages:npm run deploy

The site will be live at https://hemanthscode.github.io/portfolio.

Development

Linting: npm run lint to check and fix code quality.
Formatting: npm run format to apply Prettier rules.
Preview: npm run preview to test the production build locally.

Dependencies

React 18.2.0
React Router DOM 6.11.0
React Helmet Async 2.0.4
Framer Motion 10.12.4
Lucide React 0.252.0
Zustand 4.3.8
Tailwind CSS 3.4.1
Vite 5.0.0
TypeScript 5.0.4

Notes

The project avoids <form> submissions due to sandbox restrictions; buttons handle interactions.
All links are validated with isValidUrl helper.
Routing uses basename="/portfolio" for GitHub Pages.
Images are lazy-loaded with LazyImage.tsx.
Accessibility is ensured with eslint-plugin-jsx-a11y.


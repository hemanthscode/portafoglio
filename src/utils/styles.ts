import { TypographyVariant, Size, Variant } from "./types";
import clsx from "clsx";

export const containerPadding = "px-4 sm:px-6 lg:px-8";

export const linkStyles = clsx(
  "text-text hover:text-primary focus-visible:text-primary",
  "transition-colors duration-200",
  "focus-visible:ring-2 focus-visible:ring-primary rounded-sm",
);

export const cardStyles = {
  base: clsx(
    "bg-white rounded-2xl border border-gray-200",
    "shadow-sm hover:shadow-md focus-visible:shadow-md",
    "transition-all duration-300",
    "focus-visible:ring-2 focus-visible:ring-primary",
    // 'dark:bg-gray-800 dark:border-gray-700' // Uncomment for dark mode
  ),
  gradient: "bg-gradient-to-br from-white/10 to-transparent",
  detail: clsx(
    "bg-white rounded-2xl border border-gray-200 shadow-md",
    // 'dark:bg-gray-800 dark:border-gray-700' // Uncomment for dark mode
  ),
};

export const buttonStyles = {
  base: clsx(
    "inline-flex items-center justify-center font-medium rounded-lg",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
    "transition-colors duration-200",
    "disabled:opacity-50 disabled:cursor-not-allowed touch-action-manipulation",
  ),
  variants: {
    [Variant.Primary]:
      "bg-primary text-white hover:bg-primary-dark focus-visible:bg-primary-dark",
    [Variant.Secondary]:
      "bg-secondary text-white hover:bg-secondary-dark focus-visible:bg-secondary-dark",
    [Variant.Outline]:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white",
  },
  sizes: {
    [Size.Small]: "px-3 py-1.5 text-sm",
    [Size.Medium]: "px-4 py-2 text-base",
    [Size.Large]: "px-6 py-3 text-lg",
  },
  spinnerSizes: {
    [Size.Small]: "w-3 h-3",
    [Size.Medium]: "w-4 h-4",
    [Size.Large]: "w-5 h-5",
  },
};

export const typographyStyles: Record<
  TypographyVariant,
  { component: keyof JSX.IntrinsicElements; className: string }
> = {
  [TypographyVariant.H1]: {
    component: "h1",
    className: clsx(
      "text-4xl xs:text-5xl lg:text-6xl font-bold tracking-tight text-text",
    ),
    // className: clsx('text-4xl xs:text-5xl lg:text-6xl font-bold tracking-tight text-text dark:text-white'), // Uncomment for dark mode
  },
  [TypographyVariant.H2]: {
    component: "h2",
    className: clsx("text-3xl xs:text-4xl font-bold tracking-tight text-text"),
    // className: clsx('text-3xl xs:text-4xl font-bold tracking-tight text-text dark:text-white'), // Uncomment for dark mode
  },
  [TypographyVariant.H3]: {
    component: "h3",
    className: clsx(
      "text-2xl xs:text-3xl font-semibold tracking-tight text-text",
    ),
    // className: clsx('text-2xl xs:text-3xl font-semibold tracking-tight text-text dark:text-white'), // Uncomment for dark mode
  },
  [TypographyVariant.P]: {
    component: "p",
    className: clsx("text-base xs:text-lg leading-relaxed text-accent"),
    // className: clsx('text-base xs:text-lg leading-relaxed text-accent dark:text-gray-300'), // Uncomment for dark mode
  },
  [TypographyVariant.Span]: {
    component: "span",
    className: clsx("text-base text-accent"),
    // className: clsx('text-base text-accent dark:text-gray-300'), // Uncomment for dark mode
  },
};

export const badgeStyles = {
  base: clsx("px-2.5 py-1 bg-primary rounded-full"),
  icon: clsx("w-4 xs:w-5 h-4 xs:h-5 text-white"),
  text: clsx(
    "text-xs xs:text-sm font-medium text-white uppercase tracking-wider",
  ),
};

export const techTagStyles = {
  base: clsx(
    "px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs xs:text-sm font-medium",
  ),
  more: clsx(
    "px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs xs:text-sm font-medium",
  ),
};

export const socialLinkStyles = {
  base: clsx(
    "inline-flex items-center p-2 rounded-full",
    "hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-primary",
    "transition-colors duration-200",
  ),
  icon: clsx("w-5 h-5 xs:w-6 xs:h-6"),
};

export const navbarStyles = {
  base: clsx(
    "sticky top-0 z-50 bg-white/80 backdrop-blur-md",
    "border-b border-gray-100 shadow-sm",
    "px-4 sm:px-6 lg:px-8",
  ),
  container: clsx(
    "mx-auto max-w-7xl flex justify-between items-center h-16 xs:h-18",
  ),
  logo: clsx(
    "text-xl xs:text-2xl font-bold text-primary hover:text-primary-dark transition-colors",
  ),
  desktopMenu: clsx("hidden md:flex items-center space-x-6 xs:space-x-8"),
  link: clsx("font-semibold text-sm xs:text-base"),
  mobileLink: clsx("text-xl xs:text-2xl"),
  activeIndicator: clsx(
    "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full",
  ),
  menuButton: clsx(
    "md:hidden p-2 text-gray-700 hover:text-primary transition-colors rounded-lg",
  ),
  menuIcon: clsx("h-7 xs:h-8 w-7 xs:w-8"),
  mobileMenu: clsx(
    "fixed inset-0 bg-white/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-center items-center",
  ),
};

export const footerStyles = {
  base: clsx("bg-background py-4 xs:py-5 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8"),
  container: clsx(
    "text-center max-w-md xs:max-w-lg sm:max-w-xl lg:max-w-3xl mx-auto",
  ),
  socialLinks: clsx(
    "flex justify-center gap-3 xs:gap-4 sm:gap-6 mb-2 xs:mb-3 sm:mb-4",
  ),
};

export const heroStyles = {
  base: clsx(
    "px-4 sm:px-6 lg:px-8 py-8 xs:py-10 sm:py-12 lg:py-16 bg-background",
  ),
  container: clsx(
    "w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-7xl mx-auto",
    "grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 items-center",
  ),
  textContainer: clsx(
    "space-y-4 xs:space-y-5 sm:space-y-6 lg:space-y-8 relative z-10",
  ),
  decorative: clsx("flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6"),
  iconWrapper: clsx(
    "w-8 xs:w-9 sm:w-10 lg:w-12 h-8 xs:h-9 sm:h-10 lg:h-12",
    "bg-primary rounded-2xl flex items-center justify-center",
    "rotate-12 hover:rotate-0 transition-transform duration-500",
  ),
  icon: clsx("w-4 xs:w-5 sm:w-5 lg:w-6 h-4 xs:h-5 sm:h-5 lg:h-6 text-white"),
  gradientLine: clsx(
    "h-6 xs:h-7 sm:h-8 w-px bg-gradient-to-b from-primary to-transparent",
  ),
  label: clsx(
    "text-xs xs:text-sm sm:text-base font-semibold text-primary uppercase tracking-widest",
  ),
};

export const contactStyles = {
  base: clsx(
    "py-12 xs:py-14 sm:py-16 lg:py-20 bg-background px-4 sm:px-6 lg:px-8",
  ),
  container: clsx("max-w-4xl mx-auto text-center"),
  header: clsx("mb-8 xs:mb-10 sm:mb-12"),
  cardGrid: clsx(
    "grid grid-cols-1 xs:grid-cols-2 gap-4 xs:gap-6 mb-8 xs:mb-10 sm:mb-12",
  ),
  card: clsx("bg-gray-50 p-4 xs:p-5 sm:p-6 rounded-xl border border-gray-200"),
  iconWrapper: clsx(
    "w-10 xs:w-12 h-10 xs:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4",
  ),
  icon: clsx("w-5 xs:w-6 h-5 xs:h-6 text-blue-600"),
  buttonContainer: clsx(
    "flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center",
  ),
};

export const aboutStyles = {
  base: clsx("py-12 xs:py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"),
  container: clsx("max-w-4xl mx-auto"),
  header: clsx("text-center mb-10 xs:mb-12 sm:mb-14"),
  title: clsx("text-2xl xs:text-3xl sm:text-4xl font-bold"),
  description: clsx(
    "text-accent mt-2 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg",
  ),
  cardContainer: clsx("space-y-6"),
  heroCard: clsx(
    "bg-white p-4 xs:p-5 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-md",
    "focus-visible:ring-2 focus-visible:ring-primary",
  ),
  heroIcon: clsx(
    "w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-primary mb-3 xs:mb-4",
  ),
  heroTitle: clsx("text-lg xs:text-xl sm:text-2xl font-bold"),
  heroSubtitle: clsx("text-accent mb-3 xs:mb-4 text-sm xs:text-base"),
  heroContent: clsx("text-gray-700 text-sm xs:text-base"),
  skillGrid: clsx("grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5"),
  skillCard: clsx(
    "bg-gray-50 p-4 xs:p-5 sm:p-6 rounded-xl border border-gray-200",
    "focus-visible:ring-2 focus-visible:ring-primary",
  ),
  skillIcon: clsx("w-5 xs:w-6 h-5 xs:h-6 text-primary mb-2 xs:mb-3"),
  skillTitle: clsx("text-base xs:text-lg font-semibold"),
  skillContent: clsx("text-accent text-sm xs:text-base"),
  storyCard: clsx(
    "bg-white p-4 xs:p-5 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-md",
    "focus-visible:ring-2 focus-visible:ring-primary",
  ),
  storyIcon: clsx("w-5 xs:w-6 h-5 xs:h-6 text-yellow-600 flex-shrink-0"),
  storyTitle: clsx("text-base xs:text-lg font-semibold"),
  storyContent: clsx("text-gray-700 text-sm xs:text-base"),
  cta: clsx("text-center mt-10 xs:mt-12 sm:mt-14"),
  ctaButton: clsx(
    "w-full xs:w-auto px-6 xs:px-8 py-3 focus-visible:ring-2 focus-visible:ring-primary",
  ),
};

export const workTimelineStyles = {
  base: clsx("py-12 xs:py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"),
  container: clsx("max-w-5xl mx-auto"),
  header: clsx("text-center mb-8 xs:mb-10 sm:mb-12"),
  title: clsx("text-2xl xs:text-3xl sm:text-4xl font-bold"),
  description: clsx(
    "mt-3 xs:mt-4 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg",
  ),
  timelineLine: clsx(
    "absolute left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2",
  ),
  projectContainer: clsx("flex flex-col xs:flex-row mb-8 xs:mb-10 sm:mb-12"),
  projectCard: clsx("w-full xs:w-5/12"),
  projectTitle: clsx("text-lg xs:text-xl sm:text-2xl font-bold"),
  projectDescription: clsx(
    "text-sm xs:text-base sm:text-lg mt-2 xs:mt-3 mb-3 xs:mb-4",
  ),
  timelineDot: clsx(
    "hidden xs:block absolute left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 top-6",
  ),
  cta: clsx("text-center mt-8 xs:mt-10 sm:mt-12"),
  ctaButton: clsx("w-full xs:w-auto px-6 xs:px-8 py-3"),
};

export const homeStyles = {
  base: clsx("flex flex-col w-full px-4 sm:px-6 lg:px-8"),
};

export const aboutPageStyles = {
  base: clsx("min-h-screen py-12 xs:py-14 sm:py-16 px-4 sm:px-6 lg:px-8"),
  container: clsx("max-w-7xl mx-auto"),
  header: clsx("text-center mb-10 xs:mb-12 sm:mb-16"),
  title: clsx(
    "text-3xl xs:text-4xl sm:text-5xl font-bold text-text mb-3 xs:mb-4 sm:mb-6",
  ),
  description: clsx(
    "text-sm xs:text-base sm:text-xl text-accent max-w-2xl mx-auto",
  ),
  cardGrid: clsx(
    "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 auto-rows-auto",
  ),
  card: clsx("p-4 xs:p-5 sm:p-6 cursor-pointer border rounded-2xl"),
  cardOverlay: clsx(
    "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent",
  ),
  heroDecoration: clsx(
    "absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full",
  ),
  statDecoration: clsx(
    "absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20",
  ),
  cta: clsx("text-center mt-12 xs:mt-16 sm:mt-20"),
  ctaTitle: clsx(
    "text-2xl xs:text-3xl sm:text-4xl font-bold text-text mb-3 xs:mb-4 sm:mb-6",
  ),
  ctaDescription: clsx(
    "text-sm xs:text-base sm:text-xl text-accent mb-5 xs:mb-6 sm:mb-8 max-w-2xl mx-auto",
  ),
  ctaButton: clsx("px-6 xs:px-8 py-3"),
};

export const workPageStyles = {
  base: clsx("min-h-screen py-8 xs:py-10 sm:py-12 px-4 sm:px-6 lg:px-8"),
  container: clsx("max-w-7xl mx-auto"),
  header: clsx("text-center mb-10 xs:mb-12 sm:mb-16"),
  title: clsx(
    "text-3xl xs:text-4xl sm:text-5xl font-semibold text-text mb-4 xs:mb-6",
  ),
  description: clsx(
    "text-base xs:text-lg sm:text-xl text-accent max-w-3xl mx-auto leading-relaxed",
  ),
  projectGrid: clsx(
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 xs:gap-8 auto-rows-auto",
  ),
  featuredCard: clsx("sm:col-span-2 lg:col-span-2 xl:col-span-3 lg:row-span-2"),
  regularCard: clsx("sm:col-span-1 lg:col-span-2 xl:col-span-2"),
  thirdFeaturedCard: clsx(
    "sm:col-span-2 lg:col-span-4 xl:col-span-3 lg:row-span-1",
  ),
  ctaCard: clsx(
    "sm:col-span-2 lg:col-span-2 xl:col-span-3 bg-white/20 backdrop-blur-md rounded-2xl p-6 xs:p-8",
    "border border-white/20 focus-visible:ring-2 focus-visible:ring-primary",
  ),
  ctaOverlay: clsx(
    "absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  ),
  ctaTitle: clsx("text-xl xs:text-2xl mb-3 xs:mb-4"),
  ctaDescription: clsx("text-sm xs:text-base text-accent mb-6 xs:mb-8"),
  ctaButton: clsx(
    "mx-auto bg-primary text-white hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-primary",
  ),
  footer: clsx("text-center mt-12 xs:mt-16 sm:mt-20"),
  footerText: clsx("text-sm xs:text-base text-accent"),
};

export const contactPageStyles = {
  base: clsx(
    "flex flex-col w-full min-h-[calc(100vh-4rem)] py-8 xs:py-10 sm:py-12 px-4 sm:px-6 lg:px-8",
  ),
};

export const projectDetailStyles = {
  base: clsx("min-h-screen py-8 xs:py-10 sm:py-12 px-4 sm:px-6 lg:px-8"),
  container: clsx("max-w-4xl mx-auto"),
  backButton: clsx("mb-5 xs:mb-6 sm:mb-8"),
  backButtonStyle: clsx("flex items-center px-4 xs:px-5"),
  card: clsx("bg-white rounded-xl border border-gray-200 shadow-md"),
  image: clsx(
    "w-full h-48 xs:h-56 sm:h-64 lg:h-80 object-cover rounded-t-xl mb-5 xs:mb-6 sm:mb-8",
  ),
  cardContent: clsx("p-5 xs:p-6 sm:p-8"),
  category: clsx("flex items-center gap-2 mb-3 xs:mb-4 sm:mb-6"),
  title: clsx(
    "text-2xl xs:text-3xl sm:text-4xl font-bold text-text mb-3 xs:mb-4 sm:mb-6",
  ),
  description: clsx(
    "text-sm xs:text-base sm:text-lg text-accent mb-5 xs:mb-6 sm:mb-8",
  ),
  techTags: clsx("flex flex-wrap gap-2 mb-5 xs:mb-6 sm:mb-8"),
  details: clsx("space-y-6 xs:space-y-8 sm:space-y-10"),
  sectionTitle: clsx(
    "text-xl xs:text-2xl sm:text-3xl font-semibold mb-2 xs:mb-3 sm:mb-4",
  ),
  sectionContent: clsx("text-sm xs:text-base sm:text-lg"),
  list: clsx("list-disc list-inside space-y-1 xs:space-y-2"),
  listItem: clsx("inline text-sm xs:text-base sm:text-lg"),
  errorTitle: clsx("text-center text-text text-2xl xs:text-3xl sm:text-4xl"),
};

export const projectCardStyles = {
  base: clsx("flex flex-col overflow-hidden"),
  image: clsx("w-full h-40 xs:h-48 sm:h-56 object-cover rounded-t-xl"),
  content: clsx("p-4 xs:p-5 sm:p-6 flex flex-col flex-grow"),
  title: clsx(
    "text-lg xs:text-xl sm:text-2xl font-semibold text-text mb-2 xs:mb-3",
  ),
  titleLink: clsx(
    "hover:text-primary focus-visible:text-primary transition-colors",
  ),
  description: clsx(
    "text-sm xs:text-base text-accent mb-3 xs:mb-4 line-clamp-3",
  ),
  techTags: clsx("flex flex-wrap gap-2 mb-4 xs:mb-5"),
  techTag: clsx(
    "px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs xs:text-sm font-medium",
  ),
  moreTag: clsx(
    "px-2 py-1 bg-gray-50 text-gray-500 rounded-lg text-xs xs:text-sm font-medium",
  ),
  buttonContainer: clsx("flex flex-row flex-wrap gap-2 mt-auto"),
};

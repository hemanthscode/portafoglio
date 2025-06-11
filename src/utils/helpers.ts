/**
 * Utility function to validate URLs.
 * @param {string | undefined} url - URL to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
export const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Locks scroll on the page.
 */
export const lockScroll = () => {
  const scrollY = window.scrollY;
  document.documentElement.classList.add('no-scroll');
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
};

/**
 * Unlocks scroll on the page.
 */
export const unlockScroll = () => {
  const scrollY = document.body.style.top;
  document.documentElement.classList.remove('no-scroll');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
};

/**
 * Scrolls to the top of the page smoothly.
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
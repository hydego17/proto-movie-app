import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  // Initialize state with undefined width so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const isMobile = typeof width === 'number' && width < 600;
  const isTablet = typeof width === 'number' && width > 600 && width < 1200;
  const isDesktop = typeof width === 'number' && width > 1200;

  return { isMobile, isTablet, isDesktop, width };
};

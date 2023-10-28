import { useEffect, useState } from 'react';

export const useIsMobile = (screenWidth = 960) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < screenWidth : false
  );

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < screenWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return isMobile;
};

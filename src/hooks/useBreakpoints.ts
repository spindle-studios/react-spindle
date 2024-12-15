import { useEffect, useState } from 'react';

export const useBreakpoints = ({ mobile = 600, desktop = 1024 } = {}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobile);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= mobile && window.innerWidth < desktop);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktop);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobile);
      setIsTablet(window.innerWidth >= mobile && window.innerWidth < desktop);
      setIsDesktop(window.innerWidth >= desktop);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};

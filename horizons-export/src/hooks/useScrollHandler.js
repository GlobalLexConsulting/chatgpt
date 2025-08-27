import { useState, useEffect } from 'react';

const useScrollHandler = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrollHandler;
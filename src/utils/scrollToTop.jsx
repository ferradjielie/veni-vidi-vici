import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll en haut de la page quand le pathname change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;

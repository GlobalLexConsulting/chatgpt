import { useLocation, useNavigate } from 'react-router-dom';

const useNavigationHandler = (closeMobileMenu) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavLinkClick = (path, e) => {
    if (path.startsWith('/#')) {
      if(e) e.preventDefault();
      const targetId = path.substring(2);
      const targetElement = document.getElementById(targetId);

      if (targetElement && location.pathname === '/') {
        // Smooth scroll on the same page
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
         // Navigate to the home page first, then scroll (handled by App.jsx useEffect)
         navigate(`/#${targetId}`);
      }
      if (closeMobileMenu) closeMobileMenu(false);
    } else {
        // Standard navigation
        navigate(path);
        if (closeMobileMenu) closeMobileMenu(false);
    }
  };

  return { handleNavLinkClick };
};

export default useNavigationHandler;
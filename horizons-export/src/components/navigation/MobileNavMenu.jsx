import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, height: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 }
};

const MobileNavMenu = ({ isOpen, navLinks, handleNavLinkClick, currentLang, onLangChange }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const currentPath = location.pathname + location.hash;
  const whatsappLink = "https://wa.me/34623937507?text=Hola%2C%20quisiera%20solicitar%20una%20consulta%20gratuita.";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="md:hidden absolute left-0 right-0 top-full bg-gray-900/95 border-t border-gray-700 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  onClick={(e) => handleNavLinkClick(link.path, e)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                    currentPath === link.path || (link.path !== "/" && currentPath.startsWith(link.path) && link.path.includes("#")) || (link.path === "/blog" && location.pathname.startsWith("/blog")) || (link.path === "/login" && location.pathname.startsWith("/login"))
                      ? "bg-primary text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  )}
                  aria-current={currentPath === link.path ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div variants={itemVariants} className="px-1 pt-2 pb-1 flex justify-between items-center">
              <LanguageSelector 
                isMobile={true}
                currentLang={currentLang}
                onLangChange={onLangChange}
              />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-grow ml-2">
                   <Button size="sm" className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold">
                       <FaWhatsapp className="mr-2 h-4 w-4" /> {t('navbar.free_consultation')}
                   </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavMenu;
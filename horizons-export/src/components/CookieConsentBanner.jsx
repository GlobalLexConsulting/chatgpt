import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import Cookies from 'js-cookie';

const COOKIE_CONSENT_KEY = 'cookie_consent_given';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = Cookies.get(COOKIE_CONSENT_KEY);
    if (!consentGiven) {
      // Use a short delay to ensure the page has loaded before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie to expire in 365 days
    Cookies.set(COOKIE_CONSENT_KEY, 'true', { expires: 365, path: '/' });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 dark:bg-background/90 backdrop-blur-sm border-t border-border shadow-2xl"
        >
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start sm:items-center text-sm text-foreground/80 dark:text-foreground/70">
                <Cookie className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                <span>
                  Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies. Lee nuestra{' '}
                  <Link to="/privacy-policy" className="underline font-semibold hover:text-primary transition-colors">
                    Política de Privacidad
                  </Link>
                  .
                </span>
              </div>
              <Button
                size="sm"
                onClick={handleAccept}
                className="btn-persuasive w-full sm:w-auto flex-shrink-0"
                aria-label="Aceptar y cerrar el banner de cookies"
              >
                De acuerdo
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
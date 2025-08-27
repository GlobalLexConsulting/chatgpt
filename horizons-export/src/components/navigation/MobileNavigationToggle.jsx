import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
// import LanguageSelector from './LanguageSelector'; // Keep if needed

const MobileNavigationToggle = ({ isOpen, setIsOpen, currentLang, onLangChange }) => {
  return (
    <div className="md:hidden flex items-center space-x-2">
       {/* <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} variant="mobile" /> */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
       >
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white hover:bg-gray-700/50"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </motion.div>
    </div>
  );
};

export default MobileNavigationToggle;
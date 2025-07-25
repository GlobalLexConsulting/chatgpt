import React from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import LanguageSelector from './LanguageSelector'; // Keep if needed

const DesktopActionButtons = ({ currentLang, onLangChange }) => {
  const whatsappLink = "https://wa.me/34623937507?text=Hola%2C%20quisiera%20solicitar%20una%20consulta%20gratuita.";

  return (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden md:flex items-center space-x-3"
     >
       {/* <LanguageSelector currentLang={currentLang} onLangChange={onLangChange} /> */}
       <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white font-semibold">
                <FaWhatsapp className="mr-2 h-4 w-4" /> Consulta Gratuita
            </Button>
       </a>
    </motion.div>
  );
};

export default DesktopActionButtons;
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import DesktopNavLinks from "@/components/navigation/DesktopNavLinks";
import LanguageSelector from "@/components/navigation/LanguageSelector";

const DesktopNavigation = ({ navLinks, handleNavLinkClick, currentLang, onLangChange }) => {
    return (
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <DesktopNavLinks navLinks={navLinks} handleNavLinkClick={handleNavLinkClick} />
            <LanguageSelector
                currentLang={currentLang}
                onLangChange={onLangChange}
                motionProps={{
                    initial: { opacity: 0, y: -10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: navLinks.length * 0.05 }
                }}
                className="ml-2"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="ml-2"
            >
                <Button size="sm" className="btn-persuasive" onClick={(e) => handleNavLinkClick(e, '/#contacto')}>
                    <Phone className="mr-2 h-4 w-4" /> Consulta Gratuita
                </Button>
            </motion.div>
        </div>
    );
};

export default DesktopNavigation;
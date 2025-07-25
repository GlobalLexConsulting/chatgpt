import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import NavbarContainer from "@/components/navigation/NavbarContainer";
import NavbarBrand from "@/components/navigation/NavbarBrand";
import DesktopNavLinks from "@/components/navigation/DesktopNavLinks";
import MobileNavigationToggle from "@/components/navigation/MobileNavigationToggle";
import MobileNavMenu from "@/components/navigation/MobileNavMenu";
import useScrollHandler from "@/hooks/useScrollHandler";
import useNavigationHandler from "@/hooks/useNavigationHandler";
import LanguageSelector from "@/components/navigation/LanguageSelector";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { PopupModal } from 'react-calendly';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const scrolled = useScrollHandler();
  const location = useLocation();
  const { handleNavLinkClick } = useNavigationHandler(setIsOpen);
  const { t, i18n } = useTranslation();
  const calendlyUrl = "https://calendly.com/consultgloballex-info/mini-audit-15";

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  const navLinks = [
    { name: t('navbar.home'), path: "/" },
    { name: t('navbar.services'), path: "/#servicios" },
    { name: t('navbar.llc_usa'), path: "/#llc-service"},
    { name: 'Comparativas', path: '/comparativas' },
    { name: t('navbar.about'), path: "/#nosotros" },
    { name: t('navbar.partners'), path: "/#socios" },
    { name: t('navbar.testimonials'), path: "/#testimonios" },
    { name: t('navbar.blog'), path: "/blog" },
    { name: t('navbar.faq'), path: "/#faq" },
    { name: t('navbar.contact'), path: "/#contacto" },
    { name: t('navbar.clients'), path: "/login" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
    <NavbarContainer scrolled={scrolled} isOpen={isOpen}>
      <div className="flex items-center justify-between h-16">
        <NavbarBrand handleNavLinkClick={(e) => handleNavLinkClick("/", e)} />

        <div className="hidden md:flex md:items-center md:ml-6">
          <DesktopNavLinks
            navLinks={navLinks}
            handleNavLinkClick={handleNavLinkClick}
          />
        </div>

        <div className="hidden md:flex flex-grow justify-end"></div>

        <div className="flex items-center space-x-2">
           <div className="hidden md:block">
             <LanguageSelector currentLang={i18n.language} onLangChange={handleLangChange} />
           </div>
           <div className="hidden md:block">
              <Button size="sm" className="btn-persuasive" onClick={() => setIsCalendlyOpen(true)}>
                 <Calendar className="mr-2 h-4 w-4" /> {t('hero.cta_main')}
              </Button>
           </div>
          <MobileNavigationToggle
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
      <MobileNavMenu
        isOpen={isOpen}
        navLinks={navLinks}
        handleNavLinkClick={handleNavLinkClick}
        currentLang={i18n.language}
        onLangChange={handleLangChange}
      />
    </NavbarContainer>
    <PopupModal
        url={calendlyUrl}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
    />
    </>
  );
};

export default Navbar;
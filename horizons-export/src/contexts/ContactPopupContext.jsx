import React, { createContext, useState, useContext, useCallback } from 'react';

const ContactPopupContext = createContext();

export const useContactPopup = () => useContext(ContactPopupContext);

export const ContactPopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Store the entire context object { type, title, description, service, additionalFields }
  const [popupData, setPopupData] = useState({
    type: 'general', // 'general', 'globalCompany', 'llc'
    title: "Envíanos tu Consulta",
    description: "Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
    service: "Consulta General",
  });

  // Accept a context object
  const openPopup = useCallback((context = {}) => {
    setPopupData({
      type: context.type || 'general',
      title: context.title || "Envíanos tu Consulta",
      description: context.description || "Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
      service: context.service || "Consulta General",
    });
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    // Reset to default when closing
    setPopupData({
      type: 'general',
      title: "Envíanos tu Consulta",
      description: "Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
      service: "Consulta General",
     });
  }, []);

  return (
    <ContactPopupContext.Provider value={{ isOpen, openPopup, closePopup, popupData }}>
      {children}
    </ContactPopupContext.Provider>
  );
};
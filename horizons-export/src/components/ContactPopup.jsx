import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import ContactForm from '@/components/contact/ContactForm';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPopup = () => {
  const { isOpen, closePopup, popupData } = useContactPopup();

  if (popupData.type !== 'general' || !isOpen) {
    return null;
  }

   const servicesOptions = [
    "Consulta General",
    "Residencia y Extranjería en España",
    "Constitución de Sociedades",
    "Servicios Fiscales y Contables",
    "Consultoría Integral y Revisión Jurídica",
    "Servicios Especiales en Alemania",
    "Asesoramiento en Seguros",
    "Constitución de LLC en USA",
    "Otro"
   ];

   const validInitialService = servicesOptions.includes(popupData.service) ? popupData.service : "Consulta General";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePopup()}>
      <DialogContent showCloseButton={true} className="sm:max-w-2xl md:max-w-3xl bg-white dark:bg-card p-0 max-h-[90vh] flex flex-col rounded-xl shadow-2xl border dark:border-gray-700/80 overflow-hidden">
         <DialogHeader className="p-6 md:p-8 pb-4 border-b dark:border-gray-700/50 flex items-center justify-between space-x-4 relative">
            <div className="flex items-center space-x-4">
               <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
                  className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full"
               >
                 <MessageSquare className="h-7 w-7 text-primary" />
               </motion.div>
               <div>
                 <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                   {popupData.title}
                 </DialogTitle>
                 <DialogDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                   {popupData.description}
                 </DialogDescription>
               </div>
            </div>
         </DialogHeader>
         <div className="flex-grow overflow-y-auto p-6 md:p-8 custom-scrollbar">
           <ContactForm
              servicesOptions={servicesOptions}
              initialServiceProp={validInitialService}
              onSuccess={closePopup}
           />
         </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
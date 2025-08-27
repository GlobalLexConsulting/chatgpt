import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Briefcase, Loader2, User, Mail, Phone, Globe } from 'lucide-react';
import useContactForm from '@/hooks/contact/useContactForm.js';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import { motion } from 'framer-motion';

const GlobalCompanyPopup = () => {
  const { isOpen, closePopup, popupData } = useContactPopup();
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm(popupData.service, closePopup);

  if (popupData.type !== 'globalCompany' || !isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePopup()}>
      <DialogContent showCloseButton={true} className="sm:max-w-2xl md:max-w-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/50 dark:to-purple-900/50 p-0 max-h-[90vh] flex flex-col rounded-xl border border-primary/20 shadow-2xl overflow-hidden">
        <DialogHeader className="p-6 md:p-8 pb-4 border-b border-primary/10 dark:border-gray-700/50 flex items-center justify-between space-x-4 relative">
           <div className="flex items-center space-x-4">
              <motion.div
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
                 className="p-3 bg-gradient-to-tr from-primary to-indigo-600 rounded-full shadow-lg"
              >
                <Briefcase className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {popupData.title}
                </DialogTitle>
                <DialogDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                  {popupData.description} Infórmanos sobre tu proyecto.
                </DialogDescription>
              </div>
           </div>
        </DialogHeader>

        <div className="flex-grow overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="gc-name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><User className="h-4 w-4 mr-1.5 text-gray-400" /> Nombre completo <span className="text-red-500 ml-1">*</span></Label>
                <Input id="gc-name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre y apellidos" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="gc-email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Mail className="h-4 w-4 mr-1.5 text-gray-400" /> Correo electrónico <span className="text-red-500 ml-1">*</span></Label>
                <Input id="gc-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
              </div>
               <div className="space-y-1.5">
                 <Label htmlFor="gc-phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Phone className="h-4 w-4 mr-1.5 text-gray-400" /> Teléfono (Opcional)</Label>
                 <Input id="gc-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+34 600 000 000" className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
               </div>
                <input type="hidden" name="service" value={formData.service} />
                 <div className="space-y-1.5">
                    <Label htmlFor="gc-country" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Globe className="h-4 w-4 mr-1.5 text-gray-400" /> País de Constitución Preferido</Label>
                     <Input id="gc-country" name="preferred_country" value={formData.preferred_country} onChange={handleChange} placeholder="Ej: USA, España" className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
                </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="gc-message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Detalles Adicionales del Proyecto <span className="text-red-500 ml-1">*</span></Label>
              <Textarea
                id="gc-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe brevemente tu actividad, número de socios, facturación estimada, si necesitas cuenta bancaria, etc."
                rows={5}
                required
                className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50"
                disabled={isSubmitting}
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
               <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                 Al enviar, aceptas nuestra <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Política de Privacidad</a>.
               </p>
              <Button type="submit" className="w-full sm:w-auto btn-persuasive px-8 py-3 text-base" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registrando...</> : 'Solicitar Información'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalCompanyPopup;
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Building2, Loader2, User, Mail, Phone, Info, MapPin } from 'lucide-react';
import useContactForm from '@/hooks/contact/useContactForm.js';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import { motion } from 'framer-motion';

const LlcPopup = () => {
  const { isOpen, closePopup, popupData } = useContactPopup();
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm(popupData.service, closePopup);

  if (popupData.type !== 'llc' || !isOpen) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePopup()}>
      <DialogContent showCloseButton={true} className="sm:max-w-2xl md:max-w-3xl bg-gradient-to-br from-blue-50 to-green-100 dark:from-gray-900 dark:via-blue-900/40 dark:to-green-900/40 p-0 max-h-[90vh] flex flex-col rounded-xl border border-green-500/20 shadow-2xl overflow-hidden">
        <DialogHeader className="p-6 md:p-8 pb-4 border-b border-green-500/10 dark:border-gray-700/50 flex items-center justify-between space-x-4 relative">
           <div className="flex items-center space-x-4">
              <motion.div
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
                 className="p-3 bg-gradient-to-tr from-green-500 to-emerald-600 rounded-full shadow-lg"
              >
                 <Building2 className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {popupData.title}
                </DialogTitle>
                <DialogDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1">
                  {popupData.description} Déjanos saber más sobre tus necesidades.
                </DialogDescription>
              </div>
           </div>
        </DialogHeader>

        <div className="flex-grow overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="space-y-1.5">
                 <Label htmlFor="llc-name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><User className="h-4 w-4 mr-1.5 text-gray-400" /> Nombre completo <span className="text-red-500 ml-1">*</span></Label>
                 <Input id="llc-name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre y apellidos" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500/50" disabled={isSubmitting} />
               </div>
               <div className="space-y-1.5">
                 <Label htmlFor="llc-email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Mail className="h-4 w-4 mr-1.5 text-gray-400" /> Correo electrónico <span className="text-red-500 ml-1">*</span></Label>
                 <Input id="llc-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500/50" disabled={isSubmitting} />
               </div>
               <div className="space-y-1.5">
                 <Label htmlFor="llc-phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Phone className="h-4 w-4 mr-1.5 text-gray-400" /> Teléfono (Opcional)</Label>
                 <Input id="llc-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+34 600 000 000" className="dark:bg-gray-800 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500/50" disabled={isSubmitting} />
               </div>
                <input type="hidden" name="service" value={formData.service} />
                 <div className="space-y-1.5">
                    <Label htmlFor="llc-residence" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><MapPin className="h-4 w-4 mr-1.5 text-gray-400" /> País de Residencia Fiscal <span className="text-red-500 ml-1">*</span></Label>
                     <Input id="llc-residence" name="tax_residence" value={formData.tax_residence} onChange={handleChange} placeholder="Ej: España" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500/50" disabled={isSubmitting} />
                </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="llc-message" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Info className="h-4 w-4 mr-1.5 text-gray-400" /> Detalles Adicionales de tu Situación <span className="text-red-500 ml-1">*</span></Label>
              <Textarea
                id="llc-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Indica tu actividad principal, si ya tienes clientes en USA, si necesitas EIN, cuenta bancaria, etc."
                rows={5}
                required
                className="dark:bg-gray-800 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring-green-500/50"
                disabled={isSubmitting}
              />
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
               <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                  Al enviar, aceptas nuestra <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-600 dark:hover:text-green-400">Política de Privacidad</a>.
               </p>
              <Button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold px-8 py-3 text-base" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registrando...</> : 'Pedir Consulta LLC'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LlcPopup;
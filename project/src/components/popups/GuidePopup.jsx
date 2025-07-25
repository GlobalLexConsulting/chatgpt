import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DownloadCloud, Loader2, User, Mail } from 'lucide-react';
import useContactForm from '@/hooks/contact/useContactForm.js';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import { motion } from 'framer-motion';

const GuidePopup = () => {
  const { isOpen, closePopup, popupData } = useContactPopup();
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm("Descarga de Guía", closePopup);

  if (popupData.type !== 'guide' || !isOpen) {
    return null;
  }

  const handleDownloadSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (!isSubmitting) {
      // Trigger download after successful submission
      const link = document.createElement('a');
      link.href = popupData.guideUrl || '/guides/guia-sl-vs-llc-usa.pdf';
      link.download = popupData.guideUrl ? popupData.guideUrl.split('/').pop() : 'guia-sl-vs-llc-usa.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closePopup()}>
      <DialogContent showCloseButton={true} className="sm:max-w-lg bg-white dark:bg-card p-0 rounded-xl shadow-2xl border dark:border-gray-700/80 overflow-hidden">
        <DialogHeader className="p-6 md:p-8 pb-4 text-center bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-200 dark:border-gray-700/50">
           <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
              className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-blue-600 rounded-full shadow-lg"
           >
             <DownloadCloud className="h-8 w-8 text-white" />
           </motion.div>
           <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
             {popupData.title || "Descarga tu Guía GRATIS"}
           </DialogTitle>
           <DialogDescription className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1 max-w-sm mx-auto">
             {popupData.description || "Completa tus datos para recibir la guía y empezar a optimizar tu estructura."}
           </DialogDescription>
        </DialogHeader>

        <div className="p-6 md:p-8">
          <form onSubmit={handleDownloadSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="guide-name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><User className="h-4 w-4 mr-1.5 text-gray-400" /> Nombre completo <span className="text-red-500 ml-1">*</span></Label>
              <Input id="guide-name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="guide-email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Mail className="h-4 w-4 mr-1.5 text-gray-400" /> Correo electrónico <span className="text-red-500 ml-1">*</span></Label>
              <Input id="guide-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
            </div>
            <input type="hidden" name="service" value={formData.service} />
            <input type="hidden" name="message" value={`Solicitud de descarga de guía: ${popupData.title || 'Guía General'}`} />

            <div className="pt-2">
              <Button type="submit" className="w-full btn-persuasive px-8 py-3 text-base" disabled={isSubmitting}>
                {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : 'Descargar Ahora'}
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
              Al enviar, aceptas nuestra <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Política de Privacidad</a>.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuidePopup;
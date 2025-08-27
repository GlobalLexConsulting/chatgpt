import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { FaWhatsapp } from 'react-icons/fa';
import { Loader2, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const POPUP_SHOWN_KEY = 'contextualPopupShown_';

const servicePaths = [
    '/servicios/residencia-fiscal', '/services/tax-residency', '/dienstleistungen/steuerlicher-wohnsitz', '/servizi/residenza-fiscale',
    '/servicios/constitucion-sociedades', '/services/company-formation', '/dienstleistungen/unternehmensgruendung', '/servizi/costituzione-societa',
    '/servicios/asesoria-fiscal-internacional', '/services/international-tax-advisory', '/dienstleistungen/internationale-steuerberatung', '/servizi/consulenza-fiscale-internazionale',
    '/servicios/logistica-alemania', '/services/germany-logistics', '/dienstleistungen/logistik-deutschland', '/servizi/logistica-germania',
    '/servicios/gestion-fiscal-espana', '/services/fiscal-management-spain', '/dienstleistungen/steuerverwaltung-spanien', '/servizi/gestione-fiscale-spagna',
    '/servicios/seguros', '/services/insurance', '/dienstleistungen/versicherungen', '/servizi/assicurazioni'
];

const MarketingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const { t } = useTranslation(['service_pages', 'common']);

  const popupKey = POPUP_SHOWN_KEY + location.pathname;

  const formSchema = z.object({
    name: z.string().min(2, { message: t('common:contact.form_validation.name_required') }),
    email: z.string().email({ message: t('common:contact.form_validation.email_invalid') }),
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(formSchema),
  });
  
  const isServicePage = servicePaths.includes(location.pathname);
  
  useEffect(() => {
    if (isServicePage) {
      const hasBeenShown = sessionStorage.getItem(popupKey);
      if (!hasBeenShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem(popupKey, 'true');
        }, 8000); // 8 seconds delay

        return () => clearTimeout(timer);
      }
    }
  }, [isServicePage, popupKey]);

  const getPopupContent = () => {
    const path = location.pathname;
    if (path.includes('residencia-fiscal') || path.includes('tax-residency')) return t('immigration_page.popup', { ns: 'service_pages', returnObjects: true });
    if (path.includes('constitucion-sociedades') || path.includes('company-formation')) return t('company_formation_page.popup', { ns: 'service_pages', returnObjects: true });
    if (path.includes('asesoria-fiscal-internacional') || path.includes('international-tax')) return t('international_tax_page.popup', { ns: 'service_pages', returnObjects: true });
    if (path.includes('logistica-alemania') || path.includes('germany-logistics')) return t('germany_logistics_page.popup', { ns: 'service_pages', returnObjects: true });
    if (path.includes('gestion-fiscal-espana') || path.includes('fiscal-management-spain')) return t('spain_fiscal_page.popup', { ns: 'service_pages', returnObjects: true });
    if (path.includes('seguros') || path.includes('insurance')) return t('insurance_page.popup', { ns: 'service_pages', returnObjects: true });
    return null;
  };

  const popupContent = getPopupContent();

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          email: data.email,
          service: 'Popup Lead: ' + (popupContent?.title || 'General'),
          message: popupContent?.subtitle || 'Lead from contextual popup.',
          submitted_at: new Date(),
        }]);

      if (error) throw error;

      toast({
        title: "¡Gracias!",
        description: `Pronto nos pondremos en contacto contigo, ${data.name}.`,
        variant: "success",
      });
      reset();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al guardar tus datos. Inténtalo de nuevo.",
        variant: "destructive",
      });
    }
  };
  
  const handleOpenChange = (open) => {
    if (!open) {
      sessionStorage.setItem(popupKey, 'true');
    }
    setIsOpen(open);
  };

  if (!isServicePage || !popupContent) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <DialogContent className="sm:max-w-[480px] bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-background border-primary/30 p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-bold text-primary dark:text-primary-foreground mb-2">{popupContent.title}</DialogTitle>
                <DialogDescription className="text-lg text-gray-600 dark:text-gray-300">
                  {popupContent.subtitle}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <Label htmlFor="popup-name" className="text-left dark:text-gray-300">{t('common:contact.form_name')}</Label>
                  <Input id="popup-name" {...register("name")} placeholder={t('common:contact.form_name')} required className="dark:bg-gray-800 dark:border-gray-700" />
                   {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="popup-email" className="text-left dark:text-gray-300">{t('common:contact.form_email')}</Label>
                  <Input id="popup-email" type="email" {...register("email")} placeholder="tu@email.com" required className="dark:bg-gray-800 dark:border-gray-700" />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-11 mt-2">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('common:contact.form_submitting', 'Enviando...')}</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> {popupContent.cta || t('common:contact.form_submit')}</>
                  )}
                </Button>
              </form>
              <DialogFooter className="flex flex-col items-center">
                 <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-3 w-full">{popupContent.footer}</p>
                 <a
                    href="https://wa.me/34623937507?text=Hola,%20vengo%20de%20la%20web%20y%20me%20gustaría%20consultar%20sobre..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                 >
                     <Button variant="outline" className="w-full h-11 bg-green-50 border-green-300 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-800/50">
                       <FaWhatsapp className="mr-2 h-5 w-5" /> Chatear por WhatsApp
                     </Button>
                </a>
              </DialogFooter>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default MarketingPopup;
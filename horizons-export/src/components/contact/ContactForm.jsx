import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, User, Mail, Phone, Briefcase, MessageSquare } from 'lucide-react';
import useContactForm from '@/hooks/contact/useContactForm.js';
import { useTranslation } from 'react-i18next';

const ContactForm = ({ onSuccess }) => {
  const { t } = useTranslation('common');
  const servicesOptions = [
    t('contact.service_options.general_inquiry', 'Consulta General'),
    t('contact.service_options.global_formation', 'Paquete Creación Empresa Global'),
    t('contact.service_options.contract_review', 'Revisión y Redacción de Contratos'),
    t('contact.service_options.compliance', 'Cumplimiento Normativo y Protección de Datos'),
    t('contact.service_options.tax_planning', 'Planificación Fiscal Internacional'),
    t('contact.service_options.nomad_advisory', 'Asesoría Nómadas Digitales / Expatriados'),
    t('contact.service_options.holding_structuring', 'Estructuración de Holdings Internacionales'),
    t('contact.service_options.other', 'Otro')
  ];
  
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm(servicesOptions[0], onSuccess);

  return (
     <div className="lg:col-span-3">
       <form onSubmit={handleSubmit} className="space-y-5 contact-form">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
           <div className="space-y-1.5">
             <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
               <User className="h-4 w-4 mr-1.5 text-gray-400" /> {t('contact.form_name')} <span className="text-red-500 ml-1">*</span>
             </Label>
             <Input
               id="name"
               name="name"
               value={formData.name}
               onChange={handleChange}
               placeholder={t('contact.form_name_placeholder', 'Tu nombre y apellidos')}
               required
               className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50"
               aria-required="true"
               disabled={isSubmitting}
             />
           </div>
           <div className="space-y-1.5">
             <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
               <Mail className="h-4 w-4 mr-1.5 text-gray-400" /> {t('contact.form_email')} <span className="text-red-500 ml-1">*</span>
             </Label>
             <Input
               id="email"
               name="email"
               type="email"
               value={formData.email}
               onChange={handleChange}
               placeholder={t('contact.form_email_placeholder', 'ejemplo@dominio.com')}
               required
               className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50"
               aria-required="true"
               disabled={isSubmitting}
             />
           </div>
           <div className="space-y-1.5">
             <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
               <Phone className="h-4 w-4 mr-1.5 text-gray-400" /> {t('contact.form_phone')}
             </Label>
             <Input
               id="phone"
               name="phone"
               type="tel"
               value={formData.phone}
               onChange={handleChange}
               placeholder={t('contact.form_phone_placeholder', '+1 555 123 4567')}
               className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50"
               disabled={isSubmitting}
             />
           </div>
           <div className="space-y-1.5">
             <Label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
               <Briefcase className="h-4 w-4 mr-1.5 text-gray-400" /> {t('contact.form_service')} <span className="text-red-500 ml-1">*</span>
             </Label>
             <select
               id="service"
               name="service"
               value={formData.service}
               onChange={handleChange}
               required
               className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-gray-800 dark:border-gray-600 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:border-primary dark:focus:border-primary focus:ring-primary/50"
               aria-required="true"
               disabled={isSubmitting}
             >
               {servicesOptions.map(option => (
                 <option key={option} value={option}>{option}</option>
               ))}
             </select>
           </div>
         </div>

         <div className="space-y-1.5">
           <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
             <MessageSquare className="h-4 w-4 mr-1.5 text-gray-400" /> {t('contact.form_message')} <span className="text-red-500 ml-1">*</span>
           </Label>
           <Textarea
             id="message"
             name="message"
             value={formData.message}
             onChange={handleChange}
             placeholder={t('contact.form_message_placeholder', 'Describe brevemente tu consulta...')}
             rows={5}
             required
             className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50"
             aria-required="true"
             disabled={isSubmitting}
           />
         </div>

         <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
               {t('contact.form_privacy_notice_pre', 'Al enviar, aceptas nuestra')} <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{t('contact.form_privacy_policy', 'Política de Privacidad')}</a>.
            </p>
           <Button
             type="submit"
             className="w-full sm:w-auto btn-persuasive px-8 py-3 text-base"
             disabled={isSubmitting}
             aria-live="polite"
           >
             {isSubmitting ? (
               <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('contact.form_submitting', 'Enviando...')}</>
              ) : (
                t('contact.form_submit', 'Enviar Consulta')
              )}
           </Button>
         </div>
       </form>
     </div>
  );
};

export default ContactForm;
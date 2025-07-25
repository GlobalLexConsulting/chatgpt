import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, User, Mail, Phone, Info } from 'lucide-react';
import useContactForm from '@/hooks/contact/useContactForm.js';

const ServiceContactForm = ({ serviceName }) => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm(serviceName);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div className="space-y-1.5">
          <Label htmlFor="scf-name" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><User className="h-4 w-4 mr-1.5 text-gray-400" /> Nombre completo <span className="text-red-500 ml-1">*</span></Label>
          <Input id="scf-name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="scf-email" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Mail className="h-4 w-4 mr-1.5 text-gray-400" /> Correo electrónico <span className="text-red-500 ml-1">*</span></Label>
          <Input id="scf-email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="scf-phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Phone className="h-4 w-4 mr-1.5 text-gray-400" /> Teléfono (Opcional)</Label>
          <Input id="scf-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+34 600 000 000" className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" disabled={isSubmitting} />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="scf-message" className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center"><Info className="h-4 w-4 mr-1.5 text-gray-400" /> Mensaje</Label>
        <Textarea id="scf-message" name="message" value={formData.message} onChange={handleChange} rows={4} className="dark:bg-gray-800 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:ring-primary/50" />
      </div>
      <input type="hidden" name="service" value={formData.service} />
      <div>
        <Button type="submit" className="btn-persuasive px-6 py-3" disabled={isSubmitting}>
          {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : 'Enviar'}
        </Button>
      </div>
    </form>
  );
};

export default ServiceContactForm;

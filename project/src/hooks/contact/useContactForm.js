import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabaseClient';

const useContactForm = (initialService = "Consulta General", onSuccessCallback) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: '',
    preferred_country: '',
    tax_residence: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      toast({
        title: "¡Consulta Enviada!",
        description: "Gracias por contactarnos. Un especialista revisará tu caso y te responderá pronto.",
        variant: "success",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: initialService,
        message: '',
        preferred_country: '',
        tax_residence: '',
      });

      if (onSuccessCallback) {
        setTimeout(onSuccessCallback, 500);
      }

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error al Enviar",
        description: "Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
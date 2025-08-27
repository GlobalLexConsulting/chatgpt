import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { MessageSquare } from 'lucide-react';

const ContactForm = ({ servicesOptions = ["Consulta General"] }) => { // Add default value for safety
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: servicesOptions[0], // Use the first option from props or default
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (replace with actual fetch later)
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData); // Log data for now

    // In a real app, you would send formData to your backend/Supabase here

    toast({
      title: "✅ Mensaje Enviado con Éxito",
      description: `Gracias por tu interés, ${formData.name}. Nos pondremos en contacto contigo pronto.`,
      variant: "success",
      duration: 6000,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: servicesOptions[0], // Reset to the first option
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="lg:col-span-3"
    >
      <div className="bg-white dark:bg-card p-8 md:p-10 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800">
        <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white flex items-center">
          <MessageSquare className="h-6 w-6 mr-3 text-primary" /> Envíanos tu Consulta
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6 contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Nombre completo <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="dark:bg-gray-800 dark:border-gray-700"
                aria-required="true"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Correo electrónico <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@dominio.com"
                required
                className="dark:bg-gray-800 dark:border-gray-700"
                aria-required="true"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Teléfono (Opcional)
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 555 123 4567"
                className="dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Servicio de Interés <span className="text-red-500">*</span>
              </Label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-gray-800 dark:border-gray-700 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                aria-required="true"
              >
                {servicesOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Tu Mensaje <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe brevemente tu consulta o necesidad..."
              rows={5}
              required
              className="dark:bg-gray-800 dark:border-gray-700"
              aria-required="true"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full md:w-auto btn-persuasive px-8 py-3 text-base"
              disabled={isSubmitting}
              aria-live="polite"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Consulta Ahora'}
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
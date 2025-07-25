import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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

  return (
    <motion.section
      id="contacto"
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-background overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">{t('contact.title')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">{t('contact.subtitle')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
          <motion.div
             variants={itemVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="lg:col-span-2"
          >
             <ContactInfo />
          </motion.div>

           <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-3"
            >
             <ContactForm servicesOptions={servicesOptions} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
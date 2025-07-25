import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm'; // Uses hook internally

// NOTE: This component seems redundant now as its functionality is merged into Contact.jsx
// Consider removing this file if Contact.jsx is the main component used.
// Keeping it for now in case it's used elsewhere, but flagging for potential cleanup.

const ContactSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contacto-section" // Changed ID to avoid conflict if Contact.jsx is used
      className="py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-background overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Contacto</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">¿Listo para Impulsar tu Estrategia Global?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contacta con nuestros expertos para una consulta inicial gratuita y descubre cómo podemos ayudarte a alcanzar tus metas internacionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
          <motion.div
             variants={itemVariants}
             className="lg:col-span-2"
          >
             <ContactInfo />
          </motion.div>
           {/* ContactForm handles its own structure */}
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
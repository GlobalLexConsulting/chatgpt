import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsCTA = ({ handleNavLinkClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-16 lg:mt-20 text-center"
    >
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">¿Listo para ser nuestro próximo caso de éxito en optimización fiscal internacional?</p>
      <Button size="lg" className="btn-persuasive px-10 py-3 text-lg group" onClick={(e) => handleNavLinkClick(e, '/#contacto')}>
        Solicita tu Consulta Estratégica
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />
      </Button>
    </motion.div>
  );
};

export default TestimonialsCTA;
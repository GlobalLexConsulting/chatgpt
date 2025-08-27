import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Resultados Reales, Clientes Satisfechos</span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Transformamos Complejidad en Crecimiento Global</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        No solo hablamos de estrategia, entregamos resultados tangibles y tranquilidad. Escucha directamente de quienes ya confían en ConsultGlobalLex.
      </p>
    </motion.div>
  );
};

export default TestimonialsHeader;
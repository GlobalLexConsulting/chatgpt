import React from 'react';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react'; // Icon for no results

const BlogNoResults = ({ categoryLabel, searchTerm }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center py-16 text-gray-500 dark:text-gray-400 flex flex-col items-center"
  >
    <SearchX className="h-12 w-12 mb-4 text-gray-400 dark:text-gray-500" />
    <p className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-300">
      No se encontraron resultados
    </p>
    <p className="max-w-md">
      No hay artículos {categoryLabel !== 'Todos' ? `en la categoría "${categoryLabel}"` : ''} {searchTerm ? `que coincidan con "${searchTerm}"` : ''}.
    </p>
    <p className="mt-2">Intenta ajustar tu búsqueda o selecciona otra categoría.</p>
  </motion.div>
);

export default BlogNoResults;
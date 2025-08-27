import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const BlogLoadingSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="flex justify-center items-center py-20 text-gray-500 dark:text-gray-400"
    aria-label="Cargando artículos"
    role="status"
  >
    <Loader2 className="h-8 w-8 animate-spin mr-3" />
    <p className="text-xl">Cargando artículos...</p>
  </motion.div>
);

export default BlogLoadingSkeleton;
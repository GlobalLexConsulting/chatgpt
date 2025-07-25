import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import TestimonialSkeleton from '@/components/testimonials/TestimonialSkeleton';

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TestimonialsGrid = ({ testimonials, loading, error }) => {
  if (error) {
    return <p className="text-center text-red-600 dark:text-red-400">{error}</p>;
  }

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {loading ? (
        // Display skeletons while loading
        Array.from({ length: 3 }).map((_, index) => (
          <TestimonialSkeleton key={index} />
        ))
      ) : testimonials.length > 0 ? (
         // Display actual testimonials once loaded
         testimonials.map((testimonial) => (
           <TestimonialCard key={testimonial.id} testimonial={testimonial} />
         ))
      ) : (
         // Display message if no testimonials are found after loading
         <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
             No hay testimonios disponibles en este momento.
         </p>
      )
      }
    </motion.div>
  );
};

export default TestimonialsGrid;
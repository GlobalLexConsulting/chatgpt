import React from 'react';
import { motion } from 'framer-motion';
import useTestimonials from '@/hooks/useTestimonials';
import useNavigationHandler from '@/hooks/useNavigationHandler';
import TestimonialsHeader from '@/components/testimonials/TestimonialsHeader';
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';

const Testimonials = () => {
  const { testimonials, loading, error } = useTestimonials();
  const { handleNavLinkClick } = useNavigationHandler();

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <TestimonialsHeader />
        <TestimonialsGrid testimonials={testimonials} loading={loading} error={error} />
        <TestimonialsCTA handleNavLinkClick={handleNavLinkClick} />
      </div>
    </section>
  );
};

export default Testimonials;
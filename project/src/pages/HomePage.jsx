import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import BlogPreview from '@/components/BlogPreview';
import LlcService from '@/components/LlcService';
import DownloadableGuides from '@/components/DownloadableGuides';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <LlcService />
      <About />
      <Partners />
      <DownloadableGuides />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Contact />
    </div>
  );
};

export default HomePage;
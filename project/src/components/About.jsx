import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ChevronRight, Linkedin, Award, Briefcase } from "lucide-react";
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();
  const founderImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/1fcadb24-6860-4e02-b4aa-2babb26f382a/0623ecdc710f9b029b67267ab2510a57.png";

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-5">
              <img
                className="object-cover rounded-2xl shadow-2xl w-full h-full"
                src={founderImage}
                alt="Ismael L., CEO de Consult Globallex"
                loading="lazy"
              />
            </div>
             <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg w-72 backdrop-blur-sm bg-opacity-80 border border-white/20">
              <p className="text-xl font-bold">Ismael L.</p>
              <p className="text-base">CEO y Consultor Principal</p>
              <a href="https://www.linkedin.com/in/ismael-l-10041492/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm hover:underline">
                  Ver perfil en LinkedIn <Linkedin className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">{t('about.title')}</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              {t('services.why_us_title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
               <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
               <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
               
               <div className="bg-white dark:bg-card/50 p-6 rounded-lg border dark:border-gray-700/60 space-y-4 mt-6">
                 <div className="flex items-start">
                   <Award className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                   <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">{t('about.experience_title')}</h3>
                      <p className="text-base">{t('about.experience_desc')}</p>
                   </div>
                 </div>
                  <div className="flex items-start">
                   <Briefcase className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                   <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">{t('about.approach_title')}</h3>
                      <p className="text-base">{t('about.approach_desc')}</p>
                   </div>
                 </div>
               </div>
            </div>
             <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <Link to="/#contacto">
                 <Button size="lg" className="w-full sm:w-auto btn-primary-persuasive">
                   {t('about.cta_contact')} <ChevronRight className="ml-2 h-5 w-5" />
                 </Button>
               </Link>
               <Link to="/blog">
                 <Button size="lg" variant="outline" className="w-full sm:w-auto">
                   {t('about.cta_blog')}
                 </Button>
               </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ShieldCheck } from 'lucide-react';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id="socios" className="py-20 lg:py-28 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {t('partners.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-blue-600 dark:from-primary/80 dark:to-blue-700/80 rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="p-4 bg-white/20 rounded-full">
                <ShieldCheck className="h-16 w-16 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {t('partners.insurance_title')}
              </h3>
              <p className="text-white/90 text-base md:text-lg">
                {t('partners.insurance_desc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
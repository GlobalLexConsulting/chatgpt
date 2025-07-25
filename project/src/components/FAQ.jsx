import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import useNavigationHandler from "@/hooks/useNavigationHandler";

const FAQ = () => {
  const { t } = useTranslation('common');
  const { handleNavLinkClick } = useNavigationHandler();

  const faqCategories = t('faq.categories', { returnObjects: true }) || [];

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Array.isArray(faqCategories) ? faqCategories.flatMap(category => 
      Array.isArray(category.items) ? category.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer.replace(/\n/g, '<br>')
        }
      })) : []
    ) : []
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-gray-900/30">
      <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
           <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">{t('faq.title')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">{t('faq.subtitle')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('faq.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-5">
            {Array.isArray(faqCategories) && faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">{category.category}</h3>
                {Array.isArray(category.items) && category.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="mb-3"
                  >
                    <AccordionItem
                      value={`item-${catIndex}-${index}`}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-card overflow-hidden transition-shadow hover:shadow-md data-[state=open]:shadow-lg data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="group px-6 py-5 text-left hover:no-underline text-lg font-semibold text-gray-800 dark:text-white data-[state=open]:text-primary">
                        <span className="flex-1 group-hover:text-primary transition-colors">{item.question}</span>
                         <Plus className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 transition-transform duration-200 group-data-[state=open]:hidden" />
                         <Minus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-data-[state=closed]:hidden" />
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 text-base leading-relaxed whitespace-pre-line">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </div>
            ))}
          </Accordion>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center text-lg text-gray-700 dark:text-gray-300"
        >
          <HelpCircle className="inline-block h-6 w-6 mr-2 text-primary" />
          {t('faq.footer_text')}{' '}
          <a href="#contacto" onClick={(e) => handleNavLinkClick(e, '/#contacto')} className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">
            {t('faq.footer_link')}
          </a>
           {' '}{t('faq.footer_text_after')}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
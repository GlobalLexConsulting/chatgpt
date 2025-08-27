
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Briefcase, Plane, Building, ShieldCheck, Truck, HeartHandshake as Handshake, BookMarked, MapPin, Sun, Anchor, Landmark, Gem, Mountain, Palmtree } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = (t, lng) => {
  const base = (path) => {
    switch(lng) {
      case 'en': return `/services/${path}`;
      case 'de': return `/dienstleistungen/${path}`;
      case 'it': return `/servizi/${path}`;
      default: return `/servicios/${path}`;
    }
  };

  const getRelocationPath = (basePath) => {
    switch(lng) {
      case 'en': return `relocation-${basePath}`;
      case 'de': return `umzug-${basePath}`;
      case 'it': return `trasferimento-${basePath}`;
      default: return `relocation-${basePath}`;
    }
  }

  return [
    {
      icon: <Plane className="h-6 w-6 text-primary" />,
      title: t('services.service_residency_title'),
      description: t('services.service_residency_desc'),
      details: t('services.service_residency_points', { returnObjects: true }),
      link: base("residencia-fiscal")
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: t('services.service_incorporation_title'),
      description: t('services.service_incorporation_desc'),
      details: t('services.service_incorporation_points', { returnObjects: true }),
      link: base("constitucion-sociedades")
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: t('services.service_tax_title'),
      description: t('services.service_tax_desc'),
      details: t('services.service_tax_points', { returnObjects: true }),
      link: base("asesoria-fiscal-internacional")
    },
    {
      icon: <BookMarked className="h-6 w-6 text-primary" />,
      title: t('services.service_spain_fiscal_title'),
      description: t('services.service_spain_fiscal_desc'),
      details: t('services.service_spain_fiscal_points', { returnObjects: true }),
      link: base("gestion-fiscal-espana")
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: t('services.service_germany_title'),
      description: t('services.service_germany_desc'),
      details: t('services.service_germany_points', { returnObjects: true }),
      link: base("logistica-alemania")
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: t('services.service_insurance_title'),
      description: t('services.service_insurance_desc'),
      details: t('services.service_insurance_points', { returnObjects: true }),
      link: base("seguros")
    },
    {
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: t('services.service_work_germany_title'),
      description: t('services.service_work_germany_desc'),
      details: t('services.service_work_germany_points', { returnObjects: true }),
      link: `/${t('routes.work_in_germany', { ns: 'common' })}`
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t('services.service_cyprus_title'),
      description: t('services.service_cyprus_desc'),
      details: t('services.service_cyprus_points', { returnObjects: true }),
      link: base(getRelocationPath('chipre'))
    },
    {
      icon: <Sun className="h-6 w-6 text-primary" />,
      title: t('services.service_paraguay_title'),
      description: t('services.service_paraguay_desc'),
      details: t('services.service_paraguay_points', { returnObjects: true }),
      link: base(getRelocationPath('paraguay'))
    },
    {
      icon: <Anchor className="h-6 w-6 text-primary" />,
      title: t('services.service_panama_title'),
      description: t('services.service_panama_desc'),
      details: t('services.service_panama_points', { returnObjects: true }),
      link: base(getRelocationPath('panama'))
    },
    {
      icon: <Landmark className="h-6 w-6 text-primary" />,
      title: t('services.service_dubai_title'),
      description: t('services.service_dubai_desc'),
      details: t('services.service_dubai_points', { returnObjects: true }),
      link: base(getRelocationPath('dubai'))
    },
    {
      icon: <Palmtree className="h-6 w-6 text-primary" />,
      title: t('services.service_dominican_republic_title'),
      description: t('services.service_dominican_republic_desc'),
      details: t('services.service_dominican_republic_points', { returnObjects: true }),
      link: base(getRelocationPath('republica-dominicana'))
    },
    {
      icon: <Gem className="h-6 w-6 text-primary" />,
      title: t('services.service_thailand_title'),
      description: t('services.service_thailand_desc'),
      details: t('services.service_thailand_points', { returnObjects: true }),
      link: base(getRelocationPath('tailandia'))
    },
    {
      icon: <Palmtree className="h-6 w-6 text-primary" />,
      title: t('services.service_costa_rica_title'),
      description: t('services.service_costa_rica_desc'),
      details: t('services.service_costa_rica_points', { returnObjects: true }),
      link: base(getRelocationPath('costa-rica'))
    },
    {
      icon: <Building className="h-6 w-6 text-primary" />,
      title: t('services.service_spain_beckham_title'),
      description: t('services.service_spain_beckham_desc'),
      details: t('services.service_spain_beckham_points', { returnObjects: true }),
      link: base(getRelocationPath('espana-ley-beckham'))
    },
    {
      icon: <Gem className="h-6 w-6 text-primary" />,
      title: t('services.service_bulgaria_title'),
      description: t('services.service_bulgaria_desc'),
      details: t('services.service_bulgaria_points', { returnObjects: true }),
      link: base(getRelocationPath('bulgaria'))
    },
    {
      icon: <Mountain className="h-6 w-6 text-primary" />,
      title: t('services.service_andorra_title'),
      description: t('services.service_andorra_desc'),
      details: t('services.service_andorra_points', { returnObjects: true }),
      link: base(getRelocationPath('andorra'))
    },
  ];
};

const Services = () => {
  const { t, i18n } = useTranslation('common');
  const allServices = servicesData(t, i18n.language);
  
  return (
    <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 border dark:border-gray-700">
                  <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-left">
                    <div className="flex items-center">
                      {service.icon}
                      <span className="ml-4">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-2 text-gray-700 dark:text-gray-200">
                      {Array.isArray(service.details) && service.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    <Button asChild className="btn-secondary-persuasive">
                      <Link to={service.link}>{t('services.view_more_info')}</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;

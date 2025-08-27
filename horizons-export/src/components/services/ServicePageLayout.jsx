import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, HelpCircle, Percent, Stamp, Gavel, Globe, ShieldCheck, Rocket, TrendingDown, FileCheck, Network, Map, ClipboardCheck, Settings, Clock, Sun, Ship, HeartPulse, Building, UserCheck, Anchor, Landmark, Gem, Mountain, Palmtree } from 'lucide-react';
import ServiceContactForm from '@/components/forms/ServiceContactForm';
import useNavigationHandler from '@/hooks/useNavigationHandler';

const iconMap = {
    "percent-circle": <Percent className="h-8 w-8 text-primary" />,
    "stamp": <Stamp className="h-8 w-8 text-primary" />,
    "gavel": <Gavel className="h-8 w-8 text-primary" />,
    "globe": <Globe className="h-8 w-8 text-primary" />,
    "shield-check": <ShieldCheck className="h-8 w-8 text-primary" />,
    "rocket": <Rocket className="h-8 w-8 text-primary" />,
    "trending-down": <TrendingDown className="h-8 w-8 text-primary" />,
    "file-check": <FileCheck className="h-8 w-8 text-primary" />,
    "network": <Network className="h-8 w-8 text-primary" />,
    "map": <Map className="h-8 w-8 text-primary" />,
    "clipboard-check": <ClipboardCheck className="h-8 w-8 text-primary" />,
    "settings": <Settings className="h-8 w-8 text-primary" />,
    "clock": <Clock className="h-8 w-8 text-primary" />,
    "sun": <Sun className="h-8 w-8 text-primary" />,
    "ship": <Ship className="h-8 w-8 text-primary" />,
    "heart-pulse": <HeartPulse className="h-8 w-8 text-primary" />,
    "building": <Building className="h-8 w-8 text-primary" />,
    "user-check": <UserCheck className="h-8 w-8 text-primary" />,
    "anchor": <Anchor className="h-8 w-8 text-primary" />,
    "landmark": <Landmark className="h-8 w-8 text-primary" />,
    "gem": <Gem className="h-8 w-8 text-primary" />,
    "mountain": <Mountain className="h-8 w-8 text-primary" />,
    "palmtree": <Palmtree className="h-8 w-8 text-primary" />,
};

const Section = ({ children, className = '' }) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="container mx-auto px-4">{children}</div>
  </section>
);

const HeroSection = ({ title, subtitle, ctaText, ctaLink }) => {
    const { handleNavLinkClick } = useNavigationHandler();
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-32 pb-20 md:pt-40 md:pb-28 text-center"
        >
            <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{title}</h1>
            <h2 className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">{subtitle}</h2>
            <Button asChild size="lg" className="btn-persuasive">
                <a href={ctaLink} onClick={(e) => handleNavLinkClick(e, ctaLink)}>{ctaText}</a>
            </Button>
            </div>
        </motion.div>
    );
};

const BenefitsSection = ({ benefits }) => (
  <Section className="bg-gray-50 dark:bg-gray-900/50">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
        >
          <Card className="h-full text-center shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-transparent hover:border-primary/30">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-3">
                {iconMap[benefit.icon] || <CheckCircle className="h-8 w-8 text-primary" />}
              </div>
              <CardTitle className="text-xl">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const IncludedSection = ({ title, includedItems, targetAudience }) => (
  <Section>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div>
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        <ul className="space-y-3">
          {includedItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start"
            >
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
        <h4 className="text-2xl font-bold mb-4">{targetAudience.title}</h4>
        <p className="mb-4">{targetAudience.description}</p>
        <ul className="list-disc list-inside space-y-2">
          {targetAudience.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

const ValueContentSection = ({ title, content }) => (
    <Section className="bg-gray-50 dark:bg-gray-900/50">
        <h3 className="text-3xl font-bold mb-6 text-center">{title}</h3>
        <div className="prose dark:prose-invert max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: content }}/>
    </Section>
);


const FaqSection = ({ title, faqs }) => (
  <Section>
    <div className="max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">{title}</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg text-left">
              <div className="flex items-center">
                <HelpCircle className="h-5 w-5 mr-3 text-primary" />
                {faq.question}
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pl-10">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </Section>
);

const ContactSection = ({ title, cta, serviceName }) => (
  <Section id="contact" className="bg-gray-100 dark:bg-gray-800">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-muted-foreground mb-8">{cta}</p>
      <ServiceContactForm serviceName={serviceName} />
    </div>
  </Section>
);


const ServicePageLayout = ({ pageKey }) => {
  const { t } = useTranslation('service_pages');
  const pageData = t(pageKey, { returnObjects: true });

  if (!pageData || !pageData.hero) return <div>Loading...</div>;

  return (
    <div>
      <HeroSection {...pageData.hero} />
      <BenefitsSection benefits={pageData.benefits} />
      <IncludedSection {...pageData.included} />
      {pageData.valueContent && <ValueContentSection {...pageData.valueContent} />}
      <FaqSection {...pageData.faq} />
      <ContactSection {...pageData.contact} serviceName={pageData.hero.title}/>
    </div>
  );
};

export default ServicePageLayout;
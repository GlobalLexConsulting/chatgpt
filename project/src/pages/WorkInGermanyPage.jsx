import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Briefcase, HeartHandshake as Handshake, Mail, Building, Truck, Brush as Broom, Utensils, Construction, UserCheck, Lock, Award, Globe, Users } from 'lucide-react';
import WorkInGermanyForm from '@/components/forms/WorkInGermanyForm';

const SectorCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className="h-full"
    >
        <Card className="h-full text-center shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-transparent hover:border-primary/30">
            <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-3">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    </motion.div>
);

const TrustElement = ({ icon, text, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center space-x-3 bg-white dark:bg-card p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
        {icon}
        <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">{text}</p>
    </motion.div>
);

const WorkInGermanyPage = () => {
    const { t } = useTranslation();
    
    const candidatesBenefits = t('work_in_germany.candidates_benefits', { returnObjects: true });
    const companiesBenefits = t('work_in_germany.companies_benefits', { returnObjects: true });
    
    const sectorIcons = [
      <Truck className="h-8 w-8 text-primary"/>,
      <Broom className="h-8 w-8 text-primary"/>,
      <Utensils className="h-8 w-8 text-primary"/>,
      <Briefcase className="h-8 w-8 text-primary"/>,
      <Construction className="h-8 w-8 text-primary"/>,
      <UserCheck className="h-8 w-8 text-primary"/>
    ];
    
    const sectors = t('work_in_germany.sectors', { returnObjects: true }).map((sector, index) => ({
      ...sector,
      icon: sectorIcons[index]
    }));
    
    const trustElements = t('work_in_germany.trust_elements', { returnObjects: true });
    const whyUsPoints = t('work_in_germany.why_us_points', { returnObjects: true });

    return (
        <div className="bg-gray-50 dark:bg-background">
            {/* Header Section */}
            <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-32 pb-20 md:pt-40 md:pb-28 text-center"
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">{t('work_in_germany.header_title')}</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('work_in_germany.header_subtitle')}
                    </p>
                </div>
            </motion.section>

            {/* Main Content Grid */}
            <main className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* For Candidates Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-3 bg-white dark:bg-card p-6 sm:p-8 rounded-2xl shadow-xl border dark:border-gray-700"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 flex items-center"><Briefcase className="h-8 w-8 text-primary mr-3"/> {t('work_in_germany.candidates_title')}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{t('work_in_germany.candidates_subtitle')}</p>
                        <ul className="space-y-3 mb-8">
                            {candidatesBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('work_in_germany.form_title')}</h3>
                        <WorkInGermanyForm />
                    </motion.div>

                    {/* For Companies Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="bg-white dark:bg-card p-6 sm:p-8 rounded-2xl shadow-xl border dark:border-gray-700">
                             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 flex items-center"><Handshake className="h-8 w-8 text-primary mr-3"/> {t('work_in_germany.companies_title')}</h2>
                             <p className="text-gray-600 dark:text-gray-300 mb-6">{t('work_in_germany.companies_subtitle')}</p>
                             <ul className="space-y-3 mb-6">
                                {companiesBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-primary/10 dark:bg-primary/20 text-center p-4 rounded-lg">
                                 <p className="font-bold text-lg text-gray-900 dark:text-white">
                                    <Trans i18nKey="work_in_germany.pricing_title">
                                        Tarifa plana: <span className="text-primary text-2xl">100€/mes</span> por trabajador
                                    </Trans>
                                 </p>
                                 <p className="text-sm text-gray-600 dark:text-gray-400">{t('work_in_germany.pricing_subtitle')}</p>
                             </div>
                             <Button asChild size="lg" className="w-full mt-6 btn-secondary-persuasive">
                                 <a href="mailto:info@consultgloballex.com">
                                     <Mail className="mr-2 h-5 w-5"/> {t('work_in_germany.contact_cta')}
                                 </a>
                             </Button>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Sectors Section */}
            <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900/50">
                 <div className="container mx-auto px-4">
                     <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-3"><Building className="h-10 w-10 text-primary"/> {t('work_in_germany.sectors_title')}</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">{t('work_in_germany.sectors_subtitle')}</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {sectors.map((sector, index) => (
                             <SectorCard key={index} {...sector} delay={index * 0.1} />
                        ))}
                    </div>
                 </div>
            </section>
            
            {/* Trust Elements Section */}
            <section className="py-16 md:py-24 bg-white dark:bg-card">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TrustElement icon={<Award className="h-8 w-8 text-primary flex-shrink-0"/>} text={trustElements[0]} delay={0.1} />
                        <TrustElement icon={<Globe className="h-8 w-8 text-primary flex-shrink-0"/>} text={trustElements[1]} delay={0.2} />
                        <TrustElement icon={<Users className="h-8 w-8 text-primary flex-shrink-0"/>} text={trustElements[2]} delay={0.3} />
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-3"><Lock className="h-10 w-10 text-primary"/> {t('work_in_germany.why_us_title')}</h2>
                    </motion.div>
                    <div className="max-w-4xl mx-auto bg-white dark:bg-card p-8 sm:p-12 rounded-2xl shadow-xl border dark:border-gray-700">
                        <ul className="space-y-4 text-lg">
                           {whyUsPoints.map((point, index) => (
                             <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex items-start"
                             >
                                 <UserCheck className="h-7 w-7 text-green-500 mr-4 mt-1 flex-shrink-0" />
                                 <span className="text-gray-700 dark:text-gray-200">{point}</span>
                             </motion.li>
                           ))}
                        </ul>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mt-8 text-center text-xl font-semibold text-gray-800 dark:text-white bg-green-500/10 dark:bg-green-500/20 p-4 rounded-lg"
                        >
                            {t('work_in_germany.why_us_footer')}
                        </motion.p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkInGermanyPage;
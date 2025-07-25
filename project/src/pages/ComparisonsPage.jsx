import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GitCompare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import SEOPage from '@/pages/SEOPage';
import { Button } from '@/components/ui/button';

const ComparisonCard = ({ title, description, link, icon, delay }) => {
    const { t } = useTranslation();
    const IconComponent = icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-300 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
        >
            <div className="p-8 flex-grow">
                <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 mt-auto">
                <Button asChild size="lg" className="w-full btn-persuasive group">
                    <Link to={link}>
                        {t('comparisons.cta')}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </motion.div>
    );
};

const ComparisonsPage = () => {
    const { t } = useTranslation();

    const comparisons = [
        {
            title: t('comparisons.deloitte_title'),
            description: t('comparisons.deloitte_desc'),
            link: '/comparativas/deloitte',
            icon: ShieldCheck,
        },
        {
            title: t('comparisons.ce_consulting_title'),
            description: t('comparisons.ce_consulting_desc'),
            link: '/comparativas/ce-consulting',
            icon: GitCompare,
        },
        {
            title: t('comparisons.exim_asesores_title'),
            description: t('comparisons.exim_asesores_desc'),
            link: '/comparativas/exim-asesores',
            icon: Zap,
        },
        {
            title: t('comparisons.martin_lechado_title'),
            description: t('comparisons.martin_lechado_desc'),
            link: '/comparativas/martin-lechado',
            icon: GitCompare,
        },
        {
            title: t('comparisons.olympia_abogados_title'),
            description: t('comparisons.olympia_abogados_desc'),
            link: '/comparativas/olympia-abogados',
            icon: ShieldCheck,
        },
    ];

    return (
        <SEOPage
            title="Comparativas de Consultorías | ConsultGlobalLex"
            description="Compara ConsultGlobalLex con Deloitte, CE Consulting y otras firmas. Descubre nuestra ventaja en agilidad, precio y especialización internacional."
        >
            <div className="bg-gray-50 dark:bg-background">
                <header className="py-20 lg:py-28 bg-white dark:bg-gray-900/40">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white"
                        >
                            {t('comparisons.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        >
                            {t('comparisons.subtitle')}
                        </motion.p>
                    </div>
                </header>

                <main className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {comparisons.map((comp, index) => (
                                <ComparisonCard
                                    key={index}
                                    title={comp.title}
                                    description={comp.description}
                                    link={comp.link}
                                    icon={comp.icon}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </SEOPage>
    );
};

export default ComparisonsPage;
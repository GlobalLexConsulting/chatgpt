import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, FileDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GuideCard = ({ title, description, downloadLink, delay }) => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl dark:hover:shadow-primary/20 transition-all duration-300 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
        >
            <div className="p-8 flex-grow">
                <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <BookOpen className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 mt-auto">
                <Button asChild size="lg" className="w-full btn-persuasive group">
                    <a href={downloadLink} download>
                        <FileDown className="mr-2 h-5 w-5" />
                        {t('guides.download_cta')}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        </motion.div>
    );
};

const DownloadableGuides = () => {
    const { t } = useTranslation();

    const guides = [
        {
            title: t('guides.visas_guide_title'),
            description: t('guides.visas_guide_desc'),
            downloadLink: '/guides/guia-visados.pdf',
        },
        {
            title: t('guides.sl_vs_llc_usa_title'),
            description: t('guides.sl_vs_llc_usa_desc'),
            downloadLink: '/guides/guia-sl-vs-llc-usa.pdf',
        },
        {
            title: t('guides.beps_guide_title'),
            description: t('guides.beps_guide_desc'),
            downloadLink: '/guides/guia-beps.pdf',
        },
        {
            title: t('guides.tourism_license_title'),
            description: t('guides.tourism_license_desc'),
            downloadLink: '/guides/guia-licencias-turisticas.pdf',
        },
        {
            title: t('guides.germany_logistics_title'),
            description: t('guides.germany_logistics_desc'),
            downloadLink: '/guides/guia-logistica-alemania.pdf',
        },
    ];

    return (
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                        {t('guides.title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('guides.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                     {guides.map((guide, index) => (
                        <GuideCard
                            key={index}
                            title={guide.title}
                            description={guide.description}
                            downloadLink={guide.downloadLink}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DownloadableGuides;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Briefcase, Lightbulb, Network } from 'lucide-react';

const ServiceBarcelonaPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal para Empresas Tecnológicas y Startups en Barcelona";
    const pageDescription = "Navega el ecosistema innovador de Barcelona con ConsultGlobalLex. Fiscalidad internacional, estructuración, stock options, M&A y cumplimiento para startups y scaleups.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <Link to="/">
                        <Button variant="outline" className="group dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-800">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Volver al Inicio
                        </Button>
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
                >
                    {pageTitle}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10"
                >
                    {pageDescription}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                     className="prose prose-lg dark:prose-invert max-w-none"
                >
                     <p>Barcelona es un hub tecnológico y de innovación líder en Europa. En ConsultGlobalLex, entendemos las necesidades específicas de las startups, scaleups y empresas tecnológicas que operan en este dinámico entorno, conectándolas con el mercado global.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Briefcase className="h-6 w-6 mr-3 text-primary"/> Estructuración y Fiscalidad para Startups</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Creación de sociedades (S.L.) y optimización fiscal inicial.</li>
                        <li>Planificación fiscal internacional para modelos de negocio SaaS, e-commerce y plataformas.</li>
                        <li>Asesoramiento en rondas de financiación (Seed, Serie A/B) y pactos de socios.</li>
                         <li>Tratamiento fiscal de stock options y phantom shares para empleados y fundadores.</li>
                        <li>Aplicación de deducciones fiscales por I+D+i y Patent Box.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Lightbulb className="h-6 w-6 mr-3 text-primary"/> Cumplimiento y Expansión Global</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Gestión de IVA en servicios digitales transfronterizos (OSS).</li>
                         <li>Estructuración internacional (LLC USA, Holdings) para la expansión a nuevos mercados.</li>
                        <li>Cumplimiento normativo digital (DSA, DMA, GDPR).</li>
                         <li>Asesoramiento en precios de transferencia para operaciones intragrupo.</li>
                         <li>Fiscalidad de expatriados y trabajadores remotos internacionales basados en Barcelona.</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><Network className="h-6 w-6 mr-3 text-primary"/> Operaciones Estratégicas (M&A)</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Due diligence fiscal y legal en operaciones de compraventa de empresas tecnológicas.</li>
                        <li>Optimización fiscal de la estructura de la transacción (compra de activos vs. acciones).</li>
                         <li>Integración post-adquisición y planificación fiscal del nuevo grupo.</li>
                    </ul>

                     <p className="mt-8">Apoyamos tu crecimiento en Barcelona y tu salto al escenario global con soluciones fiscales y legales innovadoras y eficientes.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Impulsa tu Startup desde Barcelona
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceBarcelonaPage;
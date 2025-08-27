import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, UserCheck, Coins as HandCoins } from 'lucide-react';

const ServiceRomaPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal para Inversiones y Negocios en Roma e Italia";
    const pageDescription = "Navega la fiscalidad italiana con ConsultGlobalLex. Expertos en S.r.l., régimen 'impatriati', convenios de doble imposición y cumplimiento para operar desde Roma al mundo.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>Italia, con Roma como su centro histórico y administrativo, ofrece oportunidades de negocio significativas dentro de la UE. ConsultGlobalLex te guía a través de la normativa fiscal y legal italiana para optimizar tus operaciones internacionales.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Building2 className="h-6 w-6 mr-3 text-primary"/> Creación y Gestión de Empresas en Italia</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento en la constitución de sociedades italianas (S.r.l., S.p.A.) y establecimientos permanentes.</li>
                        <li>Planificación del Impuesto sobre Sociedades italiano (IRES) y el Impuesto Regional sobre Actividades Productivas (IRAP).</li>
                        <li>Gestión del IVA italiano (Imposta sul Valore Aggiunto) y cumplimiento OSS para ventas B2C en la UE.</li>
                        <li>Aplicación de convenios para evitar la doble imposición (España-Italia, USA-Italia, etc.).</li>
                        <li>Precios de transferencia y documentación relacionada según normativa italiana y OCDE.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><UserCheck className="h-6 w-6 mr-3 text-primary"/> Régimen Fiscal 'Impatriati' y Expatriados</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Análisis de elegibilidad y aplicación al régimen especial para 'lavoratori impatriati', con importantes exenciones en el IRPF (IRPEF).</li>
                        <li>Planificación fiscal para expatriados y directivos trasladados a Roma u otras ciudades italianas.</li>
                        <li>Asesoramiento para nómadas digitales y profesionales autónomos (Partita IVA) con actividad internacional.</li>
                         <li>Coordinación de seguridad social (INPS) y aplicación de acuerdos bilaterales.</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><HandCoins className="h-6 w-6 mr-3 text-primary"/> Inversiones y Planificación Patrimonial</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento fiscal en inversiones inmobiliarias en Italia.</li>
                        <li>Optimización del impuesto sobre sucesiones y donaciones en contextos internacionales.</li>
                         <li>Declaración de activos en el extranjero (Monitoraggio Fiscale - Quadro RW).</li>
                    </ul>

                     <p className="mt-8">Conecta tu negocio con Italia de forma eficiente y segura. Te ofrecemos la experiencia fiscal y legal necesaria para prosperar en Roma y más allá.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Consulta tus Opciones en Italia
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceRomaPage;
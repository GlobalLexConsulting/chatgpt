import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Landmark, Briefcase, Coins as HandCoins } from 'lucide-react';

const ServiceParisPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal para Negocios Internacionales en París";
    const pageDescription = "Expande tu negocio a Francia desde París. Expertos en fiscalidad francesa (SAS, SARL, IS, TVA), convenios, expatriados y cumplimiento UE.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>París, como centro financiero y cultural de Francia, es una puerta de entrada estratégica al mercado europeo. ConsultGlobalLex te asesora para navegar la fiscalidad y regulación francesa.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Landmark className="h-6 w-6 mr-3 text-primary"/> Fiscalidad Corporativa en Francia</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Constitución de sociedades: SAS (Société par Actions Simplifiée), SARL (Société à Responsabilité Limitée).</li>
                        <li>Optimización del Impuesto sobre Sociedades (Impôt sur les Sociétés - IS).</li>
                        <li>Gestión del IVA francés (Taxe sur la Valeur Ajoutée - TVA) y operaciones intracomunitarias.</li>
                        <li>Aplicación del convenio de doble imposición Francia-España, Francia-USA, etc.</li>
                        <li>Crédito fiscal por investigación (Crédit d'Impôt Recherche - CIR).</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Briefcase className="h-6 w-6 mr-3 text-primary"/> Expatriados y Profesionales</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Régimen fiscal para impatriados ('prime d'impatriation') y planificación del IRPF francés (Impôt sur le Revenu).</li>
                         <li>Asesoramiento para autónomos ('auto-entrepreneur' / 'micro-entrepreneur').</li>
                         <li>Coordinación de seguridad social y cotizaciones sociales.</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><HandCoins className="h-6 w-6 mr-3 text-primary"/> Inversión y Cumplimiento</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Fiscalidad de inversiones inmobiliarias ('Impôt sur la Fortune Immobilière' - IFI).</li>
                         <li>Planificación sucesoria internacional.</li>
                         <li>Cumplimiento de normativas UE (DAC6, DAC7, Pillar Two) en Francia.</li>
                    </ul>

                     <p className="mt-8">Asegura una entrada fluida y optimizada al mercado francés con nuestro apoyo experto.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Estrategia para Francia y París
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceParisPage;
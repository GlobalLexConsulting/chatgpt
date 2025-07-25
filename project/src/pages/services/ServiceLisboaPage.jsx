import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sun, Users, Anchor } from 'lucide-react';

const ServiceLisboaPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal en Lisboa y Portugal";
    const pageDescription = "Optimiza tu negocio o residencia en Portugal. Expertos en NHR (transitorio), fiscalidad corporativa (IRC), visados y cumplimiento para operar desde Lisboa.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>Lisboa y Portugal ofrecen un entorno atractivo para nómadas digitales, inversores y empresas. ConsultGlobalLex te ayuda a entender y aprovechar el marco fiscal y legal portugués.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Sun className="h-6 w-6 mr-3 text-primary"/> Fiscalidad para Residentes y Nómadas Digitales</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Análisis del régimen transitorio NHR para quienes cumplían condiciones en 2023.</li>
                        <li>Nuevo régimen de incentivos fiscales a la investigación científica e innovación (IFICI).</li>
                        <li>Tributación general IRPF (IRS) para residentes y planificación.</li>
                        <li>Visado para Nómadas Digitales (D8) y requisitos de residencia.</li>
                         <li>Fiscalidad de criptomonedas en Portugal: ganancias de capital y rendimientos.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Anchor className="h-6 w-6 mr-3 text-primary"/> Establecimiento de Empresas (LDA, SA)</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Constitución de sociedades (LDA - Limitada, SA - Sociedade Anónima).</li>
                        <li>Impuesto sobre Sociedades (IRC) y posibles incentivos fiscales.</li>
                         <li>Gestión del IVA (Imposto sobre o Valor Acrescentado) y operaciones intracomunitarias.</li>
                        <li>Convenios de doble imposición entre Portugal y otros países.</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><Users className="h-6 w-6 mr-3 text-primary"/> Inversión y Cumplimiento</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento fiscal para inversiones inmobiliarias.</li>
                         <li>Golden Visa Portuguesa: requisitos y beneficios.</li>
                         <li>Cumplimiento normativo local y europeo.</li>
                    </ul>

                     <p className="mt-8">Te ofrecemos claridad y estrategia para tus intereses en Lisboa y todo Portugal.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Consulta tu Caso en Portugal
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceLisboaPage;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, Landmark, Globe } from 'lucide-react';

const ServiceMadridPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal Internacional en Madrid";
    const pageDescription = "Optimizamos tu estructura fiscal y legal para operar desde Madrid al mundo. Expertos en fiscalidad internacional, LLC, BEPS y más para empresas y autónomos en Madrid.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                    <p>Madrid, como centro neurálgico de negocios en España y puerta a Europa y Latinoamérica, exige una planificación fiscal y legal sofisticada. En ConsultGlobalLex, ofrecemos soluciones a medida para empresas y particulares con intereses internacionales que operan desde o hacia Madrid.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Building className="h-6 w-6 mr-3 text-primary"/> Servicios para Empresas en Madrid</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Optimización del Impuesto sobre Sociedades y retenciones internacionales.</li>
                        <li>Estructuración de holdings y filiales (España-USA, España-LATAM, España-UE).</li>
                        <li>Asesoramiento en Precios de Transferencia y cumplimiento BEPS.</li>
                        <li>Planificación de IVA intracomunitario y gestión de aduanas.</li>
                        <li>Due Diligence fiscal y legal para inversiones y M&A en Madrid.</li>
                        <li>Constitución de S.L. y sucursales en Madrid para entidades extranjeras.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Landmark className="h-6 w-6 mr-3 text-primary"/> Servicios para Particulares y Autónomos</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Aplicación de la Ley Beckham para impatriados y planificación IRPF.</li>
                        <li>Asesoramiento fiscal para nómadas digitales y trabajadores remotos en Madrid.</li>
                        <li>Optimización fiscal para autónomos con clientes internacionales (IVA, IRPF).</li>
                        <li>Planificación patrimonial y sucesoria internacional.</li>
                        <li>Declaración de bienes en el extranjero (Modelo 720).</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><Globe className="h-6 w-6 mr-3 text-primary"/> ¿Por Qué Elegirnos en Madrid?</h2>
                     <p>Nuestro profundo conocimiento de la normativa fiscal española y los convenios de doble imposición, combinado con nuestra experiencia global, nos permite ofrecer estrategias efectivas para minimizar tu carga fiscal y asegurar el cumplimiento normativo en todas tus operaciones vinculadas a Madrid.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Contacta con un Experto para Madrid
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceMadridPage;
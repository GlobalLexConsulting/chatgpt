import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Euro, Layers, Users } from 'lucide-react';

const ServiceBerlinPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal para Negocios Internacionales en Berlín";
    const pageDescription = "Establece y expande tu negocio en Alemania desde Berlín. Expertos en fiscalidad alemana (GmbH, UG), convenios de doble imposición, expatriados y cumplimiento UE.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>Berlín, capital de la mayor economía europea, es un centro clave para negocios internacionales. ConsultGlobalLex te ofrece la experiencia necesaria para navegar la fiscalidad alemana y europea, optimizando tu estructura y asegurando el cumplimiento.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Euro className="h-6 w-6 mr-3 text-primary"/> Fiscalidad Corporativa en Alemania</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento en la elección y constitución de la entidad legal adecuada (GmbH, UG, AG, sucursal).</li>
                        <li>Optimización del Impuesto sobre Sociedades (Körperschaftsteuer) y el Impuesto Comercial (Gewerbesteuer).</li>
                        <li>Gestión del IVA alemán (Umsatzsteuer) y operaciones intracomunitarias (VIES, OSS).</li>
                        <li>Aplicación de convenios de doble imposición para evitar la doble tributación con España, USA y otros países.</li>
                        <li>Precios de transferencia y cumplimiento de la normativa BEPS en Alemania.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Layers className="h-6 w-6 mr-3 text-primary"/> Estructuración y Operaciones Internacionales</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Diseño de estructuras holding internacionales que involucren entidades alemanas.</li>
                        <li>Asesoramiento en M&A y reestructuraciones transfronterizas con impacto en Alemania.</li>
                        <li>Planificación fiscal para la repatriación de beneficios (dividendos, intereses, royalties).</li>
                        <li>Cumplimiento de normativa europea (DAC6, DAC7, Pillar Two) desde la perspectiva alemana.</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><Users className="h-6 w-6 mr-3 text-primary"/> Expatriados y Profesionales en Berlín</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Planificación del IRPF alemán (Einkommensteuer) para empleados y directivos expatriados.</li>
                        <li>Asesoramiento fiscal para autónomos (Freiberufler) y freelancers internacionales.</li>
                         <li>Coordinación de seguridad social y aplicación de acuerdos bilaterales.</li>
                    </ul>

                     <p className="mt-8">Facilitamos tu entrada y consolidación en el mercado alemán, asegurando una gestión fiscal y legal eficiente y optimizada para tus objetivos globales.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Planifica tu Estrategia en Berlín
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceBerlinPage;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Anchor, Percent } from 'lucide-react';

const ServiceCanariasPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Fiscalidad y Ventajas Legales en Canarias (ZEC, IGIC)";
    const pageDescription = "Aprovecha el régimen fiscal único de Canarias. Expertos en ZEC, RIC, IGIC, y fiscalidad internacional para empresas y autónomos establecidos en las Islas Canarias.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                    <p>Canarias ofrece un marco fiscal excepcional dentro de la Unión Europea, ideal para empresas con vocación internacional. En ConsultGlobalLex, somos especialistas en maximizar las ventajas del Régimen Económico y Fiscal (REF) de Canarias.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Zap className="h-6 w-6 mr-3 text-primary"/> Zona Especial Canaria (ZEC)</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento integral para la constitución y operativa de entidades ZEC.</li>
                        <li>Tipo impositivo reducido del 4% en el Impuesto sobre Sociedades.</li>
                        <li>Exenciones en el Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados (ITP y AJD).</li>
                        <li>Exención de retención en la distribución de dividendos a matrices en la UE y países con CDI.</li>
                        <li>Requisitos de inversión mínima y creación de empleo.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Anchor className="h-6 w-6 mr-3 text-primary"/> Reserva para Inversiones en Canarias (RIC)</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Reducción de hasta el 90% de la base imponible del Impuesto sobre Sociedades por beneficios no distribuidos que se destinen a la RIC.</li>
                        <li>Planificación de la materialización de la RIC en activos fijos, creación de empleo, I+D+i, etc.</li>
                        <li>Compatibilidad con la ZEC y otros incentivos fiscales.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Percent className="h-6 w-6 mr-3 text-primary"/> IGIC y otras Ventajas Fiscales</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Gestión del Impuesto General Indirecto Canario (IGIC) con tipos más bajos que el IVA peninsular (tipo general del 7%).</li>
                        <li>Deducciones por inversiones en activos fijos y por I+D+i.</li>
                        <li>Bonificaciones en las cuotas a la Seguridad Social por contratación.</li>
                         <li>Asesoramiento para autónomos y profesionales que operan desde Canarias.</li>
                    </ul>

                     <p className="mt-8">Combinamos nuestro conocimiento del REF canario con nuestra experiencia en fiscalidad internacional (LLC USA, holdings, tratados) para ofrecerte la estructura más eficiente para tus operaciones globales desde las Islas.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Consulta sobre Ventajas Fiscales en Canarias
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCanariasPage;
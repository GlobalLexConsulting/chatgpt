import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sun, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';

const ServiceAndaluciaPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal para Inversiones y Negocios en Andalucía";
    const pageDescription = "Impulsa tu negocio en Andalucía con nuestra asesoría experta. Fiscalidad internacional, estructuración, incentivos regionales y cumplimiento para empresas y autónomos.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                    <p>Andalucía se posiciona como un destino atractivo para la inversión y el desarrollo empresarial, con un ecosistema en crecimiento y calidad de vida. En ConsultGlobalLex, te ayudamos a navegar el panorama fiscal y legal andaluz, conectándolo con tus intereses internacionales.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Sun className="h-6 w-6 mr-3 text-primary"/> Fiscalidad y Ventajas en Andalucía</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Optimización del Impuesto sobre Sociedades y planificación fiscal para empresas en Andalucía.</li>
                        <li>Asesoramiento sobre la práctica eliminación del Impuesto sobre el Patrimonio y bonificaciones en el Impuesto sobre Sucesiones y Donaciones.</li>
                        <li>Gestión de IVA e impuestos locales específicos de la región.</li>
                        <li>Planificación fiscal para residentes extranjeros y aplicación de convenios de doble imposición.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Handshake className="h-6 w-6 mr-3 text-primary"/> Apoyo a la Inversión y Creación de Empresas</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento en la constitución de sociedades (S.L., S.A.) y establecimientos permanentes en Andalucía.</li>
                        <li>Identificación y solicitud de incentivos y subvenciones regionales y nacionales para la inversión y creación de empleo.</li>
                        <li>Asesoramiento legal en operaciones inmobiliarias y M&A en la región.</li>
                        <li>Cumplimiento normativo específico para sectores clave en Andalucía (turismo, agroindustria, tecnología).</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><TrendingUp className="h-6 w-6 mr-3 text-primary"/> Autónomos y Profesionales Internacionales</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Planificación IRPF y optimización de deducciones para autónomos.</li>
                        <li>Asesoramiento sobre IVA intracomunitario y facturación internacional desde Andalucía.</li>
                         <li>Consultoría para nómadas digitales que eligen Andalucía como base de operaciones.</li>
                    </ul>

                     <p className="mt-8">Combinamos nuestra experiencia global con un conocimiento detallado del entorno andaluz para ofrecerte soluciones integrales que impulsen tu éxito en la región y más allá.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Consulta tu Proyecto en Andalucía
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAndaluciaPage;
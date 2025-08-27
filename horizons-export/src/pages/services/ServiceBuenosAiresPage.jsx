import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Landmark, Scale, AlertCircle } from 'lucide-react';

const ServiceBuenosAiresPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal en Buenos Aires y Argentina";
    const pageDescription = "Navega el complejo entorno fiscal y regulatorio argentino desde Buenos Aires. Expertos en Impuesto a las Ganancias, IVA, Ingresos Brutos y planificación.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>Operar en Argentina presenta desafíos únicos debido a su volatilidad económica y complejidad regulatoria. ConsultGlobalLex te ofrece la experiencia necesaria para establecer y gestionar tu negocio en Buenos Aires.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Landmark className="h-6 w-6 mr-3 text-primary"/> Fiscalidad Corporativa Argentina</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Constitución de sociedades (S.A., S.R.L.) y registro ante IGJ/Registros Provinciales.</li>
                        <li>Planificación del Impuesto a las Ganancias corporativo.</li>
                        <li>Gestión del IVA y regímenes de percepción/retención.</li>
                        <li>Impuesto sobre los Ingresos Brutos (Convenio Multilateral).</li>
                        <li>Impuesto sobre los Bienes Personales - Acciones y Participaciones.</li>
                        <li>Aplicación de convenios para evitar la doble imposición.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Scale className="h-6 w-6 mr-3 text-primary"/> Cumplimiento Regulatorio y Cambiario</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Navegación del régimen de control de cambios (acceso al MULC).</li>
                         <li>Regulaciones laborales y de seguridad social.</li>
                         <li>Normativa sobre precios de transferencia.</li>
                         <li>Cumplimiento de regímenes de información (AFIP, BCRA).</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><AlertCircle className="h-6 w-6 mr-3 text-primary"/> Estrategias en Entornos Volátiles</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Planificación fiscal en contextos inflacionarios (ajuste por inflación impositivo).</li>
                        <li>Estructuración de inversiones y desinversiones.</li>
                         <li>Asesoramiento para expatriados y personal directivo.</li>
                    </ul>

                     <p className="mt-8">Convierte los desafíos argentinos en oportunidades con nuestra asesoría estratégica.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Consultar para Argentina
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceBuenosAiresPage;
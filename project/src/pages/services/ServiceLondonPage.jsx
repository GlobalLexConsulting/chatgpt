import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, School as University, Briefcase, Ship } from 'lucide-react';

const ServiceLondonPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal Post-Brexit para Negocios en Londres y UK";
    const pageDescription = "Navega el entorno post-Brexit desde Londres. Expertos en fiscalidad UK (Ltd, LLP, Corp. Tax, VAT), aduanas, visados y cumplimiento para empresas internacionales.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-blue-100 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>Londres sigue siendo un centro financiero global clave, pero operar en el Reino Unido post-Brexit requiere una nueva planificación. ConsultGlobalLex te ayuda a adaptarte.</p>

                    <h2 className="flex items-center mt-10 mb-4"><University className="h-6 w-6 mr-3 text-primary"/> Fiscalidad Corporativa en UK</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Constitución de entidades: Limited Company (Ltd), Limited Liability Partnership (LLP).</li>
                        <li>Planificación del Impuesto de Sociedades (Corporation Tax).</li>
                        <li>Gestión del IVA (VAT) post-Brexit: registro, declaraciones, reglas de importación/exportación con la UE.</li>
                         <li>Aplicación de convenios de doble imposición (UK-España, UK-USA, etc.).</li>
                        <li>Establecimiento permanente y precios de transferencia en UK.</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Ship className="h-6 w-6 mr-3 text-primary"/> Aduanas y Comercio Post-Brexit</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Nuevos procedimientos aduaneros para el comercio entre UK y UE.</li>
                        <li>Clasificación arancelaria, origen de las mercancías y aplicación del Acuerdo Comercial.</li>
                         <li>Número EORI y representación aduanera.</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><Briefcase className="h-6 w-6 mr-3 text-primary"/> Visados y Movilidad</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Asesoramiento sobre el nuevo sistema de inmigración basado en puntos (Skilled Worker visa, etc.).</li>
                        <li>Fiscalidad para expatriados y empleados desplazados a Londres/UK (Income Tax, National Insurance).</li>
                         <li>Residencia fiscal y régimen 'non-domiciled' (si aplica).</li>
                    </ul>

                     <p className="mt-8">Navega con éxito el nuevo panorama británico con nuestra guía experta.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Asesoría para Londres y UK
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceLondonPage;
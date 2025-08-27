import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, Banknote, MapPin } from 'lucide-react';

const ServiceMexicoCityPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const pageTitle = "Asesoría Fiscal y Legal para Negocios en Ciudad de México y LATAM";
    const pageDescription = "Expande tu negocio a México y LATAM desde CDMX. Expertos en fiscalidad mexicana (ISR, IVA), tratados, maquiladoras y cumplimiento para empresas internacionales.";

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-teal-50 to-white dark:from-gray-900 dark:to-background text-gray-800 dark:text-gray-200">
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
                     <p>Ciudad de México es el corazón económico de México y un hub clave para Latinoamérica. ConsultGlobalLex te guía en el complejo entorno fiscal y legal mexicano.</p>

                    <h2 className="flex items-center mt-10 mb-4"><Building className="h-6 w-6 mr-3 text-primary"/> Establecimiento y Fiscalidad Corporativa</h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Constitución de sociedades mexicanas (S.A. de C.V., S. de R.L. de C.V.) y sucursales.</li>
                        <li>Planificación del Impuesto Sobre la Renta (ISR) corporativo.</li>
                        <li>Gestión del Impuesto al Valor Agregado (IVA) y retenciones.</li>
                        <li>Aplicación del tratado de doble imposición México-España, México-USA, etc.</li>
                        <li>Régimen fiscal de maquiladoras (IMMEX).</li>
                        <li>Cumplimiento de facturación electrónica (CFDI).</li>
                    </ul>

                    <h2 className="flex items-center mt-10 mb-4"><Banknote className="h-6 w-6 mr-3 text-primary"/> Precios de Transferencia y Operaciones Vinculadas</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Estudios de precios de transferencia conforme a la normativa mexicana y OCDE.</li>
                         <li>Declaraciones informativas de operaciones con partes relacionadas.</li>
                         <li>Estrategias para operaciones intercompañía (servicios, royalties, financiación).</li>
                    </ul>

                     <h2 className="flex items-center mt-10 mb-4"><MapPin className="h-6 w-6 mr-3 text-primary"/> Expansión y Cumplimiento en LATAM</h2>
                     <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
                        <li>Coordinación fiscal y legal para operaciones multi-jurisdiccionales en Latinoamérica.</li>
                        <li>Asesoramiento sobre regulaciones específicas por país (Colombia, Chile, Perú, etc.).</li>
                         <li>Fiscalidad para expatriados y personal desplazado en la región.</li>
                    </ul>

                     <p className="mt-8">Desbloquea el potencial de México y LATAM con nuestra asesoría integral.</p>

                     <div className="mt-12 text-center">
                        <Link to="/#contacto">
                            <Button size="lg" className="btn-persuasive">
                                Consulta para México y LATAM
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceMexicoCityPage;
import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const DeloittePillarPage = () => {
    const pageTitle = "Alternativa a Deloitte: ConsultGlobalLex | Consultoría Boutique";
    const pageDescription = "Compara ConsultGlobalLex con Deloitte. Descubre por qué nuestra consultoría boutique es la opción ideal para pymes y nómadas digitales que buscan asesoría fiscal internacional y legal personalizada.";
    const breadcrumbItems = [
        { label: "Comparativas", path: "/comparativas" },
        { label: "vs Deloitte", path: "/comparativas/deloitte" }
    ];

    const serviceComparison = [
        { service: 'Asesoría Fiscal Internacional', CGL: 'Estrategias a medida para pymes y nómadas', Competitor: 'Enfocado en grandes corporaciones', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Constitución LLC (USA)', CGL: 'Proceso ágil y 100% remoto, optimizado', Competitor: 'No es su servicio principal, más costoso', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Atención y Agilidad', CGL: 'Trato directo con socio-consultor', Competitor: 'Múltiples capas de gestión', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Coste-Efectividad', CGL: 'Tarifas competitivas y transparentes', Competitor: 'Estructura de precios para grandes empresas', CGLIcon: <CheckCircle className="text-green-500" /> },
    ];

    const clusterLinks = [
        { title: 'Fiscalidad Internacional vs. Deloitte', path: '/comparativas/deloitte/fiscalidad-internacional' },
        { title: 'Creación de LLC: ConsultGlobalLex vs. Deloitte', path: '/comparativas/deloitte/constitucion-llc' },
        { title: 'Visado Nómada Digital: Análisis Comparativo', path: '/comparativas/deloitte/visado-nomada-digital' },
        { title: 'Consultoría Legal: Nuestra Ventaja', path: '/comparativas/deloitte/consultoria-legal' },
        { title: 'Logística en Alemania: Nuestro Enfoque vs. Deloitte', path: '/comparativas/deloitte/logistica-alemania' },
    ];

    return (
        <SEOPage title={pageTitle} description={pageDescription}>
            <div className="bg-gray-50 dark:bg-background">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <Breadcrumbs items={breadcrumbItems} />
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                            ConsultGlobalLex: La Alternativa Boutique a Deloitte
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Deloitte es un gigante global, pero su escala a menudo no es la adecuada para las necesidades específicas de pymes, startups y profesionales independientes. Descubre nuestra propuesta de valor.
                        </p>
                    </header>

                    <section id="comparison-table" className="mb-16">
                         <h2 className="text-3xl font-bold text-center mb-8">Tabla Comparativa de Servicios Clave</h2>
                         <div className="overflow-x-auto">
                            <table className="w-full min-w-max text-left bg-white dark:bg-card rounded-lg shadow-md">
                                <thead>
                                    <tr className="border-b dark:border-gray-700">
                                        <th className="p-4 font-semibold">Servicio</th>
                                        <th className="p-4 font-semibold text-primary">ConsultGlobalLex</th>
                                        <th className="p-4 font-semibold text-gray-500">Deloitte (General)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceComparison.map((item, index) => (
                                        <tr key={index} className="border-b dark:border-gray-700 last:border-b-0">
                                            <td className="p-4 font-medium">{item.service}</td>
                                            <td className="p-4 flex items-center gap-2 text-green-700 dark:text-green-400">{item.CGLIcon} {item.CGL}</td>
                                            <td className="p-4 text-gray-600 dark:text-gray-400">{item.Competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="cluster-content" className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Explora Nuestras Ventajas en Profundidad</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {clusterLinks.map((link, index) => (
                                <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{link.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Link to={link.path} className="text-primary font-semibold flex items-center">
                                            Leer análisis detallado <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section id="cta" className="text-center bg-primary/10 dark:bg-primary/20 p-8 rounded-lg">
                        <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
                        <h2 className="text-3xl font-bold mb-4">¿Listo para una Asesoría Personalizada y Eficiente?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Obtén la atención y la experiencia que tu negocio merece, sin los costes y la burocracia de una Big Four.
                        </p>
                        <Button asChild size="lg" className="btn-persuasive">
                            <Link to="/#contacto">Contacta con un Especialista</Link>
                        </Button>
                    </section>
                </div>
            </div>
        </SEOPage>
    );
};

export default DeloittePillarPage;
import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const MartinLechadoPillarPage = () => {
    const pageTitle = "Alternativa a Martín Lechado: ConsultGlobalLex | Asesoría Global";
    const pageDescription = "Compara ConsultGlobalLex con Martín Lechado. Mientras ellos se enfocan en la asesoría digital para autónomos en España, nosotros ofrecemos una solución integral que incluye estructuras internacionales como LLCs y soporte global.";
    const breadcrumbItems = [
        { label: "Comparativas", path: "/comparativas" },
        { label: "vs Martín Lechado", path: "/comparativas/martin-lechado" }
    ];

    const serviceComparison = [
        { service: 'Enfoque Geográfico', CGL: 'Global (España, USA, Alemania, etc.)', Competitor: 'Principalmente España', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Estructuras Societarias', CGL: 'SL, LLC, Holdings Internacionales', Competitor: 'Fuerte en Autónomos y SL', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Servicios Adicionales', CGL: 'Logística en Alemania, seguros globales', Competitor: 'Centrado en asesoría fiscal y contable', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Perfil de Cliente Ideal', CGL: 'Nómadas digitales, expatriados, pymes con visión global', Competitor: 'Autónomos y pymes digitales en España', CGLIcon: <CheckCircle className="text-green-500" /> },
    ];
    
    const clusterLinks = [
        { title: 'Gestión de Licencias Turísticas: Nuestro Enfoque', path: '/comparativas/martin-lechado/licencias-turisticas' },
        { title: 'Fiscalidad para Autónomos: España vs. Global', path: '/comparativas/martin-lechado/fiscalidad-autonomos' },
        { title: 'Constitución de SL: Proceso y Asesoramiento', path: '/comparativas/martin-lechado/constitucion-sl' },
        { title: 'Contabilidad Digital: Herramientas y Estrategia', path: '/comparativas/martin-lechado/contabilidad-digital' },
        { title: 'Asesoría Digital vs. Consultoría Global', path: '/comparativas/martin-lechado/asesoria-digital-vs-tradicional' },
    ];

    return (
        <SEOPage title={pageTitle} description={pageDescription}>
            <div className="bg-gray-50 dark:bg-background">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <Breadcrumbs items={breadcrumbItems} />
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                            ConsultGlobalLex: La Evolución de la Asesoría Digital vs. Martín Lechado
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                           Martín Lechado ha modernizado la asesoría para autónomos en España. Nosotros llevamos esa modernización al siguiente nivel: el escenario global, con estructuras y servicios que trascienden fronteras.
                        </p>
                    </header>
                    
                    <section id="comparison-table" className="mb-16">
                         <h2 className="text-3xl font-bold text-center mb-8">Tabla Comparativa de Enfoques</h2>
                         <div className="overflow-x-auto">
                            <table className="w-full min-w-max text-left bg-white dark:bg-card rounded-lg shadow-md">
                                <thead>
                                    <tr className="border-b dark:border-gray-700">
                                        <th className="p-4 font-semibold">Característica</th>
                                        <th className="p-4 font-semibold text-primary">ConsultGlobalLex</th>
                                        <th className="p-4 font-semibold text-gray-500">Martín Lechado (General)</th>
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
                        <h2 className="text-3xl font-bold text-center mb-8">Análisis Detallado de Servicios</h2>
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
                        <h2 className="text-3xl font-bold mb-4">¿Tu Negocio Piensa en Global? Tu Asesoría También Debería.</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Si tus clientes, operaciones o ambiciones van más allá de España, necesitas un socio que entienda de LLCs, convenios de doble imposición y logística internacional.
                        </p>
                        <Button asChild size="lg" className="btn-persuasive">
                            <Link to="/#contacto">Solicita una Consulta Global</Link>
                        </Button>
                    </section>
                </div>
            </div>
        </SEOPage>
    );
};

export default MartinLechadoPillarPage;
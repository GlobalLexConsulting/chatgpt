import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const OlympiaAbogadosPillarPage = () => {
    const pageTitle = "Alternativa a Olympia Abogados: ConsultGlobalLex | Derecho y Fiscalidad";
    const pageDescription = "Compara ConsultGlobalLex con Olympia Abogados. Mientras ellos son un despacho de abogados tradicional fuerte en áreas como inmobiliario y herencias, nosotros integramos el derecho con una profunda especialización fiscal internacional.";
    const breadcrumbItems = [
        { label: "Comparativas", path: "/comparativas" },
        { label: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" }
    ];

    const serviceComparison = [
        { service: 'Core del Servicio', CGL: 'Consultoría fiscal y legal integrada', Competitor: 'Servicios legales tradicionales', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Perfil de Cliente', CGL: 'Empresas digitales, nómadas, expatriados', Competitor: 'Particulares y empresas locales', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Enfoque Fiscal', CGL: 'Optimización internacional, LLCs, BEPS', Competitor: 'Fiscalidad asociada a operaciones locales', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Alcance Geográfico', CGL: 'Global, con especialistas en USA, UE', Competitor: 'Fuerte enfoque en el derecho español', CGLIcon: <CheckCircle className="text-green-500" /> },
    ];
    
    const clusterLinks = [
        { title: 'Derecho Inmobiliario y Fiscalidad Asociada', path: '/comparativas/olympia-abogados/derecho-inmobiliario' },
        { title: 'Herencias y Sucesiones Internacionales', path: '/comparativas/olympia-abogados/herencias-y-sucesiones' },
        { title: 'Derecho Mercantil para Empresas Globales', path: '/comparativas/olympia-abogados/derecho-mercantil' },
        { title: 'Extranjería para Inversores vs. Nómadas Digitales', path: '/comparativas/olympia-abogados/extranjeria-e-inversion' },
        { title: 'Derecho Bancario en un Contexto Digital', path: '/comparativas/olympia-abogados/derecho-bancario' },
    ];

    return (
        <SEOPage title={pageTitle} description={pageDescription}>
            <div className="bg-gray-50 dark:bg-background">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <Breadcrumbs items={breadcrumbItems} />
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                            ConsultGlobalLex: La Fusión de lo Legal y Fiscal vs. Olympia Abogados
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                           Olympia Abogados ofrece una excelente y sólida práctica legal en España. Nosotros construimos sobre esa base, integrando una capa de especialización fiscal internacional indispensable para el cliente global de hoy.
                        </p>
                    </header>
                    
                    <section id="comparison-table" className="mb-16">
                         <h2 className="text-3xl font-bold text-center mb-8">Tabla Comparativa de Modelos</h2>
                         <div className="overflow-x-auto">
                            <table className="w-full min-w-max text-left bg-white dark:bg-card rounded-lg shadow-md">
                                <thead>
                                    <tr className="border-b dark:border-gray-700">
                                        <th className="p-4 font-semibold">Aspecto</th>
                                        <th className="p-4 font-semibold text-primary">ConsultGlobalLex</th>
                                        <th className="p-4 font-semibold text-gray-500">Olympia Abogados (General)</th>
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
                        <h2 className="text-3xl font-bold text-center mb-8">Análisis Comparativo por Áreas de Práctica</h2>
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
                        <h2 className="text-3xl font-bold mb-4">¿Necesitas un Abogado que También sea un Estratega Fiscal?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Cada decisión legal tiene una implicación fiscal. Nuestro modelo integrado asegura que ambas se consideren simultáneamente para obtener el mejor resultado global.
                        </p>
                        <Button asChild size="lg" className="btn-persuasive">
                            <Link to="/#contacto">Obtén una Visión 360°</Link>
                        </Button>
                    </section>
                </div>
            </div>
        </SEOPage>
    );
};

export default OlympiaAbogadosPillarPage;
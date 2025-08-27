import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CeConsultingPillarPage = () => {
    const pageTitle = "Alternativa a CE Consulting: ConsultGlobalLex | Asesoría Global";
    const pageDescription = "Descubre por qué ConsultGlobalLex es la alternativa ágil y especializada a CE Consulting para nómadas digitales, expatriados y pymes con enfoque internacional. Compara servicios, precios y agilidad.";
    const breadcrumbItems = [
        { label: "Comparativas", path: "/comparativas" },
        { label: "vs CE Consulting", path: "/comparativas/ce-consulting" }
    ];

    const serviceComparison = [
        { service: 'Constitución LLC (USA)', CGL: 'Especializado, rápido y 100% remoto', Competitor: 'Servicio generalista, procesos más lentos', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Visado Nómada Digital', CGL: 'Enfoque personalizado y estratégico', Competitor: 'Gestión estándar, menos adaptado a casos complejos', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Asesoría Fiscal Internacional', CGL: 'Estrategias a medida (BEPS, convenios)', Competitor: 'Consultoría fiscal más tradicional', CGLIcon: <CheckCircle className="text-green-500" /> },
        { service: 'Atención al Cliente', CGL: 'Directa con socio-consultor', Competitor: 'Canales más burocráticos y segmentados', CGLIcon: <CheckCircle className="text-green-500" /> },
    ];
    
    const clusterLinks = [
        { title: 'Fiscalidad Internacional vs. CE Consulting', path: '/comparativas/ce-consulting/fiscalidad-internacional' },
        { title: 'Creación de LLC: ConsultGlobalLex vs. CE Consulting', path: '/comparativas/ce-consulting/constitucion-llc' },
        { title: 'Visado Nómada Digital: Análisis Comparativo', path: '/comparativas/ce-consulting/visado-nomada-digital' },
        { title: 'Consultoría Legal: Nuestra Ventaja', path: '/comparativas/ce-consulting/consultoria-legal' },
        { title: 'Logística en Alemania: Nuestro Enfoque vs. CE Consulting', path: '/comparativas/ce-consulting/logistica-alemania' },
    ];

    return (
        <SEOPage title={pageTitle} description={pageDescription}>
            <div className="bg-gray-50 dark:bg-background">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <Breadcrumbs items={breadcrumbItems} />
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                            ConsultGlobalLex: La Alternativa Especializada a CE Consulting
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            CE Consulting ofrece una amplia gama de servicios, pero nuestra especialización en el ámbito internacional nos permite ofrecer soluciones más ágiles, personalizadas y rentables para el mundo digital.
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
                                        <th className="p-4 font-semibold text-gray-500">CE Consulting (General)</th>
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
                        <h2 className="text-3xl font-bold mb-4">¿Buscas una Solución Más Ágil y Personalizada?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                            Deja atrás las soluciones genéricas. En ConsultGlobalLex, cada cliente es una prioridad. Habla directamente con un experto que entiende tus necesidades globales.
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

export default CeConsultingPillarPage;
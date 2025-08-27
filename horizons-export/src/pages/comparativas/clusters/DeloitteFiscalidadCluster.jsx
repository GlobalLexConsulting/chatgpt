import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const DeloitteFiscalidadCluster = () => {
  const pageTitle = "Fiscalidad Internacional: ConsultGlobalLex vs. Deloitte";
  const pageDescription = "Descubre las diferencias clave en asesoría fiscal internacional. Mientras Deloitte se centra en multinacionales, ofrecemos estrategias a medida para PYMEs y nómadas digitales.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Deloitte", path: "/comparativas/deloitte" },
    { label: "Fiscalidad Internacional", path: "/comparativas/deloitte/fiscalidad-internacional" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Comparativa de Asesoría Fiscal Internacional: ConsultGlobalLex vs. Deloitte</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Deloitte es un líder para grandes corporaciones. Nosotros somos líderes para la nueva economía: ágil, digital y global.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Por qué Nuestro Enfoque es Mejor para Ti</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estrategias de Optimización Accesibles:</strong> Adaptamos complejas estrategias de precios de transferencia y BEPS 2.0 a la escala de una PYME o un profesional independiente.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Agilidad y Rapidez:</strong> No tienes que pasar por múltiples capas de burocracia. Hablas directamente con el experto, lo que permite tomar decisiones e implementar estrategias rápidamente.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Coste-Efectividad:</strong> Nuestras tarifas son transparentes y adaptadas a tu tamaño, sin los enormes 'overheads' de una Big Four.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Enfoque en el Individuo:</strong> Para nómadas digitales y expatriados, diseñamos planes fiscales personales que Deloitte rara vez aborda con este nivel de detalle.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Modelo de las 'Big Four'</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Enfoque en Grandes Clientes:</strong> Sus procesos y estructuras de precios están diseñados para empresas del IBEX35 o Fortune 500.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menos Flexibilidad:</strong> Las soluciones suelen ser estandarizadas y menos adaptadas a las necesidades únicas de un negocio en crecimiento.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Complejidad en la Comunicación:</strong> A menudo, el contacto diario es con consultores junior, no con los socios o directores con más experiencia.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/deloitte" className="text-primary hover:underline">Volver a la comparativa principal de Deloitte</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default DeloitteFiscalidadCluster;
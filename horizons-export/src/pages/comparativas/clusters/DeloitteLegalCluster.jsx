import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const DeloitteLegalCluster = () => {
  const pageTitle = "Consultoría Legal Internacional: ConsultGlobalLex vs. Deloitte";
  const pageDescription = "Comparamos los servicios legales. Deloitte Legal es potente pero costoso. Nuestra firma boutique ofrece acceso directo a expertos en derecho mercantil internacional a un coste asumible.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Deloitte", path: "/comparativas/deloitte" },
    { label: "Consultoría Legal", path: "/comparativas/deloitte/consultoria-legal" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Servicios Legales: Experiencia Accesible vs. Escala Corporativa</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">El asesoramiento legal de calidad no debería ser exclusivo para las grandes corporaciones. Ofrecemos la misma o mayor pericia en nichos internacionales, pero con un modelo de servicio diferente.</p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Propuesta de Valor en Servicios Legales</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Acceso Directo a Socios:</strong> Tu caso es revisado y gestionado por consultores senior con amplia experiencia, no por recién graduados.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Especialización en Contratos para la Economía Digital:</strong> Entendemos los matices de los contratos de SaaS, servicios de marketing digital, y acuerdos de afiliación internacionales.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Due Diligence Ágil para M&A de PYMEs:</strong> Realizamos procesos de 'due diligence' eficientes y enfocados para adquisiciones de menor escala, identificando los riesgos clave sin un coste desorbitado.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Tarifas Predecibles:</strong> Ofrecemos paquetes de servicios y honorarios claros, evitando la incertidumbre de la facturación por horas de las grandes firmas.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Modelo de Deloitte Legal</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Estructura Jerárquica:</strong> La interacción suele ser con varios niveles de abogados, lo que puede ralentizar la comunicación y la toma de decisiones.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Costes de Oportunidad:</strong> Para una PYME, el coste de contratar a Deloitte Legal para un contrato estándar puede ser prohibitivo y no justificar el valor.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Enfoque en Litigios y Operaciones de Gran Escala:</strong> Su principal valor reside en grandes litigios, reestructuraciones corporativas y M&A de miles de millones, no en el día a día legal de una PYME.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/deloitte" className="text-primary hover:underline">Volver a la comparativa principal de Deloitte</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default DeloitteLegalCluster;
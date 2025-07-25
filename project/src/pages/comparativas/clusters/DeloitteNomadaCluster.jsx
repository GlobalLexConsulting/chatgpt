import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const DeloitteNomadaCluster = () => {
  const pageTitle = "Visado Nómada Digital: ConsultGlobalLex vs. Deloitte";
  const pageDescription = "Deloitte se enfoca en la movilidad de grandes expatriados. Nosotros nos especializamos en las necesidades del nómada digital moderno: visados, planificación fiscal ágil y estructuras eficientes (LLC).";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Deloitte", path: "/comparativas/deloitte" },
    { label: "Visado Nómada Digital", path: "/comparativas/deloitte/visado-nomada-digital" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Visado para Nómadas Digitales: El Especialista vs. el Generalista de Grandes Cuentas</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">El departamento de 'Global Mobility' de Deloitte es excelente para directivos de multinacionales. Para el freelancer o emprendedor digital, nuestro enfoque es más práctico, rápido y rentable.</p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Cómo Entendemos al Nómada Digital</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estrategia Fiscal ANTES del Visado:</strong> Analizamos tu situación para decidir la mejor estructura (LLC, autónomo, etc.) ANTES de iniciar el trámite, evitando problemas futuros.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Conocimiento de Múltiples Visados:</strong> No solo el de España, te podemos comparar las ventajas de los visados de Portugal, Italia, Alemania, etc.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Agilidad y Comunicación Directa:</strong> Gestionamos tu caso de forma personal y rápida, sin la burocracia de un gran equipo.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Costes Transparentes:</strong> Ofrecemos un precio cerrado por la gestión, a diferencia del modelo de facturación por horas que puede disparar los costes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque Corporativo de 'Global Mobility'</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Orientado a Empresas:</strong> Sus servicios están diseñados para ser contratados por empresas que desplazan a sus empleados, no por individuos.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Procesos Estandarizados:</strong> Siguen protocolos diseñados para grandes volúmenes, con menos flexibilidad para casos atípicos o perfiles de emprendedor.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Costes Elevados:</strong> El precio de sus servicios de movilidad internacional es significativamente más alto, pensado para presupuestos corporativos.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/deloitte" className="text-primary hover:underline">Volver a la comparativa principal de Deloitte</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default DeloitteNomadaCluster;
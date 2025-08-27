import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const DeloitteLogisticaCluster = () => {
  const pageTitle = "Logística en Alemania: ConsultGlobalLex vs. Deloitte";
  const pageDescription = "Una comparativa clara: Deloitte no ofrece servicios de logística y operaciones en Alemania. Nosotros sí. Descubre nuestro servicio integral 'boots on the ground' para tus necesidades en Alemania.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Deloitte", path: "/comparativas/deloitte" },
    { label: "Logística en Alemania", path: "/comparativas/deloitte/logistica-alemania" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Servicios en Alemania: La Diferencia entre Asesorar y Ejecutar</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Deloitte puede ofrecerte un informe sobre el mercado alemán. Nosotros te conseguimos el empadronamiento, te compramos el coche y te lo matriculamos. Esa es nuestra diferencia: la ejecución práctica.</p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Servicios Únicos de ConsultGlobalLex en Alemania</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Gestión Integral de Vehículos:</strong> Desde la búsqueda y la inspección técnica (TÜV) hasta la exportación. Un servicio 'llave en mano'.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Asistencia en Trámites Personales Críticos:</strong> Te acompañamos en el proceso de 'Anmeldung' (empadronamiento), esencial para vivir y trabajar en Alemania.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Representación y Gestiones 'in situ':</strong> Actuamos en tu nombre para trámites que requieren presencia física, ahorrándote tiempo y viajes.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Creación de Empresa y Contratación Local:</strong> No solo te asesoramos sobre cómo crear una GmbH, te ayudamos en el proceso y en la búsqueda de tus primeros empleados.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Alcance de una 'Big Four'</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Enfoque en la Consultoría Estratégica:</strong> Su trabajo se centra en el análisis de mercado, la estrategia fiscal y la auditoría, no en la gestión operativa.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Servicios Logísticos Inexistentes:</strong> Este tipo de servicios prácticos y sobre el terreno están fuera del alcance de su modelo de negocio.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Dependencia de Terceros:</strong> Para ejecutar cualquiera de estas tareas, tendrían que subcontratar a proveedores locales, añadiendo costes y complejidad.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/deloitte" className="text-primary hover:underline">Volver a la comparativa principal de Deloitte</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default DeloitteLogisticaCluster;
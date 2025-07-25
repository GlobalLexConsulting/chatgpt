import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const EximLogisticaCluster = () => {
  const pageTitle = "Logística en Alemania: ConsultGlobalLex vs. Exim Asesores";
  const pageDescription = "Una diferencia clave: Exim Asesores no ofrece servicios de logística y operaciones en el extranjero. Nosotros sí. Descubre cómo te ayudamos sobre el terreno en Alemania.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Exim Asesores", path: "/comparativas/exim-asesores" },
    { label: "Logística en Alemania", path: "/comparativas/exim-asesores/logistica-alemania" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Servicios 'Boots on the Ground' en Alemania: Una Ventaja Competitiva Única</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">La asesoría de extranjería termina en la frontera. Nuestros servicios continúan allí donde te estableces. Nuestro soporte en Alemania es un servicio que no encontrarás en una gestoría tradicional.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">¿Qué Hacemos por Ti en Alemania?</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Gestión Completa de Vehículos:</strong> Un servicio muy demandado por expatriados. Buscamos, inspeccionamos (TÜV), compramos y gestionamos el transporte y la matriculación de tu vehículo.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Asistencia con el Empadronamiento (Anmeldung):</strong> Te ayudamos a superar uno de los primeros y más importantes obstáculos burocráticos al llegar a Alemania.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Soporte para Establecimiento de Negocio:</strong> Desde la búsqueda de una oficina hasta la ayuda en la contratación de personal local.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Representación Legal y Gestiones:</strong> Actuamos como tu representante para facilitar trámites y gestiones que requieran presencia o conocimiento local.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Limitaciones de una Gestoría de Extranjería</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Servicios Confinados a España:</strong> Su ámbito de actuación es el territorio español y la normativa de extranjería española.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Sin Soporte Operativo en el Extranjero:</strong> No disponen de la estructura ni del conocimiento para ofrecer servicios prácticos en otros países.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Necesidad de Múltiples Proveedores:</strong> Como cliente, tendrías que buscar y coordinar por tu cuenta a diferentes proveedores en Alemania para estos servicios.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/exim-asesores" className="text-primary hover:underline">Volver a la comparativa principal de Exim Asesores</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default EximLogisticaCluster;
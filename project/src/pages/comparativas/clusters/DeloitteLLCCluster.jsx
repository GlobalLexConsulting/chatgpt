import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const DeloitteLLCCluster = () => {
  const pageTitle = "Constitución de LLC: ConsultGlobalLex vs. Deloitte";
  const pageDescription = "Deloitte puede asesorar en estructuras complejas, pero para la creación ágil y optimizada de una LLC para no residentes, nuestro servicio especializado es imbatible en precio y eficiencia.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Deloitte", path: "/comparativas/deloitte" },
    { label: "Constitución de LLC", path: "/comparativas/deloitte/constitucion-llc" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Constitución de LLC: La Eficiencia de la Especialización</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Crear una LLC es un proceso específico donde la agilidad y el conocimiento práctico son más importantes que el tamaño de la consultora. Aquí es donde brillamos.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Ventajas de Nuestro Servicio de Creación de LLC</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Proceso Ultra-Rápido:</strong> Tenemos un sistema optimizado que nos permite constituir tu LLC y obtener tu EIN en tiempos récord.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Costes Transparentes y Fijos:</strong> Sabes exactamente cuánto te va a costar desde el principio, sin sorpresas ni facturas por horas.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Asesoramiento Práctico Incluido:</strong> Te explicamos el cumplimiento (Form. 5472), la banca y las mejores prácticas, algo que una gran consultora facturaría como un servicio aparte.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>100% Digital y Remoto:</strong> Todo el proceso está diseñado para ser completado desde cualquier parte del mundo, sin papeleo físico.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque de Deloitte en Estructuras</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>No es un Servicio Principal:</strong> La constitución de una simple LLC no es un servicio de alto valor para ellos, por lo que puede ser delegado o gestionado con menor prioridad.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Costes Elevados:</strong> Su estructura de costes hace que un servicio relativamente sencillo como este sea desproporcionadamente caro.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Enfoque en Grandes Estructuras:</strong> Su expertise reside en la creación de complejas estructuras multinacionales, no en la gestión ágil de una LLC para una pyme o un freelancer.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/deloitte" className="text-primary hover:underline">Volver a la comparativa principal de Deloitte</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default DeloitteLLCCluster;
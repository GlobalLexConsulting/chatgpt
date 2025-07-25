import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const OlympiaHerenciasCluster = () => {
  const pageTitle = "Herencias y Sucesiones Internacionales: ConsultGlobalLex vs. Olympia Abogados";
  const pageDescription = "Olympia Abogados gestiona herencias en España. Nosotros nos especializamos en sucesiones con componente internacional: herederos en el extranjero, bienes en múltiples países y planificación fiscal sucesoria global.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" },
    { label: "Herencias y Sucesiones", path: "/comparativas/olympia-abogados/herencias-y-sucesiones" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Planificación Sucesoria: Del Testamento Nacional a la Estrategia Global</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Una herencia se complica exponencialmente cuando cruza fronteras. Nuestro valor añadido reside en la gestión de esa complejidad internacional.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Especialización en Sucesiones Internacionales</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Aplicación de Reglamentos Europeos:</strong> Somos expertos en el Reglamento Europeo de Sucesiones para determinar la ley aplicable y la jurisdicción competente.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación Fiscal Transfronteriza:</strong> Diseñamos estrategias para minimizar el impacto del Impuesto de Sucesiones y Donaciones cuando los herederos o los bienes están en diferentes países.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Gestión de 'Probate' en Países Anglosajones:</strong> Asistimos en los procesos de validación de testamentos (probate) para bienes situados en EE.UU., Reino Unido, etc.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estructuras de Protección Patrimonial:</strong> Asesoramos sobre la utilización de trusts, fundaciones y holdings para una planificación sucesoria eficiente y la protección del patrimonio familiar.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco del Derecho Sucesorio Tradicional</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Gestión de Herencias Nacionales:</strong> Su principal actividad es la tramitación de herencias donde tanto los bienes como los herederos están en España.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Redacción de Testamentos:</strong> Son expertos en la redacción de testamentos conforme al Código Civil español.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Liquidación del Impuesto de Sucesiones:</strong> Realizan la liquidación del impuesto ante la hacienda autonómica correspondiente.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Partición de Herencias:</strong> Intervienen en la negociación y el reparto de los bienes entre los herederos.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/olympia-abogados" className="text-primary hover:underline">Volver a la comparativa principal de Olympia Abogados</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default OlympiaHerenciasCluster;
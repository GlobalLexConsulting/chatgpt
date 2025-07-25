import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const OlympiaExtranjeriaCluster = () => {
  const pageTitle = "Extranjería: ConsultGlobalLex vs. Olympia Abogados";
  const pageDescription = "Comparamos enfoques en extranjería. Olympia Abogados es fuerte en arraigo y reagrupación. Nosotros nos especializamos en visados para nómadas digitales y Golden Visas, integrando la planificación fiscal desde el inicio.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" },
    { label: "Extranjería e Inversión", path: "/comparativas/olympia-abogados/extranjeria-e-inversion" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Extranjería: Visados de Inversión y Talento Digital vs. Arraigo Tradicional</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">El derecho de extranjería es amplio. Nuestro nicho es el talento y el capital global; el de un despacho tradicional suele ser el arraigo social y familiar.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestro Enfoque en Movilidad Internacional de Alto Valor</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Visado para Nómadas Digitales:</strong> No solo gestionamos el trámite, sino que optimizamos la estructura fiscal subyacente (LLC, etc.) para maximizar los beneficios.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Golden Visa (Residencia por Inversión):</strong> Asesoramos en todo el proceso, desde la selección del activo de inversión (inmobiliario, fondos) hasta la obtención de la residencia para el inversor y su familia.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Ley Beckham y Regímenes Especiales:</strong> Identificamos y gestionamos la aplicación a regímenes fiscales ventajosos para trabajadores y directivos desplazados a España.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación Fiscal Integrada:</strong> Cada trámite de extranjería va de la mano de una estrategia fiscal para asegurar la máxima eficiencia desde el primer día de residencia.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco del Derecho de Extranjería Generalista</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Arraigo Social, Laboral y Familiar:</strong> Son expertos en los procedimientos para regularizar la situación de personas que ya residen en España.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Reagrupación Familiar:</strong> Dominan los trámites para que los residentes legales en España puedan traer a sus familiares.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Nacionalidad:</strong> Asesoran en los largos y complejos procesos para obtener la nacionalidad española.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Protección Internacional y Asilo:</strong> Tienen experiencia en los procedimientos de solicitud de asilo y protección subsidiaria.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/olympia-abogados" className="text-primary hover:underline">Volver a la comparativa principal de Olympia Abogados</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default OlympiaExtranjeriaCluster;
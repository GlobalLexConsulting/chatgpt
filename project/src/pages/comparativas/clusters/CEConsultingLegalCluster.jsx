import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const CEConsultingLegalCluster = () => {
  const pageTitle = "Consultoría Legal Internacional: ConsultGlobalLex vs. CE Consulting";
  const pageDescription = "Análisis comparativo de servicios legales. Nuestro enfoque se centra en contratos internacionales, propiedad intelectual y M&A transfronterizo, áreas donde una visión global es clave.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs CE Consulting", path: "/comparativas/ce-consulting" },
    { label: "Consultoría Legal", path: "/comparativas/ce-consulting/consultoria-legal" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Consultoría Legal: Perspectiva Global vs. Enfoque Local</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">CE Consulting tiene una sólida base en derecho español. Nosotros la complementamos con una profunda experiencia en el ámbito legal transfronterizo, esencial para negocios globales.</p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Especialización en Legal Internacional</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Contratos Internacionales:</strong> Redactamos y negociamos contratos de servicios, distribución y joint-venture considerando múltiples jurisdicciones y leyes aplicables.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Protección de Propiedad Intelectual Global:</strong> Gestionamos el registro y la defensa de marcas y patentes en mercados clave como EE.UU. y la UE.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>M&A Transfronterizo:</strong> Asesoramos en fusiones y adquisiciones que involucran a empresas de diferentes países, manejando la complejidad de la 'due diligence' internacional.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Cumplimiento Normativo Digital (DSA, GDPR):</strong> Ayudamos a empresas digitales a cumplir con las regulaciones europeas e internacionales, minimizando riesgos.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque de una Asesoría Tradicional</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en Derecho Nacional:</strong> Su principal fortaleza es el derecho mercantil, laboral y civil español, con menos profundidad en tratados internacionales.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Experiencia en Litigios Transfronterizos:</strong> La resolución de disputas entre partes de distintos países requiere un conocimiento específico que no siempre está presente.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Estructuras de Franquicia Nacionales:</strong> Aunque fuertes en franquicias dentro de España, pueden tener menos experiencia en la adaptación de modelos de franquicia a mercados internacionales.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/ce-consulting" className="text-primary hover:underline">Volver a la comparativa principal de CE Consulting</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default CEConsultingLegalCluster;
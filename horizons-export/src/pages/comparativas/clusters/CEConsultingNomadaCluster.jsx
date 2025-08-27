import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const CEConsultingNomadaCluster = () => {
  const pageTitle = "Visado Nómada Digital: ConsultGlobalLex vs. CE Consulting";
  const pageDescription = "Comparamos la gestión del visado de nómada digital. Mientras CE Consulting ofrece un buen servicio para España, nuestro enfoque integra la planificación fiscal global desde el primer día.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs CE Consulting", path: "/comparativas/ce-consulting" },
    { label: "Visado Nómada Digital", path: "/comparativas/ce-consulting/visado-nomada-digital" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Gestión del Visado para Nómadas Digitales: Más Allá del Trámite</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Conseguir el visado es solo el primer paso. La verdadera optimización para un nómada digital reside en la estructura fiscal que lo soporta, y ahí es donde nuestro enfoque destaca sobre el de asesorías más tradicionales como CE Consulting.</p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">El Enfoque 360° de ConsultGlobalLex</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación Fiscal Integrada:</strong> Antes de solicitar el visado, analizamos si te conviene operar como autónomo, a través de una LLC, una SL, o bajo la Ley Beckham.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Visión Multi-Jurisdiccional:</strong> No solo gestionamos el visado para España, sino que te asesoramos sobre las implicaciones en tu país de origen y otros lugares donde operes.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Optimización del "Tax-Day":</strong> Te ayudamos a planificar tu llegada y estancia para minimizar la carga fiscal del primer año.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estrategias Post-Visado:</strong> Te ofrecemos un roadmap claro sobre tus obligaciones fiscales y contables una vez establecido.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque de una Asesoría Tradicional</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en el Trámite de Extranjería:</strong> Su principal objetivo es la obtención del visado, con menos énfasis en la planificación fiscal previa.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Visión Centrada en España:</strong> El asesoramiento se concentra en las obligaciones dentro de España, sin profundizar en la optimización de la estructura global del cliente.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menos Flexibilidad Estructural:</strong> Pueden tender a recomendar la estructura de autónomo español por defecto, sin explorar alternativas internacionales más eficientes como la LLC.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/ce-consulting" className="text-primary hover:underline">Volver a la comparativa principal de CE Consulting</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default CEConsultingNomadaCluster;
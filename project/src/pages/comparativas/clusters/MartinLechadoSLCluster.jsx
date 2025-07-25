import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const MartinLechadoSLCluster = () => {
  const pageTitle = "Constitución de SL: ConsultGlobalLex vs. Martín Lechado";
  const pageDescription = "Ambas firmas te ayudan a crear tu SL. La diferencia está en el 'después': nosotros te asesoramos en precios de transferencia, operaciones vinculadas y estrategias de expansión internacional.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Martín Lechado", path: "/comparativas/martin-lechado" },
    { label: "Constitución de SL", path: "/comparativas/martin-lechado/constitucion-sl" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Crear una SL: El Primer Paso hacia una Estructura Global</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">La constitución de una Sociedad Limitada es un proceso estandarizado. El verdadero valor de un consultor reside en la estrategia a largo plazo que te ayuda a construir sobre esa base.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Visión Estratégica para tu SL</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>SL como parte de un Holding:</strong> Te asesoramos sobre si tu SL debería ser una filial de un holding internacional para optimizar la repatriación de dividendos.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Operaciones Vinculadas (SL y LLC):</strong> Si tienes una SL en España y una LLC en USA, te ayudamos a establecer precios de transferencia correctos para cumplir con la normativa y optimizar la carga fiscal.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación de la Expansión:</strong> Te ayudamos a planificar la apertura de filiales o establecimientos permanentes en otros países.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Pactos de Socios con Visión Internacional:</strong> Redactamos pactos de socios que contemplan la entrada de inversores extranjeros y la resolución de conflictos en un contexto global.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque de la Asesoría Digital para SLs</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en la Constitución y Cumplimiento:</strong> El servicio principal es la creación de la sociedad y la llevanza de la contabilidad y los impuestos en España.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Profundidad en Estrategia Internacional:</strong> La planificación fiscal internacional compleja no suele ser el núcleo de su oferta.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Visión Centrada en España:</strong> El asesoramiento se enfoca en el cumplimiento y las oportunidades dentro del marco fiscal y mercantil español.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/martin-lechado" className="text-primary hover:underline">Volver a la comparativa principal de Martín Lechado</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default MartinLechadoSLCluster;
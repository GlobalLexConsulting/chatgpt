import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const MartinLechadoDigitalCluster = () => {
  const pageTitle = "Asesoría Digital vs. Consultoría Global: ConsultGlobalLex vs. Martín Lechado";
  const pageDescription = "Martín Lechado ofrece una excelente asesoría digital para el mercado español. Nosotros la definimos como consultoría global: la misma tecnología, pero aplicada a estrategias fiscales y legales internacionales.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Martín Lechado", path: "/comparativas/martin-lechado" },
    { label: "Asesoría Digital vs. Consultoría Global", path: "/comparativas/martin-lechado/asesoria-digital-vs-tradicional" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">De la Asesoría Digital a la Consultoría Global: La Evolución</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">La 'asesoría digital' se refiere a la tecnología y los canales. La 'consultoría global' se refiere al alcance y la estrategia. Nosotros combinamos ambas.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">¿Qué es la Consultoría Global?</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estrategia sobre el Trámite:</strong> No solo presentamos tus impuestos; diseñamos la estructura para que pagues lo mínimo posible legalmente a nivel mundial.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Visión Proactiva:</strong> Analizamos tendencias regulatorias globales (BEPS, DAC7, Pillar Two) para que tu negocio esté preparado para el futuro.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Soluciones Integradas:</strong> Combinamos la creación de una LLC en USA, con la gestión de tu visado de nómada en Portugal y la planificación de tu residencia fiscal en España. Todo en uno.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Servicios de Ejecución:</strong> Vamos más allá del consejo. Si necesitas a alguien sobre el terreno en Alemania para una gestión, lo tienes.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Modelo de la Asesoría Digital</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en la Eficiencia del Proceso:</strong> El objetivo es hacer la gestión de impuestos y contabilidad en España lo más fácil y automatizada posible.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Comunicación Digital:</strong> El valor reside en la rapidez y comodidad de la comunicación a través de plataformas digitales.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Enfoque en el Cumplimiento:</strong> El servicio se centra en asegurar que cumplas con tus obligaciones fiscales y contables en España.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/martin-lechado" className="text-primary hover:underline">Volver a la comparativa principal de Martín Lechado</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default MartinLechadoDigitalCluster;
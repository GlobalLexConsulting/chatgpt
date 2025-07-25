import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const EximFiscalidadCluster = () => {
  const pageTitle = "Fiscalidad Internacional: ConsultGlobalLex vs. Exim Asesores";
  const pageDescription = "Exim Asesores domina la extranjería, pero nuestra fortaleza es la fiscalidad internacional. Comparamos cómo optimizamos impuestos más allá de la obtención de la residencia.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Exim Asesores", path: "/comparativas/exim-asesores" },
    { label: "Fiscalidad Internacional", path: "/comparativas/exim-asesores/fiscalidad-internacional" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Asesoría Fiscal: La Pieza Clave que Complementa a la Extranjería</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Conseguir la residencia es el primer paso. El segundo, y más importante a largo plazo, es tener una estructura fiscal eficiente. Ahí es donde nuestro enfoque global supera al de una gestoría centrada en extranjería.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Profundidad en Fiscalidad Internacional</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Análisis de Estructuras (LLC vs SL vs Autónomo):</strong> No nos limitamos a la opción obvia. Analizamos cuál es la estructura más eficiente para tu modelo de negocio global.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Aplicación de Convenios de Doble Imposición:</strong> Tenemos una amplia experiencia en la aplicación de convenios para reducir retenciones y optimizar la tributación entre países.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación para Regímenes Especiales (Ley Beckham):</strong> Integramos la posibilidad de acogerte a regímenes como la Ley Beckham en tu planificación desde el minuto cero.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Asesoramiento en Criptoactivos:</strong> Ofrecemos guía clara sobre la compleja y cambiante fiscalidad de las criptomonedas a nivel internacional.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco de una Gestoría de Extranjería</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Fiscalidad como Servicio Secundario:</strong> El asesoramiento fiscal puede ser más básico, centrado en el cumplimiento de las obligaciones del autónomo en España.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Experiencia en Estructuras Internacionales:</strong> Su 'expertise' no reside en la creación y gestión de LLCs u otras entidades extranjeras.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Enfoque Reactivo:</strong> La planificación fiscal suele venir después de obtener la residencia, en lugar de ser una parte integral de la estrategia inicial.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/exim-asesores" className="text-primary hover:underline">Volver a la comparativa principal de Exim Asesores</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default EximFiscalidadCluster;
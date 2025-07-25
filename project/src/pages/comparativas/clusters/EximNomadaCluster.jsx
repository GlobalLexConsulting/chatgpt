import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const EximNomadaCluster = () => {
  const pageTitle = "Visado Nómada Digital: ConsultGlobalLex vs. Exim Asesores";
  const pageDescription = "Exim Asesores son expertos en conseguir el visado para España. Nosotros somos expertos en diseñar tu vida después del visado. Compara nuestro enfoque estratégico vs. su enfoque de gestoría.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Exim Asesores", path: "/comparativas/exim-asesores" },
    { label: "Visado Nómada Digital", path: "/comparativas/exim-asesores/visado-nomada-digital" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Visado de Nómada Digital: La Estrategia Integral vs. la Gestión del Trámite</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Ambas firmas te conseguirán el visado. La pregunta es: ¿quién te prepara mejor para el éxito a largo plazo como residente fiscal y empresario global?</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestro Valor Añadido: La Visión 360°</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación Fiscal Proactiva:</strong> Antes de solicitar el visado, ya hemos definido contigo la estructura fiscal más eficiente (LLC, SL, Ley Beckham...), lo que puede tener un impacto masivo en tus impuestos futuros.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Optimización Internacional:</strong> Pensamos más allá de España. ¿Cómo afecta tu nueva residencia a tus obligaciones en tu país de origen? ¿Cómo facturas a clientes internacionales? Damos respuesta a estas preguntas.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Un Único Punto de Contacto:</strong> Integramos la gestión de extranjería, la asesoría fiscal y la consultoría legal en un solo servicio, evitando que tengas que coordinar a múltiples profesionales.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Asesoramiento Continuo:</strong> Nuestra relación no termina cuando obtienes el TIE. Te acompañamos en tu día a día como empresario o profesional en España.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque del Especialista en Extranjería</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en la Obtención del Permiso:</strong> Su principal métrica de éxito es conseguir la resolución favorable de extranjería. La optimización fiscal es un objetivo secundario.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Recomendación Estándar:</strong> La recomendación por defecto suele ser darse de alta como autónomo en España, ya que es la vía más sencilla desde el punto de vista de la extranjería.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Visión Limitada a España:</strong> Su 'expertise' se centra en la normativa española, con menos capacidad para asesorar sobre las interacciones con otros sistemas fiscales.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/exim-asesores" className="text-primary hover:underline">Volver a la comparativa principal de Exim Asesores</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default EximNomadaCluster;
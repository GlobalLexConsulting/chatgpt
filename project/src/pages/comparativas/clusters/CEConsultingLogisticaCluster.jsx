import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const CEConsultingLogisticaCluster = () => {
  const pageTitle = "Logística y Operaciones en Alemania: ConsultGlobalLex vs. CE Consulting";
  const pageDescription = "CE Consulting no se especializa en operaciones logísticas en Alemania. Descubre cómo nuestro servicio integral cubre desde la compra de vehículos y TÜV hasta el empadronamiento y representación legal.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs CE Consulting", path: "/comparativas/ce-consulting" },
    { label: "Logística en Alemania", path: "/comparativas/ce-consulting/logistica-alemania" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Operaciones en Alemania: Un Servicio que Marca la Diferencia</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Este es un claro ejemplo de nuestra especialización. Mientras que CE Consulting se enfoca en la asesoría tradicional, nosotros ofrecemos servicios "en el terreno" que resuelven problemas reales de nuestros clientes en Alemania.</p>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestro Servicio Integral en Alemania</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Compra y Logística de Vehículos:</strong> Gestionamos la inspección técnica (TÜV), compra, transporte y matriculación de vehículos, un servicio único para expatriados y empresas.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Empadronamiento (Anmeldung):</strong> Asistimos en uno de los trámites más importantes y a menudo complejos para quienes se mudan a Alemania.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Representación Legal y Apertura de Cuentas:</strong> Ofrecemos representación para trámites que requieren presencia física y ayudamos en la apertura de cuentas bancarias locales.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Selección de Personal Local:</strong> Ayudamos a las empresas a encontrar y contratar talento en el mercado alemán, entendiendo sus particularidades.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">¿Qué esperar de una Asesoría Generalista?</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Servicios No Disponibles:</strong> La logística y las operaciones sobre el terreno no forman parte del portafolio de servicios de una asesoría fiscal y contable tradicional.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Necesidad de Múltiples Proveedores:</strong> Un cliente de CE Consulting necesitaría contratar a varios proveedores externos para cubrir lo que nosotros ofrecemos en un paquete integrado.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Falta de Conocimiento Práctico:</strong> La asesoría teórica sobre Alemania es diferente a la experiencia práctica de lidiar con la burocracia alemana.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/ce-consulting" className="text-primary hover:underline">Volver a la comparativa principal de CE Consulting</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default CEConsultingLogisticaCluster;
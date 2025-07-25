import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const EximLLCCluster = () => {
  const pageTitle = "Constitución de LLC: ConsultGlobalLex vs. Exim Asesores";
  const pageDescription = "Exim Asesores se enfoca en la residencia en España. Nosotros te ofrecemos la mejor herramienta para operar globalmente: una LLC en USA. Descubre por qué es una opción superior al autónomo español.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Exim Asesores", path: "/comparativas/exim-asesores" },
    { label: "Constitución de LLC", path: "/comparativas/exim-asesores/constitucion-llc" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">La LLC: La Herramienta que Exim Asesores no te Ofrecerá</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Una gestoría de extranjería en España lógicamente te guiará hacia las estructuras españolas. Nosotros te abrimos la puerta a una estructura fiscalmente más eficiente y flexible a nivel mundial.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Beneficios de la LLC frente al Autónomo Español</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Flexibilidad Fiscal:</strong> Como entidad 'pass-through', los beneficios de la LLC tributan directamente en el IRPF del socio. Si no tienes establecimiento permanente en España, la tributación puede ser más ventajosa.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Protección de Responsabilidad Limitada:</strong> Tu patrimonio personal está protegido de las deudas y obligaciones del negocio, a diferencia del autónomo.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Privacidad:</strong> Estados como Wyoming o Nuevo México ofrecen un alto grado de privacidad para los dueños de la LLC.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Menos Burocracia y Costes Fijos:</strong> Una LLC no tiene una cuota de seguridad social mensual obligatoria como la de los autónomos en España, lo que supone un ahorro significativo.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Camino Tradicional de la Gestoría</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en el Alta de Autónomo:</strong> Es la vía más directa y conocida para ellos, aunque no siempre la más óptima para el cliente.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Desconocimiento de Estructuras Extranjeras:</strong> No es su área de especialización, por lo que no pueden asesorar sobre las ventajas o el cumplimiento de una LLC.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Visión Centrada en el Cumplimiento Español:</strong> Su objetivo es que cumplas con la normativa española, no necesariamente que optimices tu carga fiscal a nivel global.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/exim-asesores" className="text-primary hover:underline">Volver a la comparativa principal de Exim Asesores</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default EximLLCCluster;
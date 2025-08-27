import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const CEConsultingFiscalidadCluster = () => {
  const pageTitle = "Fiscalidad Internacional: ConsultGlobalLex vs. CE Consulting";
  const pageDescription = "Análisis detallado: cómo nuestra especialización en fiscalidad para nómadas y empresas digitales supera el enfoque generalista de CE Consulting. Optimiza convenios de doble imposición, BEPS 2.0 y más.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs CE Consulting", path: "/comparativas/ce-consulting" },
    { label: "Fiscalidad Internacional", path: "/comparativas/ce-consulting/fiscalidad-internacional" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Comparativa de Asesoría Fiscal Internacional: ConsultGlobalLex vs. CE Consulting</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Mientras CE Consulting ofrece un servicio fiscal amplio, nuestro enfoque boutique se especializa en la complejidad transfronteriza que enfrentan los negocios digitales y profesionales globales.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Ventajas de Nuestro Enfoque Especializado</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estrategias Proactivas (Pillar Two, DAC7):</strong> No solo cumplimos, sino que nos anticipamos a cambios normativos para posicionar tu negocio ventajosamente.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Optimización de Convenios de Doble Imposición:</strong> Realizamos análisis profundos para minimizar tu carga fiscal global, no solo cumplir con las obligaciones locales.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Precios de Transferencia para PYMEs:</strong> Adaptamos las complejas normativas de precios de transferencia a la escala y necesidades de las PYMEs, algo que las grandes consultoras a menudo pasan por alto.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estructuración con Holdings:</strong> Asesoramos sobre la creación de holdings (Malta, etc.) como herramienta de optimización y protección patrimonial, un servicio altamente especializado.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Limitaciones del Enfoque Generalista</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Profundidad en Nichos:</strong> El enfoque de "talla única" puede no ser óptimo para nómadas digitales, creadores de contenido o traders de criptoactivos.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Reactividad ante Cambios:</strong> Suelen ser más lentos en adaptar sus estrategias a las nuevas y cambiantes normativas fiscales digitales.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Costes Menos Competitivos para Servicios de Nicho:</strong> Su estructura de costes está diseñada para servicios estandarizados y puede no ser eficiente para necesidades altamente específicas.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/ce-consulting" className="text-primary hover:underline">Volver a la comparativa principal de CE Consulting</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default CEConsultingFiscalidadCluster;
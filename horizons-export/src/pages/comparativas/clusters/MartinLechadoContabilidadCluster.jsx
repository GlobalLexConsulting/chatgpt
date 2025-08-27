import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const MartinLechadoContabilidadCluster = () => {
  const pageTitle = "Contabilidad Digital: ConsultGlobalLex vs. Martín Lechado";
  const pageDescription = "Análisis de herramientas y estrategias de contabilidad digital. Comparamos el enfoque de Martín Lechado con nuestra perspectiva global, que integra contabilidad multi-divisa y normativas internacionales.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Martín Lechado", path: "/comparativas/martin-lechado" },
    { label: "Contabilidad Digital", path: "/comparativas/martin-lechado/contabilidad-digital" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contabilidad Digital: Herramientas Locales vs. Estrategia Global</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Ambas firmas apostamos por la tecnología, pero nuestro enfoque contable está diseñado para empresas que operan en múltiples divisas y jurisdicciones.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Ventaja en Contabilidad Internacional</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Contabilidad Multi-Divisa:</strong> Gestionamos y consolidamos contabilidades con ingresos y gastos en EUR, USD, GBP, etc., aplicando los tipos de cambio correctos.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Integración con Plataformas Globales:</strong> Conectamos con Stripe, PayPal, Wise, y otras plataformas para una conciliación bancaria global y automatizada.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Reportes para Cumplimiento Internacional:</strong> Generamos informes adaptados no solo a la normativa española, sino también a los requerimientos de una LLC en USA (P&L para Form. 5472).</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Amortización de Activos Intangibles:</strong> Tenemos experiencia en la correcta amortización contable de software, dominios y otros activos digitales, clave en la nueva economía.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque de la Asesoría Digital Española</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en el Plan General Contable Español:</strong> Su principal marco de trabajo es la normativa contable española.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Herramientas Optimizadas para España:</strong> Suelen trabajar con software de facturación y contabilidad diseñado específicamente para el mercado español (ej. FacturaDirecta, Quipu).</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Experiencia en Consolidación:</strong> La consolidación de cuentas de filiales o entidades en el extranjero no es su servicio principal.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/martin-lechado" className="text-primary hover:underline">Volver a la comparativa principal de Martín Lechado</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default MartinLechadoContabilidadCluster;
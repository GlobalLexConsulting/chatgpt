import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const MartinLechadoFiscalidadCluster = () => {
  const pageTitle = "Fiscalidad de Autónomos: ConsultGlobalLex vs. Martín Lechado";
  const pageDescription = "Martín Lechado es un experto en la fiscalidad del autónomo en España. Nosotros te mostramos alternativas globales como la LLC que pueden ser fiscalmente más eficientes para negocios digitales.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Martín Lechado", path: "/comparativas/martin-lechado" },
    { label: "Fiscalidad de Autónomos", path: "/comparativas/martin-lechado/fiscalidad-autonomos" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Fiscalidad para Freelancers: ¿Autónomo en España o LLC en USA?</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">La pregunta clave para cualquier emprendedor digital. Analizamos las ventajas de cada modelo y por qué nuestro enfoque global puede ofrecerte más beneficios.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Por qué una LLC puede ser una mejor opción</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Ahorro en Cuotas de Seguridad Social:</strong> La principal ventaja. Una LLC no tiene una cuota mensual fija, lo que supone un ahorro de miles de euros al año frente a la cuota de autónomos.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Flexibilidad y Privacidad:</strong> Mayor anonimato (dependiendo del estado) y una estructura más sencilla y flexible para operar a nivel mundial.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Responsabilidad Limitada:</strong> Tu patrimonio personal está protegido, algo que el autónomo como persona física no tiene por defecto.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Acceso a Pasarelas de Pago:</strong> Facilita el acceso a plataformas como Stripe Atlas y banca en dólares.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Cuándo ser Autónomo en España es la opción correcta</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Negocio 100% Local:</strong> Si todos tus clientes y operaciones están en España, ser autónomo es la vía más directa y sencilla.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Acceso a Ayudas y Subvenciones:</strong> Para acceder a ciertas ayudas para emprendedores en España, es necesario estar dado de alta como autónomo.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Cotización para la Jubilación:</strong> La cuota de autónomos contribuye a tu futura pensión de jubilación en España.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/martin-lechado" className="text-primary hover:underline">Volver a la comparativa principal de Martín Lechado</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default MartinLechadoFiscalidadCluster;
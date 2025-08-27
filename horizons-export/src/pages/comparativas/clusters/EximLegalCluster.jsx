import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const EximLegalCluster = () => {
  const pageTitle = "Consultoría Legal Internacional: ConsultGlobalLex vs. Exim Asesores";
  const pageDescription = "Exim Asesores es experto en derecho de extranjería. Nuestro servicio legal va más allá, cubriendo contratos internacionales, M&A y protección de propiedad intelectual a nivel global.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Exim Asesores", path: "/comparativas/exim-asesores" },
    { label: "Consultoría Legal", path: "/comparativas/exim-asesores/consultoria-legal" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Servicios Legales: Del Derecho de Extranjería al Derecho Mercantil Global</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Ambas firmas somos expertas, pero en campos diferentes. Exim brilla en los trámites de residencia. Nosotros brillamos en la estructuración legal de tu negocio una vez que eres residente.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestro Expertise en Derecho Mercantil Internacional</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Contratos con Clientes y Proveedores Internacionales:</strong> Aseguramos que tus contratos sean sólidos y ejecutables en diferentes jurisdicciones, eligiendo la ley aplicable y el fuero más conveniente.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Protección de Activos Digitales:</strong> Te ayudamos a registrar y proteger tus marcas, software y otros activos intangibles a nivel mundial.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Acuerdos de Colaboración y Joint Ventures:</strong> Estructuramos legalmente tus alianzas estratégicas con socios de otros países.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Cumplimiento de Normativa Digital (DSA/DMA):</strong> Te guiamos para que tu negocio online cumpla con las complejas regulaciones europeas.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco del Experto en Extranjería</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Derecho Administrativo Español:</strong> Su principal campo de batalla es la ley de extranjería española y los procedimientos administrativos relacionados.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Recursos y Apelaciones de Residencia:</strong> Son expertos en resolver problemas y denegaciones de permisos de residencia.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Nacionalidad y Arraigo:</strong> Dominan los procesos para obtener la nacionalidad española y los diferentes tipos de arraigo.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Foco en lo Mercantil:</strong> El derecho mercantil internacional no es su principal área de práctica.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/exim-asesores" className="text-primary hover:underline">Volver a la comparativa principal de Exim Asesores</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default EximLegalCluster;
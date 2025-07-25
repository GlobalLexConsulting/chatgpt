import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const OlympiaMercantilCluster = () => {
  const pageTitle = "Derecho Mercantil: ConsultGlobalLex vs. Olympia Abogados";
  const pageDescription = "Comparamos el derecho mercantil. Olympia Abogados es fuerte en el ámbito nacional. Nuestra especialidad es el mercantil internacional: constitución de holdings, M&A transfronterizo y contratos globales.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" },
    { label: "Derecho Mercantil", path: "/comparativas/olympia-abogados/derecho-mercantil" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Derecho Mercantil: La Perspectiva Nacional vs. la Estrategia Global</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">El derecho mercantil es la base de cualquier negocio. Nosotros lo proyectamos al escenario internacional para dar a nuestros clientes una ventaja competitiva.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestro Enfoque en Derecho Mercantil Internacional</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Constitución de Estructuras Holding:</strong> Diseñamos y creamos estructuras con sociedades holding en jurisdicciones eficientes (ej. Malta, Luxemburgo) para optimizar la fiscalidad de los dividendos y la protección de activos.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Fusiones y Adquisiciones (M&A) Transfronterizas:</strong> Gestionamos la compraventa de empresas con partes en diferentes países, manejando la 'due diligence' y la negociación multicultural.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Contratación Internacional:</strong> Redactamos contratos de agencia, distribución, franquicia y 'joint venture' que son sólidos y ejecutables a nivel global.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Precios de Transferencia:</strong> Asesoramos en la política de precios entre empresas de un mismo grupo (ej. una SL española y su filial LLC en USA) para cumplir con la normativa de la OCDE.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco del Derecho Mercantil Tradicional</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Constitución de Sociedades en España:</strong> Son expertos en la creación de SL, SA y otras formas societarias españolas.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Secretaría Societaria:</strong> Llevan el día a día de las sociedades: actas de juntas, libros de socios, nombramientos de administradores.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Contratación Nacional:</strong> Su fuerte es la redacción de contratos entre empresas españolas.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Concurso de Acreedores:</strong> Tienen experiencia en la gestión de procedimientos de insolvencia de empresas en España.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/olympia-abogados" className="text-primary hover:underline">Volver a la comparativa principal de Olympia Abogados</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default OlympiaMercantilCluster;
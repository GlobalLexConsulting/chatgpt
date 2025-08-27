import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const OlympiaInmobiliarioCluster = () => {
  const pageTitle = "Derecho Inmobiliario y Fiscalidad: ConsultGlobalLex vs. Olympia Abogados";
  const pageDescription = "Olympia Abogados es experto en la compraventa de inmuebles. Nosotros añadimos una capa crucial: la optimización fiscal de la inversión, especialmente para no residentes y a través de estructuras societarias.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" },
    { label: "Derecho Inmobiliario", path: "/comparativas/olympia-abogados/derecho-inmobiliario" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Inversión Inmobiliaria: Del Contrato de Arras a la Estrategia Fiscal</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Comprar una propiedad es más que firmar ante notario. Es una inversión que debe ser fiscalmente eficiente. Ahí es donde nuestro enfoque integrado marca la diferencia.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Visión 360° de la Inversión Inmobiliaria</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estructuración de la Compra:</strong> Analizamos si es más conveniente comprar como persona física, a través de una SL, o incluso una entidad extranjera, para optimizar la tributación de los alquileres y la futura venta.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Fiscalidad para No Residentes:</strong> Somos expertos en el Impuesto sobre la Renta de No Residentes (IRNR) y en la aplicación de convenios para evitar la doble imposición sobre los rendimientos del alquiler.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Golden Visa a través de Inversión Inmobiliaria:</strong> Integramos la compra del inmueble con el proceso de obtención de la residencia por inversión.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Due Diligence Urbanística y Legal:</strong> Además de la 'due diligence' legal estándar, realizamos un análisis urbanístico para detectar posibles contingencias.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco del Derecho Inmobiliario Tradicional</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Gestión de la Compraventa:</strong> Su principal función es asegurar la legalidad de la transacción: redacción de contratos de arras, asistencia en notaría, inscripción en el Registro.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Arrendamientos Urbanos:</strong> Son expertos en la redacción y negociación de contratos de alquiler de larga duración conforme a la LAU.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Comunidades de Propietarios:</strong> Asesoran en conflictos y gestiones relacionadas con la Ley de Propiedad Horizontal.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Fiscalidad Básica:</strong> Su asesoramiento fiscal se suele limitar a la liquidación de los impuestos asociados a la compraventa (ITP, IVA, Plusvalía Municipal).</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/olympia-abogados" className="text-primary hover:underline">Volver a la comparativa principal de Olympia Abogados</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default OlympiaInmobiliarioCluster;
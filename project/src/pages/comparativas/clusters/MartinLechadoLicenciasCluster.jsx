import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const MartinLechadoLicenciasCluster = () => {
  const pageTitle = "Gestión de Licencias Turísticas: ConsultGlobalLex vs. Martín Lechado";
  const pageDescription = "Martín Lechado asesora a negocios digitales. Nosotros aplicamos esa visión a nichos específicos como la gestión de licencias turísticas, combinando el trámite con la optimización fiscal del alquiler.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Martín Lechado", path: "/comparativas/martin-lechado" },
    { label: "Licencias Turísticas", path: "/comparativas/martin-lechado/licencias-turisticas" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Licencias Turísticas: Más Allá del Trámite Administrativo</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">Conseguir la licencia es solo el principio. La clave es cómo tributan los rendimientos de ese alquiler, especialmente si eres no residente o tienes una estructura internacional.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestro Enfoque Integral para Propietarios</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Planificación Fiscal Previa:</strong> Antes de solicitar la licencia, analizamos si te conviene operar como persona física, a través de una SL, o incluso una entidad extranjera.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Optimización para No Residentes:</strong> Somos expertos en la tributación de los rendimientos inmobiliarios para no residentes, aplicando convenios para evitar la doble imposición.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Gestión de IVA en Alquileres Turísticos:</strong> Te guiamos en la compleja normativa del IVA para alquileres de corta estancia y los servicios asociados.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Consolidación de Múltiples Propiedades:</strong> Si tienes varias propiedades, diseñamos la estructura societaria óptima para gestionarlas de forma eficiente.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Enfoque de una Asesoría Digital Generalista</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Foco en el Trámite de la Licencia:</strong> El servicio puede centrarse en la obtención del número de registro turístico.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Fiscalidad Estándar:</strong> El asesoramiento fiscal se basará en la declaración estándar de rendimientos del capital inmobiliario en el IRPF.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Menor Experiencia en No Residentes:</strong> La complejidad de la tributación para no residentes puede no ser su principal área de especialización.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/martin-lechado" className="text-primary hover:underline">Volver a la comparativa principal de Martín Lechado</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default MartinLechadoLicenciasCluster;
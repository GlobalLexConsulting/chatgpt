import React from 'react';
import SEOPage from '@/pages/SEOPage';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const OlympiaBancarioCluster = () => {
  const pageTitle = "Derecho Bancario: ConsultGlobalLex vs. Olympia Abogados";
  const pageDescription = "Olympia Abogados es experto en litigios bancarios tradicionales. Nuestro enfoque se centra en los retos del negocio digital: apertura de cuentas para LLCs, gestión de pasarelas de pago y cumplimiento AML en fintech.";
  const breadcrumbItems = [
    { label: "Comparativas", path: "/comparativas" },
    { label: "vs Olympia Abogados", path: "/comparativas/olympia-abogados" },
    { label: "Derecho Bancario", path: "/comparativas/olympia-abogados/derecho-bancario" }
  ];

  return (
    <SEOPage title={pageTitle} description={pageDescription}>
      <div className="container mx-auto px-4 py-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Derecho Bancario: El Mundo Tradicional vs. la Nueva Economía Digital</h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">El derecho bancario ha evolucionado. Los problemas ya no son solo las cláusulas suelo; ahora son las cuentas bloqueadas por Wise, los requisitos de Stripe Atlas o la apertura de cuentas para no residentes.</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold">Nuestra Especialización en Banca Digital y Transfronteriza</h2>
          <ul>
            <li><Check className="inline text-green-500 mr-2" /><strong>Apertura de Cuentas para No Residentes y LLCs:</strong> Tenemos una amplia experiencia y red de contactos para facilitar la apertura de cuentas bancarias en EE.UU. y la UE para estructuras no estándar.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Cumplimiento para Pasarelas de Pago:</strong> Asesoramos sobre los requisitos de 'Know Your Customer' (KYC) y 'Anti-Money Laundering' (AML) de plataformas como Stripe, PayPal y otras fintech.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Resolución de Bloqueos en Plataformas Fintech:</strong> Ayudamos a empresas y particulares a resolver bloqueos de cuentas y retenciones de fondos en neobancos y plataformas de pago.</li>
            <li><Check className="inline text-green-500 mr-2" /><strong>Estructuración de Pagos Internacionales:</strong> Diseñamos flujos de pago eficientes para minimizar comisiones y optimizar la gestión de divisas.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">El Foco del Derecho Bancario Tradicional</h2>
          <ul>
            <li><X className="inline text-red-500 mr-2" /><strong>Litigios contra la Banca Tradicional:</strong> Su principal campo de batalla son las reclamaciones por cláusulas abusivas (suelo, IRPH), hipotecas multidivisa, etc.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Negociación de Deudas y Reestructuraciones:</strong> Son expertos en negociar con entidades bancarias españolas para reestructurar deudas y préstamos.</li>
            <li><X className="inline text-red-500 mr-2" /><strong>Ejecuciones Hipotecarias:</strong> Tienen una profunda experiencia en la defensa de clientes en procedimientos de ejecución hipotecaria.</li>
          </ul>
        </div>
        <div className="mt-8">
            <Link to="/comparativas/olympia-abogados" className="text-primary hover:underline">Volver a la comparativa principal de Olympia Abogados</Link>
        </div>
      </div>
    </SEOPage>
  );
};

export default OlympiaBancarioCluster;
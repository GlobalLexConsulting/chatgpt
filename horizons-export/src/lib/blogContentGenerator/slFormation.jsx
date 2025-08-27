import React from 'react';
import { Building } from 'lucide-react';

export const generateSLFormationContent = () => `
   <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><Building class="h-6 w-6 mr-2 text-primary"/> Crear una S.L. en España: Guía 2025</h3>
    <p class="text-lg leading-relaxed mb-6">Pasos esenciales para constituir una Sociedad Limitada en España:</p>
    <ol class="list-decimal list-inside space-y-3 mb-6 pl-4 text-lg">
        <li><strong>Certificado Negativo Denominación Social:</strong> Obtener en Registro Mercantil Central (RMC).</li>
        <li><strong>Cuenta Bancaria y Capital Social:</strong> Abrir cuenta a nombre de la sociedad "en constitución" y depositar capital (€1 mínimo tras Ley Crea y Crece, aunque se recomienda más para solvencia).</li>
        <li><strong>Redacción Estatutos Sociales:</strong> Definir objeto social, domicilio, administración, etc.</li>
        <li><strong>Escritura Pública de Constitución:</strong> Firmar ante Notario (socios y administradores).</li>
        <li><strong>Solicitud NIF Provisional:</strong> Presentar Modelo 036 en Hacienda (AEAT).</li>
        <li><strong>Liquidación ITP y AJD:</strong> Exento para constitución, pero presentar autoliquidación.</li>
        <li><strong>Inscripción en Registro Mercantil Provincial:</strong> Presentar escritura y documentación.</li>
        <li><strong>Obtención NIF Definitivo:</strong> Una vez inscrita, Hacienda asigna el NIF definitivo.</li>
        <li><strong>Declaración Censal Definitiva:</strong> Actualizar Modelo 036 con NIF definitivo y alta en IAE.</li>
        <li><strong>Libros Oficiales y Legalización:</strong> Libros de actas, socios, contabilidad. Legalizar telemáticamente.</li>
         <li><strong>Alta en Seguridad Social:</strong> Empresa y administradores/trabajadores.</li>
    </ol>
     <h4 class="text-xl font-semibold mb-3 mt-6">Principales Impuestos de una S.L.:</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li><strong>Impuesto sobre Sociedades (IS):</strong> Tipo general 25%. Tipo reducido 15% para nuevas entidades (condicionado, 2 primeros periodos con beneficio).</li>
        <li><strong>IVA:</strong> Declaraciones trimestrales (Modelo 303) y resumen anual (Modelo 390).</li>
        <li><strong>Retenciones IRPF:</strong> Sobre nóminas, facturas de profesionales, alquileres (Modelos 111, 115 trimestrales; 190, 180 anuales).</li>
     </ul>
     <p class="text-lg leading-relaxed mt-6">El proceso requiere planificación y coordinación. Contar con asesoramiento profesional es recomendable.</p>
`;
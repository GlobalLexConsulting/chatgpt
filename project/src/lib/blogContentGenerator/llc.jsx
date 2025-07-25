import React from 'react';
import { Landmark } from 'lucide-react';

export const generateLLCContent = () => `
   <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><Landmark class="h-6 w-6 mr-2 text-primary"/> Crear una LLC en USA siendo No Residente: Guía 2025</h3>
    <p class="text-lg leading-relaxed mb-6">La LLC en EE.UU. es popular para extranjeros por su flexibilidad y protección. Pasos clave:</p>
    <ol class="list-decimal list-inside space-y-3 mb-6 pl-4 text-lg">
      <li><strong>Elegir Estado:</strong> Wyoming, Delaware, Nuevo México (privacidad, bajos costes, sin impuesto estatal si no hay negocio en el estado).</li>
      <li><strong>Agente Registrado:</strong> Obligatorio, dirección física en el estado.</li>
      <li><strong>Artículos de Organización:</strong> Presentar documento de formación.</li>
      <li><strong>Obtener EIN:</strong> Número fiscal del IRS (Formulario SS-4 por fax/correo para no residentes sin SSN/ITIN).</li>
      <li><strong>Acuerdo Operativo:</strong> Documento interno clave (recomendado).</li>
      <li><strong>Cuenta Bancaria USA:</strong> Complejo. Viajar, neobancos (Mercury, Wise) o servicios especializados.</li>
    </ol>
     <h4 class="text-xl font-semibold mb-3 mt-6">Fiscalidad Clave (No Residente, Pass-Through):</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li><strong>Sin Negocio en USA (USTB/ECI):</strong> LLC transparente. Beneficios tributan en país de residencia del socio.</li>
        <li><strong>Con Negocio en USA (USTB/ECI):</strong> Socios no residentes sujetos a impuestos federales/estatales en USA.</li>
        <li><strong>Formulario 5472 + 1120 Pro-forma (¡CRÍTICO!):</strong> Obligatorio anualmente si socio extranjero >= 25%. Aplica INCLUSO SIN INGRESOS/ACTIVIDAD USA. Multas severas ($25,000+).</li>
     </ul>
     <p class="text-lg leading-relaxed mt-6">El cumplimiento, especialmente del Formulario 5472, es crucial.</p>
`;
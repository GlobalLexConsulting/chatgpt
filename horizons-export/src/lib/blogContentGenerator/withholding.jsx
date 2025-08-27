import React from 'react';
import { Landmark } from 'lucide-react';

export const generateWithholdingContent = () => `
   <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><Landmark class="h-6 w-6 mr-2 text-primary"/> W-8BEN-E vs. Certificado Residencia: Evitar Doble Imposición USA-España</h3>
    <p class="text-lg leading-relaxed mb-6">Los pagos desde EE.UU. (dividendos, intereses, royalties) a entidades o personas españolas sufren una retención estándar del 30%. El Tratado de Doble Imposición (DTT) entre EE.UU. y España permite reducirla, pero requiere la documentación adecuada.</p>
    <h4 class="text-xl font-semibold mb-3 mt-6">Documentación Esencial:</h4>
    <ol class="list-decimal list-inside space-y-3 mb-6 pl-4 text-lg">
        <li><strong>Formulario W-8BEN-E (Entidades) / W-8BEN (Individuos):</strong> Certifica tu estatus de no residente fiscal en EE.UU. y reclama los beneficios del tratado España-EE.UU., especificando el tipo de retención reducido aplicable (0%, 5%, 10%, 15%). Debe incluir el NIF español.</li>
        <li><strong>Certificado de Residencia Fiscal (Emitido por la AEAT):</strong> Confirma oficialmente tu residencia fiscal en España ante el pagador estadounidense o el IRS si fuera necesario. El Formulario 6166 es el equivalente emitido por el IRS para residentes de EE.UU.</li>
    </ol>
    <h4 class="text-xl font-semibold mb-3 mt-6">Errores Comunes y Consecuencias:</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li>Usar el formulario incorrecto (BEN para entidad o viceversa).</li>
        <li>Información incompleta en la reclamación del tratado.</li>
        <li>Formulario expirado (validez de 3 años).</li>
        <li>No presentarlo: retención automática del 30%.</li>
     </ul>
     <p class="text-lg leading-relaxed mt-6">Gestionar correctamente estos formularios es vital para optimizar los flujos financieros transfronterizos.</p>
`;
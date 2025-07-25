import React from 'react';
import { FileText } from 'lucide-react';

export const generateDAC7Content = () => `
    <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><FileText class="h-6 w-6 mr-2 text-primary"/> DAC7: Nuevas Obligaciones de Reporte para Plataformas Digitales</h3>
    <p class="text-lg leading-relaxed mb-6">La Directiva DAC7 impone a los operadores de plataformas digitales (marketplaces, apps de economía colaborativa) la obligación de recopilar, verificar y reportar información sobre los ingresos obtenidos por sus vendedores/proveedores residentes en la UE.</p>
    <h4 class="text-xl font-semibold mb-3 mt-6">¿Quién Debe Reportar?</h4>
    <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
      <li>Operadores de plataformas digitales (software, incluyendo sitios web y apps) que conectan vendedores con usuarios para realizar "Actividades Pertinentes".</li>
      <li>Aplica a operadores con nexo en la UE (residencia fiscal, constitución, gestión, establecimiento permanente) o, si no tienen nexo, a aquellos que facilitan actividades a vendedores de la UE o alquiler de inmuebles en la UE.</li>
    </ul>
     <h4 class="text-xl font-semibold mb-3 mt-6">Actividades Pertinentes Cubiertas</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li>Alquiler de bienes inmuebles (residencial, comercial, parkings).</li>
        <li>Servicios personales realizados por el vendedor a petición del usuario (transporte, entrega, tutoría, limpieza, etc.).</li>
        <li>Venta de bienes.</li>
        <li>Alquiler de cualquier medio de transporte.</li>
     </ul>
    <h4 class="text-xl font-semibold mb-3 mt-6">Información Clave a Reportar sobre Vendedores</h4>
    <p class="text-lg leading-relaxed mb-6">Las plataformas deben reportar anualmente datos como:</p>
    <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li>Identificación del vendedor (nombre, dirección, NIF/VAT, fecha nacimiento/número registro mercantil).</li>
        <li>Identificador de la cuenta financiera donde se pagan los ingresos.</li>
        <li>Contraprestación total pagada o acreditada trimestralmente y número de actividades.</li>
        <li>Comisiones, tasas u otros importes retenidos por la plataforma trimestralmente.</li>
        <li>Dirección y número de registro catastral de los inmuebles alquilados (si aplica).</li>
    </ul>
     <h4 class="text-xl font-semibold mb-3 mt-6">Impacto y Próximos Pasos</h4>
     <p class="text-lg leading-relaxed mb-6">DAC7 aumenta la transparencia fiscal en la economía digital. Las plataformas deben implementar procesos robustos de 'due diligence' para recopilar y verificar la información de los vendedores. Los vendedores deben ser conscientes de que sus ingresos serán reportados a las autoridades fiscales.</p>
     <p class="text-lg leading-relaxed mt-6">Para estructuras holding, como las de Malta, aunque no directamente afectadas, el aumento general de la transparencia fiscal refuerza la importancia de demostrar sustancia económica real y propósito comercial legítimo.</p>
`;
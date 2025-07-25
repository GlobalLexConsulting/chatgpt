import React from 'react';
import { BarChart } from 'lucide-react';

export const generatePillarTwoContent = () => `
    <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><BarChart class="h-6 w-6 mr-2 text-primary"/> ¿Qué es el Pilar Dos (GloBE) y Cómo Prepararse?</h3>
    <p class="text-lg leading-relaxed mb-6">El Pilar Dos de la OCDE introduce un impuesto mínimo global efectivo del 15% para grandes grupos multinacionales (ingresos consolidados > €750M). Su objetivo es frenar la competencia fiscal desleal y asegurar que las grandes empresas paguen un mínimo de impuestos donde operan. ¿Está tu empresa lista?</p>
    <h4 class="text-xl font-semibold mb-3 mt-6">¿A Quién Afecta Principalmente?</h4>
    <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
      <li>Grupos multinacionales con ingresos consolidados superiores a 750 millones de euros anuales en al menos dos de los últimos cuatro ejercicios.</li>
      <li>Entidades del grupo ubicadas en jurisdicciones donde el tipo impositivo efectivo (ETR), calculado según las reglas GloBE, sea inferior al 15%.</li>
    </ul>
    <h4 class="text-xl font-semibold mb-3 mt-6">Mecanismos Clave: IIR y UTPR</h4>
    <p class="text-lg leading-relaxed mb-6">La recaudación del impuesto complementario ("top-up tax") se asegura mediante:</p>
    <ol class="list-decimal list-inside space-y-3 mb-6 pl-4 text-lg">
        <li><strong>Income Inclusion Rule (IIR):</strong> Regla principal. La matriz última (o intermedia) del grupo calcula y paga el impuesto complementario correspondiente a las ganancias de filiales de baja tributación.</li>
        <li><strong>Undertaxed Payments Rule (UTPR):</strong> Regla secundaria. Aplica si la IIR no cubre toda la baja tributación (ej., si la propia matriz está en una jurisdicción de baja tributación). Permite a otras jurisdicciones donde opera el grupo denegar deducciones o exigir un ajuste equivalente para recaudar el impuesto complementario restante.</li>
    </ol>
     <h4 class="text-xl font-semibold mb-3 mt-6">Pasos Estratégicos para Empresas</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li><strong>Evaluación de Alcance:</strong> Confirmar si el grupo supera el umbral de ingresos.</li>
        <li><strong>Recopilación de Datos:</strong> Adaptar sistemas para recopilar los datos financieros y fiscales necesarios bajo las reglas GloBE.</li>
        <li><strong>Cálculo del ETR y Top-Up Tax:</strong> Realizar cálculos jurisdicción por jurisdicción.</li>
        <li><strong>Modelado de Impacto:</strong> Evaluar el impacto financiero y operativo en la estructura del grupo.</li>
        <li><strong>Cumplimiento y Reporte:</strong> Prepararse para la presentación de la declaración GloBE (GloBE Information Return - GIR).</li>
     </ul>
     <p class="text-lg leading-relaxed mt-6">La implementación del Pilar Dos requiere un análisis proactivo y una posible reestructuración para mitigar impactos adversos.</p>
`;
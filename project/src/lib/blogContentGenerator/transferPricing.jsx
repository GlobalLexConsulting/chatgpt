import React from 'react';
import { FileText } from 'lucide-react';

export const generateTransferPricingContent = () => `
   <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><FileText class="h-6 w-6 mr-2 text-primary"/> Documentación de Precios de Transferencia (Master File / Local File)</h3>
    <p class="text-lg leading-relaxed mb-6">La Acción 13 BEPS (OCDE) estandariza la documentación de precios de transferencia (TP) para dar transparencia a las administraciones fiscales sobre políticas globales y su implementación local.</p>
    <h4 class="text-xl font-semibold mb-3 mt-6">Estructura Clave:</h4>
    <ol class="list-decimal list-inside space-y-3 mb-6 pl-4 text-lg">
        <li><strong>Master File:</strong> Visión global del grupo (negocio, estructura, intangibles, finanzas, políticas TP). Preparado por la matriz.</li>
        <li><strong>Local File:</strong> Foco en transacciones vinculadas de la entidad local (análisis funcional, método TP, comparables 'arm's length').</li>
        <li><strong>Country-by-Country Report (CbCR):</strong> Para grupos >€750M. Datos agregados por jurisdicción (ingresos, beneficios, impuestos, empleados, etc.). Herramienta de riesgo fiscal.</li>
    </ol>
    <h4 class="text-xl font-semibold mb-3 mt-6">Contenido Esencial (Resumen):</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li><strong>Master File:</strong> Estructura, motores beneficio, cadena suministro, intangibles, financiación, estados consolidados.</li>
        <li><strong>Local File:</strong> Entidad local, transacciones detalladas, análisis comparabilidad, método TP, estados locales, contratos.</li>
     </ul>
     <p class="text-lg leading-relaxed mt-6">Una documentación robusta es clave para defender políticas TP y minimizar riesgos fiscales.</p>
`;
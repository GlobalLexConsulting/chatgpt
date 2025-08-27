import React from 'react';
import { Percent } from 'lucide-react';
import { tagCheck } from './utils';

export const generateVatIgicContent = (post) => {
    const tags = post.tags || [];
    const isIGIC = tagCheck(tags, ["IGIC", "Canarias"]);
    const isIntracom = tagCheck(tags, ["Intracomunitario", "UE", "IVA", "OSS", "VIES", "ROI"]);

    const taxType = isIGIC ? "IGIC" : "IVA";
    const model303 = isIGIC ? "420" : "303";
    const model390 = isIGIC ? "425" : "390";
    const model349 = isIGIC ? "415" : "349"; // Modelo 415 Canarias es Declaración anual op. con terceras personas

    let content = `
       <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><Percent class="h-6 w-6 mr-2 text-primary"/> Gestión del ${taxType} ${isIGIC ? 'en Canarias' : (isIntracom ? 'Intracomunitario' : '')} (2025)</h3>
        <p class="text-lg leading-relaxed mb-6">El ${taxType} (${isIGIC ? 'Impuesto General Indirecto Canario' : 'Impuesto sobre el Valor Añadido'}) grava el consumo final. Su correcta gestión, especialmente en operaciones ${isIGIC ? 'canarias' : 'internacionales'}, es crucial para evitar sanciones.</p>
    `;

    if (isIGIC) {
        content += `
            <h4 class="text-xl font-semibold mb-3 mt-6">Particularidades del IGIC:</h4>
            <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
                <li><strong>Tipos Impositivos:</strong> Diferentes al IVA peninsular (0%, 3%, 7% general, 9.5%, 15%).</li>
                <li><strong>Ámbito Territorial:</strong> Solo aplica en las Islas Canarias.</li>
                <li><strong>Operaciones con Península/UE/Extranjero:</strong> Se consideran importaciones/exportaciones, sujetas a trámites aduaneros (DUA) y liquidación de IVA/IGIC correspondiente en destino/origen según el caso.</li>
                <li><strong>Régimen Especial de Pequeño Empresario (REPEP):</strong> Simplificación para autónomos con facturación limitada.</li>
                <li><strong>Zona Especial Canaria (ZEC):</strong> Entidades ZEC pueden tener exenciones o tipos reducidos de IGIC en ciertas operaciones.</li>
            </ul>
        `;
    } else if (isIntracom) {
         content += `
            <h4 class="text-xl font-semibold mb-3 mt-6">Claves del IVA Intracomunitario (UE):</h4>
            <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
                <li><strong>ROI/VIES:</strong> Necesario estar inscrito en el Registro de Operadores Intracomunitarios (ROI) y validar el NIF-IVA del cliente/proveedor en el VIES para aplicar las reglas especiales.</li>
                <li><strong>Entregas Intracomunitarias de Bienes (EIB):</strong> Operación B2B. Venta exenta de IVA en origen si el comprador tiene NIF-IVA válido y hay prueba de transporte a otro Estado Miembro. El comprador realiza una Adquisición Intracomunitaria (AIB) con inversión del sujeto pasivo (autoliquida IVA).</li>
                <li><strong>Prestaciones de Servicios B2B:</strong> Regla general localiza el servicio donde el destinatario tiene su sede. El prestador emite factura sin IVA, y el destinatario autoliquida el IVA de su país (inversión del sujeto pasivo). Hay excepciones (inmuebles, eventos, etc.).</li>
                <li><strong>Prestaciones de Servicios B2C:</strong> Regla general localiza el servicio donde el prestador tiene su sede. Excepciones importantes para servicios electrónicos, telecomunicaciones, radiodifusión y TV (TBE), que tributan donde reside el consumidor.</li>
                 <li><strong>Ventanilla Única (OSS/IOSS):</strong> Simplifica la declaración del IVA para ventas B2C de bienes a distancia y servicios TBE a consumidores en distintos países de la UE, declarando e ingresando todo el IVA en un solo país.</li>
            </ul>
        `;
    } else {
         content += `
            <h4 class="text-xl font-semibold mb-3 mt-6">Principios Básicos del IVA (España):</h4>
            <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
                <li><strong>Hecho Imponible:</strong> Entregas de bienes y prestaciones de servicios por empresarios/profesionales.</li>
                <li><strong>Devengo:</strong> Momento en que se realiza la operación (generalmente).</li>
                <li><strong>Base Imponible:</strong> Contraprestación total.</li>
                <li><strong>Tipos Impositivos:</strong> General (21%), Reducido (10%), Superreducido (4%).</li>
                 <li><strong>Deducción:</strong> Posibilidad de deducir el IVA soportado en bienes/servicios afectos a la actividad.</li>
                 <li><strong>Regla de Prorrata:</strong> Si realizas operaciones exentas y no exentas, limita la deducción del IVA soportado.</li>
            </ul>
        `;
    }

    content += `
        <h4 class="text-xl font-semibold mb-3 mt-6">Obligaciones Formales Comunes (${taxType}):</h4>
         <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
            <li><strong>Expedición de Facturas:</strong> Cumpliendo todos los requisitos reglamentarios.</li>
            <li><strong>Libros Registro:</strong> Facturas emitidas, recibidas, bienes de inversión, operaciones intracomunitarias (si aplica).</li>
            <li><strong>Declaraciones Periódicas:</strong> Modelo ${model303} (generalmente trimestral) para liquidar la diferencia entre ${taxType} repercutido y soportado.</li>
            <li><strong>Resumen Anual:</strong> Modelo ${model390}. Informativo.</li>
            ${isIntracom || isIGIC ? `<li><strong>Declaración Recapitulativa de Operaciones Intracomunitarias / con Terceros:</strong> Modelo ${model349}. Informativo.</li>` : ''}
         </ul>
         <p class="text-lg leading-relaxed mt-6">Una gestión incorrecta del ${taxType}, especialmente en operaciones internacionales, puede acarrear importantes sanciones y problemas de flujo de caja.</p>
    `;
    return content;
};
import React from 'react';
import { Globe } from 'lucide-react';
import { tagCheck } from './utils';

export const generateNomadGuideContent = (post) => {
    const tags = post.tags || [];
    const country = tags.find(t => ['España', 'Italia', 'Portugal', 'Andorra', 'Lisboa', 'Berlín', 'Alemania'].includes(t)) || "este país";
    const displayCountry = country === 'Lisboa' ? 'Portugal' : (country === 'Berlín' ? 'Alemania' : country);

    let regimeName = "";
    let regimeDetails = "";

    if (tagCheck(tags, ['España', 'Ley Beckham'])) {
        regimeName = "Ley Beckham (Régimen Especial para Trabajadores Desplazados)";
        regimeDetails = `<p class="text-lg leading-relaxed mb-6">Permite a trabajadores (y ahora también ciertos nómadas digitales y emprendedores bajo condiciones específicas) que se trasladen a España tributar como no residentes (IRNR) a un tipo fijo del 24% sobre los rendimientos del trabajo obtenidos en España hasta €600,000 (47% por encima) durante el año del traslado y los 5 siguientes. No se tributa por rentas obtenidas fuera de España (excepto rendimientos del trabajo). Requisitos clave: no haber sido residente fiscal en España en los 5 años anteriores, traslado por contrato laboral (con excepciones), actividad económica cualificada, etc.</p>`;
    } else if (tagCheck(tags, ['Italia', 'Impatriati'])) {
        regimeName = "Régimen Impatriati (Lavoratori Impatriati)";
        regimeDetails = `<p class="text-lg leading-relaxed mb-6">Ofrece una exención fiscal significativa sobre los ingresos laborales o profesionales generados en Italia. Generalmente, solo el 30% de los ingresos está sujeto a impuestos (o el 10% si se traslada a ciertas regiones del sur). Duración: 5 años, extensible otros 5 bajo condiciones (ej., hijos, compra de vivienda). Requisitos: no haber sido residente fiscal en Italia en los 2 años anteriores, comprometerse a ser residente fiscal en Italia por al menos 2 años, realizar la actividad laboral/profesional principalmente en Italia.</p>`;
    } else if (tagCheck(tags, ['Portugal', 'Lisboa'])) {
        regimeName = "Régimen NHR (Finiquitado) y Nuevo Régimen para Innovación";
        regimeDetails = `<p class="text-lg leading-relaxed mb-6"><strong class="text-red-600">¡Importante!</strong> El NHR ya no está disponible para nuevos residentes desde 2024. Existe un régimen transitorio para quienes cumplían condiciones en 2023 y un nuevo régimen de incentivos fiscales a la investigación científica e innovación (IFICI) con criterios estrictos.</p>`;
    } else if (tagCheck(tags, ['Andorra'])) {
        regimeName = "Residencia Fiscal Activa y Pasiva";
        regimeDetails = `<p class="text-lg leading-relaxed mb-6">Andorra ofrece IRPF máx. 10%, sin impuesto sucesiones/patrimonio. Requiere: <strong>Activa:</strong> Crear sociedad, cotizar, residir +183 días, depósito €50k. <strong>Pasiva:</strong> Invertir €600k, residir +90 días, depósitos adicionales.</p>`;
    } else if (tagCheck(tags, ['Alemania', 'Berlín', 'Expatriados'])) {
         regimeName = "Fiscalidad General para Expatriados";
         regimeDetails = `<p class="text-lg leading-relaxed mb-6">Alemania no tiene un régimen especial como Beckham o NHR, pero ofrece deducciones. Los residentes tributan por renta mundial a tipos progresivos de IRPF (Einkommensteuer), más posible impuesto eclesiástico y recargo de solidaridad.</p>`;
    }


    return `
        <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><Globe class="h-6 w-6 mr-2 text-primary"/> Guía Fiscal Nómada Digital en ${displayCountry} (2025)</h3>
        <p class="text-lg leading-relaxed mb-6">Residir fiscalmente en ${displayCountry} como nómada digital requiere entender las opciones fiscales.</p>
        ${regimeName ? `<h4 class="text-xl font-semibold mb-3 mt-6">Régimen Fiscal Clave: ${regimeName}</h4>${regimeDetails}` : ''}
        ${regimeName !== "Fiscalidad General para Expatriados" ? `<h4 class="text-xl font-semibold mb-3 mt-6">Régimen General</h4>
        <p class="text-lg leading-relaxed mb-6">Si no aplicas a un régimen especial, tributarás como residente ordinario por tu renta mundial a tipos progresivos de IRPF, considerando IVA/impuestos indirectos y seguridad social.</p>` : ''}
        <h3 class="text-2xl font-semibold mb-4 mt-10">Consideraciones Clave</h3>
         <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
            <li><strong>Residencia Fiscal:</strong> Determinarla (+183 días o centro intereses vitales).</li>
            <li><strong>Visado:</strong> Verificar visado de nómada digital o similar en ${displayCountry}.</li>
            <li><strong>Tratados Doble Imposición:</strong> Clave si tienes ingresos/activos fuera.</li>
            <li><strong>Seguridad Social:</strong> Verificar acuerdos bilaterales o necesidad de alta local.</li>
            <li><strong>IVA y Facturación (Autónomos):</strong> Conocer reglas locales e intracomunitarias si aplica.</li>
         </ul>
         <p class="text-lg leading-relaxed mt-6">La planificación previa es fundamental.</p>
    `;
};
import React from 'react';
import { Calculator } from 'lucide-react';
import { tagCheck } from './utils';

export const generateCryptoContent = (post) => {
    const tags = post.tags || [];
    const country = tagCheck(tags, ['Portugal']) ? 'Portugal' : (tagCheck(tags, ['España']) ? 'España' : 'General');

    let tradingTax = 'Sujeta a tipos de IRPF/Ganancias de Capital según país.';
    if (country === 'Portugal') {
        tradingTax = 'Ganancias <1 año: 28% fijo o englobado; >1 año: exento (¡ventaja!).';
    } else if (country === 'España') {
        tradingTax = 'Tributa en base del ahorro IRPF (19%-28%).';
    }

    let stakingTax = 'Suelen ser rendimientos de capital mobiliario.';
     if (country === 'Portugal') {
        stakingTax += ' Tributación al 28%.';
    } else if (country === 'España') {
        stakingTax += ' Tributan en base del ahorro IRPF (19%-28%).';
    }

    let reportingObligation = 'Verificar obligaciones locales (DAC8 en UE).';
    if (country === 'España') {
        reportingObligation = 'Declarar criptos en extranjero >€50k (Modelo 721 España). DAC8 reforzará esto en UE.';
    }


    return `
       <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><Calculator class="h-6 w-6 mr-2 text-primary"/> Fiscalidad de Criptomonedas en ${country} (2025)</h3>
        <p class="text-lg leading-relaxed mb-6">La tributación de criptoactivos es un área en constante evolución. Aspectos clave:</p>
        <h4 class="text-xl font-semibold mb-3 mt-6">Ganancias de Capital (Trading/Venta):</h4>
        <p class="text-lg leading-relaxed mb-6">La venta con beneficio genera una ganancia patrimonial. ${tradingTax}</p>
        <h4 class="text-xl font-semibold mb-3 mt-6">Staking / Lending / Rendimientos DeFi:</h4>
        <p class="text-lg leading-relaxed mb-6">${stakingTax} Determinar correctamente el momento de imputación (cuando se recibe/controla).</p>
         <h4 class="text-xl font-semibold mb-3 mt-6">Minería:</h4>
        <p class="text-lg leading-relaxed mb-6">Generalmente considerada actividad económica. Ingresos tributan en IRPF (rendimientos act. económicas), gastos relacionados deducibles. Implicaciones de IVA pueden variar.</p>
         <h4 class="text-xl font-semibold mb-3 mt-6">Airdrops / Forks:</h4>
         <p class="text-lg leading-relaxed mb-6">Tratamiento puede variar. A menudo se considera ganancia patrimonial a valor de mercado en el momento de recepción, o ingreso cero hasta venta.</p>
         <h4 class="text-xl font-semibold mb-3 mt-6">Obligaciones de Información:</h4>
        <p class="text-lg leading-relaxed mb-6">${reportingObligation}</p>
         <p class="text-lg leading-relaxed mt-6">Un registro detallado de todas las transacciones (FIFO/LIFO) es esencial para una correcta declaración y cálculo de impuestos.</p>
    `;
};
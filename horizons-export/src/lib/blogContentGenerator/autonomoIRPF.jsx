import React from 'react';
import { UserCircle } from 'lucide-react';

export const generateAutonomoIRPFContent = () => `
   <h3 class="text-2xl font-semibold mb-4 mt-10 flex items-center"><UserCircle class="h-6 w-6 mr-2 text-primary"/> Deducciones IRPF para Autónomos en España (Estimación Directa - 2025)</h3>
    <p class="text-lg leading-relaxed mb-6">Optimizar tu declaración de IRPF como autónomo en régimen de estimación directa (normal o simplificada) pasa por conocer y aplicar correctamente los gastos deducibles.</p>
    <h4 class="text-xl font-semibold mb-3 mt-6">Requisitos Generales de Deducibilidad:</h4>
     <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li><strong>Vinculación a la actividad:</strong> Gasto necesario para obtener ingresos.</li>
        <li><strong>Justificación documental:</strong> Principalmente factura completa.</li>
        <li><strong>Registro contable:</strong> Anotado en libros de gastos/inversiones.</li>
        <li><strong>Imputación temporal:</strong> Gasto corresponde al ejercicio declarado.</li>
     </ul>
    <h4 class="text-xl font-semibold mb-3 mt-6">Gastos Deducibles Comunes:</h4>
    <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li><strong>Consumos de explotación:</strong> Compra de mercaderías, materias primas.</li>
        <li><strong>Sueldos y Salarios:</strong> Si tienes empleados a cargo.</li>
        <li><strong>Seguridad Social:</strong> Cuota de autónomos (RETA) y cotizaciones de empleados.</li>
        <li><strong>Arrendamientos y Cánones:</strong> Alquiler de local, leasing, licencias software.</li>
        <li><strong>Reparaciones y Conservación:</strong> Mantenimiento de bienes afectos (no mejoras).</li>
        <li><strong>Servicios Profesionales Independientes:</strong> Honorarios de gestoría, abogados, etc.</li>
        <li><strong>Suministros (Agua, Luz, Internet...):</strong>
             <ul class="list-circle list-inside ml-6 space-y-1">
                <li>Si trabajas en local afecto: 100% deducible.</li>
                <li>Si trabajas desde casa: Aplicar porcentaje de vivienda afecta (m² y horas). Para suministros, se puede aplicar 30% sobre la parte proporcional de la vivienda afecta, salvo prueba en contrario.</li>
            </ul>
        </li>
        <li><strong>Tributos Fiscalmente Deducibles:</strong> IBI del local/vivienda afecta, Tasa de basuras, IAE. (No IVA, sanciones, IRPF).</li>
        <li><strong>Gastos Financieros:</strong> Intereses de préstamos para la actividad, comisiones bancarias.</li>
        <li><strong>Amortizaciones:</strong> Desgaste de inmovilizado (según tablas oficiales).</li>
        <li><strong>Provisiones Deducibles:</strong> Ej., por insolvencias (Estimación Directa Normal).</li>
         <li><strong>Seguro de Salud:</strong> Propio, cónyuge e hijos <25 convivientes (límite 500€/persona/año, 1500€ discapacidad).</li>
         <li><strong>Gastos de Manutención (Dietas):</strong> Propios del autónomo, en establecimientos hostelería, pago electrónico, relacionados con actividad, límites diarios/municipio.</li>
        <li><strong>Gastos de Difícil Justificación (Estimación Directa Simplificada):</strong> 7% del rendimiento neto previo (máx. 2.000€/año).</li>
    </ul>
     <p class="text-lg leading-relaxed mt-6">Es fundamental llevar una contabilidad ordenada y conservar todas las facturas para justificar las deducciones ante una posible inspección.</p>
`;
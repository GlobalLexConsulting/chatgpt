import React from 'react';
import { FileText, AlertTriangle } from 'lucide-react';

export const tagCheck = (tags, tagList) => tags.some(tag => tagList.includes(tag));

export const generateDefaultIntro = (post) => `
    <p class="text-lg leading-relaxed mb-6">${post.excerpt} A continuación, profundizamos en los aspectos clave y cómo pueden impactar tu estrategia global.</p>
    <img  alt="Ilustración conceptual para ${post.title}" class="my-8 rounded-lg shadow-md w-full max-w-3xl mx-auto aspect-video object-cover" src="https://images.unsplash.com/photo-1617469001581-20eb5ca99e7b" />
`;

export const generateDefaultFallback = (title) => `
    <h3 class="text-2xl font-semibold mb-4 mt-10">Análisis Profundo de ${title}</h3>
    <p class="text-lg leading-relaxed mb-6">Exploramos las implicaciones prácticas de este tema. ¿Cómo afecta tu planificación fiscal o estructura legal internacional? Consideramos escenarios comunes y estrategias recomendadas.</p>
    <h4 class="text-xl font-semibold mb-3 mt-6">Puntos Clave:</h4>
    <ul class="list-disc list-inside space-y-2 mb-6 pl-4 text-lg">
        <li>Impacto en tributación transfronteriza.</li>
        <li>Nuevas obligaciones de reporte o cumplimiento.</li>
        <li>Oportunidades de optimización legal.</li>
        <li>Riesgos potenciales y mitigación.</li>
    </ul>
    <h4 class="text-xl font-semibold mb-3 mt-6">Recomendaciones Estratégicas</h4>
    <p class="text-lg leading-relaxed mb-6">Sugerimos pasos para adaptarte y aprovechar oportunidades. La anticipación es clave.</p>
`;

export const generateDisclaimer = () => `
    <div class="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 text-blue-800 dark:text-blue-200 p-4 mt-10 rounded-r-lg" role="complementary">
      <div class="flex items-center">
          <FileText class="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0"/>
          <div>
            <p class="font-bold">¿Necesitas Ayuda Específica?</p>
            <p class="text-sm">Este tema puede ser complejo. Si tienes dudas sobre cómo afecta tu situación particular, <a href="/#contacto" class="underline font-medium hover:text-blue-600 dark:hover:text-blue-300">contacta con nuestros expertos</a>.</p>
          </div>
      </div>
    </div>

    <div class="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 mt-8 rounded-r-lg" role="alert">
      <div class="flex items-center">
          <AlertTriangle class="h-6 w-6 mr-3 text-yellow-600 dark:text-yellow-400 flex-shrink-0"/>
          <div>
            <p class="font-bold">Aviso Legal</p>
            <p class="text-sm">La información es general y no sustituye el asesoramiento profesional adaptado. Consulta siempre fuentes oficiales y expertos actualizados.</p>
          </div>
      </div>
    </div>

    <h3 class="text-2xl font-semibold mb-4 mt-10">En Resumen</h3>
    <p class="text-lg leading-relaxed">Comprender este tema es crucial para decisiones estratégicas internacionales. Mantente informado y busca asesoramiento experto.</p>
`;
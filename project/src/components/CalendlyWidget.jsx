import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWidget = ({ url }) => {
  if (!url) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">Enlace de Calendly no configurado.</p>
      </div>
    );
  }

  return (
    <div className="calendly-container min-h-[650px] relative">
       {/* Basic styles to prevent layout shifts while loading */}
       <style>{`
        .calendly-inline-widget iframe {
          min-width: 320px;
          height: 650px;
        }
      `}</style>
      <InlineWidget
        url={url}
        styles={{
          height: '650px', // Ensure height is applied
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
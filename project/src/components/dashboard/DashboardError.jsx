import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button component exists

const DashboardError = ({ onRetry }) => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 flex items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 dark:bg-background">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-destructive mb-3">Error al Cargar Datos</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          No pudimos cargar la información de tu panel. Por favor, intenta refrescar la página o contacta con soporte si el problema persiste.
        </p>
        <Button
           onClick={onRetry}
           className="btn-secondary" // Using a generic class, adjust if needed
        >
          Refrescar Página
        </Button>
      </div>
    </section>
  );
};

export default DashboardError;
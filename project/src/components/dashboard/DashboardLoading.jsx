import React from 'react';

const DashboardLoading = () => {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 flex items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 dark:bg-background">
      <div className="text-center">
        <p className="text-lg font-semibold text-primary">Cargando panel de cliente...</p>
        <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
      </div>
    </section>
  );
};

export default DashboardLoading;
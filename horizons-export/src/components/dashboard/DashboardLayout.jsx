import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardTabs from '@/components/dashboard/DashboardTabs';
import DashboardContent from '@/components/dashboard/DashboardContent';
import DashboardError from '@/components/dashboard/DashboardError'; // Import Error component

const DashboardLayout = ({
  profile,
  onLogout,
  onRefresh,
  isRefreshing,
  activeTab,
  onTabChange,
  data,
  userId,
  loadingData,
  dataError // Pass dataError down
}) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 pt-24 md:pt-28">
      <div className="container mx-auto px-4">
        <DashboardHeader
          profile={profile}
          onLogout={onLogout}
          onRefresh={onRefresh}
          isRefreshing={isRefreshing}
        />

        {/* Display data loading error if it occurred, allowing user to retry */}
        {dataError && !loadingData && (
           <div className="my-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded dark:bg-red-900/30 dark:border-red-600 dark:text-red-300">
             <p>
                Error al cargar los datos del panel: {dataError}
                <button onClick={onRefresh} className="underline font-semibold ml-2">Reintentar</button>
             </p>
           </div>
         )}


        <div className="mt-8 bg-white dark:bg-card shadow-lg rounded-lg overflow-hidden">
          <DashboardTabs activeTab={activeTab} onTabChange={onTabChange} />
          <div className="p-6 md:p-8">
            <DashboardContent
              // activeTab={activeTab} // DashboardContent now handles routing internally based on selected tab value
              data={data}
              userId={userId}
              loading={loadingData} // Pass loading state as 'loading' prop
              error={dataError} // Pass error state as 'error' prop
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import DashboardLoading from '@/components/dashboard/DashboardLoading';
import DashboardError from '@/components/dashboard/DashboardError';
import { useClientDashboardLogic } from '@/hooks/useClientDashboardLogic.js';

const ClientDashboardPage = () => {
  const {
    user,
    profile,
    authError,
    handleLogout,
    dashboardData,
    dataError,
    refetchData,
    activeTab,
    setActiveTab,
    isLoading, // Use consolidated loading state
    isRefreshing,
    isInitialLoading // Use initial loading state
  } = useClientDashboardLogic();

  // Show main loading screen only during the initial auth/data fetch sequence
  if (isInitialLoading) {
    console.log(`ClientDashboardPage: Initial Loading...`);
    return <DashboardLoading />;
  }

  // Show error screen if authentication failed (and initial load is done)
  if (authError) {
    console.error("ClientDashboardPage: Authentication error.", authError);
    return <DashboardError error={authError} />;
  }

  // Fallback check if user somehow null after initial load and no auth error (e.g., redirect failed)
  if (!user) {
     console.log("ClientDashboardPage: No user object after loading. Potential issue.");
     return <DashboardLoading message="Verificando estado de la sesión..." />; // Or redirect again
  }

  // Render the Dashboard Layout once initial loading is complete
  return (
    <DashboardLayout
      profile={profile}
      onLogout={handleLogout}
      onRefresh={refetchData}
      isRefreshing={isRefreshing} // Use the specific refresh state here
      activeTab={activeTab}
      onTabChange={setActiveTab}
      data={dashboardData}
      userId={user.id}
      loadingData={isLoading && !isRefreshing} // Pass general loading state if not refreshing
      dataError={dataError}
    />
  );
};

export default ClientDashboardPage;
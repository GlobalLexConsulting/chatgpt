import { useState, useEffect } from 'react';
import { useDashboardAuth } from '@/hooks/useDashboardAuth.js';
import useDashboardData from '@/hooks/useDashboardData.js';
import { useNavigate } from 'react-router-dom';

export const useClientDashboardLogic = () => {
  const { user, profile, loading: authLoading, error: authError, handleLogout } = useDashboardAuth();
  const { dashboardData, loadingData, dataError, refetchData } = useDashboardData(user);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Derived loading state
  const isLoading = authLoading || (loadingData && !dashboardData && !dataError);
  const isRefreshing = loadingData && !!dashboardData; // Only true if already have data

  // Redirect logic
  useEffect(() => {
    if (!authLoading && !user) {
      console.log("useClientDashboardLogic: Auth loading complete, no user found. Redirecting to /login.");
      navigate('/login');
    }
    // Determine when initial load sequence is complete
    if (!authLoading && (!loadingData || dataError || dashboardData)) {
       setIsInitialLoading(false);
    }

  }, [authLoading, user, loadingData, dataError, dashboardData, navigate]);

  return {
    user,
    profile,
    authError,
    handleLogout,
    dashboardData,
    dataError,
    refetchData,
    activeTab,
    setActiveTab,
    isLoading, // Consolidated loading state for initial load
    isRefreshing, // Separate state for refresh indicator
    isInitialLoading, // Track if initial load is still happening
  };
};
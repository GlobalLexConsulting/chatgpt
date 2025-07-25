import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import DashboardLoading from '@/components/dashboard/DashboardLoading';

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    console.log(`ProtectedRoute: [${new Date().toISOString()}] Mounting/Updating. Path: ${location.pathname}. Setting up auth listener.`);
    setLoading(true); // Ensure loading is true on mount/update

    // Check initial session state aggressively on mount/location change
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      if (isMounted) {
        console.log(`ProtectedRoute: [${new Date().toISOString()}] Initial session check completed.`, { hasSession: !!initialSession });
        setSession(initialSession);
        // Do not set loading false here; let listener confirm the final state
      }
    }).catch(error => {
       console.error(`ProtectedRoute: [${new Date().toISOString()}] Error fetching initial session:`, error);
       if(isMounted) {
           setLoading(false); // Error occurred, stop loading
       }
    });

    // Set up the listener for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, sessionState) => {
        // Add a small delay to allow potential navigation/state updates to settle
        setTimeout(() => {
            if (isMounted) {
              console.log(`ProtectedRoute: [${new Date().toISOString()}] onAuthStateChange [${_event}] (after delay)`, { hasSession: !!sessionState });
              setSession(sessionState);
              setLoading(false); // Set loading false *after* state is updated
              console.log(`ProtectedRoute: [${new Date().toISOString()}] <<< Listener finished processing, setLoading(false)`);
            }
        }, 50); // 50ms delay
      }
    );

     // Fallback timeout in case getSession and listener both fail silently
    const timeoutId = setTimeout(() => {
      if (isMounted && loading) {
        console.warn(`ProtectedRoute: [${new Date().toISOString()}] Timeout reached while waiting for session state. Assuming no session.`);
        setLoading(false);
      }
    }, 7000); // 7 seconds timeout


    // Cleanup function
    return () => {
      console.log(`ProtectedRoute: [${new Date().toISOString()}] Unmounting. Path: ${location.pathname}. Unsubscribing listener and clearing timeout.`);
      isMounted = false;
      authListener?.subscription?.unsubscribe();
      clearTimeout(timeoutId);
    };
    // Rerun effect if location changes to re-check session status immediately
  }, [location.pathname]);

  // Specific path allowance (e.g., for password update)
  if (location.pathname === '/update-password') {
    console.log(`ProtectedRoute: [${new Date().toISOString()}] Accessing /update-password, bypassing auth check.`);
    return children;
  }

  // Display loading indicator while checking session
  if (loading) {
     console.log(`ProtectedRoute: [${new Date().toISOString()}] Still loading session state... Rendering loading indicator.`);
    return <DashboardLoading message="Verificando sesión..." />;
  }

  // Redirect to login if loading is finished and there's no session
  if (!loading && !session) {
    console.log(`ProtectedRoute: [${new Date().toISOString()}] Loading finished, no active session found. Redirecting to /login.`);
    // Preserve the intended destination when redirecting
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render children if loading is finished and session exists
  if (!loading && session) {
    console.log(`ProtectedRoute: [${new Date().toISOString()}] Loading finished, active session found. Rendering protected content for path: ${location.pathname}`);
    return children;
  }

  // Fallback case (should ideally not be reached if logic is sound)
  console.warn(`ProtectedRoute: [${new Date().toISOString()}] Reached unexpected state. Session: ${!!session}, Loading: ${loading}. Rendering null.`);
  return null; // Or a fallback UI
};

export default ProtectedRoute;
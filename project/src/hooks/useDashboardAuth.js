import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';

export const useDashboardAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null); // Add profile state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async (userId) => {
    if (!userId) return null;
    try {
      const { data, error: profileError } = await supabase
        .from('profiles')
        .select('full_name, role') // Assuming 'role' exists
        .eq('id', userId)
        .single();

      if (profileError) {
         if (profileError.code === 'PGRST116') {
           console.warn("No profile found for user:", userId);
           return { full_name: 'Usuario', role: 'client' }; // Default basic profile
         } else {
           throw profileError;
         }
      }
      return data || { full_name: 'Usuario', role: 'client' }; // Return data or default
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError("Error al cargar el perfil de usuario.");
      return null; // Return null on error
    }
  }, []);


  const checkUserSession = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) throw sessionError;

      if (session) {
        setUser(session.user);
        const userProfile = await fetchProfile(session.user.id);
        setProfile(userProfile);
      } else {
        setUser(null);
        setProfile(null);
        // Don't redirect automatically here, let ProtectedRoute handle it
      }
    } catch (err) {
      console.error("Auth Error:", err);
      setError("Error al verificar la sesión. Inténtalo de nuevo.");
      setUser(null);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, [fetchProfile]); // Added fetchProfile dependency

  useEffect(() => {
    checkUserSession(); // Initial check

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
       console.log(`Auth event: ${_event}`, session);
       setUser(session?.user ?? null);
       if (session?.user) {
           const userProfile = await fetchProfile(session.user.id);
           setProfile(userProfile);
       } else {
           setProfile(null); // Clear profile on logout
       }
       // Only set loading to false *after* profile fetch attempt
       setLoading(false);
       setError(null); // Clear previous errors on auth change
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [fetchProfile]); // Added fetchProfile dependency

  const handleLogout = useCallback(async () => {
    setLoading(true);
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) {
      toast({ title: "Error al cerrar sesión", description: signOutError.message, variant: "destructive" });
      setError("Error al cerrar sesión.");
      setLoading(false);
    } else {
      toast({ title: "Sesión Cerrada", description: "Has cerrado sesión de forma segura." });
      setUser(null);
      setProfile(null);
      setError(null);
      setLoading(false); // Ensure loading is false after successful logout
      navigate('/login'); // Redirect to login after successful logout
    }
  }, [toast, navigate]);

  return { user, profile, loading, error, handleLogout };
};

// No default export
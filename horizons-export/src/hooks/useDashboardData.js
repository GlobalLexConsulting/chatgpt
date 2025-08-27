import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";
import {
  dummyOverviewData,
  dummyDocuments,
  dummyMessages,
  dummyReminders,
  dummyBillingInfo,
  dummyServices
} from '@/lib/dashboardData'; // Import dummy data

const useDashboardData = (user) => {
  const { toast } = useToast();
  const [dashboardData, setDashboardData] = useState({
    overview: dummyOverviewData,
    documents: dummyDocuments,
    messages: dummyMessages,
    reminders: dummyReminders,
    billing: dummyBillingInfo,
    services: dummyServices,
  });
  const [loadingData, setLoadingData] = useState(true);
  const [dataError, setDataError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!user) {
      setLoadingData(false); // Stop loading if no user
      return;
    }

    setLoadingData(true);
    setDataError(null);

    try {
      // Fetch data for all sections concurrently
      const [
        documentsRes,
        messagesRes,
        remindersRes,
        billingRes,
        servicesRes
      ] = await Promise.all([
        supabase.from('documents').select('*').eq('user_id', user.id).order('uploaded_at', { ascending: false }),
        supabase.from('messages').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
        supabase.from('reminders').select('*').eq('user_id', user.id).order('due_date', { ascending: true, nullsFirst: true }),
        supabase.from('billing').select('*').eq('user_id', user.id).order('due_date', { ascending: true, nullsFirst: true }),
        supabase.from('client_services').select('*').eq('user_id', user.id).order('updated_at', { ascending: false })
      ]);

      // Check for errors in each response and throw if any occur
      const errors = [documentsRes.error, messagesRes.error, remindersRes.error, billingRes.error, servicesRes.error].filter(Boolean);
      if (errors.length > 0) {
        // Combine error messages or just throw the first one
        throw new Error(errors.map(e => e.message).join('; '));
      }

      // Process fetched data
      const fetchedDocs = documentsRes.data || [];
      const fetchedMessages = messagesRes.data || [];
      const fetchedReminders = remindersRes.data || [];
      const fetchedBilling = billingRes.data || [];
      const fetchedServices = servicesRes.data || [];

      // Calculate overview data based on fetched results
      const overview = {
        upcomingReminders: fetchedReminders.filter(r => !r.completed && r.due_date).slice(0, 3),
        recentMessagesCount: fetchedMessages.filter(m => !m.read && m.sender_role === 'admin').length,
        activeServicesCount: fetchedServices.filter(s => s.status === 'in_progress').length,
        pendingInvoicesCount: fetchedBilling.filter(b => b.status === 'pending' || b.status === 'overdue').length,
      };

      setDashboardData({
        overview: overview,
        documents: fetchedDocs,
        messages: fetchedMessages,
        reminders: fetchedReminders,
        billing: fetchedBilling,
        services: fetchedServices,
      });

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setDataError('No se pudieron cargar los datos del panel. Usando datos de ejemplo.');
      // Keep dummy data on error
      setDashboardData({
        overview: dummyOverviewData,
        documents: dummyDocuments,
        messages: dummyMessages,
        reminders: dummyReminders,
        billing: dummyBillingInfo,
        services: dummyServices,
      });
      toast({
        title: "Error de Carga",
        description: "No se pudieron cargar algunos datos. Mostrando información de ejemplo.",
        variant: "destructive",
      });
    } finally {
      setLoadingData(false);
    }
  }, [user, toast]); // Dependency array includes user and toast

  useEffect(() => {
    fetchData(); // Fetch data when the hook mounts or user changes
  }, [fetchData]); // fetchData is memoized by useCallback

  return { dashboardData, loadingData, dataError, refetchData: fetchData }; // Expose refetch function
};

export default useDashboardData;
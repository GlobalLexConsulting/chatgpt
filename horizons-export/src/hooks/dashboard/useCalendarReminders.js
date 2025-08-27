import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";

const useCalendarReminders = (initialReminders = [], userId) => {
  const { toast } = useToast();
  const [reminders, setReminders] = useState(initialReminders);
  const [isLoading, setIsLoading] = useState(false); // General loading state for operations

  const addReminder = useCallback(async (newReminderData) => {
    if (!userId) return;
    setIsLoading(true);

    const reminderToInsert = {
      ...newReminderData,
      user_id: userId,
      completed: false, // Ensure new reminders start as not completed
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from('reminders')
        .insert(reminderToInsert)
        .select()
        .single();

      if (error) throw error;

      setReminders(prev => [data, ...prev].sort((a, b) => new Date(a.due_date || 0) - new Date(b.due_date || 0))); // Add and sort
      toast({ title: "✅ Recordatorio Añadido", variant: "success" });

    } catch (error) {
      console.error('Error adding reminder:', error);
      toast({ title: "❌ Error al Añadir", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [userId, toast]);

  const updateReminder = useCallback(async (reminderId, updates) => {
     if (!userId) return;
     setIsLoading(true);

     try {
       const { data, error } = await supabase
         .from('reminders')
         .update(updates)
         .eq('id', reminderId)
         .eq('user_id', userId) // Ensure user owns the reminder
         .select()
         .single();

       if (error) throw error;

       setReminders(prev => prev.map(r => r.id === reminderId ? data : r)
                                .sort((a, b) => new Date(a.due_date || 0) - new Date(b.due_date || 0))); // Update and sort
       toast({ title: "🔄 Recordatorio Actualizado", variant: "success" });

     } catch (error) {
       console.error('Error updating reminder:', error);
       toast({ title: "❌ Error al Actualizar", description: error.message, variant: "destructive" });
     } finally {
       setIsLoading(false);
     }
   }, [userId, toast]);


  const deleteReminder = useCallback(async (reminderId) => {
    if (!userId) return;

    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este recordatorio?");
    if (!confirmDelete) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('reminders')
        .delete()
        .eq('id', reminderId)
        .eq('user_id', userId); // Ensure user owns the reminder

      if (error) throw error;

      setReminders(prev => prev.filter(r => r.id !== reminderId));
      toast({ title: "🗑️ Recordatorio Eliminado", variant: "success" });

    } catch (error) {
      console.error('Error deleting reminder:', error);
      toast({ title: "❌ Error al Eliminar", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [userId, toast]);

  // Function to update reminders state externally (e.g., after refetch)
  const setExternalReminders = useCallback((newReminders) => {
      setReminders(newReminders.sort((a, b) => new Date(a.due_date || 0) - new Date(b.due_date || 0))); // Sort on external update too
  }, []);


  return {
    reminders,
    isLoading,
    addReminder,
    updateReminder,
    deleteReminder,
    setExternalReminders // Expose setter
  };
};

export default useCalendarReminders;
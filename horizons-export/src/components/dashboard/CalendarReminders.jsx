import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import useCalendarReminders from '@/hooks/dashboard/useCalendarReminders.js'; // Import the hook
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CalendarReminders = ({ reminders: initialReminders = [], userId }) => {
  const {
    reminders,
    isLoading,
    addReminder,
    updateReminder,
    deleteReminder,
    setExternalReminders // Use the setter from the hook
  } = useCalendarReminders(initialReminders, userId);

  const [isFormOpen, setIsFormOpen] = useState(false);

  // Update internal state if initialReminders prop changes (e.g., after refetch)
  React.useEffect(() => {
      setExternalReminders(initialReminders);
  }, [initialReminders, setExternalReminders]);


  const handleAddReminder = async (formData) => {
    await addReminder(formData);
    setIsFormOpen(false); // Close dialog on success
  };

  const handleToggleComplete = (reminderId, currentStatus) => {
     updateReminder(reminderId, { completed: !currentStatus });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Calendario y Recordatorios</h3>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button size="sm" disabled={isLoading}>
              <PlusCircle className="mr-2 h-4 w-4" /> Añadir Recordatorio
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Nuevo Recordatorio</DialogTitle>
            </DialogHeader>
            <ReminderForm onSubmit={handleAddReminder} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
      </div>

      <ReminderList
        reminders={reminders}
        onToggleComplete={handleToggleComplete}
        onDelete={deleteReminder}
        isLoading={isLoading} // Pass loading state to disable actions while busy
      />
    </div>
  );
};

export default CalendarReminders;
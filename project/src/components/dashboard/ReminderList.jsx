import React from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, CalendarClock, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';

const ReminderList = ({ reminders, onToggleComplete, onDelete, isLoading }) => {
  if (reminders.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400 text-center py-4">No hay recordatorios pendientes.</p>;
  }

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {reminders.map((reminder) => (
          <motion.div
            key={reminder.id}
            layout
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start p-3 border rounded-lg transition-colors ${
              reminder.completed
                ? 'bg-gray-100 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}
          >
            <Checkbox
              id={`reminder-${reminder.id}`}
              checked={reminder.completed}
              onCheckedChange={() => onToggleComplete(reminder.id, reminder.completed)}
              className="mr-3 mt-1 flex-shrink-0"
              disabled={isLoading}
              aria-label={`Marcar como ${reminder.completed ? 'pendiente' : 'completado'}`}
            />
            <div className="flex-grow">
              <label
                htmlFor={`reminder-${reminder.id}`}
                className={`font-medium cursor-pointer ${
                  reminder.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'
                }`}
              >
                {reminder.title}
              </label>
              {reminder.description && (
                <p className={`text-sm mt-1 ${reminder.completed ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
                  {reminder.description}
                </p>
              )}
              {reminder.due_date && (
                <p className={`text-xs mt-1 flex items-center ${reminder.completed ? 'text-gray-400 dark:text-gray-500' : 'text-red-600 dark:text-red-400'}`}>
                  <CalendarClock className="h-3 w-3 mr-1" />
                  Vence: {format(new Date(reminder.due_date), 'dd MMM yyyy, HH:mm', { locale: es })}
                </p>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(reminder.id)}
              disabled={isLoading}
              className="ml-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400 flex-shrink-0"
              aria-label="Eliminar recordatorio"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
            </Button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ReminderList;
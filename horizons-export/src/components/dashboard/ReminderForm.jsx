import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from 'lucide-react';

const ReminderForm = ({ onSubmit, isLoading, initialData = { title: '', description: '', due_date: '' } }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert date string to ISO format if present, otherwise null
    const submissionData = {
        ...formData,
        due_date: formData.due_date ? new Date(formData.due_date).toISOString() : null
    };
    onSubmit(submissionData);
  };

  // Format date for input type="datetime-local" which expects 'YYYY-MM-DDTHH:mm'
  const formatDateTimeLocal = (isoDate) => {
      if (!isoDate) return '';
      try {
          const date = new Date(isoDate);
          // Adjust for timezone offset to display correctly in local time
          const timezoneOffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
          const localISOTime = new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 16);
          return localISOTime;
      } catch (e) {
          console.error("Error formatting date:", isoDate, e);
          return '';
      }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Título <span className="text-red-500">*</span></Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Descripción (Opcional)</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          disabled={isLoading}
          className="dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="due_date">Fecha Límite (Opcional)</Label>
        <Input
          id="due_date"
          name="due_date"
          type="datetime-local" // Use datetime-local for date and time
          value={formatDateTimeLocal(formData.due_date)} // Format for input
          onChange={handleChange}
          disabled={isLoading}
          className="dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Guardar Recordatorio'}
      </Button>
    </form>
  );
};

export default ReminderForm;
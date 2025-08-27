import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';

const initialState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  notes: '',
};

const ClientForm = ({ onAdd }) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase
      .from('crm_clients')
      .insert(formData)
      .select()
      .single();

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Cliente añadido', description: `${formData.name} ha sido registrado.` });
      onAdd?.(data);
      setFormData(initialState);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            name="service"
            placeholder="Servicio contratado"
            value={formData.service}
            onChange={handleChange}
          />
        </div>
      </div>
      <Textarea
        name="notes"
        placeholder="Notas adicionales"
        value={formData.notes}
        onChange={handleChange}
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Guardando...' : 'Agregar Cliente'}
      </Button>
    </form>
  );
};

export default ClientForm;


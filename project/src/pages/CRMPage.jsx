import React, { useEffect, useState } from 'react';
import ClientForm from '@/components/crm/ClientForm';
import ClientTable from '@/components/crm/ClientTable';
import { supabase } from '@/lib/supabaseClient';

const CRMPage = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('crm_clients')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) {
      setClients(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleAdd = (client) => {
    setClients((prev) => [client, ...prev]);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">CRM Consult Global-Lex</h1>
      <ClientForm onAdd={handleAdd} />
      <div>
        {loading ? <p>Cargando clientes...</p> : <ClientTable clients={clients} />}
      </div>
    </div>
  );
};

export default CRMPage;


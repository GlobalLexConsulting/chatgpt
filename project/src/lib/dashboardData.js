import React from 'react';

// Placeholder Data (Simulating fetched data) - Keep for fallback or initial state
const placeholderData = {
    overview: {
        upcomingReminders: [
            { id: 'cal1', title: 'Fecha límite Pago IVA Q1', due_date: '2025-04-20T23:59:59Z' },
            { id: 'cal2', title: 'Renovación Permiso Residencia', due_date: '2025-06-15T23:59:59Z' },
        ],
        recentMessagesCount: 1,
        activeServicesCount: 1,
        pendingInvoicesCount: 1,
    },
    documents: [
      { id: 'doc001', file_name: 'Declaración IVA Q1 2025.pdf', type: 'Fiscal', uploaded_at: '2025-04-15T10:00:00Z', status: 'Presentado', file_url: '#' },
      { id: 'doc002', file_name: 'Contrato Servicios GlobalLex.docx', type: 'Legal', uploaded_at: '2025-01-10T15:30:00Z', status: 'Firmado', file_url: '#' },
      { id: 'doc003', file_name: 'Informe Contable Marzo 2025.pdf', type: 'Contable', uploaded_at: '2025-04-05T09:00:00Z', status: 'Disponible', file_url: '#' },
    ],
    messages: [
        { id: 'msg1', user_id: 'admin-id', sender_role: 'admin', content: 'Hola, hemos recibido la documentación para la LLC. Todo parece correcto.', created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), read: false }, // 2 hours ago
        { id: 'msg2', user_id: 'client-id', sender_role: 'client', content: '¡Genial! ¿Cuál es el siguiente paso?', created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), read: true }, // 1 hour ago
    ],
    reminders: [
        { id: 'cal1', user_id: 'client-id', title: 'Fecha límite Pago IVA Q1', description: 'Presentar y pagar modelo 303', due_date: '2025-04-20T23:59:59Z', completed: false, created_at: new Date().toISOString() },
        { id: 'cal2', user_id: 'client-id', title: 'Renovación Permiso Residencia', description: 'Iniciar trámite online', due_date: '2025-06-15T23:59:59Z', completed: false, created_at: new Date().toISOString() },
        { id: 'cal3', user_id: 'client-id', title: 'Revisar contrato alquiler', description: null, due_date: null, completed: true, created_at: new Date().toISOString() },
    ],
    billing: [
        { id: 'inv001', user_id: 'client-id', invoice_id: 'INV-2025-001', description: 'Constitución LLC + EIN', created_at: '2025-01-15T00:00:00Z', amount: 1200.00, due_date: '2025-01-30', status: 'paid', payment_link: null, paid_at: '2025-01-20T00:00:00Z' },
        { id: 'inv002', user_id: 'client-id', invoice_id: 'INV-2025-002', description: 'Asesoría Fiscal Mensual - Marzo', created_at: '2025-04-01T00:00:00Z', amount: 250.00, due_date: '2025-04-15', status: 'pending', payment_link: '#', paid_at: null },
        { id: 'inv003', user_id: 'client-id', invoice_id: 'INV-2025-000', description: 'Consulta inicial', created_at: '2024-12-10T00:00:00Z', amount: 150.00, due_date: '2024-12-25', status: 'overdue', payment_link: '#', paid_at: null },
    ],
    services: [
        { id: 'serv1', user_id: 'client-id', service_name: 'Asesoría Fiscal Continua (España)', status: 'in_progress', details: 'Preparando declaración Q2.', updated_at: new Date().toISOString() },
        { id: 'serv2', user_id: 'client-id', service_name: 'Constitución LLC (Delaware, USA)', status: 'completed', details: 'Documentación final entregada.', updated_at: '2025-02-01T00:00:00Z' },
        { id: 'serv3', user_id: 'client-id', service_name: 'Planificación BEPS 2.0', status: 'pending', details: 'Pendiente de reunión inicial.', updated_at: new Date().toISOString() },
    ]
};

// Export individual dummy data arrays
export const dummyOverviewData = placeholderData.overview;
export const dummyDocuments = placeholderData.documents;
export const dummyMessages = placeholderData.messages;
export const dummyReminders = placeholderData.reminders;
export const dummyBillingInfo = placeholderData.billing; // Exporting the billing array
export const dummyServices = placeholderData.services;

// Keep the function to get all placeholders if needed elsewhere, though likely redundant now
export const getPlaceholderData = () => {
    return placeholderData;
};

// Remove the Supabase fetching function from here, it belongs in a hook or the component itself
// export const fetchDashboardDataFromSupabase = async (userId) => { ... };
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, FileText, CalendarClock, CreditCard, Briefcase, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const DashboardOverview = ({ data, profile }) => {
  const {
    upcomingReminders = [],
    recentMessagesCount = 0,
    activeServicesCount = 0,
    pendingInvoicesCount = 0,
  } = data || {}; // Provide default empty values

  const firstName = profile?.full_name?.split(' ')[0] || 'Cliente';

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        Bienvenido de nuevo, {firstName}
      </h3>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="dark:bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mensajes Nuevos (Admin)</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{recentMessagesCount}</div>
            <p className="text-xs text-muted-foreground">
              {recentMessagesCount === 1 ? 'Mensaje sin leer' : 'Mensajes sin leer'}
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Servicios Activos</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeServicesCount}</div>
             <p className="text-xs text-muted-foreground">
               {activeServicesCount === 1 ? 'Servicio en progreso' : 'Servicios en progreso'}
             </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-gray-800/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Facturas Pendientes</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingInvoicesCount}</div>
             <p className="text-xs text-muted-foreground">
               {pendingInvoicesCount === 1 ? 'Factura pendiente/vencida' : 'Facturas pendientes/vencidas'}
             </p>
          </CardContent>
        </Card>
         <Card className="dark:bg-gray-800/50">
           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
             <CardTitle className="text-sm font-medium">Próximos Recordatorios</CardTitle>
             <CalendarClock className="h-4 w-4 text-muted-foreground" />
           </CardHeader>
           <CardContent>
             <div className="text-2xl font-bold">{upcomingReminders.length}</div>
             <p className="text-xs text-muted-foreground">
                {upcomingReminders.length === 1 ? 'Recordatorio cercano' : 'Recordatorios cercanos'}
             </p>
           </CardContent>
         </Card>
      </div>

      {/* Upcoming Reminders Section */}
      {upcomingReminders.length > 0 && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">Recordatorios Próximos</h4>
          <ul className="space-y-2">
            {upcomingReminders.map(reminder => (
              <li key={reminder.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/40 rounded-md border dark:border-gray-700">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{reminder.title}</span>
                {reminder.due_date && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {format(new Date(reminder.due_date), 'dd MMM, HH:mm', { locale: es })}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

       <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-md text-sm text-blue-800 dark:text-blue-200">
          <AlertCircle className="inline h-4 w-4 mr-2" />
          Este es un resumen rápido. Puedes ver todos los detalles en las pestañas correspondientes.
       </div>

    </div>
  );
};

export default DashboardOverview;
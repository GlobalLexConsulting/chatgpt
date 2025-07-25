import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Loader, AlertCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ServicesStatus = ({ services = [] }) => {

  const getStatusIconAndBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          badge: <Badge variant="success" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Completado</Badge>
        };
      case 'in_progress':
        return {
          icon: <Loader className="h-5 w-5 text-blue-500 animate-spin" />,
          badge: <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">En Progreso</Badge>
        };
      case 'pending':
        return {
          icon: <Clock className="h-5 w-5 text-yellow-500" />,
          badge: <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">Pendiente</Badge>
        };
       case 'cancelled':
       case 'error':
         return {
           icon: <AlertCircle className="h-5 w-5 text-red-500" />,
           badge: <Badge variant="destructive" className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Cancelado/Error</Badge>
         };
      default:
        return {
          icon: <Clock className="h-5 w-5 text-gray-500" />,
          badge: <Badge variant="outline">{status || 'Desconocido'}</Badge>
        };
    }
  };

   const formatDate = (dateString) => {
       if (!dateString) return 'N/A';
       try {
           return format(new Date(dateString), 'dd MMM yyyy, HH:mm', { locale: es });
       } catch {
           return 'Fecha inválida';
       }
   };


  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Estado de Servicios Contratados</h3>

      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const { icon, badge } = getStatusIconAndBadge(service.status);
            return (
              <Card key={service.id} className="dark:bg-gray-800/50 dark:border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold">{service.service_name}</CardTitle>
                  {icon}
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                     {badge}
                  </div>
                  {service.details && (
                     <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                       {service.details}
                     </CardDescription>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Última actualización: {formatDate(service.updated_at)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No tienes servicios activos o contratados en este momento.</p>
      )}
    </div>
  );
};

export default ServicesStatus;
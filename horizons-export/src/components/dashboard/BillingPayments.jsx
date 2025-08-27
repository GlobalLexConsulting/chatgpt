import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, CreditCard, AlertTriangle, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const BillingPayments = ({ billingInfo = [] }) => {

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid':
        return <Badge variant="success" className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"><CheckCircle className="h-3 w-3 mr-1"/>Pagado</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"><CreditCard className="h-3 w-3 mr-1"/>Pendiente</Badge>;
      case 'overdue':
        return <Badge variant="destructive" className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"><AlertTriangle className="h-3 w-3 mr-1"/>Vencido</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatCurrency = (amount) => {
     // Basic Euro formatting, consider a library for more complex needs
     return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      try {
          return format(new Date(dateString), 'dd MMM yyyy', { locale: es });
      } catch {
          return 'Fecha inválida';
      }
  };


  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Facturación y Pagos</h3>

      {billingInfo.length > 0 ? (
        <div className="overflow-x-auto border dark:border-gray-700 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-gray-800/50">
                <TableHead>Factura ID</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Fecha Emisión</TableHead>
                <TableHead>Fecha Vencimiento</TableHead>
                <TableHead className="text-right">Importe</TableHead>
                <TableHead className="text-center">Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingInfo.map((invoice) => (
                <TableRow key={invoice.id} className="dark:hover:bg-gray-800/40">
                  <TableCell className="font-medium">{invoice.invoice_id || 'N/A'}</TableCell>
                  <TableCell>{invoice.description || 'Sin descripción'}</TableCell>
                  <TableCell>{formatDate(invoice.created_at)}</TableCell>
                  <TableCell>{formatDate(invoice.due_date)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(invoice.amount)}</TableCell>
                  <TableCell className="text-center">{getStatusBadge(invoice.status)}</TableCell>
                  <TableCell className="text-right space-x-2">
                    {invoice.status !== 'paid' && invoice.payment_link && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(invoice.payment_link, '_blank')}
                        title="Realizar Pago"
                      >
                        <CreditCard className="h-4 w-4" />
                      </Button>
                    )}
                     {/* Placeholder for download - needs actual invoice file URL */}
                     <Button variant="ghost" size="sm" disabled title="Descargar Factura (Próximamente)">
                       <Download className="h-4 w-4" />
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No hay información de facturación disponible.</p>
      )}
    </div>
  );
};

export default BillingPayments;
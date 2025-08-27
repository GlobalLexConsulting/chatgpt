import React from 'react';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import DocumentManagement from '@/components/dashboard/DocumentManagement';
import SecureCommunication from '@/components/dashboard/SecureCommunication';
import CalendarReminders from '@/components/dashboard/CalendarReminders';
import BillingPayments from '@/components/dashboard/BillingPayments';
import ServicesStatus from '@/components/dashboard/ServicesStatus';
import CalendlyWidget from '@/components/CalendlyWidget';
import { TabsContent } from "@/components/ui/tabs";

// Use the actual Calendly link provided by the user
const calendlyUrl = "https://calendly.com/consultgloballex-info/30min";

const DashboardContent = ({ data, userId, loading, error }) => {

  const getContentForTab = (value) => {
    switch(value) {
      case 'overview':
        return <DashboardOverview overviewData={data?.overview} billing={data?.billing || []} services={data?.services || []} reminders={data?.reminders || []} loading={loading} />;
      case 'documents':
        return <DocumentManagement initialDocuments={data?.documents || []} userId={userId} loading={loading} />;
      case 'communication':
        return <SecureCommunication initialMessages={data?.messages || []} userId={userId} loading={loading} />;
      case 'calendar':
        return <CalendarReminders initialReminders={data?.reminders || []} userId={userId} loading={loading} />;
      case 'billing':
        return <BillingPayments billingInfo={data?.billing || []} loading={loading} />;
      case 'services':
        return <ServicesStatus services={data?.services || []} loading={loading} />;
       case 'booking':
         return (
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Reservar una Nueva Consulta</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Utiliza el calendario a continuación para encontrar un horario que te funcione para discutir tus necesidades o próximos pasos.
                </p>
                 {/* Removed the warning about placeholder link */}
                <CalendlyWidget url={calendlyUrl} />
            </div>
         );
      default:
        return <p className="text-gray-500 dark:text-gray-400">Contenido no disponible.</p>;
    }
  };

  if (error) {
    return (
      <div className="text-red-600 dark:text-red-400 p-4 bg-red-100 dark:bg-red-900/30 rounded-md">
        Error al cargar los datos del panel: {error}
      </div>
    );
  }

  const tabs = ['overview', 'documents', 'communication', 'calendar', 'billing', 'services', 'booking'];

  return (
    <>
      {tabs.map(tabValue => (
        <TabsContent key={tabValue} value={tabValue} className="mt-6 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background rounded-md">
          {getContentForTab(tabValue)}
        </TabsContent>
      ))}
    </>
  );
};

export default DashboardContent;
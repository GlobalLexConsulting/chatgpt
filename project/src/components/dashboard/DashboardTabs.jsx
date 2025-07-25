import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, Files, MessageSquare, Calendar, CreditCard, Briefcase, BookOpen } from 'lucide-react'; // Added BookOpen for Calendly

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { value: 'overview', label: 'Resumen', icon: LayoutDashboard },
    { value: 'documents', label: 'Documentos', icon: Files },
    { value: 'communication', label: 'Mensajes', icon: MessageSquare },
    { value: 'calendar', label: 'Calendario', icon: Calendar },
    { value: 'billing', label: 'Facturación', icon: CreditCard },
    { value: 'services', label: 'Servicios', icon: Briefcase },
    { value: 'booking', label: 'Reservar Cita', icon: BookOpen }, // Added Booking Tab
  ];

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 h-auto p-1.5 flex-wrap">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex-col sm:flex-row sm:justify-center items-center gap-2 px-3 py-2.5 text-xs sm:text-sm h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
          >
            <tab.icon className="h-4 w-4 sm:h-5 sm:w-5 mb-1 sm:mb-0" />
            <span>{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default DashboardTabs;
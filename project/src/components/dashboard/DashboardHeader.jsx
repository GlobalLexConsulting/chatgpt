import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react'; // Added User icon

const DashboardHeader = ({ profile, handleLogout }) => {
    const clientName = profile?.full_name || 'Cliente';
    const clientRole = profile?.role || 'Cliente'; // Assuming role exists in profile

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12"
        >
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Panel de {clientRole === 'admin' ? 'Administrador' : 'Cliente'}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-1 flex items-center">
                    <User className="h-5 w-5 mr-2 text-gray-500"/> Bienvenido, {clientName}
                </p>
            </div>
            <Button
                variant="outline"
                onClick={handleLogout}
                className="mt-4 md:mt-0 self-start md:self-center transition-colors hover:bg-destructive/10 hover:border-destructive hover:text-destructive"
                aria-label="Cerrar sesión"
            >
                <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
            </Button>
        </motion.div>
    );
};

export default DashboardHeader;
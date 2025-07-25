import React from 'react';
import { CheckCircle, Clock, AlertTriangle, Info } from 'lucide-react';

export const getStatusBadgeVariant = (status) => {
    if (!status) return 'secondary'; // Default variant if status is undefined or null

    switch (status.toLowerCase()) {
        case 'presentado':
        case 'firmado':
        case 'disponible':
        case 'pagada':
        case 'activo':
        case 'completado':
            return 'success';
        case 'en revisión':
        case 'en proceso':
            return 'default';
        case 'pendiente':
            return 'destructive';
        default:
            return 'secondary';
    }
};

export const getStatusIcon = (status) => {
     if (!status) return <Info className="h-4 w-4 text-gray-500" />; // Default icon

    switch (status.toLowerCase()) {
        case 'presentado':
        case 'firmado':
        case 'disponible':
        case 'pagada':
        case 'activo':
        case 'completado':
            return <CheckCircle className="h-4 w-4 text-green-600" />;
        case 'en revisión':
        case 'en proceso':
            return <Clock className="h-4 w-4 text-blue-600" />;
        case 'pendiente':
            return <AlertTriangle className="h-4 w-4 text-red-600" />;
        default:
            return <Info className="h-4 w-4 text-gray-500" />;
    }
};
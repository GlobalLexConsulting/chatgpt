import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Trash2, FileText, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

const DocumentList = ({ documents, deletingId, handleDelete }) => {
  if (documents.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">No has subido ningún documento todavía.</p>;
  }

  return (
    <div className="overflow-x-auto border dark:border-gray-700 rounded-lg">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 dark:bg-gray-800/50">
            <TableHead>Nombre del Archivo</TableHead>
            <TableHead>Fecha de Subida</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id} className="dark:hover:bg-gray-800/40">
              <TableCell className="font-medium flex items-center">
                 <FileText className="h-4 w-4 mr-2 text-gray-500 flex-shrink-0"/>
                 <span className="truncate" title={doc.file_name}>{doc.file_name}</span>
              </TableCell>
              <TableCell>
                {doc.uploaded_at ? format(new Date(doc.uploaded_at), 'dd/MM/yyyy HH:mm') : 'N/A'}
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(doc.file_url, '_blank')}
                  disabled={!doc.file_url || deletingId === doc.id}
                  title="Descargar/Ver Archivo"
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(doc.id, doc.file_url)}
                  disabled={deletingId === doc.id}
                  title="Eliminar Archivo"
                >
                  {deletingId === doc.id ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DocumentList;
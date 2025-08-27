import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Loader2, AlertCircle } from 'lucide-react';

const MAX_FILE_SIZE_MB = 5; // Define here for display

const DocumentUploadForm = ({ selectedFile, isUploading, uploadError, handleFileChange, handleUpload, fileInputId = 'file-upload-input' }) => {
  return (
    <div className="mb-8 p-4 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/30">
      <h4 className="text-lg font-medium mb-3">Subir Nuevo Documento</h4>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Input
          id={fileInputId} // Use ID prop
          type="file"
          onChange={handleFileChange}
          className="flex-grow dark:bg-gray-700 dark:border-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
          disabled={isUploading}
        />
        <Button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className="w-full sm:w-auto"
        >
          {isUploading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subiendo...</>
          ) : (
            <><Upload className="mr-2 h-4 w-4" /> Subir Archivo</>
          )}
        </Button>
      </div>
      {uploadError && (
         <p className="mt-3 text-sm text-red-600 dark:text-red-400 flex items-center">
             <AlertCircle className="h-4 w-4 mr-1"/> {uploadError}
         </p>
      )}
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Tamaño máximo: {MAX_FILE_SIZE_MB}MB. Tipos permitidos: PDF, JPG, PNG, DOC, DOCX.
      </p>
    </div>
  );
};

export default DocumentUploadForm;
import React, { useEffect } from 'react'; // Import useEffect
import useDocumentManagement from '@/hooks/dashboard/useDocumentManagement.js';
import DocumentUploadForm from './DocumentUploadForm';
import DocumentList from './DocumentList';

const DocumentManagement = ({ documents: initialDocuments = [], userId }) => {
  const {
    documents,
    selectedFile,
    isUploading,
    uploadError,
    deletingId,
    handleFileChange,
    handleUpload,
    handleDelete,
    setExternalDocuments // Get the setter from the hook
  } = useDocumentManagement(initialDocuments, userId);

  const fileInputId = 'file-upload-input-main';

  // Update internal state if initialDocuments prop changes (e.g., after refetch)
  useEffect(() => {
      setExternalDocuments(initialDocuments);
  }, [initialDocuments, setExternalDocuments]);


  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Gestión de Documentos</h3>

      <DocumentUploadForm
        selectedFile={selectedFile}
        isUploading={isUploading}
        uploadError={uploadError}
        handleFileChange={handleFileChange}
        handleUpload={handleUpload}
        fileInputId={fileInputId}
      />

      <h4 className="text-lg font-medium mb-4 mt-8">Documentos Subidos</h4>
      <DocumentList
        documents={documents}
        deletingId={deletingId}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default DocumentManagement;
import { useState, useEffect, useCallback } from 'react';
import { supabase, supabaseUrl, supabaseAnonKey } from '@/lib/supabaseClient'; // Ensure correct import
import { useToast } from '@/components/ui/use-toast';

const useDocumentManagement = (initialDocuments = [], userId) => {
  const [documents, setDocuments] = useState(initialDocuments);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Use imported credentials
  const functionUrl = `${supabaseUrl}/functions/v1/dynamic-handler`;

  const fetchDocuments = useCallback(async () => {
    if (!userId) return;
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('id, file_name, file_url, uploaded_at')
        .eq('user_id', userId)
        .order('uploaded_at', { ascending: false });

      if (error) {
        throw error;
      }
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
      toast({
        variant: "destructive",
        title: "Error al Cargar Documentos",
        description: error.message,
      });
      setDocuments([]);
    } finally {
      setIsLoading(false);
    }
  }, [userId, toast]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);


  const sendNotification = async (fileName) => {
    // Check if imported credentials are valid
    if (!supabaseUrl || !supabaseAnonKey) {
        console.error("Supabase URL or Anon Key is missing from supabaseClient.js.");
        toast({
          variant: "warning",
          title: "Configuración Interna Incompleta",
          description: "No se pudieron obtener las credenciales para la notificación de subida.",
        });
        return;
    }

    try {
        console.log("Attempting to call Edge function for file upload:", fileName);
        const response = await fetch(functionUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseAnonKey}`, // Use imported key
              'apikey': supabaseAnonKey // Use imported key
            },
            body: JSON.stringify({ type: 'fileUpload', fileName }),
        });

        console.log("Edge function response status:", response.status);
        const responseBody = await response.text();
        console.log("Edge function response body:", responseBody);

        if (!response.ok) {
             let errorDetails = `HTTP status ${response.status}`;
             if (response.headers.get("content-type")?.includes("application/json")) {
                 try {
                     const errorJson = JSON.parse(responseBody);
                     errorDetails = errorJson.error || errorJson.message || JSON.stringify(errorJson);
                 } catch (parseError) {
                      console.error("Could not parse error response as JSON:", parseError);
                      errorDetails += ` - Body: ${responseBody}`;
                 }
             } else {
                  errorDetails += ` - Body: ${responseBody}`;
             }
            throw new Error(`Function returned error: ${errorDetails}`);
        }
        console.log('File upload notification function called successfully.');
    } catch (error) {
        console.error('Failed to call notification function for file upload:', error);
        throw error; // Re-throw to be caught by uploadDocument
    }
  };


  const uploadDocument = async (file) => {
    if (!file || !userId) return;
    setIsUploading(true);
    const fileExt = file.name.split('.').pop();
    // Use a more robust filename structure to avoid potential collisions and invalid characters
    const safeBaseName = file.name.substring(0, file.name.lastIndexOf('.')).replace(/[^a-zA-Z0-9-_]/g, '_');
    const uniqueFileName = `${userId}/${safeBaseName}_${Date.now()}.${fileExt}`;


    try {
      // 1. Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('client-documents')
        .upload(uniqueFileName, file); // Use unique name

      if (uploadError) {
        console.error("Storage upload error:", uploadError);
        throw new Error(`Error al subir el archivo: ${uploadError.message}`);
      }
      console.log("File uploaded to storage:", uniqueFileName);


       // 2. Get public URL
       const { data: urlData } = supabase.storage
         .from('client-documents')
         .getPublicUrl(uniqueFileName); // Use unique name

        const fileUrl = urlData?.publicUrl;
        if (!fileUrl) {
             console.error("Could not get public URL for uploaded file");
             // Attempt cleanup of uploaded file if URL fails
             await supabase.storage.from('client-documents').remove([uniqueFileName]);
             throw new Error("No se pudo obtener la URL pública del archivo subido.");
        }
         console.log("Public URL obtained:", fileUrl);


      // 3. Save document metadata to the database
      const { error: dbError } = await supabase
        .from('documents')
        .insert([
          { user_id: userId, file_name: file.name, file_url: fileUrl } // Store original file name for display
        ]);

      if (dbError) {
        console.error("Database insert error after upload:", dbError);
        await supabase.storage.from('client-documents').remove([uniqueFileName]); // Cleanup storage
        throw new Error(`Error al guardar datos del archivo: ${dbError.message}`);
      }
      console.log("Document metadata saved to database.");


      // 4. Attempt notification
      try {
           await sendNotification(file.name); // Notify with original name
           toast({
               title: "Archivo Subido",
               description: `"${file.name}" se ha subido y guardado correctamente.`,
               variant: "success",
           });
           fetchDocuments();

      } catch (notificationError) {
            console.error("Notification failed after successful file upload:", notificationError);
            toast({
                 variant: "warning",
                 title: "Archivo Subido (Notificación Fallida)",
                 description: `"${file.name}" se subió, pero la notificación interna falló: ${notificationError.message}.`,
                 duration: 8000,
            });
            fetchDocuments();
      }


    } catch (error) {
      console.error('Document upload process failed:', error);
      toast({
        variant: "destructive",
        title: "Error al Subir Documento",
        description: error.message,
      });
    } finally {
      setIsUploading(false);
    }
  };


  const deleteDocument = async (documentId, fileUrl) => {
     if (!documentId || !fileUrl || !userId) return;

     // Extract storage path from the public URL
     let storagePath = '';
     try {
        const url = new URL(fileUrl);
        // Pathname usually includes bucket name, e.g., /storage/v1/object/public/client-documents/user-id/file_name.ext
        // We need the part after the bucket name.
        const pathParts = url.pathname.split('/client-documents/');
        if (pathParts.length > 1) {
            storagePath = decodeURIComponent(pathParts[1]); // Decode potential URL encoding
        }
     } catch (e) {
        console.error("Invalid file URL:", fileUrl, e);
     }


     if (!storagePath) {
         toast({
             variant: "destructive",
             title: "Error al Eliminar",
             description: "No se pudo determinar la ruta del archivo en el almacenamiento desde la URL.",
         });
         return;
     }

     const originalFileName = documents.find(doc => doc.id === documentId)?.file_name || 'este archivo';


     try {
       setIsLoading(true);

       // 1. Delete from database first
       const { error: dbError } = await supabase
         .from('documents')
         .delete()
         .match({ id: documentId, user_id: userId });

       if (dbError) {
         console.error("Database delete error:", dbError);
         throw new Error(`Error al eliminar de la base de datos: ${dbError.message}`);
       }
       console.log("Document deleted from database:", documentId);


       // 2. Delete from storage using extracted path
       const { error: storageError } = await supabase.storage
         .from('client-documents')
         .remove([storagePath]);

       if (storageError) {
         console.warn(`Storage delete error (DB record gone): ${storageError.message}. Path: ${storagePath}`);
          toast({
              variant: "warning",
              title: "Eliminación Parcial",
              description: `Se eliminó el registro, pero hubo un problema al borrar "${originalFileName}" del almacenamiento.`,
              duration: 7000,
          });
       } else {
          console.log("File deleted from storage:", storagePath);
          toast({
              title: "Documento Eliminado",
              description: `"${originalFileName}" se ha eliminado correctamente.`,
              variant: "success",
          });
       }

       fetchDocuments(); // Refresh list

     } catch (error) {
       console.error('Failed to delete document:', error);
       toast({
         variant: "destructive",
         title: "Error al Eliminar",
         description: error.message,
       });
     } finally {
         setIsLoading(false);
     }
  };

  return { documents, isLoading, isUploading, uploadDocument, deleteDocument, refetchDocuments: fetchDocuments };
};

export default useDocumentManagement;
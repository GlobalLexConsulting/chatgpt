import { useState, useEffect, useCallback } from 'react';
import { supabase, supabaseUrl, supabaseAnonKey } from '@/lib/supabaseClient'; // Ensure correct import
import { useToast } from '@/components/ui/use-toast';

const useSecureCommunication = (initialMessages = [], userId) => {
    const [messages, setMessages] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const { toast } = useToast();

    // Use imported credentials
    const functionUrl = `${supabaseUrl}/functions/v1/dynamic-handler`;

    const fetchMessages = useCallback(async () => {
        if (!userId) return;
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('messages')
                .select('id, content, created_at, sender_role, read')
                .eq('user_id', userId)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setMessages(data || []);
        } catch (error) {
            console.error('Error fetching messages:', error);
            toast({
                variant: "destructive",
                title: "Error al Cargar Mensajes",
                description: error.message,
            });
            setMessages([]);
        } finally {
            setIsLoading(false);
        }
    }, [userId, toast]);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);


    const sendNotification = async (messageContent) => {
       // Check if imported credentials are valid
       if (!supabaseUrl || !supabaseAnonKey) {
           console.error("Supabase URL or Anon Key is missing from supabaseClient.js.");
           toast({
             variant: "warning",
             title: "Configuración Interna Incompleta",
             description: "No se pudieron obtener las credenciales para la notificación de mensaje.",
           });
           return;
       }

       const contactInfoSim = { type: 'message', content: messageContent.substring(0, 100) + '...' };

       try {
           console.log("Attempting to call Edge function for secure message:", contactInfoSim);
           const response = await fetch(functionUrl, {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${supabaseAnonKey}`, // Use imported key
                 'apikey': supabaseAnonKey // Use imported key
               },
               body: JSON.stringify({ type: 'secureMessage', contactInfo: contactInfoSim }),
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
           console.log('Message notification function called successfully.');

       } catch (error) {
           console.error('Failed to call notification function for message:', error);
           throw error; // Re-throw to be caught by handleSendMessage
       }
    };


    const handleSendMessage = async () => {
        if (!newMessage.trim() || !userId) return;
        setIsSending(true);
        const messageToSend = newMessage;

        try {
            // 1. Save message to DB
            const { data, error: dbError } = await supabase
                .from('messages')
                .insert({
                    user_id: userId,
                    content: messageToSend,
                    sender_role: 'client',
                    read: false
                })
                .select()
                .single();


            if (dbError) {
                console.error("Database insert error:", dbError);
                throw new Error(`Error al guardar mensaje: ${dbError.message}`);
            }

            console.log("Message saved to database.");
            setMessages(prev => [data, ...prev]);
            setNewMessage('');


             // 2. Attempt notification
             try {
                 await sendNotification(messageToSend);
                  toast({
                      title: "Mensaje Enviado",
                      description: "Tu mensaje ha sido enviado correctamente.",
                      variant: "success",
                  });
             } catch (notificationError) {
                  console.error("Notification failed after successful message save:", notificationError);
                  toast({
                      variant: "warning",
                      title: "Mensaje Enviado (Notificación Fallida)",
                      description: `Tu mensaje se envió, pero la notificación interna falló: ${notificationError.message}.`,
                      duration: 8000,
                  });
             }


        } catch (error) {
            console.error('Failed to send message:', error);
            toast({
                variant: "destructive",
                title: "Error al Enviar Mensaje",
                description: error.message,
            });
        } finally {
            setIsSending(false);
        }
    };

    return {
        messages,
        isLoading,
        isSending,
        newMessage,
        setNewMessage,
        handleSendMessage,
        refetchMessages: fetchMessages
    };
};

export default useSecureCommunication;
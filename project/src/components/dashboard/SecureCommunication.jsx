import React from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, User, Shield } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import useSecureCommunication from '@/hooks/dashboard/useSecureCommunication.js'; // Import the hook
import { motion, AnimatePresence } from 'framer-motion';

const SecureCommunication = ({ messages: initialMessages = [], userId }) => {
  const {
    messages,
    newMessage,
    isSending,
    handleNewMessageChange,
    sendMessage,
    setExternalMessages // Use the setter from the hook
  } = useSecureCommunication(initialMessages, userId);

   // Update internal state if initialMessages prop changes (e.g., after refetch)
   React.useEffect(() => {
       setExternalMessages(initialMessages);
   }, [initialMessages, setExternalMessages]);


  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Comunicación Segura</h3>

      {/* Message Input Area */}
      <div className="mb-8 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800/50">
        <h4 className="text-lg font-medium mb-3">Enviar Nuevo Mensaje</h4>
        <Textarea
          placeholder="Escribe tu mensaje aquí..."
          value={newMessage}
          onChange={handleNewMessageChange}
          className="mb-3 dark:bg-gray-700 dark:border-gray-600"
          rows={4}
          disabled={isSending}
        />
        <Button onClick={sendMessage} disabled={!newMessage.trim() || isSending}>
          {isSending ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</>
          ) : (
            <><Send className="mr-2 h-4 w-4" /> Enviar Mensaje</>
          )}
        </Button>
      </div>

      {/* Message History */}
      <h4 className="text-lg font-medium mb-4">Historial de Mensajes</h4>
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 border dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/30">
        <AnimatePresence initial={false}>
          {messages.length > 0 ? (
            messages.map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender_role === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[75%] ${
                    msg.sender_role === 'client'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs opacity-70 mt-1 text-right">
                    {msg.sender_role === 'client' ? <User className="inline h-3 w-3 mr-1"/> : <Shield className="inline h-3 w-3 mr-1"/>}
                    {format(new Date(msg.created_at), 'dd MMM yyyy, HH:mm', { locale: es })}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">No hay mensajes todavía.</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SecureCommunication;
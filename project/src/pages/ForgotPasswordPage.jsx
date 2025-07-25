import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, KeyRound, LogIn } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePasswordResetRequest = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(`ForgotPasswordPage: Requesting password reset for email: ${email}`);

    const redirectUrl = `${window.location.origin}/update-password`;
    console.log(`ForgotPasswordPage: Using redirect URL for password reset: ${redirectUrl}`);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
         redirectTo: redirectUrl,
      });

      if (error) {
        console.error('ForgotPasswordPage: Supabase resetPasswordForEmail Error:', error.message, error);
        let description = "Error al solicitar el restablecimiento.";
         if (error.message.toLowerCase().includes("user not found")) {
             description = "No se encontró un usuario con ese correo electrónico.";
         } else if (error.message.toLowerCase().includes("rate limit exceeded") || error.message.toLowerCase().includes("try again later")) {
             description = "Demasiadas solicitudes. Espera un momento e inténtalo de nuevo.";
         } else if (error.message.toLowerCase().includes("redirect url") && error.message.toLowerCase().includes("allowed")){
              description = "Error de configuración. La URL de redirección no está permitida. Contacta soporte.";
              console.error("ACTION REQUIRED: Check Supabase Authentication > Settings > Site URL and Redirect URLs. Ensure they include the current origin and /update-password path.");
         }
        toast({ title: "Error", description: description, variant: "destructive", duration: 7000 });
      } else {
        console.log(`ForgotPasswordPage: Password reset request processed for ${email}.`);
        toast({
          title: "Solicitud Enviada",
          description: "Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña. Revisa tu bandeja de entrada (y spam).",
          variant: "success",
          duration: 10000,
        });
         setEmail('');
      }
    } catch (error) {
       console.error('ForgotPasswordPage: Request Catch Error:', error);
       toast({ title: "Error Crítico", description: "Ocurrió un error inesperado.", variant: "destructive" });
    } finally {
       setIsLoading(false);
    }
  };

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 flex items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-xl border dark:border-gray-800">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                 <KeyRound className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">Restablecer Contraseña</CardTitle>
              <CardDescription>Introduce tu correo para recibir el enlace.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <form onSubmit={handlePasswordResetRequest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="dark:bg-gray-800 dark:border-gray-700" autoComplete="email" />
                </div>
                <Button type="submit" className="w-full btn-persuasive" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : <> <Mail className="mr-2 h-4 w-4"/> Enviar Enlace </>}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center block">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ¿Recordaste tu contraseña?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  <LogIn className="inline-block mr-1 h-4 w-4 align-text-bottom" /> Inicia sesión
                </Link>.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
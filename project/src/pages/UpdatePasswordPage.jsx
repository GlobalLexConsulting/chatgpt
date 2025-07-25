import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { KeyRound, Save, LogIn } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const UpdatePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecoveryFlow, setIsRecoveryFlow] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    console.log("UpdatePasswordPage: Mounting. Checking for recovery state via hash and listener.");
    let isMounted = true;
    let recoveryDetected = false;

    const hash = window.location.hash;
    console.log("UpdatePasswordPage: Current URL hash:", hash);
    if (hash.includes('type=recovery') && hash.includes('access_token=')) {
        console.log("UpdatePasswordPage: Recovery type and token found in URL hash. Enabling recovery flow.");
        recoveryDetected = true;
        if (isMounted) {
          setIsRecoveryFlow(true);
          setIsValidating(false);
        }
    } else {
         console.log("UpdatePasswordPage: No recovery info in initial hash, relying on auth event listener.");
    }

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (isMounted) {
        console.log("UpdatePasswordPage: onAuthStateChange event:", event);
        if (event === "PASSWORD_RECOVERY" && session && !recoveryDetected) {
          console.log("UpdatePasswordPage: PASSWORD_RECOVERY event confirmed via listener.");
          recoveryDetected = true;
          setIsRecoveryFlow(true);
          setIsValidating(false);
        } else if (isValidating && event === 'INITIAL_SESSION' && !session && !recoveryDetected) {
           console.log("UpdatePasswordPage: Initial session is null via listener, hash check negative. Assuming not recovery flow.");
           setIsValidating(false);
           setIsRecoveryFlow(false);
        }
      }
    });

    let validationTimeoutId = null;
    if (!recoveryDetected) {
      validationTimeoutId = setTimeout(() => {
          if (isMounted && isValidating) {
              console.log("UpdatePasswordPage: Validation timeout reached (no hash or recovery event). Assuming not recovery flow.");
              setIsValidating(false);
              setIsRecoveryFlow(false);
          }
      }, 4000);
    }

    return () => {
      console.log("UpdatePasswordPage: Unmounting listener and timeout.");
      isMounted = false;
      if (validationTimeoutId) clearTimeout(validationTimeoutId);
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: "Error", description: "Las contraseñas no coinciden.", variant: "destructive" });
      return;
    }
     if (password.length < 6) {
        toast({ title: "Contraseña Débil", description: "La contraseña debe tener al menos 6 caracteres.", variant: "destructive" });
        return;
    }

    setIsLoading(true);
    console.log("UpdatePasswordPage: Attempting password update.");

    try {
      const { error } = await supabase.auth.updateUser({ password: password });

      if (error) {
        console.error('UpdatePasswordPage: Supabase updateUser Error:', error.message, error);
         let description = `No se pudo actualizar la contraseña: ${error.message}.`;
         if (error.message.toLowerCase().includes("token has expired or is invalid")){
             description = "El enlace de restablecimiento ha expirado o es inválido. Solicita uno nuevo.";
         } else if (error.message.toLowerCase().includes("unable to validate")) {
             description = "No se pudo validar la solicitud. Asegúrate de estar usando el enlace correcto.";
         }
         toast({ title: "Error al Actualizar", description: description, variant: "destructive", duration: 7000 });
      } else {
        console.log("UpdatePasswordPage: Password updated successfully.");
        toast({
          title: "Contraseña Actualizada",
          description: "Tu contraseña ha sido cambiada. Ya puedes iniciar sesión.",
          variant: "success",
          duration: 5000,
        });
        await supabase.auth.signOut();
        navigate('/login');
      }
    } catch (error) {
       console.error('UpdatePasswordPage: Update Catch Error:', error);
       toast({ title: "Error Crítico", description: "Ocurrió un error inesperado.", variant: "destructive" });
    } finally {
       setIsLoading(false);
    }
  };

   if (isValidating) {
    return (
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 flex items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 dark:bg-background">
        <div className="text-center">
          <p className="text-lg font-semibold text-primary">Validando enlace...</p>
          <div className="mt-4 animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
      </section>
    );
  }

  if (!isRecoveryFlow) {
    return (
       <section className="pt-28 md:pt-36 pb-16 md:pb-24 flex items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4 max-w-md text-center">
           <Card className="shadow-xl border dark:border-gray-800 p-6">
             <CardTitle className="text-xl md:text-2xl font-bold mb-3 text-destructive">Enlace Inválido o Expirado</CardTitle>
             <CardDescription className="mb-4">
               Esta página es solo para actualizar tu contraseña usando un enlace válido de restablecimiento. Por favor, solicita un nuevo enlace si es necesario o intenta iniciar sesión.
             </CardDescription>
             <Link to="/forgot-password">
               <Button variant="outline" className="mr-2 mb-2 sm:mb-0">
                 <KeyRound className="mr-2 h-4 w-4"/> Solicitar Nuevo Enlace
               </Button>
             </Link>
              <Link to="/login">
               <Button variant="secondary">
                 <LogIn className="mr-2 h-4 w-4"/> Ir a Inicio de Sesión
               </Button>
             </Link>
           </Card>
        </div>
      </section>
    );
  }

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
              <CardTitle className="text-2xl md:text-3xl font-bold">Actualizar Contraseña</CardTitle>
              <CardDescription>Introduce y confirma tu nueva contraseña.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <form onSubmit={handlePasswordUpdate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Nueva Contraseña</Label>
                  <Input id="password" type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} required className="dark:bg-gray-800 dark:border-gray-700" autoComplete="new-password" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                  <Input id="confirm-password" type="password" placeholder="Repite la nueva contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="dark:bg-gray-800 dark:border-gray-700" autoComplete="new-password" />
                </div>
                <Button type="submit" className="w-full btn-persuasive" disabled={isLoading}>
                  {isLoading ? 'Actualizando...' : <> <Save className="mr-2 h-4 w-4"/> Guardar Nueva Contraseña </>}
                </Button>
              </form>
            </CardContent>
             <CardFooter className="text-center block">
               <p className="text-xs text-gray-500 dark:text-gray-400">
                 Actualizarás la contraseña para la cuenta asociada a este enlace de restablecimiento.
               </p>
             </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default UpdatePasswordPage;
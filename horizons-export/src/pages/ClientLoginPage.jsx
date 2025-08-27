import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

const ClientLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error('Supabase login error:', error);
        // Provide more specific feedback based on error type if possible
        let description = "Error al iniciar sesión. Por favor, verifica tus credenciales.";
        if (error.message.includes("Invalid login credentials")) {
            description = "Correo electrónico o contraseña incorrectos.";
        } else if (error.message.includes("Email not confirmed")) {
            description = "Por favor, confirma tu correo electrónico antes de iniciar sesión.";
        }
        toast({
          title: "Error de Inicio de Sesión",
          description: description,
          variant: "destructive",
        });
      } else if (data.user) {
        toast({
          title: "Inicio de Sesión Exitoso",
          description: `¡Bienvenido de nuevo, ${data.user.email}!`,
          variant: "success",
        });
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
         // Handle unexpected cases where there's no error but no user data
         toast({
          title: "Error Inesperado",
          description: "No se pudo completar el inicio de sesión. Inténtalo de nuevo.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Unexpected error during login:', error);
      toast({
        title: "Error Inesperado",
        description: "Ocurrió un problema durante el inicio de sesión. Por favor, inténtalo más tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-background px-4 py-12">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <Card className="shadow-xl dark:border-gray-700">
          <CardHeader className="space-y-1 text-center">
            <LogIn className="mx-auto h-8 w-8 text-primary" />
            <CardTitle className="text-2xl font-bold">Área de Cliente</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder a tu panel.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                  disabled={loading}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                  disabled={loading}
                />
              </div>
              <Button type="submit" className="w-full mt-2" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Accediendo...
                  </>
                ) : (
                  'Iniciar Sesión'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2 text-sm">
             <Link to="/forgot-password" className="text-primary hover:underline">
                ¿Olvidaste tu contraseña?
             </Link>
             <p className="text-muted-foreground">
               ¿No tienes cuenta?{' '}
               <Link to="/register" className="font-semibold text-primary hover:underline">
                 Regístrate aquí
               </Link>
             </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default ClientLoginPage;
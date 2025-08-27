import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";
import { Loader2, UserPlus } from 'lucide-react';

const ClientRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Added full name
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {};
    if (!fullName.trim()) {
        newErrors.fullName = 'El nombre completo es obligatorio.';
    }
    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El formato del correo electrónico no es válido.';
    }
    if (!password) {
      newErrors.password = 'La contraseña es obligatoria.';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setErrors({}); // Clear previous errors

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName, // Include full name in user metadata
          }
        }
      });

      if (error) {
        console.error('Supabase signup error:', error);
        let friendlyMessage = 'Error al registrar la cuenta.';
        if (error.message.includes('User already registered')) {
            friendlyMessage = 'Este correo electrónico ya está registrado. Intenta iniciar sesión.';
        } else if (error.message.includes('Password should be at least 6 characters')) {
             friendlyMessage = 'La contraseña debe tener al menos 6 caracteres.';
        }
        toast({
          variant: "destructive",
          title: "Error de registro",
          description: friendlyMessage,
        });
        setErrors({ general: friendlyMessage });
      } else if (data.user) {
         // Check if email confirmation is required
        if (data.user.identities && data.user.identities.length === 0) {
           // Email confirmation likely required but user object exists
           toast({
             title: "Registro casi completo",
             description: "Hemos enviado un enlace de confirmación a tu correo electrónico. Por favor, haz clic en él para activar tu cuenta.",
           });
           // Optionally navigate to a confirmation pending page or login page
           navigate('/login');
        } else {
           // User created and potentially auto-confirmed (e.g., via social login or settings)
           toast({
             title: "Registro exitoso",
             description: "¡Tu cuenta ha sido creada! Ahora puedes iniciar sesión.",
           });
           navigate('/login'); // Navigate to login after successful registration
        }

      } else {
         // This case might occur if email confirmation is required and user object isn't immediately returned
         toast({
             title: "Registro iniciado",
             description: "Revisa tu correo electrónico para confirmar tu cuenta.",
         });
         navigate('/login'); // Guide user towards login / checking email
      }
    } catch (error) {
      console.error('Unexpected signup error:', error);
      toast({
        variant: "destructive",
        title: "Error de red o servidor",
        description: "No se pudo conectar con el servidor. Revisa tu conexión o inténtalo más tarde.",
      });
      setErrors({ general: "Error de conexión." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black px-4 py-12 pt-24 md:pt-32"
    >
      <Card className="w-full max-w-md shadow-xl dark:bg-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl font-bold">Crear Cuenta</CardTitle>
          <CardDescription>Regístrate para acceder a tu panel de cliente.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-6">
             <div className="space-y-2">
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Tu Nombre Completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                className={errors.fullName ? 'border-destructive' : ''}
                aria-invalid={errors.fullName ? "true" : "false"}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
              />
              {errors.fullName && <p id="fullName-error" className="text-sm text-destructive mt-1">{errors.fullName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className={errors.email ? 'border-destructive' : ''}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className={errors.password ? 'border-destructive' : ''}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              {errors.password && <p id="password-error" className="text-sm text-destructive mt-1">{errors.password}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Repite la contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className={errors.confirmPassword ? 'border-destructive' : ''}
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
              />
              {errors.confirmPassword && <p id="confirmPassword-error" className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>}
            </div>
             {errors.general && <p className="text-sm text-destructive text-center">{errors.general}</p>}
            <Button type="submit" className="w-full btn-persuasive" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Registrando...
                </>
              ) : (
                 <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Crear Cuenta
                 </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ClientRegisterPage;
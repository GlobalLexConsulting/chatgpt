import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabaseClient';
import { Loader2, Mail } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Error", description: "Por favor, introduce tu email.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      // Using contact_submissions as a generic submissions table
      const { error } = await supabase.from('contact_submissions').insert({
        name: 'Newsletter Subscriber',
        email: email,
        service: 'Newsletter Subscription',
        message: 'User subscribed to newsletter from footer.',
        submitted_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por unirte a nuestro newsletter.",
        variant: "success",
      });
      setEmail('');
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Error",
        description: "Hubo un problema con tu suscripción. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerSections = [
    {
      title: 'Servicios Clave',
      links: [
        { name: 'Creación de LLC en EE.UU.', path: '/#llc-service' },
        { name: 'Residencia y Extranjería', path: '/#servicios' },
        { name: 'Fiscalidad y Contabilidad', path: '/#servicios' },
        { name: 'Consultoría Legal', path: '/#servicios' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Preguntas Frecuentes', path: '/#faq' },
        { name: 'Área de Clientes', path: '/login' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', path: '/privacy-policy' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">

        {/* Newsletter CTA Section */}
        <div className="bg-gray-800 rounded-xl p-8 md:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">Apúntate a nuestro newsletter</h3>
                <p className="text-gray-300">Recibe tips mensuales y las últimas novedades fiscales directamente en tu bandeja de entrada.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-1/2">
                <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-gray-700 border-gray-600 text-white h-12"
                        disabled={isSubmitting}
                    />
                    <Button type="submit" size="lg" className="btn-secondary-persuasive h-12 flex-shrink-0" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Suscribirme'}
                    </Button>
                </div>
            </form>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
               <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1fcadb24-6860-4e02-b4aa-2babb26f382a/f0a2c30b04963369f3ef2b6994754f67.png" alt="ConsultGlobal Lex Logo" className="h-10" />
            </Link>
            <p className="text-gray-400 text-sm mb-4">Simplificando la fiscalidad internacional para un mundo sin fronteras.</p>
            <p className="text-xs text-gray-500">GLOBALLEX CONSULTING LLC</p>
            <p className="text-xs text-gray-500">1209 MOUNTAIN ROAD PL NE, STE H,</p>
            <p className="text-xs text-gray-500">ALBUQUERQUE, NM 87110</p>
          </div>

          {/* Links Columns */}
          {footerSections.map(section => (
            <div key={section.title}>
              <p className="font-semibold text-gray-200 mb-4 uppercase tracking-wider text-sm">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ConsultGlobal Lex. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4 mt-4 sm:mt-0">
             <a href="https://www.facebook.com/ConsultGloballex/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Facebook</a>
             <a href="https://t.me/+15752556708" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Telegram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Percent, ShieldCheck, ArrowRight, Euro } from 'lucide-react';
import { useContactPopup } from '@/contexts/ContactPopupContext'; // Import context hook

const LlcService = () => {
  const { openPopup } = useContactPopup(); // Get the openPopup function

  const handleLlcConsultClick = () => {
    const popupContext = {
      type: 'llc', // Specific type for LLC popup
      title: "Consulta Especializada: LLC en USA",
      description: "Solicita información sobre cómo constituir tu LLC en EEUU siendo residente europeo y optimiza tu fiscalidad.",
      service: "Consulta sobre LLC USA" // Specific service name
    };
    openPopup(popupContext); // Open the LLC-specific popup
  };

  // General contact popup context (for the second button)
   const generalPopupContext = {
     type: 'general',
     title: "Habla con un Experto",
     description: "Completa el formulario para una consulta general sobre nuestros servicios.",
     service: "Consulta General"
   };


  const benefits = [
    { icon: <Percent className="h-6 w-6 text-primary" />, title: "Optimización Fiscal", description: "Estructuras diseñadas para minimizar la carga impositiva de residentes europeos." },
    { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Protección Patrimonial", description: "Separa tus activos personales de los riesgos empresariales." },
    { icon: <Building2 className="h-6 w-6 text-primary" />, title: "Acceso al Mercado USA", description: "Opera legalmente en Estados Unidos con una entidad reconocida." },
    { icon: <Euro className="h-6 w-6 text-primary" />, title: "Gestión Simplificada", description: "Nos encargamos de todo el proceso de constitución y cumplimiento inicial." },
  ];

  return (
    <section id="llc-service" className="py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Servicio Especializado</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Constitución de LLC en EE.UU. para Europeos
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Descubre cómo formar una Limited Liability Company (LLC) en Estados Unidos puede ofrecerte significativas ventajas fiscales siendo residente europeo. En GlobalLex, simplificamos el proceso y te guiamos para maximizar tus beneficios.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Ideal para freelancers, nómadas digitales, consultores y negocios online que buscan una estructura eficiente y reconocida internacionalmente.
            </p>
            <div className="pt-6">
              {/* This button now opens the specific LLC popup */}
              <Button size="lg" className="btn-persuasive group" onClick={handleLlcConsultClick}> {/* Correctly uses the handler */}
                Consulta sobre LLC <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50, scale: 0.9 }}
             whileInView={{ opacity: 1, x: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
             className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-3 bg-primary/10 rounded-full">{benefit.icon}</div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="sm:col-span-2"
              >
                 <Card className="bg-primary/90 dark:bg-primary/70 text-white shadow-lg">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-center sm:text-left font-medium">¿Listo para optimizar tu estructura fiscal internacionalmente?</p>
                         {/* This button opens the general contact popup */}
                        <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 flex-shrink-0" onClick={() => openPopup(generalPopupContext)}> {/* Correctly calls openPopup */}
                            Habla con un Experto
                        </Button>
                    </CardContent>
                 </Card>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LlcService;
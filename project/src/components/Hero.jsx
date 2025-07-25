import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';
import { useContactPopup } from '@/contexts/ContactPopupContext';
import { PopupModal } from 'react-calendly';

const Hero = () => {
    const { t } = useTranslation();
    const { openPopup } = useContactPopup();
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const calendlyUrl = "https://calendly.com/consultgloballex/consulta-30min";

    const handleContactClick = () => {
        openPopup({
            type: 'general',
            title: "Envía tu Consulta",
            description: "Completa tus datos y uno de nuestros expertos se pondrá en contacto contigo a la brevedad.",
            service: "Consulta General (Hero)"
        });
    };

    const handleCalendlyOpen = () => {
        setIsCalendlyOpen(true);
    };

    return (
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fillOpacity="0.5" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,202.7C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
             <motion.div
                 className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 1.5, delay: 0.2 }}
             ></motion.div>
             <motion.div
                 className="absolute bottom-1/4 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"
                  initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 1.5, delay: 0.4 }}
            ></motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl text-center mx-auto"
                >
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                        Tu Socio Estratégico Global
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight hero-title">
                       {t('hero.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                         <Button
                            size="lg"
                            className="btn-persuasive group shadow-lg text-lg px-8 py-3"
                            onClick={handleCalendlyOpen}
                         >
                           {t('hero.cta_main')} <Calendar className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            className="btn-secondary-persuasive text-lg px-8 py-3"
                            onClick={handleContactClick}
                        >
                            {t('hero.cta_secondary')} <MessageSquare className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>

              <PopupModal
                 url={calendlyUrl}
                 onModalClose={() => setIsCalendlyOpen(false)}
                 open={isCalendlyOpen}
                 rootElement={document.getElementById("root")}
              />
        </section>
    );
};

export default Hero;
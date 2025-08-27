import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import ClientLoginPage from "@/pages/ClientLoginPage";
import ClientRegisterPage from "@/pages/ClientRegisterPage";
import ClientDashboardPage from "@/pages/ClientDashboardPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage";
import UpdatePasswordPage from "@/pages/UpdatePasswordPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";
import { Send } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';
import MarketingPopup from "@/components/MarketingPopup";
import ContactPopup from "@/components/ContactPopup";
import GlobalCompanyPopup from "@/components/popups/GlobalCompanyPopup";
import LlcPopup from "@/components/popups/LlcPopup";
import GuidePopup from "@/components/popups/GuidePopup";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { ContactPopupProvider } from "@/contexts/ContactPopupContext";
import { HelmetProvider } from 'react-helmet-async';
import SEOPage from "@/pages/SEOPage";
import ComparisonsPage from "@/pages/ComparisonsPage";
import WorkInGermanyPage from "@/pages/WorkInGermanyPage";
import CRMPage from "@/pages/CRMPage";

const ImmigrationPage = lazy(() => import("@/pages/services/ImmigrationPage"));
const CompanyFormationPage = lazy(() => import("@/pages/services/CompanyFormationPage"));
const InternationalTaxPage = lazy(() => import("@/pages/services/InternationalTaxPage"));
const GermanyLogisticsPage = lazy(() => import("@/pages/services/GermanyLogisticsPage"));
const SpainFiscalPage = lazy(() => import("@/pages/services/SpainFiscalPage"));
const InsurancePage = lazy(() => import("@/pages/services/InsurancePage"));



const DeloittePillarPage = lazy(() => import("@/pages/comparativas/DeloittePillarPage"));
const CeConsultingPillarPage = lazy(() => import("@/pages/comparativas/CeConsultingPillarPage"));
const EximAsesoresPillarPage = lazy(() => import("@/pages/comparativas/EximAsesoresPillarPage"));
const MartinLechadoPillarPage = lazy(() => import("@/pages/comparativas/MartinLechadoPillarPage"));
const OlympiaAbogadosPillarPage = lazy(() => import("@/pages/comparativas/OlympiaAbogadosPillarPage"));

const DeloitteFiscalidadCluster = lazy(() => import("@/pages/comparativas/clusters/DeloitteFiscalidadCluster"));
const DeloitteLLCCluster = lazy(() => import("@/pages/comparativas/clusters/DeloitteLLCCluster"));
const DeloitteNomadaCluster = lazy(() => import("@/pages/comparativas/clusters/DeloitteNomadaCluster"));
const DeloitteLegalCluster = lazy(() => import("@/pages/comparativas/clusters/DeloitteLegalCluster"));
const DeloitteLogisticaCluster = lazy(() => import("@/pages/comparativas/clusters/DeloitteLogisticaCluster"));

const CEConsultingFiscalidadCluster = lazy(() => import("@/pages/comparativas/clusters/CEConsultingFiscalidadCluster"));
const CEConsultingLLCCluster = lazy(() => import("@/pages/comparativas/clusters/CEConsultingLLCCluster"));
const CEConsultingNomadaCluster = lazy(() => import("@/pages/comparativas/clusters/CEConsultingNomadaCluster"));
const CEConsultingLegalCluster = lazy(() => import("@/pages/comparativas/clusters/CEConsultingLegalCluster"));
const CEConsultingLogisticaCluster = lazy(() => import("@/pages/comparativas/clusters/CEConsultingLogisticaCluster"));

const EximFiscalidadCluster = lazy(() => import("@/pages/comparativas/clusters/EximFiscalidadCluster"));
const EximLLCCluster = lazy(() => import("@/pages/comparativas/clusters/EximLLCCluster"));
const EximNomadaCluster = lazy(() => import("@/pages/comparativas/clusters/EximNomadaCluster"));
const EximLegalCluster = lazy(() => import("@/pages/comparativas/clusters/EximLegalCluster"));
const EximLogisticaCluster = lazy(() => import("@/pages/comparativas/clusters/EximLogisticaCluster"));

const MartinLechadoLicenciasCluster = lazy(() => import("@/pages/comparativas/clusters/MartinLechadoLicenciasCluster"));
const MartinLechadoFiscalidadCluster = lazy(() => import("@/pages/comparativas/clusters/MartinLechadoFiscalidadCluster"));
const MartinLechadoSLCluster = lazy(() => import("@/pages/comparativas/clusters/MartinLechadoSLCluster"));
const MartinLechadoContabilidadCluster = lazy(() => import("@/pages/comparativas/clusters/MartinLechadoContabilidadCluster"));
const MartinLechadoDigitalCluster = lazy(() => import("@/pages/comparativas/clusters/MartinLechadoDigitalCluster"));

const OlympiaInmobiliarioCluster = lazy(() => import("@/pages/comparativas/clusters/OlympiaInmobiliarioCluster"));
const OlympiaHerenciasCluster = lazy(() => import("@/pages/comparativas/clusters/OlympiaHerenciasCluster"));
const OlympiaMercantilCluster = lazy(() => import("@/pages/comparativas/clusters/OlympiaMercantilCluster"));
const OlympiaExtranjeriaCluster = lazy(() => import("@/pages/comparativas/clusters/OlympiaExtranjeriaCluster"));
const OlympiaBancarioCluster = lazy(() => import("@/pages/comparativas/clusters/OlympiaBancarioCluster"));


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const location = useLocation();

   useEffect(() => {
    if (!location.hash) {
       window.scrollTo(0, 0);
    }
    const handleHashScroll = () => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };
     const timer = setTimeout(handleHashScroll, 150);
     return () => clearTimeout(timer);

  }, [location.pathname, location.hash]);


  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div>Loading...</div></div>}>
      <HelmetProvider>
        <ContactPopupProvider>
          <div className="min-h-screen flex flex-col dark:bg-background">
            <motion.div
              className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[60] origin-left"
              style={{ scaleX }}
            />

            <Navbar />

            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<SEOPage title="ConsultGlobalLex - Asesoría Fiscal y Legal Internacional" description="Expertos en optimización fiscal, LLC en USA, BEPS, Ley Beckham y asesoría para nómadas digitales. Alternativa a Deloitte y CE Consulting."><HomePage /></SEOPage>} />
                <Route path="/blog" element={<SEOPage title="Blog | ConsultGlobalLex - Fiscalidad y Legalidad Internacional" description="Análisis y guías sobre fiscalidad internacional, LLCs, BEPS, y más. Contenido experto para competir con grandes consultoras."><BlogPage /></SEOPage>} />
                <Route path="/blog/:postId" element={<BlogPostPage />} />
                <Route path="/login" element={<SEOPage title="Área de Clientes | ConsultGlobalLex" description="Acceso seguro para clientes de ConsultGlobalLex. Gestiona tus documentos y servicios de asesoría fiscal y legal."><ClientLoginPage /></SEOPage>} />
                <Route path="/register" element={<SEOPage title="Registro de Cliente | ConsultGlobalLex" description="Regístrate para acceder a servicios de consultoría fiscal y legal personalizados. El primer paso para optimizar tu estructura global."><ClientRegisterPage /></SEOPage>} />
                <Route path="/forgot-password" element={<SEOPage title="Recuperar Contraseña | ConsultGlobalLex" description="Recupera el acceso a tu cuenta de cliente de ConsultGlobalLex para continuar con tu asesoría fiscal."><ForgotPasswordPage /></SEOPage>} />
                <Route path="/update-password" element={<UpdatePasswordPage />} />
                <Route path="/privacy-policy" element={<SEOPage title="Política de Privacidad | ConsultGlobalLex" description="Consulta nuestra política de privacidad y cómo protegemos tus datos en ConsultGlobalLex. Cumplimiento legal y seguridad."><PrivacyPolicyPage /></SEOPage>} />

                {/* Service Landing Pages ES */}
                <Route path="/servicios/residencia-fiscal" element={<ImmigrationPage />} />
                <Route path="/servicios/constitucion-sociedades" element={<CompanyFormationPage />} />
                <Route path="/servicios/asesoria-fiscal-internacional" element={<InternationalTaxPage />} />
                <Route path="/servicios/logistica-alemania" element={<GermanyLogisticsPage />} />
                <Route path="/servicios/gestion-fiscal-espana" element={<SpainFiscalPage />} />
                <Route path="/servicios/seguros" element={<InsurancePage />} />

                
                {/* Service Landing Pages EN */}
                <Route path="/services/tax-residency" element={<ImmigrationPage />} />
                <Route path="/services/company-formation" element={<CompanyFormationPage />} />
                <Route path="/services/international-tax-advisory" element={<InternationalTaxPage />} />
                <Route path="/services/germany-logistics" element={<GermanyLogisticsPage />} />
                <Route path="/services/fiscal-management-spain" element={<SpainFiscalPage />} />
                <Route path="/services/insurance" element={<InsurancePage />} />

                {/* Service Landing Pages DE */}
                <Route path="/dienstleistungen/steuerlicher-wohnsitz" element={<ImmigrationPage />} />
                <Route path="/dienstleistungen/unternehmensgruendung" element={<CompanyFormationPage />} />
                <Route path="/dienstleistungen/internationale-steuerberatung" element={<InternationalTaxPage />} />
                <Route path="/dienstleistungen/logistik-deutschland" element={<GermanyLogisticsPage />} />
                <Route path="/dienstleistungen/steuerverwaltung-spanien" element={<SpainFiscalPage />} />
                <Route path="/dienstleistungen/versicherungen" element={<InsurancePage />} />

                {/* Service Landing Pages IT */}
                <Route path="/servizi/residenza-fiscale" element={<ImmigrationPage />} />
                <Route path="/servizi/costituzione-societa" element={<CompanyFormationPage />} />
                <Route path="/servizi/consulenza-fiscale-internazionale" element={<InternationalTaxPage />} />
                <Route path="/servizi/logistica-germania" element={<GermanyLogisticsPage />} />
                <Route path="/servizi/gestione-fiscale-spagna" element={<SpainFiscalPage />} />
                <Route path="/servizi/assicurazioni" element={<InsurancePage />} />
                
                {/* Work in Germany Routes */}
                <Route path="/trabajo-en-alemania" element={<SEOPage title="Trabaja en Alemania con GLOBALLEX – Colocación legal y acompañada" description="GLOBALLEX CONSULTING conecta personal español con empresas en Alemania. Trabajo legal, sin experiencia previa, sectores con alta demanda."><WorkInGermanyPage /></SEOPage>} />
                <Route path="/work-in-germany" element={<SEOPage title="Work in Germany with GLOBALLEX – Legal and Supported Placement" description="GLOBALLEX CONSULTING connects Spanish personnel with companies in Germany. Legal work, no prior experience needed, high-demand sectors."><WorkInGermanyPage /></SEOPage>} />
                <Route path="/arbeiten-in-deutschland" element={<SEOPage title="Arbeiten in Deutschland mit GLOBALLEX – Legale und begleitete Vermittlung" description="GLOBALLEX CONSULTING vermittelt spanisches Personal an Unternehmen in Deutschland. Legale Arbeit, keine Vorkenntnisse erforderlich, gefragte Branchen."><WorkInGermanyPage /></SEOPage>} />
                <Route path="/lavoro-in-germania" element={<SEOPage title="Lavora in Germania con GLOBALLEX – Inserimento legale e accompagnato" description="GLOBALLEX CONSULTING mette in contatto personale spagnolo con aziende in Germania. Lavoro legale, senza esperienza pregressa, settori ad alta richiesta."><WorkInGermanyPage /></SEOPage>} />


                {/* Hub Page for comparisons */}
                <Route path="/comparativas" element={<ComparisonsPage />} />

                {/* Pillar Pages */}
                <Route path="/comparativas/deloitte" element={<DeloittePillarPage />} />
                <Route path="/comparativas/ce-consulting" element={<CeConsultingPillarPage />} />
                <Route path="/comparativas/exim-asesores" element={<EximAsesoresPillarPage />} />
                <Route path="/comparativas/martin-lechado" element={<MartinLechadoPillarPage />} />
                <Route path="/comparativas/olympia-abogados" element={<OlympiaAbogadosPillarPage />} />

                {/* Cluster Pages */}
                <Route path="/comparativas/deloitte/fiscalidad-internacional" element={<DeloitteFiscalidadCluster />} />
                <Route path="/comparativas/deloitte/constitucion-llc" element={<DeloitteLLCCluster />} />
                <Route path="/comparativas/deloitte/visado-nomada-digital" element={<DeloitteNomadaCluster />} />
                <Route path="/comparativas/deloitte/consultoria-legal" element={<DeloitteLegalCluster />} />
                <Route path="/comparativas/deloitte/logistica-alemania" element={<DeloitteLogisticaCluster />} />
                
                <Route path="/comparativas/ce-consulting/fiscalidad-internacional" element={<CEConsultingFiscalidadCluster />} />
                <Route path="/comparativas/ce-consulting/constitucion-llc" element={<CEConsultingLLCCluster />} />
                <Route path="/comparativas/ce-consulting/visado-nomada-digital" element={<CEConsultingNomadaCluster />} />
                <Route path="/comparativas/ce-consulting/consultoria-legal" element={<CEConsultingLegalCluster />} />
                <Route path="/comparativas/ce-consulting/logistica-alemania" element={<CEConsultingLogisticaCluster />} />

                <Route path="/comparativas/exim-asesores/fiscalidad-internacional" element={<EximFiscalidadCluster />} />
                <Route path="/comparativas/exim-asesores/constitucion-llc" element={<EximLLCCluster />} />
                <Route path="/comparativas/exim-asesores/visado-nomada-digital" element={<EximNomadaCluster />} />
                <Route path="/comparativas/exim-asesores/consultoria-legal" element={<EximLegalCluster />} />
                <Route path="/comparativas/exim-asesores/logistica-alemania" element={<EximLogisticaCluster />} />

                <Route path="/comparativas/martin-lechado/licencias-turisticas" element={<MartinLechadoLicenciasCluster />} />
                <Route path="/comparativas/martin-lechado/fiscalidad-autonomos" element={<MartinLechadoFiscalidadCluster />} />
                <Route path="/comparativas/martin-lechado/constitucion-sl" element={<MartinLechadoSLCluster />} />
                <Route path="/comparativas/martin-lechado/contabilidad-digital" element={<MartinLechadoContabilidadCluster />} />
                <Route path="/comparativas/martin-lechado/asesoria-digital-vs-tradicional" element={<MartinLechadoDigitalCluster />} />

                <Route path="/comparativas/olympia-abogados/derecho-inmobiliario" element={<OlympiaInmobiliarioCluster />} />
                <Route path="/comparativas/olympia-abogados/herencias-y-sucesiones" element={<OlympiaHerenciasCluster />} />
                <Route path="/comparativas/olympia-abogados/derecho-mercantil" element={<OlympiaMercantilCluster />} />
                <Route path="/comparativas/olympia-abogados/extranjeria-e-inversion" element={<OlympiaExtranjeriaCluster />} />
                <Route path="/comparativas/olympia-abogados/derecho-bancario" element={<OlympiaBancarioCluster />} />
                

                <Route path="/crm" element={<SEOPage title="CRM | ConsultGlobalLex" description="Gestión interna de clientes"><CRMPage /></SEOPage>} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <ClientDashboardPage />
                    </ProtectedRoute>
                  }
                />
                 <Route path="*" element={<SEOPage title="ConsultGlobalLex - Asesoría Fiscal y Legal Internacional" description="Página no encontrada. Vuelve al inicio para explorar nuestros servicios de asesoría fiscal internacional, LLC en USA, y más."><HomePage /></SEOPage>} />
              </Routes>
            </div>

             <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-3">
                 <a
                   href="https://wa.me/34623937507?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios."
                   className="whatsapp-float bg-green-500 hover:bg-green-600"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Contactar por WhatsApp"
                 >
                   <FaWhatsapp className="h-7 w-7"/>
                 </a>
                 <a
                   href="https://t.me/+15752556708"
                   className="whatsapp-float bg-blue-500 hover:bg-blue-600"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Contactar por Telegram"
                 >
                   <Send className="h-7 w-7"/>
                 </a>
             </div>

            <MarketingPopup />
            <ContactPopup />
            <GlobalCompanyPopup />
            <LlcPopup />
            <GuidePopup />
            <Footer />
            <Toaster />
            <CookieConsentBanner />
          </div>
        </ContactPopupProvider>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
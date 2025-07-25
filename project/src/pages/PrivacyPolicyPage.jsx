import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollText, UserCheck, Cookie, Shield, Database, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gray-50 dark:bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                 <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     className="mb-8"
                 >
                    <Link to="/">
                        <Button variant="outline" className="group">
                            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Volver al Inicio
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight flex items-center">
                        <ScrollText className="h-10 w-10 mr-4 text-primary flex-shrink-0" /> Política de Privacidad
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Última actualización: 30 de abril de 2025</p>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-headings:text-gray-800 dark:prose-headings:text-white prose-strong:text-gray-800 dark:prose-strong:text-white prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary prose-a:text-primary hover:prose-a:text-primary/80 dark:prose-a:text-primary">

                        <p>ConsultGlobalLex LLC ("nosotros", "nuestro") respeta su privacidad y se compromete a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web (independientemente de dónde lo visite) y le informará sobre sus derechos de privacidad y cómo la ley le protege.</p>

                        <p>Nuestra sede principal se encuentra en el estado de Nuevo México, Estados Unidos. Esta política se rige e interpreta de acuerdo con las leyes de Nuevo México y las leyes federales aplicables de los Estados Unidos.</p>

                        <h2 className="flex items-center"><Database className="h-6 w-6 mr-3 text-primary" /> 1. Datos que Recopilamos</h2>
                        <p>Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que hemos agrupado de la siguiente manera:</p>
                        <ul>
                            <li><strong>Datos de Identidad:</strong> Incluyen nombre, apellido, nombre de usuario o identificador similar.</li>
                            <li><strong>Datos de Contacto:</strong> Incluyen dirección de correo electrónico y números de teléfono.</li>
                            <li><strong>Datos Técnicos:</strong> Incluyen dirección de protocolo de internet (IP), datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de plug-in del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
                            <li><strong>Datos de Uso:</strong> Incluyen información sobre cómo utiliza nuestro sitio web, productos y servicios.</li>
                            <li><strong>Datos de Marketing y Comunicaciones:</strong> Incluyen sus preferencias para recibir marketing de nosotros y sus preferencias de comunicación.</li>
                        </ul>
                        <p>Recopilamos datos a través de formularios de contacto, cookies y tecnologías similares, y cuando interactúa directamente con nosotros.</p>

                        <h2 className="flex items-center"><UserCheck className="h-6 w-6 mr-3 text-primary" /> 2. Cómo Usamos Sus Datos Personales</h2>
                        <p>Utilizamos sus datos personales solo cuando la ley nos lo permite. Principalmente, utilizaremos sus datos personales en las siguientes circunstancias:</p>
                        <ul>
                            <li>Para proporcionarle información, productos o servicios que nos solicite.</li>
                            <li>Para gestionar nuestra relación con usted, lo que incluirá notificarle sobre cambios en nuestros términos o política de privacidad.</li>
                            <li>Para administrar y proteger nuestro negocio y este sitio web (incluida la solución de problemas, análisis de datos, pruebas, mantenimiento del sistema, soporte, informes y alojamiento de datos).</li>
                            <li>Para utilizar análisis de datos para mejorar nuestro sitio web, productos/servicios, marketing, relaciones con los clientes y experiencias.</li>
                            <li>Para cumplir con una obligación legal o regulatoria.</li>
                        </ul>

                        <h2 className="flex items-center"><Cookie className="h-6 w-6 mr-3 text-primary" /> 3. Cookies y Tecnologías de Seguimiento</h2>
                        <p>Nuestro sitio web utiliza cookies para distinguirlo de otros usuarios de nuestro sitio web. Esto nos ayuda a proporcionarle una buena experiencia cuando navega por nuestro sitio web y también nos permite mejorar nuestro sitio. Puede configurar su navegador para rechazar todas o algunas cookies del navegador, o para alertarle cuando los sitios web establezcan o accedan a cookies.</p>

                        <h2 className="flex items-center"><Shield className="h-6 w-6 mr-3 text-primary" /> 4. Seguridad de los Datos</h2>
                        <p>Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan accidentalmente, se usen o se accedan de manera no autorizada, se alteren o se divulguen. Utilizamos la plataforma Supabase para gestionar la autenticación y almacenamiento de datos, que implementa medidas de seguridad estándar de la industria.</p>

                        <h2 className="flex items-center"><UserCheck className="h-6 w-6 mr-3 text-primary" /> 5. Sus Derechos Legales</h2>
                        <p>Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos en relación con sus datos personales. Estos pueden incluir el derecho a:</p>
                        <ul>
                            <li>Solicitar acceso a sus datos personales.</li>
                            <li>Solicitar la corrección de sus datos personales.</li>
                            <li>Solicitar la eliminación de sus datos personales.</li>
                            <li>Oponerse al procesamiento de sus datos personales.</li>
                            <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
                            <li>Solicitar la transferencia de sus datos personales.</li>
                            <li>Derecho a retirar el consentimiento.</li>
                        </ul>
                        <p>Si desea ejercer alguno de los derechos establecidos anteriormente, contáctenos en <a href="mailto:info@consultgloballex.com">info@consultgloballex.com</a>.</p>

                         <h2 className="flex items-center"><ScrollText className="h-6 w-6 mr-3 text-primary" /> 6. Cambios a la Política de Privacidad</h2>
                        <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier cambio será publicado en esta página con una fecha de actualización revisada.</p>

                        <h2>Contacto</h2>
                        <p>Si tiene alguna pregunta sobre esta política de privacidad, contáctenos en:</p>
                        <p>Email: <a href="mailto:info@consultgloballex.com">info@consultgloballex.com</a><br />
                        ConsultGlobalLex LLC<br />
                        Nuevo México, USA</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicyPage;
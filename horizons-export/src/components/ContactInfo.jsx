import React from 'react';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const infoItems = [
    { icon: <MapPin className="h-6 w-6 text-primary flex-shrink-0" />, text: "Santa Cruz de Tenerife, España", label: "Oficina Europa" },
    { icon: <MapPin className="h-6 w-6 text-primary flex-shrink-0" />, text: "Nuevo México, EE.UU.", label: "Oficina EE.UU." },
    { icon: <Phone className="h-6 w-6 text-primary flex-shrink-0" />, text: "+1 (575) 255-6708", label: "Teléfono / WhatsApp", href: "https://wa.me/15752556708" },
    { icon: <Mail className="h-6 w-6 text-primary flex-shrink-0" />, text: "info@consultgloballex.com", label: "Email", href: "mailto:info@consultgloballex.com" },
     { icon: <Clock className="h-6 w-6 text-primary flex-shrink-0" />, text: "Lun - Vie: 9:00 - 18:00 (CET / MST)", label: "Horario Atención" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Información de Contacto</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Estamos listos para escuchar tus necesidades y explorar cómo podemos ayudarte. Contáctanos a través de tu canal preferido.
        </p>
      </motion.div>

      {infoItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg shadow-sm transition-all hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="flex-shrink-0 pt-0.5">{item.icon}</div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('https') ? "_blank" : "_self"}
                rel={item.href.startsWith('https') ? "noopener noreferrer" : ""}
                className="text-lg text-gray-800 dark:text-gray-200 font-medium hover:text-primary transition-colors"
              >
                {item.text}
              </a>
            ) : (
              <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">{item.text}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
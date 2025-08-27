import React from 'react';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation('common');

  const infoItems = [
    { icon: <MapPin className="h-6 w-6 text-primary flex-shrink-0" />, text: t('contact.address_es'), label: t('contact.office_eu_label') },
    { icon: <MapPin className="h-6 w-6 text-primary flex-shrink-0" />, text: t('contact.address_us'), label: t('contact.office_us_label') },
    { icon: <Phone className="h-6 w-6 text-primary flex-shrink-0" />, text: "+1 (575) 255-6708", label: t('contact.phone_telegram_label'), href: "https://t.me/+15752556708" },
    { icon: <FaWhatsapp className="h-6 w-6 text-primary flex-shrink-0" />, text: "+34 623 93 75 07", label: t('contact.whatsapp_label'), href: "https://wa.me/34623937507" },
    { icon: <Mail className="h-6 w-6 text-primary flex-shrink-0" />, text: "info@consultgloballex.com", label: "Email", href: "mailto:info@consultgloballex.com" },
    { icon: <Clock className="h-6 w-6 text-primary flex-shrink-0" />, text: t('contact.hours'), label: t('contact.hours_label') },
  ];

  return (
    <div className="lg:col-span-2">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.info_title')}</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {t('contact.info_subtitle')}
        </p>
      </motion.div>

      <div className="space-y-6">
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
    </div>
  );
};

export default ContactInfo;
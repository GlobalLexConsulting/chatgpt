import React from 'react';
import ServicePageLayout from '@/components/services/ServicePageLayout';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const CompanyFormationPage = () => {
  const { t, i18n } = useTranslation('service_pages');
  const lng = i18n.language;

  const getPageUrl = (language) => {
    switch (language) {
      case 'en':
        return "https://consultgloballex.com/services/company-formation";
      case 'de':
        return "https://consultgloballex.com/dienstleistungen/unternehmensgruendung";
      case 'it':
        return "https://consultgloballex.com/servizi/costituzione-societa";
      case 'es':
      default:
        return "https://consultgloballex.com/servicios/constitucion-sociedades";
    }
  };

  const currentUrl = getPageUrl(lng);
  const pageKey = "company_formation_page";

  return (
    <>
      <Helmet>
        <title>{t(`${pageKey}.meta_title`)}</title>
        <meta name="description" content={t(`${pageKey}.meta_description`)} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={t(`${pageKey}.meta_title`)} />
        <meta property="og:description" content={t(`${pageKey}.meta_description`)} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        {['es', 'en', 'de', 'it'].map(lang => (
            <link key={lang} rel="alternate" hrefLang={lang} href={getPageUrl(lang)} />
        ))}
      </Helmet>
      <ServicePageLayout pageKey={pageKey} />
    </>
  );
};

export default CompanyFormationPage;
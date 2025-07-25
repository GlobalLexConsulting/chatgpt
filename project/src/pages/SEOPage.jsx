import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOPage = ({ title, description, keywords, schema, children, canonicalPath }) => {
  const location = useLocation();
  const canonicalUrl = `https://consultgloballex.com${canonicalPath || location.pathname}`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        {keywords && <meta name="keywords" content={keywords} />}
        {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      </Helmet>
      {children}
    </>
  );
};

export default SEOPage;
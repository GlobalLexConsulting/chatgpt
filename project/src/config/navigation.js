export const navLinks = (t) => [
  { name: t('navbar.home'), path: '/', type: 'link' },
  {
    name: t('navbar.services'),
    path: '#services',
    type: 'dropdown',
    items: [
      { name: t('services.service_residency_title'), path: '/servicios/residencia-fiscal' },
      { name: t('services.service_incorporation_title'), path: '/servicios/constitucion-sociedades' },
      { name: t('services.service_tax_title'), path: '/servicios/asesoria-fiscal-internacional' },
      { name: t('services.service_spain_fiscal_title'), path: '/servicios/gestion-fiscal-espana'},
      { name: t('services.service_germany_title'), path: '/servicios/logistica-alemania' },
      { name: t('services.service_work_germany_title'), path: '/trabajo-en-alemania' },
      { name: t('services.service_insurance_title'), path: '/servicios/seguros' },
    ],
  },
  { name: t('navbar.about'), path: '/#about', type: 'link' },
  { name: t('navbar.partners'), path: '/#partners', type: 'link' },
  { name: t('navbar.testimonials'), path: '/#testimonials', type: 'link' },
  { name: t('navbar.blog'), path: '/blog', type: 'link' },
  { name: t('navbar.faq'), path: '/#faq', type: 'link' },
  { name: t('navbar.contact'), path: '/#contact', type: 'link' },
];

export const clientAreaLinks = (t) => [
  { name: t('navbar.clients'), path: '/login', type: 'button', variant: 'outline' },
  { name: t('navbar.free_consultation'), path: '/#contact', type: 'button', variant: 'default' },
];
-- Seed issuers
insert into issuer_profiles (org_id, code, legal_name, tax_id, address, city, state, postal_code, country, iban, swift_bic, bank_name, bank_address, email, phone, is_default)
values
  (auth_org_id(), 'GLOBALLEX_US', 'GLOBALLEX CONSULTING LLC', 'EIN 98-1855256', '99 Wall St 2218', 'New York', 'NY', '10005', 'USA',
   'BE47805415603880', 'TRWIBEB1XXX', 'WISE', 'Rue du Trône 100, 3rd Floor, Brussels 1050, Belgium', 'billing@consultgloballex.com', '+1 646 000 0000', true),
  (auth_org_id(), 'ILIASONLEY_ES', 'ILIASONLEY S.L.', 'CIF B19768746', 'C/ Santiago 5, 3º Izq', 'Santa Cruz de Tenerife', 'TF', '38002', 'España',
   'BE47805415603880', 'TRWIBEB1XXX', 'WISE', 'Rue du Trône 100, 3rd Floor, Brussels 1050, Belgium', 'facturas@consultgloballex.com', '+34 000 000 000', false)
on conflict do nothing;

-- Seed services & pricing
insert into services (org_id, code, name_es, name_en, category, billing_type, unit_label, internal_cost_min, internal_cost_max, retail_price_min, retail_price_max, vat_rate, notes)
values
  -- Autónomos
  (auth_org_id(), 'FREELANCER_5', 'Autónomos hasta 5 facturas/mes', 'Freelancers up to 5 invoices/month', 'Accounting', 'monthly', 'mes', 25, 25, 49, 49, 21, 'Incluye fiscalidad y AEAT/SS básicos'),
  (auth_org_id(), 'FREELANCER_HIGH', 'Autónomos volumen superior', 'Freelancers higher volume', 'Accounting', 'monthly', 'mes', 50, 60, 99, 99, 21, 'Incluye impuestos, contabilidad y AEAT/SS'),
  -- Sociedades
  (auth_org_id(), 'SL_NO_LAB', 'Sociedad Limitada sin laboral', 'Limited Co. (no employees)', 'Accounting', 'monthly', 'mes', 85, 85, 120, 120, 21, 'Impuestos, contabilidad, cuentas anuales, IS, AEAT/SS'),
  (auth_org_id(), 'SL_1_EMP', 'Sociedad Limitada con 1 trabajador', 'Limited Co. with 1 employee', 'Accounting', 'monthly', 'mes', 100, 100, 149, 149, 21, 'Incluye 1 nómina'),
  (auth_org_id(), 'EMPLOYEE_ADD', 'Empleado adicional (por trabajador)', 'Each additional employee', 'Accounting', 'per_unit', 'empleado', 15, 15, 20, 20, 21, 'Precio por empleado adicional'),
  -- Incorporaciones
  (auth_org_id(), 'INC_SL_PAE', 'Constitución de S.L. (PAE) completa', 'Full S.L. incorporation (PAE)', 'Incorporation', 'one_time', 'expediente', 500, 500, 1300, 1300, 21, 'Incluye notaría, RM, AEAT y SS; descuentos desde 5/mes'),
  (auth_org_id(), 'INC_CB', 'Constitución C.B.', 'General Partnership (C.B.)', 'Incorporation', 'one_time', 'expediente', 100, 100, 200, 200, 21, 'Más tasa Modelo 600'),
  (auth_org_id(), 'NIF_FOREIGN_VIES', 'NIF empresa extranjera + IVA intracomunitario + VIES', 'Foreign company NIF + VIES', 'Incorporation', 'one_time', 'expediente', 250, 250, 350, 350, 21, ''),
  -- Extranjería
  (auth_org_id(), 'NIE_PADRON', 'NIE con padrón (gestión completa)', 'NIE with registration', 'Immigration', 'one_time', 'expediente', 350, 350, 450, 450, 21, ''),
  (auth_org_id(), 'ARRAIGO', 'Arraigos (social, laboral, familiar)', 'Residence permits (Arraigo)', 'Immigration', 'one_time', 'expediente', 300, 300, 400, 400, 21, ''),
  (auth_org_id(), 'NACIONALIDAD', 'Nacionalidad por residencia', 'Citizenship by residence', 'Immigration', 'one_time', 'expediente', 250, 250, 350, 350, 21, ''),
  (auth_org_id(), 'LEY_BECKHAM', 'Ley Beckham', 'Beckham Law application', 'Tax', 'one_time', 'expediente', 75, 75, 250, 250, 21, ''),
  -- Otros
  (auth_org_id(), 'CERT_STD', 'Certificados (penales, nacimiento, matrimonio)', 'Certificates', 'Other', 'one_time', 'certificado', 50, 50, 100, 100, 21, ''),
  (auth_org_id(), 'CERT_DIG_PF', 'Certificado digital persona física', 'Digital certificate (individual)', 'Other', 'one_time', 'certificado', 30, 30, 50, 50, 21, ''),
  (auth_org_id(), 'CERT_DIG_PJ', 'Certificado digital persona jurídica', 'Digital certificate (corporate)', 'Other', 'one_time', 'certificado', 50, 50, 90, 90, 21, ''),
  (auth_org_id(), 'DISSOLUTION', 'Disolución de sociedades (honorarios)', 'Company dissolution (fees)', 'Incorporation', 'one_time', 'expediente', 150, 150, 250, 250, 21, 'Más Modelo 600, notario y RM'),
  (auth_org_id(), 'BACKLOG', 'Contabilidad atrasada (por año)', 'Accounting backlog (per year)', 'Accounting', 'one_time', 'año', 300, 500, 500, 700, 21, 'Según volumen');

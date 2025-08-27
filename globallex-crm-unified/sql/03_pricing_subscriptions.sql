-- Services / Plans / Subscriptions / Invoice Items / Issuer Profiles

create table if not exists issuer_profiles (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  code text not null,
  legal_name text not null,
  tax_id text,
  address text,
  city text,
  state text,
  postal_code text,
  country text,
  iban text,
  swift_bic text,
  bank_name text,
  bank_address text,
  email text,
  phone text,
  default_vat_rate numeric default 21,
  logo_path text default '/public/logo.png',
  is_default boolean default false,
  created_at timestamptz default now()
);
create unique index if not exists ux_issuer_code on issuer_profiles(org_id, code);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  code text not null,
  name_es text not null,
  name_en text,
  category text,
  billing_type text check (billing_type in ('one_time','monthly','yearly','per_unit')) not null default 'one_time',
  unit_label text default 'unidad',
  internal_cost_min numeric,
  internal_cost_max numeric,
  retail_price_min numeric,
  retail_price_max numeric,
  currency text default 'EUR',
  vat_rate numeric default 21,
  notes text,
  active boolean default true,
  created_at timestamptz default now()
);
create unique index if not exists ux_services_code on services(org_id, code);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  client_id uuid not null,
  service_code text not null,
  quantity numeric default 1,
  price numeric not null,
  currency text default 'EUR',
  period_months int default 1,
  start_date date not null default current_date,
  next_invoice_date date not null default (current_date + interval '1 month'),
  status text check (status in ('active','paused','canceled')) default 'active',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);
create index if not exists ix_subscriptions_next on subscriptions(org_id, next_invoice_date, status);

create table if not exists invoice_items (
  id uuid primary key default gen_random_uuid(),
  invoice_id uuid not null references invoices(id) on delete cascade,
  service_code text,
  description text,
  quantity numeric default 1,
  unit_price numeric not null,
  vat_rate numeric default 21,
  irpf_rate numeric default 0,
  line_total numeric not null,
  created_at timestamptz default now()
);

alter table issuer_profiles enable row level security;
alter table services enable row level security;
alter table subscriptions enable row level security;
alter table invoice_items enable row level security;

create policy issuer_read on issuer_profiles for select using (org_id = auth_org_id());
create policy issuer_write on issuer_profiles for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy services_read on services for select using (org_id = auth_org_id());
create policy services_write on services for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy subs_read on subscriptions for select using (org_id = auth_org_id());
create policy subs_write on subscriptions for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy items_read on invoice_items for select using (
  exists(select 1 from invoices i where i.id = invoice_id and i.org_id = auth_org_id())
);
create policy items_write on invoice_items for all using (
  exists(select 1 from invoices i where i.id = invoice_id and i.org_id = auth_org_id())
) with check (
  exists(select 1 from invoices i where i.id = invoice_id and i.org_id = auth_org_id())
);

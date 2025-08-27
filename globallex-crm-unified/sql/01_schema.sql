-- Base schema (orgs, profiles, clients, leads, cases, invoices, expenses, documents) + RLS

-- Helper: org_id from JWT
create or replace function auth_org_id() returns uuid language sql stable as $$
  select nullif(current_setting('request.jwt.claims', true)::jsonb->>'org_id','')::uuid
$$;

create or replace function current_user_org() returns uuid language sql stable as $$
  select auth_org_id()
$$;

create table if not exists orgs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz default now()
);

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  org_id uuid references orgs(id) on delete set null,
  role text check (role in ('admin','legal','paralegal','sales')) default 'admin',
  full_name text,
  created_at timestamptz default now()
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  name text not null,
  email text,
  phone text,
  type text check (type in ('unique','recurrent')) default 'unique',
  status text check (status in ('active','inactive')) default 'active',
  tags text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  name text not null,
  email text,
  phone text,
  source text,
  stage text check (stage in ('new','contacted','qualified','proposal','won','lost')) default 'new',
  expected_value numeric default 0,
  next_action date
);

create table if not exists cases (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  client_id uuid references clients(id) on delete cascade,
  title text not null,
  status text check (status in ('todo','doing','done')) default 'todo',
  due_date date,
  notes text,
  created_at timestamptz default now()
);

create table if not exists invoices (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  client_id uuid references clients(id) on delete restrict,
  number text,
  issue_date date not null default current_date,
  due_date date not null default current_date,
  base numeric not null default 0,
  vat_rate numeric not null default 21,
  irpf_rate numeric not null default 0,
  total numeric not null default 0,
  status text check (status in ('pending','paid','overdue')) default 'pending',
  created_at timestamptz default now()
);

create table if not exists expenses (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  date date not null,
  description text,
  amount numeric not null,
  category text,
  recurring text check (recurring in ('none','monthly','quarterly')) default 'none',
  created_at timestamptz default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  client_id uuid references clients(id) on delete set null,
  name text not null,
  mime text,
  size bigint,
  storage_key text not null,
  uploaded_at timestamptz default now()
);

-- TRIGGER: calc total
create or replace function calc_invoice_total() returns trigger as $$
declare b numeric; v numeric; r numeric; begin
  b := new.base; v := coalesce(new.vat_rate,0); r := coalesce(new.irpf_rate,0);
  new.total := greatest(0, round((b + (b*v/100) - (b*r/100))::numeric, 2));
  return new;
end; $$ language plpgsql;

drop trigger if exists trg_invoices_total on invoices;
create trigger trg_invoices_total before insert or update on invoices
for each row execute function calc_invoice_total();

-- Enable RLS
alter table clients enable row level security;
alter table leads enable row level security;
alter table cases enable row level security;
alter table invoices enable row level security;
alter table expenses enable row level security;
alter table documents enable row level security;
alter table profiles enable row level security;

-- Policies
create policy clients_read on clients for select using (org_id = auth_org_id());
create policy clients_write on clients for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy leads_read on leads for select using (org_id = auth_org_id());
create policy leads_write on leads for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy cases_read on cases for select using (org_id = auth_org_id());
create policy cases_write on cases for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy invoices_read on invoices for select using (org_id = auth_org_id());
create policy invoices_write on invoices for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy expenses_read on expenses for select using (org_id = auth_org_id());
create policy expenses_write on expenses for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy documents_read on documents for select using (org_id = auth_org_id());
create policy documents_write on documents for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy profiles_read on profiles for select using (id = auth.uid() or org_id = auth_org_id());
create policy profiles_write on profiles for update using (id = auth.uid()) with check (id = auth.uid());

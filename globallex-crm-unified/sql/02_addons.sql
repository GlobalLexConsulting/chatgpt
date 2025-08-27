-- ADD-ONS: collaborators, shares, portal, client_uploads, fiscal_events + RLS using auth_org_id()

create table if not exists collaborators (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  email text not null,
  full_name text,
  role text check (role in ('collaborator','auditor')) default 'collaborator',
  created_at timestamptz default now()
);
create unique index if not exists ux_collab_org_email on collaborators(org_id, email);

create table if not exists client_collaborators (
  org_id uuid not null,
  client_id uuid not null,
  collaborator_id uuid not null references collaborators(id) on delete cascade,
  granted_at timestamptz default now(),
  primary key (org_id, client_id, collaborator_id)
);

create table if not exists shares (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  resource_type text check (resource_type in ('document','invoice')) not null,
  resource_id uuid not null,
  token text not null,
  expires_at timestamptz,
  created_by uuid,
  created_at timestamptz default now()
);
create index if not exists ix_shares_token on shares(token);

create table if not exists portal_tokens (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  client_id uuid not null,
  token text not null,
  purpose text check (purpose in ('upload_invoices','upload_docs')) not null default 'upload_invoices',
  expires_at timestamptz not null,
  created_by uuid,
  created_at timestamptz default now()
);
create index if not exists ix_portal_tokens_token on portal_tokens(token);

create table if not exists client_uploads (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  client_id uuid not null,
  uploader_email text,
  file_name text not null,
  mime text,
  size bigint,
  storage_key text not null,
  kind text check (kind in ('invoice','document')) default 'invoice',
  status text check (status in ('pending','processed','rejected')) default 'pending',
  uploaded_at timestamptz default now(),
  processed_at timestamptz,
  notes text
);

create table if not exists fiscal_events (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null,
  model_code text not null,
  period_label text,
  due_date date not null,
  scope text check (scope in ('org','client')) default 'org',
  client_id uuid,
  channel text[] default '{email,whatsapp}',
  remind_days int[] default '{7,3,1}',
  meta jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);
create index if not exists ix_fiscal_events_org_due on fiscal_events(org_id, due_date);

alter table collaborators enable row level security;
alter table client_collaborators enable row level security;
alter table shares enable row level security;
alter table portal_tokens enable row level security;
alter table client_uploads enable row level security;
alter table fiscal_events enable row level security;

create policy collab_read on collaborators for select using (org_id = auth_org_id());
create policy collab_write on collaborators for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy cc_read on client_collaborators for select using (org_id = auth_org_id());
create policy cc_write on client_collaborators for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy shares_read on shares for select using (org_id = auth_org_id());
create policy shares_write on shares for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy pt_read on portal_tokens for select using (org_id = auth_org_id());
create policy pt_write on portal_tokens for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy cu_read on client_uploads for select using (org_id = auth_org_id());
create policy cu_write on client_uploads for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

create policy fe_read on fiscal_events for select using (org_id = auth_org_id());
create policy fe_write on fiscal_events for all using (org_id = auth_org_id()) with check (org_id = auth_org_id());

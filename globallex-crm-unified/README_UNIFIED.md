# GLOBALLEX CRM — Unified Starter (Base + Add-on + LLC)

## Pasos rápidos
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Copia `.env.example` a `.env.local` y rellena con tus claves.
3. En Supabase → SQL Editor, ejecuta (en orden):  
   `sql/01_schema.sql` → `sql/02_addons.sql` → `sql/03_pricing_subscriptions.sql` → `sql/seeds/03_seed_services.sql`
4. Crea el bucket privado **docs** en Storage.
5. Arranca:
   ```bash
   npm run dev
   ```
6. Prueba rutas: `/login`, `/catalog`, `/subscriptions`, `/llc`, `/automations`, `/collaborators`, `/portal`.

## Facturas (PDF)
- Genera en `/api/invoice/[id]/pdf` (coloca tu logo en `public/logo.png`).

## Bot WhatsApp
- Webhook en `/api/whatsapp/webhook` (usa env `WHATSAPP_VERIFY_TOKEN`).

_Generado: 2025-08-27_

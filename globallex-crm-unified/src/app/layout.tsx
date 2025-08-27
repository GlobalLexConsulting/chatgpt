import './globals.css'
import Link from 'next/link'

export const metadata = { title: 'GLOBALLEX CRM', description: 'Unified Starter' }

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="es">
      <body>
        <nav className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-2 flex gap-4 items-center">
            <Link href="/" className="font-semibold">GLOBALLEX CRM</Link>
            <Link href="/catalog">Catálogo</Link>
            <Link href="/subscriptions">Suscripciones</Link>
            <Link href="/llc">LLC</Link>
            <Link href="/automations">Automations</Link>
            <Link href="/collaborators">Colaboradores</Link>
            <Link href="/tax/calculators">Calculadoras</Link>
            <Link href="/portal">Portal</Link>
            <Link href="/login" className="ml-auto">Login</Link>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}

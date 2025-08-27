export default function Home(){
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <section className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Bienvenida</h2>
        <p>Este starter incluye: Clientes/Leads/Casos/Facturas (SQL), Portal de facturas, Colaboradores, Suscripciones, Gestión LLC, Calculadoras fiscales y Recordatorios.</p>
      </section>
      <section className="card p-6">
        <h2 className="text-lg font-semibold mb-2">Siguientes pasos</h2>
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Crea variables en <code>.env.local</code></li>
          <li>Ejecuta SQL en Supabase (01→04)</li>
          <li>Abre <b>/subscriptions</b> y crea una</li>
          <li>Prueba el PDF en <b>/api/invoice/[id]/pdf</b></li>
        </ol>
      </section>
    </div>
  )
}

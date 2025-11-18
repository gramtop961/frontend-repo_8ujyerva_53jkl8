export default function StatsSection() {
  const stats = [
    { value: "+ de 6", suffix: "h/semaine libérées" },
    { value: "+ 23", suffix: "% de nouveaux clients / mois" },
    { value: "634", suffix: "€ d'économie / an" }
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <div key={i} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:translate-y-[-2px] hover:shadow-[0_20px_80px_-20px_rgba(59,130,246,0.35)] transition">
            <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              <span className="inline-block group-hover:scale-[1.02] transition origin-left">{s.value}</span>
              <span className="ml-1 text-violet-300/90 text-2xl align-baseline">{s.suffix.startsWith('%') ? '' : ''}</span>
            </div>
            <p className="mt-2 text-slate-300/90">{s.suffix}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

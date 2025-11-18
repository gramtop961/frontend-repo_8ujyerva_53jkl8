export default function LogoMarquee() {
  const items = Array.from({ length: 15 }).map((_, i) => `Logo ${i + 1}`)
  return (
    <section id="preuves" className="relative py-12 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent pointer-events-none" />
      <div className="overflow-hidden">
        <div className="flex gap-12 animate-[marquee_25s_linear_infinite] opacity-90">
          {[...items, ...items].map((label, idx) => (
            <div key={idx} className="shrink-0 flex items-center justify-center h-10 md:h-12 opacity-70 hover:opacity-90 transition">
              <svg width="120" height="32" viewBox="0 0 120 32" className="text-white/80">
                <rect x="0" y="8" width="120" height="16" rx="8" fill="currentColor" opacity="0.08" />
                <text x="60" y="22" textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="10" fontFamily="Manrope, Inter, system-ui">{label}</text>
              </svg>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

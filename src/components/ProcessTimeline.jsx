import { Search, Palette, Code2, Gauge, Rocket } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Analyse de vos besoins', desc: 'On clarifie vos objectifs, votre audience et vos priorités.' },
  { icon: Palette, title: 'Design sur-mesure', desc: 'UI moderne, cohérente avec votre image, pensée conversion.' },
  { icon: Code2, title: 'Développement personnalisé', desc: 'Mise en place rapide, performante et responsive.' },
  { icon: Gauge, title: 'Tests & optimisation', desc: 'Vérif. des conversions, chargement, accessibilité.' },
  { icon: Rocket, title: 'Mise en ligne & formation', desc: 'Accompagnement, prise en main, et support.' }
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">Notre façon de travailler</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur transform-gpu transition hover:-translate-y-1 hover:rotate-[0.2deg] hover:shadow-[0_30px_100px_-40px_rgba(99,102,241,0.45)]">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/40 to-blue-600/40 border border-white/10 flex items-center justify-center text-white mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

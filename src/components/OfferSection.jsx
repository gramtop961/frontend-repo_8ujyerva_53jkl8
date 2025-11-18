import { Check, ArrowRight } from 'lucide-react'

const features = [
  'Design moderne',
  'Optimisé pour la prise de contact',
  'Liens réseaux (Instagram, WhatsApp…)',
  'Formulaire de contact intégré',
  'Contenu 100 % personnalisé',
  "Hébergement offert 1 an",
  'Nom de domaine offert 1 an',
  'Support + maintenance 1 an, 7j/7',
  '1 interlocuteur dédié + ligne directe',
  'Aucune facturation pour modifications simples'
]

export default function OfferSection() {
  return (
    <section id="offre" className="relative py-18 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white inline-block relative">
            Notre offre du moment
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 to-blue-500 blur-[1px]" />
          </h2>
          <p className="mt-3 text-slate-300">Pensée pour les TPE locales: rapide à déployer, efficace pour convertir, et rentable dès le premier mois.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Nous créons une landing page sur-mesure qui met en valeur votre activité locale et facilite la prise de contact.
              Ajoutez-y vos outils (réservation, prise de RDV, facturation) pour automatiser vos tâches répétitives et gagner du temps chaque semaine.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-600/30 to-blue-600/30 text-violet-200 ring-1 ring-white/10">
              Votre système de réservation intégré, autonome pendant 1 an
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mt-4 inline-flex items-center gap-2 text-violet-300 hover:text-white transition">
              Découvrir l'offre en détail
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Offer card pseudo-3D */}
          <div className="relative">
            <div className="group relative p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-40px_rgba(59,130,246,0.35)] transform-gpu transition will-change-transform hover:-rotate-[0.25deg] hover:translate-y-[-2px]">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-2xl opacity-40 group-hover:opacity-60 transition" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl font-bold text-white">1 Landing Page</h3>
                  <div className="text-sm text-violet-200 bg-white/5 px-3 py-1 rounded-full border border-white/10">Offre du moment</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:translate-y-[-1px] transition">
                      <Check className="w-4 h-4 text-violet-300 shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

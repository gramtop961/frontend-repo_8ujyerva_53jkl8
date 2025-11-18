import { useState } from 'react'

const faqs = [
  {
    q: 'Quel est le prix ? ',
    a: "À partir de 360 € TTC : création + nom de domaine + hébergement + maintenance + support 1 an.",
  },
  {
    q: "Quels outils pouvez-vous intégrer pour les entreprises locales ?",
    a: "Réservation, prises de RDV, facturation, automatisations — nous adaptons selon votre activité.",
  },
  {
    q: "Avez-vous un prototype gratuit et une garantie ?",
    a: "Oui : prototype gratuit + satisfait(e) ou remboursé(e) pendant 30 jours.",
  },
  { q: 'Quels sont les délais ?', a: "Livraison en 10 jours pour une landing page standard." },
  { q: "Y a-t-il un engagement ?", a: "Non, vous restez libre. Nous visons une relation long terme basée sur la valeur." },
  { q: "Qui possède le site ?", a: "Vous. Nous vous transférons les accès et les sources à la mise en ligne." },
  { q: "Que se passe-t-il après 1 an ?", a: "Vous pouvez prolonger le support/hébergement à tarif préférentiel, ou gérer vous-même." },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">FAQ</h2>
        <div className="divide-y divide-white/10 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {faqs.map((item, i) => (
            <AccordionItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="group">
      <button onClick={() => setOpen((v) => !v)} className="w-full text-left px-5 md:px-6 py-4 md:py-5 hover:bg-white/5 transition">
        <div className="flex items-center justify-between">
          <span className="text-white font-medium">{q}</span>
          <span className="text-violet-300">{open ? '-' : '+'}</span>
        </div>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} bg-white/5`}>
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-5 text-slate-300 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

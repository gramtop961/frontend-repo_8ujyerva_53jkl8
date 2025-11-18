import { ArrowRight, MessageCircle } from 'lucide-react'

export default function FinalCTASection() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_240px_at_50%_0%,rgba(99,102,241,0.25),transparent)]" />
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Un site qui connecte. Des outils qui vous libèrent. Des économies visibles.
        </h2>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Le meilleur rapport qualité-prix pour les entreprises locales. 30 jours pour changer d'avis.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfvUBsQGjnlbpUN_8vADttB9TwTUwhT9w8zpTkTdqNpRdKlrw/viewform?usp=header"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] transition"
          >
            On crée le design de votre site gratuitement
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20parler%20de%20mon%20projet."
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition"
          >
            <MessageCircle className="w-4 h-4" />
            Nous contacter directement
          </a>
        </div>
      </div>
    </section>
  )
}

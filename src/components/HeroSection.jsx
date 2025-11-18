import Spline from '@splinetool/react-spline'
import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react'

const TITLES = [
  "Connectez-vous à vos clients locaux, dès maintenant.",
  "Economisez dès le 1er mois avec un site qui convertit.",
  "Un site moderne + des outils qui font gagner du temps.",
  "Votre présence digitale, simple, efficace et rentable.",
  "Landing page premium pour TPE — rapide et abordable."
]

export default function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Gradient + grid background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_80%_20%,rgba(59,130,246,0.18),transparent)]" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none" />

      {/* Floating shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-blue-600/20 blur-3xl" />

      {/* Spline 3D object with subtle parallax */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[55%] lg:w-[50%] h-[60vh] md:h-[80vh] opacity-80">
        <div className="absolute inset-0 translate-z-0 will-change-transform" style={{ perspective: '1000px' }}>
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center py-16">
        <div className="md:col-span-7">
          {/* Logo + baseline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <svg width="34" height="34" viewBox="0 0 48 48" className="drop-shadow-[0_0_20px_rgba(139,92,246,0.55)]">
                <defs>
                  <linearGradient id="lg" x1="0" x2="1">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <rect x="6" y="6" width="36" height="36" rx="10" fill="url(#lg)" />
                <path d="M16 24c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="24" cy="24" r="2" fill="white" />
              </svg>
            </div>
            <span className="text-white/90 font-semibold tracking-tight">Le Local Digital</span>
          </div>

          <RotatingTitles />

          <p className="mt-5 text-slate-300 text-base md:text-lg max-w-2xl">
            On crée sur mesure votre landing page et vos outils de gestion digitaux pour vous connecter à vos clients tout en économisant de l'argent.
          </p>

          {/* Sector icons row */}
          <div className="mt-6 w-full">
            <div className="mx-auto w-[90%] md:w-[80%] grid grid-cols-5 gap-3 text-center">
              {['Coiffeur', 'Fleuriste', 'CBD', 'Naturopathe', 'Escape Game'].map((s) => (
                <div key={s} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs md:text-sm backdrop-blur-sm hover:scale-[1.02] hover:border-white/20 transition">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://calendar.app.google/S5fjZfAmxesUnDd38"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_rgba(99,102,241,0.45)] transition"
            >
              <Calendar className="w-4 h-4" />
              Parler de mon projet
            </a>
            <a
              href="https://wa.me/33600000000?text=Bonjour%20%F0%9F%91%8B%2C%20je%20souhaite%20parler%20de%20mon%20projet."
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Contact Direct
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfvUBsQGjnlbpUN_8vADttB9TwTUwhT9w8zpTkTdqNpRdKlrw/viewform?usp=header"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/70 ring-1 ring-white/15 text-white font-medium hover:bg-slate-900/60 transition"
            >
              <span className="relative inline-flex items-center">
                Obtenir un Nouveau Design pour mon Site
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-600 to-blue-600">Gratuit</span>
              </span>
              <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition" />
            </a>
          </div>

          {/* Quick proofs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              'Site web livré en 10 jours',
              'Satisfait(e) ou remboursé(e) pendant 30 jours'
            ].map((p) => (
              <span key={p} className="text-xs text-slate-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm hover:border-white/20 hover:scale-[1.02] transition">
                <Sparkles className="inline-block w-3.5 h-3.5 mr-1.5 text-violet-400" />
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-5" />
      </div>
    </section>
  )
}

function RotatingTitles() {
  return (
    <div className="relative h-[110px] md:h-[130px]">
      <div className="absolute inset-0">
        <div className="relative overflow-hidden">
          <div className="animate-[slide_16s_linear_infinite]">
            {TITLES.concat(TITLES).map((t, i) => (
              <h1 key={i} className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-2">
                {t}
              </h1>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateY(0); }
          50% { transform: translateY(-50%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  )
}

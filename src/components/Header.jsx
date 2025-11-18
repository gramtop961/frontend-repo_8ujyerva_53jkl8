import { Menu, Phone, Calendar, FormsIcon } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Preuves', href: '#preuves' },
  { label: "Offre", href: '#offre' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-500 to-blue-500 shadow-[0_0_30px_rgba(139,92,246,0.35)]" />
              <div className="absolute inset-0 rounded-md blur-md bg-gradient-to-br from-violet-500/50 to-blue-500/50 opacity-60 group-hover:opacity-90 transition" />
            </div>
            <span className="font-extrabold tracking-tight text-white text-lg">Le Local Digital</span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/S5fjZfAmxesUnDd38"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_20px_0_rgba(99,102,241,0.45)] transition"
            >
              <Calendar className="w-4 h-4" />
              Parler de mon projet
            </a>
            <a
              href="#contact"
              className="inline-flex md:hidden items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/15 transition"
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>
            <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-white hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

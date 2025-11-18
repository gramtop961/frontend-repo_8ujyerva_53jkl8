export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-slate-400 text-sm">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-blue-500" />
        <span className="text-white font-semibold">Le Local Digital</span>
      </div>
      <div className="space-x-4">
        <span>WhatsApp: +33 6 00 00 00 00</span>
        <span>•</span>
        <a href="mailto:contact@lelocaldigital.com" className="hover:text-white transition">contact@lelocaldigital.com</a>
      </div>
      <div className="mt-2">© 2025 Le Local Digital. Tous droits réservés.</div>
    </footer>
  )
}

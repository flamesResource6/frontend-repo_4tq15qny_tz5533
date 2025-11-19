import { Menu, Shield, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-400 ring-2 ring-white/10 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">CertDash</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#why" className="text-slate-300 hover:text-white transition">Why CertDash</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
            <a href="#more" className="text-slate-300 hover:text-white transition flex items-center gap-1">More <ChevronDown className="w-4 h-4" /></a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-block px-4 py-2 text-sm font-medium rounded-lg border border-white/10 text-white hover:bg-white/5 transition">View Plans</a>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 active:scale-[0.99] transition">
              Get Access
            </button>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

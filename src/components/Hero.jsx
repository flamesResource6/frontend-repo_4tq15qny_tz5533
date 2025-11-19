import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -top-40 -right-20 w-[40rem] h-[40rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-sky-200">
              <Sparkles className="w-3.5 h-3.5" /> New: Private builds now available
            </span>

            <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Gain The Unfair Advantage
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Dominate your next certification with real, battle‑tested practice. CertDash gives you insider‑level prep, smart tracking, and laser‑focused guidance so you pass faster.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#why" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/10 text-white/90 hover:bg-white/5 font-medium transition">
                Why CertDash
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Instant access • No fluff • Results that show
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full rounded-xl bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_40%)] flex items-center justify-center text-slate-300">
                <div className="text-center px-6">
                  <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-cyan-200">
                    CertDash
                  </div>
                  <div className="mt-2 text-sm text-slate-400">Precision prep for AWS, Azure, GCP, Security+, and more.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

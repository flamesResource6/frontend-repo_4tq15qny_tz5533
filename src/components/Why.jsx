import { Target, Activity, Clock, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Laser‑Focused Content",
    desc: "No fluff. Every module maps directly to the exam blueprint with pinpoint clarity.",
  },
  {
    icon: Activity,
    title: "Realistic Challenges",
    desc: "Hands‑on labs and scenario questions that mirror the actual test pressure.",
  },
  {
    icon: Clock,
    title: "Faster Prep",
    desc: "Adaptive study plans that concentrate on your weak spots to save weeks of time.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    desc: "Thousands certified with higher scores and fewer retakes — results you can feel.",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-20 border-t border-white/10 bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why CertDash?</h2>
          <p className="mt-3 text-slate-300">We blend elite‑level insight with a clean, focused experience so you can move with certainty.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

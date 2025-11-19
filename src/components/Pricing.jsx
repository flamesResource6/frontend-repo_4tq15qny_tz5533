export default function Pricing() {
  return (
    <section id="pricing" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Start small and scale your prep. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-slate-400 text-sm">Starter</div>
            <div className="mt-2 text-3xl font-bold text-white">$19<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Core practice questions</li>
              <li>Progress tracking</li>
              <li>Email support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 transition">Choose Starter</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-400/20">
            <div className="text-cyan-300 text-sm">Pro</div>
            <div className="mt-2 text-3xl font-bold text-white">$39<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Everything in Starter</li>
              <li>Scenario exams + labs</li>
              <li>Adaptive study plan</li>
              <li>Private community</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/40 transition">Choose Pro</a>
          </div>

          {/* Elite */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-slate-400 text-sm">Elite</div>
            <div className="mt-2 text-3xl font-bold text-white">$89<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Everything in Pro</li>
              <li>1:1 expert guidance</li>
              <li>Priority support</li>
              <li>Custom exam plan</li>
            </ul>
            <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 transition">Choose Elite</a>
          </div>
        </div>
      </div>
    </section>
  );
}

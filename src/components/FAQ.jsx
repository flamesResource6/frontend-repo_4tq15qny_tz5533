const faqs = [
  {
    q: "What exams do you support?",
    a: "AWS, Azure, GCP, CompTIA (Security+, Network+), and popular security/cloud certifications. More added monthly.",
  },
  { q: "Is there a free trial?", a: "Yes — explore core practice sets and tracking before upgrading." },
  {
    q: "How realistic are the questions?",
    a: "We mirror the exam style and difficulty, with explanations and links to docs so you learn by doing.",
  },
  { q: "Can I cancel anytime?", a: "Absolutely. Plans are month‑to‑month with no lock‑in." },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 border-t border-white/10 bg-slate-950/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
          <p className="mt-3 text-slate-300">Everything you need to know before you get started.</p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="text-white font-medium">{f.q}</span>
                <span className="text-slate-400 group-open:hidden">+</span>
                <span className="text-slate-400 hidden group-open:inline">−</span>
              </summary>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

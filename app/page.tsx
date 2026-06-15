export default function Home() {
  const faqs = [
    {
      q: 'Which wearables are supported?',
      a: 'SleepSync integrates with Fitbit, Oura Ring, and Apple Health. More devices are added regularly.'
    },
    {
      q: 'How does the schedule optimization work?',
      a: 'We analyze your sleep quality metrics — REM cycles, deep sleep, HRV — and correlate them with cognitive performance windows to suggest your best hours for deep work, meetings, and breaks.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your account dashboard with no questions asked and no cancellation fees.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Remote Workers & Digital Nomads
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Work smarter by sleeping better
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          SleepSync connects to your wearable and turns your sleep data into a personalized work schedule — so you hit peak focus exactly when your brain is ready.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start optimizing — $8/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Fitbit · Oura · Apple Health · Cancel anytime</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '🌙', title: 'Sleep Analysis', desc: 'REM, deep sleep, and HRV tracked nightly' },
          { icon: '🧠', title: 'Cognitive Windows', desc: 'Know your peak focus hours before the day starts' },
          { icon: '📅', title: 'Calendar Sync', desc: 'Auto-schedule deep work, meetings, and breaks' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited wearable syncs',
              'Daily personalized schedule',
              'Calendar integration (Google & Outlook)',
              'Weekly sleep performance report',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-20">
        © {new Date().getFullYear()} SleepSync. All rights reserved.
      </footer>
    </main>
  )
}

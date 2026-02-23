import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '$200K+', label: 'cost overruns identified' },
  { value: '2 wks → 2 days', label: 'reporting cycle' },
  { value: '95%', label: 'adoption in month one' },
]

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(30, 82, 120, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(200, 121, 65, 0.1) 0%, transparent 45%),
            radial-gradient(ellipse at 60% 85%, rgba(18, 42, 70, 0.6) 0%, transparent 50%),
            linear-gradient(160deg, #0A1628 0%, #122A46 50%, #0D1F35 100%)
          `,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <div className="anim-reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 text-white/50 text-[13px] font-medium tracking-wide mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-copper-500 anim-pulse" />
          Based in Maui, Hawaii
        </div>

        {/* Headline */}
        <h1 className="anim-reveal del-1 font-serif text-5xl sm:text-6xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-7">
          Financial Intelligence
          <br />
          <span className="text-navy-300/80">
            for Companies That Have
          </span>
          <br />
          <span className="text-navy-300/80">
            Outgrown Excel
          </span>
        </h1>

        {/* Subheadline */}
        <p className="anim-reveal del-2 text-lg sm:text-xl text-navy-300/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          I build data systems that finance teams actually use. Combining FP&A
          expertise with data engineering to turn financial data into automated
          insights — without hiring an entire BI team.
        </p>

        {/* CTA */}
        <div className="anim-reveal del-3 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-copper-500 hover:bg-copper-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-copper-500/20"
          >
            Let&apos;s Talk About Your Data
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            onClick={(e) => scrollTo(e, '#work')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white/70 font-medium rounded-lg border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        {/* Proof points */}
        <div className="anim-reveal del-4 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl text-white/90">{stat.value}</p>
              <p className="text-[13px] text-navy-400/70 mt-1 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#services"
          onClick={(e) => scrollTo(e, '#services')}
          className="text-white/20 hover:text-white/40 transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}

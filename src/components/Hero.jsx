import { ArrowRight, ChevronDown } from 'lucide-react'

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
      {/* Background - ocean gradient with wave pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-950 via-ocean-900 to-ocean-800" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <path
            d="M0,400 C360,300 720,500 1080,350 C1260,290 1380,360 1440,340 L1440,800 L0,800 Z"
            fill="currentColor"
            className="text-ocean-300"
          />
          <path
            d="M0,500 C240,420 480,560 720,480 C960,400 1200,520 1440,460 L1440,800 L0,800 Z"
            fill="currentColor"
            className="text-ocean-400"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-ocean-200 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-coral-400 animate-pulse" />
          Based in Maui, Hawaii
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-fade-in-up animation-delay-100">
          Financial Intelligence Systems
          <br />
          <span className="text-ocean-300">
            for Companies That Have Outgrown Excel
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-ocean-200 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          I build data systems that finance teams actually use. Combining FP&A
          expertise with data engineering, I help Hawaii companies turn their
          financial data into automated insights, without hiring an entire BI team.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-coral-400/25 hover:-translate-y-0.5"
          >
            Let&apos;s Talk About Your Data
            <ArrowRight size={18} />
          </a>
          <a
            href="#work"
            onClick={(e) => scrollTo(e, '#work')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all hover:-translate-y-0.5"
          >
            View My Work
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            onClick={(e) => scrollTo(e, '#services')}
            className="text-white/40 hover:text-white/70 transition-colors"
            aria-label="Scroll to services"
          >
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}

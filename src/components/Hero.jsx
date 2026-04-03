import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 40%, #fff 0%, #f5f5f7 70%)' }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Overline */}
        <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase font-medium mb-8">
          Buechler Pacific
        </p>

        {/* Headline */}
        <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.98] sm:leading-[0.94] text-apple-text">
          <span className="block text-[clamp(3rem,11vw,7.5rem)]">
            AI Systems
          </span>
          <span className="block text-[clamp(3rem,11vw,7.5rem)] mt-[0.04em] sm:mt-0">
            for Real Finance Work.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-xl sm:text-2xl text-apple-secondary max-w-3xl mx-auto leading-relaxed font-light">
          We build finance infrastructure, reporting workflows, and operator-facing AI tools for teams that are done living inside spreadsheet debt.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {['Microsoft Fabric', 'Workflow Automation', 'Executive Reporting', 'Production AI Systems'].map(item => (
            <span
              key={item}
              className="px-3.5 py-1.5 rounded-full bg-white/70 border border-black/[0.05] text-[12px] font-medium text-apple-secondary"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-apple-text text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-apple-dark-secondary transition-colors duration-300"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <Link
            to="/demo/live/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm text-apple-text font-semibold rounded-xl border border-apple-secondary/30 transition-all hover:-translate-y-0.5 hover:border-apple-secondary/50 text-[15px]"
          >
            See the Platform Demo
          </Link>
          <a
            href="#work"
            className="text-apple-blue text-[15px] font-semibold hover:underline underline-offset-4 transition-all"
          >
            Review case studies &rsaquo;
          </a>
        </div>
      </div>
    </section>
  )
}

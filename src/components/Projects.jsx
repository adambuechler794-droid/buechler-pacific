import { ArrowRight, MessageSquare } from 'lucide-react'
import { useInView } from './useInView'
import { caseStudies } from '../data/caseStudies'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-apple-dark text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`reveal ${inView ? 'in-view' : ''} max-w-3xl mb-16`}>
          <p className="text-[13px] text-apple-dark-secondary tracking-[0.2em] uppercase mb-4 font-medium">
            Proof
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Built for production, not demos.
          </h2>
          <p className="mt-5 text-lg text-white/50 leading-relaxed">
            A few examples of what happens when finance infrastructure, reporting systems, and AI workflows are treated like real operating assets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <a
            href="/services/linkedin-presence-os/"
            className={`reveal ${inView ? 'in-view' : ''} card-dark group p-8 sm:p-10 block border border-apple-blue/20 bg-[linear-gradient(135deg,rgba(42,42,45,1),rgba(26,35,50,1))]`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1 max-w-3xl">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.06] flex items-center justify-center mb-6">
                  <MessageSquare size={22} className="text-white" />
                </div>
                <p className="inline-flex items-center rounded-full border border-apple-blue/30 bg-apple-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-apple-blue mb-4">
                  New Launch
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white group-hover:text-apple-blue transition-colors duration-300">
                  LinkedIn Presence OS
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed max-w-2xl">
                  A done-with-you LinkedIn system for founders, consultants, and executives who know they should be publishing more, but do not want to sound synthetic. Voice calibration, relationship radar, weekly drafts, engagement guidance, and human approval in one workflow.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Voice capture', 'Weekly drafts', 'Relationship radar', 'Human approval'].map(item => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs text-white/65 bg-white/[0.06] rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:text-right shrink-0 flex flex-col justify-between">
                <p className="text-sm font-semibold text-apple-blue">
                  Done-with-you visibility without generic AI sludge
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                  Explore the service
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </p>
              </div>
            </div>
          </a>

          {caseStudies.map((cs, i) => (
            <a
              key={cs.slug}
              href={`/case-studies/${cs.slug}/`}
              className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${Math.min(i + 1, 5)} card-dark group p-8 sm:p-10 block`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block text-[11px] font-semibold text-apple-dark-secondary uppercase tracking-[0.15em] mb-3">
                    {cs.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 group-hover:text-apple-blue transition-colors duration-300">
                    {cs.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
                    {cs.summary}
                  </p>
                </div>
                <div className="lg:text-right shrink-0">
                  <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-white/30 mb-2">
                    Outcome
                  </p>
                  <p className="text-sm font-semibold text-apple-blue">
                    {cs.resultLine}
                  </p>
                  {cs.liveUrl && (
                    <p className="text-xs text-green-400/70 mt-1 flex items-center gap-1.5 lg:justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </p>
                  )}
                  <p className="text-xs text-white/30 mt-3 group-hover:text-white/50 transition-colors">
                    Read the build story &rarr;
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

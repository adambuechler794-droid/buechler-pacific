import { useInView } from './useInView'
import { caseStudies } from '../data/caseStudies'

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-apple-dark text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`reveal ${inView ? 'in-view' : ''} max-w-2xl mb-16`}>
          <p className="text-[13px] text-apple-dark-secondary tracking-[0.2em] uppercase mb-4 font-medium">
            Selected Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Case studies.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
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
                  <p className="text-sm font-semibold text-apple-blue">
                    {cs.resultLine}
                  </p>
                  {cs.liveUrl && (
                    <p className="text-xs text-green-400/70 mt-1 flex items-center gap-1.5 lg:justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Live
                    </p>
                  )}
                  <p className="text-xs text-white/30 mt-2 group-hover:text-white/50 transition-colors">
                    Read case study →
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

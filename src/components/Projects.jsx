import { useInView } from './useInView'

const projects = [
  {
    category: 'Data Analytics',
    title: 'Multi-Island Construction Project Analytics',
    description:
      'Integrated NetSuite and HCSS data across island operations, enabling real-time project cost tracking and variance analysis.',
    result: '$200K+ in cost overruns identified',
  },
  {
    category: 'Data Architecture',
    title: 'Enterprise Data Architecture on Microsoft Fabric',
    description:
      'Designed and implemented a unified data platform consolidating multiple source systems into a single analytical layer.',
    result: 'Reporting reduced from 2 weeks to 2 days',
  },
  {
    category: 'Change Management',
    title: 'Excel-to-Fabric Workflow Transition',
    description:
      'Built bridge tools that met finance teams in Excel while pulling from Fabric — achieving adoption without disruption.',
    result: '95% adoption in month one',
  },
  {
    category: 'AI',
    title: 'AI-Powered Forecast Analysis Assistant',
    description:
      'Built a custom GPT that lets the CFO query budget scenarios, compare actuals, and generate board-ready commentary in seconds.',
    result: 'Hours of analysis reduced to seconds',
  },
  {
    category: 'Product',
    title: 'Maui Surf Forecast System',
    description:
      'Consumer web application integrating NOAA buoy data and weather APIs to deliver actionable surf forecasts for Maui breaks.',
    result: 'Personal project — live in production',
  },
]

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
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${Math.min(i + 1, 5)} card-dark group p-8 sm:p-10`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block text-[11px] font-semibold text-apple-dark-secondary uppercase tracking-[0.15em] mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 group-hover:text-apple-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>
                <div className="lg:text-right shrink-0">
                  <p className="text-sm font-semibold text-apple-blue">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useInView } from './useInView'

const projects = [
  {
    category: 'AI / Product',
    title: 'SwellScore — Real-Time Surf Forecast System',
    description:
      'Full-stack web application integrating NOAA buoy data, PacIOOS ERDDAP wave models, and weather APIs to deliver real-time surf forecasts for Maui. Built end-to-end: React + TypeScript frontend, Flask API backend, multi-source data pipeline, live in production.',
    result: 'Full-stack product — live in production',
  },
  {
    category: 'AI / LLM',
    title: 'AI-Powered Forecast Analysis Assistant',
    description:
      'Custom GPT trained on the company\u2019s forecast models, enabling natural language queries about budget vs. forecast, version comparisons, and variance drivers. Business leaders ask questions in plain English and get context-aware financial analysis in seconds.',
    result: 'Hours of analyst work reduced to seconds',
  },
  {
    category: 'AI / Automation',
    title: 'Cash Flow Statement Automation',
    description:
      'Automated the most dreaded deliverable in finance. Built a Power Pivot pulling directly from the Fabric semantic model, replacing a process that required three senior finance people working a full day. Monthly verification keeps a human in the loop.',
    result: 'Three people, full day \u2192 one person, under an hour',
  },
  {
    category: 'Data Intelligence',
    title: 'Multi-Island Construction Project Analytics',
    description:
      'Integrated NetSuite financials with HCSS project budgets into real-time Power BI dashboards. The company president used the dashboard once and scheduled training for all project managers himself. PMs now use it daily to track project health and catch issues before they compound.',
    result: 'President became internal champion \u2014 PMs use it daily',
  },
  {
    category: 'Data / AI Infrastructure',
    title: 'AI-Ready Enterprise Data Platform',
    description:
      'Designed and built a Microsoft Fabric data lakehouse from scratch \u2014 no IT department, no existing infrastructure. Automated pipelines pull from NetSuite, HCSS, and other sources into a unified analytical layer. This is the foundation that makes every AI tool, dashboard, and automation possible.',
    result: 'Ad-hoc analysis: days \u2192 minutes',
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

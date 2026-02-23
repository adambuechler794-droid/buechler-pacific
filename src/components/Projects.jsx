import { ArrowUpRight } from 'lucide-react'
import { useInView } from './useInView'

const projects = [
  {
    title: 'Multi-Island Construction Project Analytics',
    challenge:
      'A Hawaii-based construction company with operations across multiple islands needed real-time visibility into project financials. Data lived in NetSuite and HCSS with no connection between them.',
    result:
      'Leadership now has daily visibility into project margins. Identified $200K+ in cost overruns within the first month.',
    tags: ['Power BI', 'NetSuite', 'HCSS', 'DAX', 'SQL'],
  },
  {
    title: 'Enterprise Data Architecture on Microsoft Fabric',
    challenge:
      'Growing company with data scattered across dozens of Excel files, multiple SaaS platforms, and legacy databases. No single source of truth.',
    result:
      'Reduced monthly reporting cycle from 2 weeks to 2 days. Finance team now analyzes data instead of reconciling it.',
    tags: ['Microsoft Fabric', 'Lakehouse', 'Data Pipelines', 'Python'],
  },
  {
    title: 'Excel-to-Fabric Workflow',
    challenge:
      'Teams deeply embedded in Excel refused to adopt new tools. Previous BI implementations failed because they required people to completely change how they work.',
    result:
      'Achieved 95% adoption in month one vs. less than 20% on previous rollouts. Users didn\'t have to change their workflow.',
    tags: ['Excel', 'Microsoft Fabric', 'Power Automate'],
  },
  {
    title: 'AI-Powered Forecast Analysis Assistant',
    challenge:
      'CFO needed to quickly query forecast assumptions and compare scenarios without waiting for analyst availability.',
    result:
      'CFO gets instant answers to questions like "What happens to Q3 margins if material costs increase 15%?"',
    tags: ['Custom GPT', 'OpenAI API', 'Python', 'Financial Modeling'],
  },
  {
    title: 'Maui Surf Forecast System',
    challenge:
      'Local surf community needed accurate, consolidated forecast data for Maui breaks instead of checking multiple sources.',
    result:
      'Used daily by local surfers. Demonstrates consumer-grade web applications with real-time data integration.',
    tags: ['React', 'NOAA API', 'Node.js', 'Vercel'],
  },
]

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group p-7 sm:p-8 rounded-2xl bg-white border border-stone-200/80 hover:border-navy-200 transition-all duration-500 hover:shadow-lg hover:shadow-navy-900/5">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <span className="font-serif text-3xl text-stone-200 group-hover:text-copper-200 transition-colors duration-500">
          {num}
        </span>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[13px] font-medium text-copper-500 hover:text-copper-600 transition-colors"
          >
            Live
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>

      <h3 className="text-lg font-semibold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
        {project.title}
      </h3>

      <div className="space-y-4 mb-6">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Challenge
          </span>
          <p className="text-[14px] text-slate-500 mt-1.5 leading-relaxed">
            {project.challenge}
          </p>
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-copper-500">
            Result
          </span>
          <p className="text-[14px] text-slate-600 mt-1.5 leading-relaxed font-medium">
            {project.result}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-navy-50 text-navy-600 text-[11px] font-medium rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="work" className="py-24 sm:py-32 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
            03 — Work
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy-900 mb-5">
            Projects & Case Studies
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Real problems, real solutions, real results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={inView ? `anim-reveal del-${Math.min(i + 1, 5)}` : 'opacity-0'}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

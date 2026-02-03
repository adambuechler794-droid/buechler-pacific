import { ExternalLink } from 'lucide-react'
import { useInView } from './useInView'

const projects = [
  {
    title: 'Multi-Island Construction Project Analytics',
    challenge:
      'A Hawaii-based construction company with operations across multiple islands needed real-time visibility into project financials. Data lived in NetSuite (accounting) and HCSS (field operations) with no connection between them.',
    solution:
      'Built an integrated Power BI analytics platform that pulls data from both NetSuite and HCSS, creating a unified view of project profitability, labor costs, and equipment utilization across all islands.',
    result:
      'Leadership now has daily visibility into project margins instead of waiting for month-end close. Identified $200K+ in cost overruns within the first month of deployment.',
    tags: ['Power BI', 'NetSuite', 'HCSS', 'DAX', 'SQL'],
  },
  {
    title: 'Enterprise Data Architecture on Microsoft Fabric',
    challenge:
      'Growing company with data scattered across dozens of Excel files, multiple SaaS platforms, and legacy databases. No single source of truth for financial or operational data.',
    solution:
      'Designed and implemented a Microsoft Fabric lakehouse architecture with automated data pipelines that ingest, clean, and transform data from all sources into a unified analytical layer.',
    result:
      'Reduced monthly reporting cycle from 2 weeks to 2 days. Finance team now spends time analyzing data instead of pulling and reconciling it.',
    tags: ['Microsoft Fabric', 'Lakehouse', 'Data Pipelines', 'SQL', 'Python'],
  },
  {
    title: 'Excel-to-Fabric Workflow (Bridging the Transition)',
    challenge:
      'Teams deeply embedded in Excel workflows refused to adopt new tools. Previous BI implementations failed because they required people to completely change how they work.',
    solution:
      'Created Excel-based interfaces that feel familiar to users but write data to structured Fabric tables on the backend. Users work in Excel; the system captures structured data automatically.',
    result:
      'Achieved 95% adoption within the first month, compared to less than 20% on previous BI rollouts. Teams didn\'t have to change their workflow, but the organization got structured, reliable data.',
    tags: ['Excel', 'Microsoft Fabric', 'Power Automate', 'Change Management'],
  },
  {
    title: 'AI-Powered Forecast Analysis Assistant',
    challenge:
      'CFO needed to quickly query forecast assumptions and compare scenarios without waiting for analyst availability. Existing reports were static and couldn\'t answer ad-hoc questions.',
    solution:
      'Built a Custom GPT connected to the company\'s forecast data that can answer natural language questions about projections, assumptions, and scenario comparisons.',
    result:
      'CFO can now get instant answers to questions like "What happens to Q3 margins if material costs increase 15%?" without scheduling analyst time.',
    tags: ['Custom GPT', 'OpenAI API', 'Python', 'Financial Modeling'],
  },
  {
    title: 'Maui Surf Forecast System',
    challenge:
      'Local surf community needed accurate, consolidated forecast data for Maui breaks instead of checking multiple disjointed sources.',
    solution:
      'Built a React application that pulls NOAA buoy data and weather APIs, processes wave models, and presents break-specific forecasts with an intuitive mobile-first interface.',
    result:
      'Used daily by local surfers. Demonstrates ability to build consumer-grade web applications with real-time data integration.',
    tags: ['React', 'NOAA API', 'Node.js', 'Vercel'],
    liveDemo: true,
  },
]

function ProjectCard({ project, index }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-ocean-200 transition-all duration-300">
      {/* Placeholder image area */}
      <div className="h-48 bg-gradient-to-br from-ocean-50 to-ocean-100 flex items-center justify-center border-b border-gray-100">
        <span className="text-ocean-300 text-sm font-medium">
          {/* Replace with project screenshot */}
          Project Screenshot
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-bold text-ocean-900 mb-4 group-hover:text-ocean-700 transition-colors">
          {project.title}
        </h3>

        <div className="space-y-3 mb-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-coral-400">
              Challenge
            </span>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-ocean-600">
              Solution
            </span>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
              Result
            </span>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-ocean-50 text-ocean-700 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Demo button */}
        {project.liveDemo && (
          <button
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-coral-500 hover:text-coral-600 transition-colors"
            aria-label={`View live demo of ${project.title}`}
          >
            View Live App
            <ExternalLink size={14} />
          </button>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="work" className="py-20 sm:py-28 bg-sand-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-coral-400 uppercase tracking-widest mb-3">
            Recent Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
            Projects & Case Studies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real problems, real solutions, real results. Here's a sample of
            recent work.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={inView ? `animate-fade-in-up animation-delay-${Math.min((i + 1) * 100, 500)}` : 'opacity-0'}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

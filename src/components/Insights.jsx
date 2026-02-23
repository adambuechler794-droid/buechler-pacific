import { ArrowUpRight, Linkedin } from 'lucide-react'
import { useInView } from './useInView'

const articles = [
  {
    title: 'Why Most BI Implementations Fail (And How to Avoid It)',
    description: 'The #1 reason dashboards go unused has nothing to do with the technology.',
    tag: 'Adoption',
    url: 'https://www.linkedin.com/in/adambuechler/',
  },
  {
    title: 'Excel to Fabric: A Realistic Migration Path',
    description: 'You don\'t have to rip out Excel overnight. Here\'s how to transition without losing your team.',
    tag: 'Data Engineering',
    url: 'https://www.linkedin.com/in/adambuechler/',
  },
  {
    title: 'What Mid-Market Companies Get Wrong About AI',
    description: 'AI won\'t fix bad data. Start with your foundation, not the shiny tools.',
    tag: 'AI Strategy',
    url: 'https://www.linkedin.com/in/adambuechler/',
  },
]

export default function Insights() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 sm:py-32 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          <div>
            <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
              05 — Insights
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy-900 mb-3">
              Writing & Thinking
            </h2>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Lessons from building data systems for real companies.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/adambuechler/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-[13px] font-semibold rounded-lg transition-colors shrink-0"
          >
            <Linkedin size={15} />
            Follow on LinkedIn
          </a>
        </div>

        {/* Article Cards */}
        <div className={`grid gap-5 sm:grid-cols-3 ${inView ? 'anim-reveal del-2' : 'opacity-0'}`}>
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-white border border-stone-200/80 hover:border-navy-200 transition-all duration-500 hover:shadow-lg hover:shadow-navy-900/5"
            >
              <span className="inline-block px-2.5 py-0.5 bg-navy-50 text-navy-600 text-[11px] font-semibold rounded-md mb-4">
                {article.tag}
              </span>
              <h3 className="text-base font-semibold text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                {article.title}
                <ArrowUpRight size={13} className="inline ml-1.5 opacity-0 group-hover:opacity-60 transition-opacity" />
              </h3>
              <p className="text-[14px] text-slate-400 leading-relaxed">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

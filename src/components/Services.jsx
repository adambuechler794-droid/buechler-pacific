import {
  BarChart3,
  LineChart,
  Database,
  Bot,
} from 'lucide-react'
import { useInView } from './useInView'

const services = [
  {
    icon: BarChart3,
    title: 'Financial Planning & Analysis',
    featured: true,
    items: [
      'Multi-scenario planning and modeling',
      'Cash flow forecasting systems',
      'Budget-to-actual tracking and variance analysis',
      'Board-ready financial reporting',
      'KPI dashboards that executives actually check',
    ],
  },
  {
    icon: LineChart,
    title: 'Power BI & Data Analytics',
    items: [
      'Custom dashboards built for your business',
      'DAX modeling for complex calculations',
      'Integration with existing systems (ERP, accounting, spreadsheets)',
      'Self-service analytics that reduce analyst workload',
      'Mobile-first reporting for field teams',
    ],
  },
  {
    icon: Database,
    title: 'Data Architecture & Engineering',
    items: [
      'Microsoft Fabric implementation',
      'SQL database design and optimization',
      'Automated data pipelines (no more manual exports)',
      'Data quality frameworks and governance',
      'Legacy system integration and migration',
    ],
  },
  {
    icon: Bot,
    title: 'AI & Custom Applications',
    items: [
      'Custom GPT-powered analysis tools',
      'Automated reporting with natural language summaries',
      'Web tools and internal dashboards tailored to your process',
      'AI agent workflows (n8n, Make, etc.)',
      'Data collection and validation apps',
    ],
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className={`group relative p-7 sm:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-0.5 ${
      service.featured
        ? 'bg-navy-900 text-white'
        : 'bg-white border border-stone-200/80 hover:border-navy-200 hover:shadow-lg hover:shadow-navy-900/5'
    }`}>
      <div className="flex items-start justify-between mb-6">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
          service.featured
            ? 'bg-white/10 text-copper-400'
            : 'bg-navy-50 text-navy-700 group-hover:bg-navy-100'
        }`}>
          <Icon size={22} />
        </div>
        <div className="flex items-center gap-3">
          {service.featured && (
            <span className="px-2.5 py-0.5 bg-copper-500/20 text-copper-300 text-[10px] font-semibold uppercase tracking-[0.15em] rounded-full">
              Core
            </span>
          )}
          <span className={`font-serif text-3xl leading-none ${
            service.featured ? 'text-white/10' : 'text-stone-200'
          }`}>{num}</span>
        </div>
      </div>

      <h3 className={`text-lg font-semibold mb-4 ${
        service.featured ? 'text-white' : 'text-navy-900'
      }`}>{service.title}</h3>

      <ul className="space-y-2.5">
        {service.items.map((item, i) => (
          <li key={i} className={`flex items-start gap-2.5 text-[14px] leading-relaxed ${
            service.featured ? 'text-navy-200/80' : 'text-slate-500'
          }`}>
            <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
              service.featured ? 'bg-copper-400' : 'bg-copper-500'
            }`} />
            {item}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-24 sm:py-32 bg-stone-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
            01 — Services
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy-900 mb-5">
            What I Build
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            From financial modeling to production data systems. Everything you need
            to turn raw data into decisions.
          </p>
        </div>

        {/* Cards Grid — 2x2 */}
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={inView ? `anim-reveal del-${i + 1}` : 'opacity-0'}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

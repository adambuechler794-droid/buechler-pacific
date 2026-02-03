import {
  BarChart3,
  LineChart,
  Database,
  Bot,
  AppWindow,
  ShieldCheck,
} from 'lucide-react'
import { useInView } from './useInView'

const services = [
  {
    icon: BarChart3,
    title: 'Financial Planning & Analysis',
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
    title: 'Power BI & Advanced Analytics',
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
      'Data cleaning and transformation workflows',
      'Legacy system integration',
    ],
  },
  {
    icon: Bot,
    title: 'AI-Enabled Workflows',
    items: [
      'Intelligent data preparation and cleaning',
      'Custom GPT-powered analysis tools',
      'Automated reporting with natural language summaries',
      'Prompt engineering for finance use cases',
      'AI agent workflows (n8n, Make, etc.)',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Data Governance & Quality',
    items: [
      'Data quality frameworks and validation rules',
      'Access controls and security policies',
      'Compliance and audit readiness',
      'Master data management',
      'Documentation and data dictionaries',
    ],
  },
  {
    icon: AppWindow,
    title: 'Custom Applications',
    items: [
      'Web tools tailored to your process',
      'Internal dashboards and portals',
      'Data collection and validation apps',
      'Mobile solutions for field operations',
    ],
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <div
      className={`group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-ocean-200 transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="w-12 h-12 rounded-xl bg-ocean-50 text-ocean-700 flex items-center justify-center mb-5 group-hover:bg-ocean-100 transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-ocean-900 mb-4">{service.title}</h3>
      <ul className="space-y-2.5">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral-400 shrink-0" />
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
    <section id="services" className="py-20 sm:py-28 bg-sand-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-coral-400 uppercase tracking-widest mb-3">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From financial modeling to production data systems. Everything you need
            to turn raw data into decisions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={inView ? `animate-fade-in-up animation-delay-${(i + 1) * 100}` : 'opacity-0'}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

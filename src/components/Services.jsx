import { Cpu, BarChart3, Brain, Database } from 'lucide-react'
import { useInView } from './useInView'

const services = [
  {
    icon: Cpu,
    title: 'AI & Custom Applications',
    description:
      'Custom GPT tools, automated reporting workflows, interactive dashboards, and intelligent data applications that transform how your team works.',
    features: ['Custom GPT Tools', 'Automated Workflows', 'n8n & Make Integration', 'Intelligent Data Apps'],
    featured: true,
  },
  {
    icon: BarChart3,
    title: 'Financial Planning & Analysis',
    description:
      'Multi-scenario planning, cash flow forecasting, budget-to-actual tracking, and executive dashboards that leadership actually checks.',
    features: ['Scenario Planning', 'Cash Flow Models', 'KPI Dashboards', 'Board Reporting'],
  },
  {
    icon: Brain,
    title: 'Power BI & Analytics',
    description:
      'Custom dashboards, DAX modeling, system integration, and self-service analytics that your team actually uses.',
    features: ['Custom Dashboards', 'DAX Modeling', 'Self-Service Analytics', 'Mobile Reporting'],
  },
  {
    icon: Database,
    title: 'Data Architecture',
    description:
      'Microsoft Fabric, SQL optimization, ETL pipelines, data governance, and legacy system integration.',
    features: ['Microsoft Fabric', 'SQL Optimization', 'Data Pipelines', 'Governance'],
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="solutions" className="relative py-28 sm:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`reveal ${inView ? 'in-view' : ''} max-w-2xl mb-16`}>
          <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
            Solutions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-apple-text">
            What we build.
          </h2>
          <p className="mt-5 text-lg text-apple-secondary leading-relaxed">
            End-to-end financial intelligence systems — from data infrastructure
            to the AI layer that makes it useful.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${i + 1} card-light p-8 sm:p-10 ${
                  service.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-apple-bg flex items-center justify-center mb-6">
                  <Icon size={22} className="text-apple-text" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-apple-text mb-3">
                  {service.title}
                </h3>
                <p className="text-apple-secondary text-[15px] leading-relaxed mb-6 max-w-xl">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map(feature => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs text-apple-secondary bg-apple-bg rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

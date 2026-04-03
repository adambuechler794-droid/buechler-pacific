import { Cpu, BarChart3, Brain, Database } from 'lucide-react'
import { useInView } from './useInView'

const services = [
  {
    icon: Cpu,
    title: 'AI & Intelligent Automation',
    description:
      'Custom GPTs, LLM-powered analysis tools, automated reporting pipelines, and full-stack AI applications. We build the systems that let your team query data in plain English and automate the work that used to take days.',
    features: ['Custom GPT Tools', 'LLM Integration', 'Automated Pipelines', 'Full-Stack AI Apps'],
    featured: true,
  },
  {
    icon: BarChart3,
    title: 'Financial Planning & Analysis',
    description:
      'Multi-scenario planning, cash flow automation, budget-to-actual tracking, and executive dashboards that replace monthly PowerPoint assembly with live intelligence.',
    features: ['Scenario Planning', 'Cash Flow Automation', 'KPI Dashboards', 'Board Reporting'],
  },
  {
    icon: Brain,
    title: 'Power BI & Analytics',
    description:
      'Custom dashboards, DAX modeling, system integration, and self-service analytics built for adoption — designed so your team actually uses them daily.',
    features: ['Custom Dashboards', 'DAX Modeling', 'Self-Service Analytics', 'Adoption Strategy'],
  },
  {
    icon: Database,
    title: 'Data Architecture',
    description:
      'Microsoft Fabric, SQL optimization, ETL pipelines, and the AI-ready data foundation that makes everything else possible.',
    features: ['Microsoft Fabric', 'SQL Optimization', 'Data Pipelines', 'AI-Ready Infrastructure'],
  },
]

export default function Services() {
  const [ref, inView] = useInView()
  const [featuredService, ...coreServices] = services
  const FeaturedIcon = featuredService.icon

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
            End-to-end AI and data systems for finance — from the infrastructure
            layer to the intelligence that makes it useful.
          </p>
        </div>

        <div
          className={`reveal ${inView ? 'in-view' : ''} reveal-delay-1 card-light p-8 sm:p-10 lg:p-12`}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            <div className="max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-apple-bg flex items-center justify-center mb-6">
                <FeaturedIcon size={22} className="text-apple-text" />
              </div>
              <p className="text-[12px] text-apple-secondary tracking-[0.18em] uppercase mb-4 font-semibold">
                Flagship Capability
              </p>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-apple-text mb-4">
                {featuredService.title}
              </h3>
              <p className="text-apple-secondary text-[15px] sm:text-base leading-relaxed max-w-2xl">
                {featuredService.description}
              </p>
            </div>

            <div className="lg:max-w-md">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-apple-secondary mb-4">
                What This Includes
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredService.features.map(feature => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-xs text-apple-secondary bg-apple-bg rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          {coreServices.map((service, i) => {
            const Icon = service.icon
            const isLastOddCard = i === coreServices.length - 1 && coreServices.length % 2 === 1

            return (
              <div
                key={service.title}
                className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${Math.min(i + 2, 5)} card-light p-8 sm:p-10 ${
                  isLastOddCard ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-apple-bg flex items-center justify-center mb-10">
                  <Icon size={22} className="text-apple-text" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-apple-text mb-4">
                  {service.title}
                </h3>
                <p className="text-apple-secondary text-[15px] leading-relaxed mb-8 max-w-xl">
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

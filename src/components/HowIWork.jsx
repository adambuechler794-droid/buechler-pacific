import { useInView } from './useInView'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We map your data landscape, identify bottlenecks, and define what intelligence your business actually needs.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We engineer solutions designed for adoption — working with your team, not around them.',
  },
  {
    number: '03',
    title: 'Transfer',
    description:
      "We build your team's independence. Every system comes with the knowledge to own it.",
  },
  {
    number: '04',
    title: 'Iterate',
    description:
      'We ship fast and refine based on reality. No six-month rollouts that miss the mark.',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section className="relative py-28 sm:py-36 bg-apple-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`reveal ${inView ? 'in-view' : ''} text-center mb-20`}>
          <p className="text-[13px] text-apple-secondary tracking-[0.2em] uppercase mb-4 font-medium">
            Process
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-apple-text">
            How we work.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${i + 1} relative`}
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-black/10 to-transparent" />
              )}

              <div className="font-display text-5xl font-extrabold text-black/[0.07] mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-bold text-apple-text mb-3">
                {step.title}
              </h3>
              <p className="text-apple-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useInView } from './useInView'

const steps = [
  {
    title: 'Understand the Problem',
    body: 'Most "data problems" are actually process problems. I start by understanding how decisions actually get made — not how the org chart says they should.',
  },
  {
    title: 'Build for Adoption, Not Perfection',
    body: 'A dashboard that\'s 80% accurate and gets checked daily beats a perfect model that sits unused. I work with an executive coach weekly on adoption dynamics, because this is often harder than the technical work.',
  },
  {
    title: 'Transfer Knowledge',
    body: "I'm not trying to create dependency. You'll understand how your systems work, how to maintain them, and how to extend them when I'm gone.",
  },
  {
    title: 'Iterate Based on Reality',
    body: "First version ships fast. Then we refine based on how your team actually uses it — not how they said they would.",
  },
]

export default function HowIWork() {
  const [ref, inView] = useInView()

  return (
    <section id="approach" className="py-24 sm:py-32 bg-stone-100" ref={ref}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className={`mb-16 ${inView ? 'anim-reveal' : 'opacity-0'}`}>
          <p className="text-[12px] font-semibold text-copper-500 uppercase tracking-[0.2em] mb-4">
            02 — Approach
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-navy-900 mb-5">
            How I Work
          </h2>
          <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
            Technology is only useful if people use it. My process is designed
            to deliver systems that stick.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-0 sm:grid-cols-2">
          {steps.map((step, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <div
                key={step.title}
                className={`group relative p-8 sm:p-10 border-t border-stone-200/80 sm:odd:border-r ${
                  inView ? `anim-reveal del-${i + 1}` : 'opacity-0'
                }`}
              >
                <span className="font-serif text-4xl text-stone-200 group-hover:text-copper-200 transition-colors duration-500">
                  {num}
                </span>
                <h3 className="text-lg font-semibold text-navy-900 mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-slate-500 leading-relaxed">
                  {step.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import {
  Search,
  Users,
  GraduationCap,
  IterationCw,
} from 'lucide-react'
import { useInView } from './useInView'

const principles = [
  {
    icon: Search,
    title: 'Understand the Problem',
    body: 'Most "data problems" are actually process problems. I start by understanding how decisions actually get made in your business, not how the org chart says they should be made.',
  },
  {
    icon: Users,
    title: 'Build for Adoption, Not Perfection',
    body: 'A dashboard that\'s 80% accurate and gets checked daily beats a perfect model that sits unused. I focus on tools people will actually open. I work with an executive coach weekly specifically on adoption dynamics, because this is often harder than the technical work.',
  },
  {
    icon: GraduationCap,
    title: 'Transfer Knowledge',
    body: "I'm not trying to create dependency. You'll understand how your systems work, how to maintain them, and how to extend them when I'm gone.",
  },
  {
    icon: IterationCw,
    title: 'Iterate Based on Reality',
    body: "First version ships fast. Then we refine based on how your team actually uses it, not how they said they would.",
  },
]

export default function HowIWork() {
  const [ref, inView] = useInView()

  return (
    <section id="approach" className="py-20 sm:py-28 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-14 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-semibold text-coral-400 uppercase tracking-widest mb-3">
            My Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
            How I Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Technology is only useful if people use it. My process is designed
            to deliver systems that stick.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {principles.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className={`flex gap-5 ${inView ? `animate-fade-in-up animation-delay-${(i + 1) * 100}` : 'opacity-0'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-ocean-800 text-white flex items-center justify-center shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ocean-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useInView } from './useInView'

function AnimatedCounter({ target, suffix = '', prefix = '', active }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!active || hasAnimated.current) return
    hasAnimated.current = true

    let rafId
    const delay = setTimeout(() => {
      const duration = target > 10 ? 2000 : 600
      const startTime = performance.now()

      function animate(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))
        if (progress < 1) rafId = requestAnimationFrame(animate)
      }

      rafId = requestAnimationFrame(animate)
    }, 500)

    return () => {
      clearTimeout(delay)
      if (rafId) cancelAnimationFrame(rafId)
      hasAnimated.current = false
    }
  }, [active, target])

  return <>{prefix}{count}{suffix}</>
}

const stats = [
  {
    type: 'counter',
    value: 200,
    prefix: '$',
    suffix: 'K+',
    label: 'Cost overruns identified',
    description: 'Through integrated multi-system data analytics',
  },
  {
    type: 'text',
    display: '2 Days',
    label: 'Reporting cycle',
    description: 'Reduced from two weeks with automated pipelines',
  },
  {
    type: 'counter',
    value: 95,
    suffix: '%',
    label: 'Adoption in month one',
    description: 'By meeting users where they already work',
  },
]

export default function Impact() {
  const [ref, inView] = useInView()

  return (
    <section id="impact" className="relative py-28 sm:py-36 bg-apple-dark text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`reveal ${inView ? 'in-view' : ''} text-center mb-20`}>
          <p className="text-[13px] text-apple-dark-secondary tracking-[0.2em] uppercase mb-4 font-medium">
            Impact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Numbers that matter.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal ${inView ? 'in-view' : ''} reveal-delay-${i + 1} text-center px-8`}
            >
              <div className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white">
                {stat.type === 'counter' ? (
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    active={inView}
                  />
                ) : (
                  stat.display
                )}
              </div>
              <p className="mt-4 text-lg font-semibold text-white/90">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

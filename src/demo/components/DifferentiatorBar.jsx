import { motion } from 'framer-motion'

const POINTS = [
  { old: 'AI as a feature', ours: 'AI as the engine' },
  { old: 'Months to connect a source', ours: 'Days with Claude agents' },
  { old: 'Manual reports & chasing', ours: 'Proactive monitoring 24/7' },
  { old: 'Annual planning cycles', ours: 'Rolling 12-month forecasts' },
]

export default function DifferentiatorBar() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-dark-surface/95 backdrop-blur-sm border-t border-steel/10"
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-between">
        <span className="text-[10px] font-bold tracking-widest uppercase text-steel/40 shrink-0">
          Not a bolt-on
        </span>
        <div className="flex items-center gap-6">
          {POINTS.map((p) => (
            <div key={p.old} className="flex items-center gap-2">
              <span className="text-[10px] text-white/20 line-through">{p.old}</span>
              <span className="text-[10px] text-steel/40">&rarr;</span>
              <span className="text-[10px] font-semibold text-amber-warm/80">{p.ours}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

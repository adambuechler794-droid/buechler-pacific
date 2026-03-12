import { motion } from 'framer-motion'

const METRICS = [
  { label: 'Fabric Lakehouse', value: 'Built', status: 'done' },
  { label: 'Data Pipelines', value: '3 Active', status: 'done' },
  { label: 'Semantic Models', value: 'Deployed', status: 'done' },
  { label: 'AI Agents', value: 'Operational', status: 'done' },
  { label: 'FP&A Module', value: 'In Progress', status: 'active' },
  { label: 'Next Modules', value: 'Weeks Away', status: 'next' },
]

const STATUS_DOT = {
  done: 'bg-green-muted',
  active: 'bg-amber-warm',
  next: 'bg-steel/50',
}

export default function ReadinessBar() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 bg-dark-surface/95 backdrop-blur-sm border-t border-steel/10"
      initial={{ y: 60 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-steel/40">
            Infrastructure Readiness
          </span>
          <div className="w-24 h-1.5 bg-dark-card rounded-full overflow-hidden ml-2">
            <motion.div
              className="h-full bg-green-muted rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          <span className="text-[11px] font-bold text-green-muted">85%</span>
        </div>
        <div className="flex items-center gap-6">
          {METRICS.map((m) => (
            <div key={m.label} className="flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[m.status]}`} />
              <span className="text-[10px] text-white/40">{m.label}</span>
              <span className={`text-[10px] font-semibold ${
                m.status === 'done' ? 'text-green-muted' :
                m.status === 'active' ? 'text-amber-warm' : 'text-steel/60'
              }`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

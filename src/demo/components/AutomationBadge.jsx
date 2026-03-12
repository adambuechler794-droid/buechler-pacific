import { motion } from 'framer-motion'

export default function AutomationBadge({ level }) {
  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${level.color} ${level.textColor}`}
      animate={level.pulses ? { scale: [1, 1.05, 1] } : {}}
      transition={level.pulses ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
    >
      <span className={`w-2 h-2 rounded-full ${level.pulses ? 'bg-white/60' : 'bg-white/40'}`} />
      {level.label}
    </motion.span>
  )
}

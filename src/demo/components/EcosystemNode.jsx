import { motion } from 'framer-motion'

const STATUS_STYLES = {
  active: {
    border: 'border-green-muted/40',
    badge: 'bg-green-muted/20 text-green-muted',
    badgeLabel: 'In Fabric Today',
  },
  live: {
    border: 'border-steel/40',
    badge: 'bg-steel/20 text-steel',
    badgeLabel: 'Running Now',
  },
  future: {
    border: 'border-amber-warm/30',
    badge: 'bg-amber-warm/15 text-amber-warm',
    badgeLabel: 'Weeks Away',
  },
}

export default function EcosystemNode({ node, radius, angleDeg }) {
  const angleRad = (angleDeg * Math.PI) / 180
  const x = radius * Math.sin(angleRad)
  const y = -radius * Math.cos(angleRad)
  const style = STATUS_STYLES[node.status]

  return (
    <div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      <motion.div
        className={`w-[190px] bg-dark-card border ${style.border} rounded-xl px-3 py-2.5 text-white shadow-lg`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 20px rgba(26,111,160,0.3)',
        }}
      >
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-semibold leading-tight">{node.label}</h3>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${style.badge}`}>
            {style.badgeLabel}
          </span>
        </div>
        <p className="text-xs text-steel/70 mb-1">{node.subtitle}</p>
        {node.aiEnablement && (
          <p className="text-[10px] text-amber-warm/60 leading-snug">
            {node.aiEnablement}
          </p>
        )}
      </motion.div>
    </div>
  )
}

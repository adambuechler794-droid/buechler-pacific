import { motion } from 'framer-motion'

export default function ConnectionLine({ width = 60 }) {
  return (
    <svg
      width={width}
      height={40}
      viewBox={`0 0 ${width} 40`}
      className="flex-shrink-0"
    >
      {/* Dashed line with subtle breathing opacity */}
      <motion.line
        x1="0" y1="20" x2={width} y2="20"
        stroke="#1A6FA0"
        strokeWidth="2"
        strokeDasharray="6 4"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <polygon
        points={`${width - 8},15 ${width},20 ${width - 8},25`}
        fill="#1A6FA0"
        opacity="0.5"
      />
      {/* Animated traveling dot with opacity fade at edges */}
      <circle r="4" cy="20" fill="#1A6FA0">
        <animate attributeName="cx" values={`0;${width}`} dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;1;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

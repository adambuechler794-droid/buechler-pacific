const RINGS = [
  { ring: 1, label: '', duration: 120, color: '26,111,160', opacity: 0.12, particles: 2 },
  { ring: 2, label: 'Claude AI Agents', duration: 180, color: '212,145,42', opacity: 0.15, particles: 3 },
  { ring: 3, label: 'FP&A Process', duration: 300, color: '26,111,160', opacity: 0.25, particles: 4 },
  { ring: 4, label: '', duration: 600, color: '26,111,160', opacity: 0.12, particles: 2 },
]

export default function OrbitalRings({ size, radii }) {
  const center = size / 2

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {RINGS.map(({ ring }) => {
          const radius = radii[ring]
          return (
            <circle
              key={`path-${ring}`}
              id={`ring-path-${ring}`}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
            />
          )
        })}
      </defs>
      {RINGS.map(({ ring, label, duration, color, opacity, particles }) => {
        const radius = radii[ring]
        const particleDuration = ring === 2 ? 12 : ring === 3 ? 18 : 15
        return (
          <g key={ring}>
            {/* Spinning ring group */}
            <g
              style={{
                transformOrigin: `${center}px ${center}px`,
                animation: `spin-slow ${duration}s linear infinite`,
              }}
            >
              {/* Ring circle */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={`rgba(${color},${opacity})`}
                strokeWidth="1.5"
                strokeDasharray={ring === 2 ? '3 3' : '10 8'}
              />
              {/* Subtle glow ring */}
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={`rgba(${color},${opacity * 0.4})`}
                strokeWidth="6"
                strokeDasharray={ring === 2 ? '3 3' : '10 8'}
              />
              {/* Label at top of ring */}
              {label && (
                <text
                  x={center}
                  y={center - radius + 14}
                  textAnchor="middle"
                  fill={`rgba(${color},0.4)`}
                  fontSize="9"
                  fontFamily="system-ui, sans-serif"
                  fontWeight="600"
                  letterSpacing="0.15em"
                >
                  {label.toUpperCase()}
                </text>
              )}
            </g>
            {/* Data flow particles — independent of ring spin */}
            {Array.from({ length: particles }).map((_, i) => (
              <circle key={`particle-${ring}-${i}`} r={ring === 2 ? 2.5 : 2} fill={`rgba(${color},0.7)`}>
                <animateMotion
                  dur={`${particleDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * particleDuration) / particles}s`}
                >
                  <mpath href={`#ring-path-${ring}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0.3;0.9;0.3"
                  dur={`${particleDuration}s`}
                  repeatCount="indefinite"
                  begin={`${(i * particleDuration) / particles}s`}
                />
              </circle>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

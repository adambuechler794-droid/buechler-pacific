import { useRef, useState, useEffect } from 'react'
import EcosystemHub from './EcosystemHub'
import EcosystemNode from './EcosystemNode'
import AgentNode from './AgentNode'
import { sourceSystems, platformModules, aiAgents } from '../data/ecosystem'

export default function EcosystemMap() {
  const containerRef = useRef(null)
  const [size, setSize] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return
      const { clientWidth, clientHeight } = containerRef.current
      setSize(Math.min(clientWidth, clientHeight))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const outerRadius = size * 0.42
  const agentRadius = size * 0.21

  const allNodes = [...sourceSystems, ...platformModules]
  const center = size / 2

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center overflow-hidden"
      style={{ height: 'calc(100dvh - 64px - 44px)', marginTop: '64px' }}
    >
      {size > 0 && (
        <div className="relative" style={{ width: size, height: size }}>
          {/* SVG rings and spokes */}
          <svg
            className="absolute inset-0"
            width={size}
            height={size}
            style={{ pointerEvents: 'none' }}
          >
            {/* Outer ring — systems & modules */}
            <circle
              cx={center}
              cy={center}
              r={outerRadius}
              fill="none"
              stroke="rgba(26,111,160,0.12)"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            {/* Inner ring — AI agent orbit */}
            <circle
              cx={center}
              cy={center}
              r={agentRadius}
              fill="none"
              stroke="rgba(212,145,42,0.12)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {/* Agent ring label */}
            <text
              x={center}
              y={center - agentRadius - 6}
              textAnchor="middle"
              fill="rgba(212,145,42,0.35)"
              fontSize="9"
              fontWeight="600"
              letterSpacing="2"
            >
              CLAUDE AI AGENTS
            </text>
            {/* Spokes from center to outer nodes */}
            {allNodes.map((node) => {
              const angleRad = (node.angleDeg * Math.PI) / 180
              const nx = center + outerRadius * Math.sin(angleRad)
              const ny = center - outerRadius * Math.cos(angleRad)
              const isSource = node.status === 'active'
              return (
                <line
                  key={node.id}
                  x1={center}
                  y1={center}
                  x2={nx}
                  y2={ny}
                  stroke={isSource ? 'rgba(46,125,91,0.25)' : 'rgba(26,111,160,0.2)'}
                  strokeWidth="1.5"
                  strokeDasharray={node.status === 'future' ? '4 4' : 'none'}
                />
              )
            })}
            {/* Animated data flow particles on source system spokes */}
            <defs>
              {sourceSystems.map((node) => {
                const angleRad = (node.angleDeg * Math.PI) / 180
                const nx = center + outerRadius * Math.sin(angleRad)
                const ny = center - outerRadius * Math.cos(angleRad)
                return (
                  <path
                    key={`spoke-path-${node.id}`}
                    id={`spoke-path-${node.id}`}
                    d={`M ${nx} ${ny} L ${center} ${center}`}
                  />
                )
              })}
            </defs>
            {sourceSystems.map((node, i) => (
              <g key={`particles-${node.id}`}>
                {[0, 1].map((p) => (
                  <circle key={`p-${node.id}-${p}`} r="2.5" fill="rgba(46,125,91,0.8)">
                    <animateMotion
                      dur="4s"
                      repeatCount="indefinite"
                      begin={`${p * 2 + i * 0.5}s`}
                    >
                      <mpath href={`#spoke-path-${node.id}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;0.9;0.9;0"
                      dur="4s"
                      repeatCount="indefinite"
                      begin={`${p * 2 + i * 0.5}s`}
                    />
                  </circle>
                ))}
              </g>
            ))}
          </svg>

          <EcosystemHub />

          {/* AI Agent inner ring */}
          {aiAgents.map((agent, i) => (
            <AgentNode
              key={agent.id}
              agent={agent}
              radius={agentRadius}
              angleDeg={agent.angleDeg}
              delay={0.15 * i}
            />
          ))}

          {/* Outer system/module nodes */}
          {allNodes.map((node) => (
            <EcosystemNode
              key={node.id}
              node={node}
              radius={outerRadius}
              angleDeg={node.angleDeg}
            />
          ))}
        </div>
      )}
    </div>
  )
}

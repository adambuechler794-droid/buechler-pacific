import { useRef, useState, useEffect } from 'react'
import CenterHub from './CenterHub'
import OrbitalRings from './OrbitalRings'
import OrbitalNode from './OrbitalNode'
import AgentNode from './AgentNode'
import phases from '../data/phases'
import { aiAgents } from '../data/ecosystem'

export default function OrbitalMap({ onSelectPhase }) {
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

  // Derive everything from the available space
  const nodeRadius = size * 0.36 // main ring where all nodes sit
  const agentRadius = size * 0.19 // AI agent ring
  const radii = {
    1: size * 0.12,
    2: agentRadius,
    3: nodeRadius,
    4: size * 0.45,
  }

  // Agent-to-phase connections: which agents serve which phases
  const agentPhaseLinks = [
    { agentDeg: 240, phaseDeg: 90 },   // Data Guardian → Validation
    { agentDeg: 240, phaseDeg: 135 },   // Data Guardian → Monitoring
    { agentDeg: 300, phaseDeg: 0 },     // Forecast Agent → Kickoff
    { agentDeg: 300, phaseDeg: 45 },    // Forecast Agent → Data Collection
    { agentDeg: 300, phaseDeg: 180 },   // Forecast Agent → Analysis
    { agentDeg: 0, phaseDeg: 180 },     // Insight Agent → Analysis
    { agentDeg: 0, phaseDeg: 315 },     // Insight Agent → Executive Review
    { agentDeg: 60, phaseDeg: 90 },     // Integration Agent → Validation
    { agentDeg: 120, phaseDeg: 270 },   // Planning Agent → Reporting
  ]

  const center = size / 2

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center overflow-hidden"
      style={{ height: 'calc(100dvh - 64px - 44px)', marginTop: '64px' }}
    >
      {size > 0 && (
        <div className="relative" style={{ width: size, height: size }}>
          <OrbitalRings size={size} radii={radii} />

          {/* Agent-to-phase connection lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={size}
            height={size}
          >
            <defs>
              <linearGradient id="agent-link-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(212,145,42,0.25)" />
                <stop offset="100%" stopColor="rgba(26,111,160,0.15)" />
              </linearGradient>
            </defs>
            {agentPhaseLinks.map(({ agentDeg, phaseDeg }, i) => {
              const aRad = (agentDeg * Math.PI) / 180
              const pRad = (phaseDeg * Math.PI) / 180
              const ax = center + agentRadius * Math.sin(aRad)
              const ay = center - agentRadius * Math.cos(aRad)
              const px = center + nodeRadius * Math.sin(pRad)
              const py = center - nodeRadius * Math.cos(pRad)
              return (
                <line
                  key={i}
                  x1={ax}
                  y1={ay}
                  x2={px}
                  y2={py}
                  stroke="url(#agent-link-grad)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
              )
            })}
          </svg>

          <CenterHub />
          {/* AI Agents on inner ring */}
          {aiAgents.map((agent, i) => (
            <AgentNode
              key={agent.id}
              agent={agent}
              radius={agentRadius}
              angleDeg={agent.angleDeg}
              delay={0.1 * i}
            />
          ))}
          {phases.map((phase, i) => (
            <OrbitalNode
              key={phase.id}
              phase={phase}
              radius={radii[phase.ring]}
              angleDeg={phase.angleDeg}
              onClick={onSelectPhase}
              index={i}
            />
          ))}
        </div>
      )}
    </div>
  )
}

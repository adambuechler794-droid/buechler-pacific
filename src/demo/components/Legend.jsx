import { AUTOMATION_LEVELS } from '../data/constants'

export default function Legend() {
  const levels = Object.values(AUTOMATION_LEVELS)
  return (
    <div className="flex gap-6 items-center">
      {levels.map((level) => (
        <div key={level.key} className="flex items-center gap-2">
          <span className={`inline-block w-3 h-3 rounded-full ${level.color}`} />
          <span className="text-sm font-medium">{level.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function CadenceBadge({ cadence }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-light-blue text-navy border border-steel/20">
      {cadence.label}
    </span>
  )
}

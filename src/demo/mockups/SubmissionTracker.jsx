const divisions = [
  'Civil', 'Drilling', 'Energy', 'Concrete',
  'Other', 'Trucking', 'Crane Services', 'Vertical',
]

const periods = [
  'Oct 2025', 'Nov 2025', 'Dec 2025',
  'Jan 2026', 'Feb 2026', 'Mar 2026',
]

// Status data: key = "Division|Period"
const statusMap = {
  // Amber (Late)
  'Drilling|Dec 2025': 'late',
  'Trucking|Feb 2026': 'late',
  // Red (Missing) — Mar 2026
  'Drilling|Mar 2026': 'missing',
  'Energy|Mar 2026': 'missing',
  'Concrete|Mar 2026': 'missing',
  // Green for Mar 2026 — already submitted
  'Civil|Mar 2026': 'ontime',
  'Crane Services|Mar 2026': 'ontime',
  // Gray (Pending) — remaining Mar 2026
  'Other|Mar 2026': 'pending',
  'Trucking|Mar 2026': 'pending',
  'Vertical|Mar 2026': 'pending',
}

function getStatus(division, period) {
  const key = `${division}|${period}`
  if (statusMap[key]) return statusMap[key]
  // All Oct–Feb cells default to on-time
  if (period !== 'Mar 2026') return 'ontime'
  return 'pending'
}

const statusConfig = {
  ontime:  { bg: '#2E7D5B', text: 'white',   label: 'On Time' },
  late:    { bg: '#D4912A', text: 'white',   label: 'Late' },
  missing: { bg: '#DC2626', text: 'white',   label: 'Missing' },
  pending: { bg: '#E5E7EB', text: '#6B7280', label: 'Pending' },
}

const legendItems = [
  { key: 'ontime',  label: 'On Time' },
  { key: 'late',    label: 'Late' },
  { key: 'missing', label: 'Missing' },
  { key: 'pending', label: 'Pending' },
]

export default function SubmissionTracker() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-lg font-bold text-navy">
          Submission Tracker — Rolling 12-Month Forecast
        </h3>
        <p className="text-sm text-muted mt-1">
          Real-time status across all divisions and reporting periods
        </p>
      </div>

      {/* Matrix */}
      <div className="px-6 pb-4 overflow-x-auto">
        <table className="w-full border-separate" style={{ borderSpacing: '4px' }}>
          <thead>
            <tr>
              <th className="py-2 pr-3 text-left" />
              {periods.map((p) => (
                <th
                  key={p}
                  className="py-2 px-2 text-center text-xs font-semibold uppercase tracking-wide text-steel"
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {divisions.map((div) => (
              <tr key={div}>
                <td className="py-1 pr-3 text-sm font-bold text-navy whitespace-nowrap">
                  {div}
                </td>
                {periods.map((period) => {
                  const status = getStatus(div, period)
                  const cfg = statusConfig[status]
                  return (
                    <td key={period} className="py-1 px-1">
                      <div
                        className="rounded-md text-center text-xs font-semibold py-2 px-2"
                        style={{
                          backgroundColor: cfg.bg,
                          color: cfg.text,
                        }}
                      >
                        {cfg.label}
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="px-6 pb-4 flex items-center gap-5">
        {legendItems.map((item) => (
          <div key={item.key} className="flex items-center gap-1.5 text-xs text-dark/70">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: statusConfig[item.key].bg }}
            />
            {item.label}
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-1">
        <p className="text-sm text-dark/70">
          <span className="font-semibold text-navy">5 of 8</span> divisions
          submitted for March 2026
        </p>
        <p className="text-sm text-dark/70">
          <span className="font-semibold text-amber-600">2</span> late
          submissions this quarter
        </p>
        <p className="text-xs text-dark/50">
          Last refreshed: March 5, 2026 3:42 PM
        </p>
      </div>
    </div>
  )
}

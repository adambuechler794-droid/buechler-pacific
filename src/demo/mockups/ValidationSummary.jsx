import { useState } from 'react'

const rows = [
  { division: 'Civil',          file: 'budget_civil_2026-03.xlsx',     status: 'PASSED', details: '8 rows validated' },
  { division: 'Crane Services', file: 'budget_crane_2026-03.xlsx',     status: 'PASSED', details: '4 rows validated' },
  { division: 'Drilling',       file: 'budget_drilling_2026-03.xlsx',  status: 'FAILED', details: '2 rows have blank amounts' },
  { division: 'Energy',         file: 'budget_energy_2026-03.xlsx',    status: 'PASSED', details: '6 rows validated' },
  { division: 'Trucking',       file: 'budget_trucking_2026-03.xlsx',  status: 'FAILED', details: "Stale template version '0.9'" },
]

export default function ValidationSummary() {
  const [showRejection, setShowRejection] = useState(false)

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-lg font-bold text-navy">
          Submission Validation — March 2026
        </h3>
        <p className="text-sm text-muted mt-1">
          Automated validation results for this submission window
        </p>
      </div>

      {/* Table */}
      <div className="px-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-left">
              <th className="py-2 pr-4 font-semibold text-navy">Division</th>
              <th className="py-2 pr-4 font-semibold text-navy">File</th>
              <th className="py-2 pr-4 font-semibold text-navy">Status</th>
              <th className="py-2 font-semibold text-navy">Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const passed = row.status === 'PASSED'
              return (
                <tr
                  key={row.division}
                  className={i % 2 === 0 ? 'bg-gray-50/60' : 'bg-white'}
                >
                  <td className="py-2.5 pr-4 font-medium text-dark">
                    {row.division}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-dark/80">
                    {row.file}
                  </td>
                  <td className="py-2.5 pr-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        passed
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      <span className="text-sm leading-none">
                        {passed ? '\u2713' : '\u2717'}
                      </span>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-dark/70">{row.details}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Rejection Preview */}
      <div className="px-6 pt-5 pb-2">
        <button
          onClick={() => setShowRejection(!showRejection)}
          className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-steel transition-colors"
        >
          <span
            className="inline-block transition-transform duration-200"
            style={{ transform: showRejection ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            &#9654;
          </span>
          Rejection Preview — Drilling
        </button>

        {showRejection && (
          <div className="mt-3 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-900 leading-relaxed font-mono whitespace-pre-line">
{`Hi drilling,

Your submission 'budget_drilling_2026-03.xlsx' could not be loaded:
  \u2022 2 rows have blank amounts

Please download a fresh template, correct the issues, and resubmit.`}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 mt-2 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-dark/70">
          <span className="font-semibold text-navy">3 of 5</span> submissions
          loaded successfully —{' '}
          <span className="font-semibold text-red-600">2</span> require
          resubmission
        </p>
      </div>
    </div>
  )
}

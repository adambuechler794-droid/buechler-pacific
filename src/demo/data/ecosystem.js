// Source systems that feed into Microsoft Fabric
export const sourceSystems = [
  {
    id: 'netsuite',
    label: 'NetSuite',
    subtitle: 'GL & Financials',
    detail: 'Chart of accounts, AP/AR, trial balance, intercompany eliminations',
    aiEnablement: 'Claude maps chart of accounts to Fabric schema — built once, auto-maintained',
    status: 'active',
    angleDeg: 210,
  },
  {
    id: 'hcss',
    label: 'HCSS',
    subtitle: 'Job Costing & Equipment',
    detail: 'Project budgets, cost codes, equipment hours, fuel usage, maintenance logs',
    aiEnablement: 'Claude normalizes job cost structures across divisions automatically',
    status: 'active',
    angleDeg: 270,
  },
  {
    id: 'ukg',
    label: 'UKG',
    subtitle: 'Headcount & Labor',
    detail: 'Employee roster, labor hours, pay rates, benefits, PTO accruals',
    aiEnablement: 'Claude reconciles headcount data with payroll and project allocations',
    status: 'active',
    angleDeg: 330,
  },
]

// Modules that consume Fabric data — current and future
export const platformModules = [
  {
    id: 'fpa-platform',
    label: 'FP&A Platform',
    subtitle: 'Revenue & Opex Forecasting',
    detail: 'Rolling 12-month forecasts, variance analysis, executive reporting — the 8-phase process',
    aiEnablement: 'Claude generates commentary, detects anomalies, and drafts exec packages',
    status: 'live',
    angleDeg: 30,
  },
  {
    id: 'equipment-lifecycle',
    label: 'Equipment Lifecycle',
    subtitle: 'CapEx & Fleet Planning',
    detail: 'Replacement schedules, utilization tracking, rent-vs-buy analysis, depreciation forecasting',
    aiEnablement: 'Claude analyzes HCSS usage patterns to recommend replace/repair/rent decisions',
    status: 'future',
    angleDeg: 70,
  },
  {
    id: 'headcount-planning',
    label: 'Headcount Planning',
    subtitle: 'Workforce & Labor Forecasting',
    detail: 'Position planning, labor cost modeling, hiring pipeline, turnover forecasting',
    aiEnablement: 'Claude projects labor costs from UKG data and flags staffing gaps by division',
    status: 'future',
    angleDeg: 110,
  },
  {
    id: 'cash-flow',
    label: '13-Week Cash Flow',
    subtitle: 'Short-Term Liquidity',
    detail: 'Weekly cash position, AR/AP timing, draw schedules, balance alerts',
    aiEnablement: 'Claude synthesizes NetSuite AR/AP + HCSS billings to project weekly cash position',
    status: 'future',
    angleDeg: 150,
  },
]

// Claude AI agents that live inside Fabric as proactive guardians
export const aiAgents = [
  {
    id: 'data-guardian',
    label: 'Data Guardian',
    subtitle: 'Monitors data quality 24/7',
    detail: 'Watches every pipeline run — flags missing data, schema drift, late loads, and anomalies before anyone asks',
    angleDeg: 240,
  },
  {
    id: 'forecast-agent',
    label: 'Forecast Agent',
    subtitle: 'Drives the FP&A cycle',
    detail: 'Orchestrates submissions, generates variance commentary, drafts executive packages, chases late divisions',
    angleDeg: 300,
  },
  {
    id: 'insight-agent',
    label: 'Insight Agent',
    subtitle: 'Finds what humans miss',
    detail: 'Cross-references all sources to surface trends, risks, and opportunities — answers questions in plain English',
    angleDeg: 0,
  },
  {
    id: 'integration-agent',
    label: 'Integration Agent',
    subtitle: 'Builds connections fast',
    detail: 'New data source? Claude writes the pipeline, maps the schema, validates the output — days not months',
    angleDeg: 60,
  },
  {
    id: 'planning-agent',
    label: 'Planning Agent',
    subtitle: 'Powers future modules',
    detail: 'Equipment, headcount, cash flow — Claude enables each new module by understanding the data already in Fabric',
    angleDeg: 120,
  },
]

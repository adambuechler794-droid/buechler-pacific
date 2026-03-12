import { AUTOMATION_LEVELS, CADENCES } from './constants'

// ring: 1 = weekly (innermost), 2 = 2x/month, 3 = monthly, 4 = annual (outermost)
// angleDeg: position around the circle (0 = top, clockwise)

const phases = [
  {
    id: 'kickoff',
    number: 1,
    title: 'Kickoff & Scheduling',
    subtitle: 'Open submission windows, notify divisions',
    automationLevel: AUTOMATION_LEVELS.ON_THE_LOOP,
    cadences: [CADENCES.WEEKLY, CADENCES.MONTHLY, CADENCES.TWICE_MONTHLY],
    tools: ['Microsoft Teams', 'Power Automate', 'Claude AI'],
    description:
      'AI generates the submission calendar based on cadences. Proactive Teams notifications go out to division managers. The platform drives a rolling 12-month forecast — not annual planning cycles.',
    mockupComponent: 'TeamsNotification',
    subNodes: [],
    ring: 3,
    angleDeg: 0,
  },
  {
    id: 'data-collection',
    number: 2,
    title: 'Data Collection',
    subtitle: 'Division managers submit forecasts',
    automationLevel: AUTOMATION_LEVELS.IN_THE_LOOP,
    cadences: [CADENCES.WEEKLY, CADENCES.MONTHLY, CADENCES.TWICE_MONTHLY],
    tools: ['Excel', 'Microsoft Teams', 'Claude AI'],
    description:
      'Three parallel input paths — division managers choose whichever works best for them. Excel templates for bulk data, Teams forms for quick entries, or just tell Claude in plain English.',
    mockupComponent: 'DataCollectionMockups',
    subNodes: [
      { id: 'excel-input', label: 'Excel Template', detail: 'Branded .xlsx — fill and drop to SharePoint' },
      { id: 'teams-form', label: 'Teams Adaptive Card', detail: 'Structured form right in Teams' },
      { id: 'nl-chat', label: 'Claude NL Chat', detail: '"Just tell me the numbers in plain English"' },
    ],
    ring: 3,
    angleDeg: 45,
  },
  {
    id: 'validation',
    number: 3,
    title: 'Validation & Ingestion',
    subtitle: 'Auto-validate, enrich, and load to Fabric',
    automationLevel: AUTOMATION_LEVELS.OUTSIDE_THE_LOOP,
    cadences: [CADENCES.WEEKLY, CADENCES.MONTHLY, CADENCES.TWICE_MONTHLY],
    tools: ['Microsoft Fabric', 'Power Automate'],
    description:
      'Validation fires automatically on file drop. Template version, division ID, required fields, period format — all checked. Valid submissions are enriched and written to the Fabric Delta lakehouse. Invalid ones generate a rejection message and notify the submitter to fix and resubmit.\n\nEdge cases handled: partial submissions are flagged for follow-up, corrections override prior submissions with full audit trail, and late restatements are logged with timestamps.',
    mockupComponent: 'ValidationSummary',
    subNodes: [
      { id: 'valid-path', label: 'Valid', detail: 'Enriched → Fabric Delta table' },
      { id: 'invalid-path', label: 'Invalid', detail: 'Rejection → notify submitter → resubmit' },
    ],
    ring: 3,
    angleDeg: 90,
  },
  {
    id: 'monitoring',
    number: 4,
    title: 'Monitoring & Follow-up',
    subtitle: 'Track submissions, chase late divisions',
    automationLevel: AUTOMATION_LEVELS.ON_THE_LOOP,
    cadences: [CADENCES.WEEKLY, CADENCES.MONTHLY],
    tools: ['Microsoft Teams', 'Power Automate', 'Claude AI'],
    description:
      'A live tracker shows who has submitted and who is late, by division and period. Automated reminders go out via Teams to late submitters. Every submission window gets a timestamped snapshot for audit.\n\nFull audit trail: every submission, correction, and override is logged with user, timestamp, and source file. Snapshot history retained for compliance and year-end reconciliation.',
    mockupComponent: 'SubmissionTracker',
    subNodes: [],
    ring: 3,
    angleDeg: 135,
  },
  {
    id: 'analysis',
    number: 5,
    title: 'Analysis',
    subtitle: 'Detect anomalies, generate commentary',
    automationLevel: AUTOMATION_LEVELS.ON_THE_LOOP,
    cadences: [CADENCES.MONTHLY],
    tools: ['Claude AI', 'Microsoft Teams', 'Microsoft Fabric'],
    description:
      'Anomaly detection flags variances over threshold. Claude generates variance commentary automatically — specific dollar amounts, percentages, and primary drivers. Teams alerts fire for anything that needs the CFO\'s attention. Rolling 12-month trend analysis surfaces patterns.',
    mockupComponent: 'AnalysisMockups',
    subNodes: [
      { id: 'anomaly-detection', label: 'Anomaly Detection', detail: 'Flag variances over threshold' },
      { id: 'variance-commentary', label: 'Variance Commentary', detail: 'AI-generated, CFO-ready language' },
      { id: 'teams-alerts', label: 'Teams Alerts', detail: 'Proactive notifications to leadership' },
    ],
    ring: 3,
    angleDeg: 180,
  },
  {
    id: 'cfo-review',
    number: 6,
    title: 'CFO Review Gate',
    subtitle: 'Review and approve before distribution',
    automationLevel: AUTOMATION_LEVELS.IN_THE_LOOP,
    cadences: [CADENCES.MONTHLY],
    tools: ['Power BI', 'Microsoft Teams', 'Claude AI'],
    description:
      'Before any reporting goes out, the CFO reviews AI-generated commentary, validates anomaly flags, and approves the numbers. This is the critical human checkpoint — AI prepares everything, but the CFO owns the final sign-off.\n\nNothing reaches the CEO or President without passing through this gate.',
    mockupComponent: 'ExecutiveReviewMockup',
    subNodes: [],
    ring: 3,
    angleDeg: 225,
  },
  {
    id: 'reporting',
    number: 7,
    title: 'Reporting & Distribution',
    subtitle: 'Auto-generate dashboards, decks, and emails',
    automationLevel: AUTOMATION_LEVELS.ON_THE_LOOP,
    cadences: [CADENCES.WEEKLY, CADENCES.MONTHLY],
    tools: ['Power BI', 'PowerPoint', 'Excel', 'Power Automate'],
    description:
      'Three output formats, each tailored to its audience. Power BI dashboards with rolling 12-month views for ongoing monitoring. PowerPoint month-end packages with variance commentary baked in for executive reviews. Weekly Excel billings forecasts emailed to project managers every Wednesday.',
    mockupComponent: 'ReportingMockups',
    subNodes: [
      { id: 'power-bi', label: 'Power BI Dashboard', detail: 'Rolling 12-month view, drill-down by division' },
      { id: 'powerpoint', label: 'PowerPoint Deck', detail: 'Auto-generated month-end package' },
      { id: 'excel-email', label: 'Excel Email', detail: 'Weekly billings forecast to PMs' },
    ],
    ring: 3,
    angleDeg: 270,
  },
  {
    id: 'executive-review',
    number: 8,
    title: 'Executive Review',
    subtitle: 'CEO & President consume the outputs',
    automationLevel: AUTOMATION_LEVELS.IN_THE_LOOP,
    cadences: [CADENCES.MONTHLY],
    tools: ['Power BI', 'PowerPoint', 'Claude AI'],
    description:
      'The CFO walks into the monthly review with an auto-generated deck and live dashboard. Leadership can ask questions in natural language — "Why is Crane over budget?" — and get answers grounded in the data. Decision support, not just reporting.',
    mockupComponent: 'ExecutiveReviewMockup',
    subNodes: [],
    ring: 3,
    angleDeg: 315,
  },
]

export default phases

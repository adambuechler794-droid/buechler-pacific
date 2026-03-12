export const AUTOMATION_LEVELS = {
  IN_THE_LOOP: {
    key: 'in-the-loop',
    label: 'In the Loop',
    description: 'Human actively drives the task',
    color: 'bg-steel',
    textColor: 'text-white',
    pulses: false,
  },
  ON_THE_LOOP: {
    key: 'on-the-loop',
    label: 'On the Loop',
    description: 'AI does the work, human reviews and approves',
    color: 'bg-amber-warm',
    textColor: 'text-white',
    pulses: false,
  },
  OUTSIDE_THE_LOOP: {
    key: 'outside-the-loop',
    label: 'Outside the Loop',
    description: 'Fully automated — human sees the output',
    color: 'bg-green-muted',
    textColor: 'text-white',
    pulses: true,
  },
}

export const CADENCES = {
  WEEKLY: { label: 'Weekly', detail: 'Billings forecast — every Wednesday' },
  MONTHLY: { label: 'Monthly', detail: 'Opex — after month-end close' },
  TWICE_MONTHLY: { label: '2x / Month', detail: 'Equipment — target cadence' },
}

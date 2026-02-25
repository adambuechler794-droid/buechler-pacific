# Cash Flow Statement Automation

**Status:** On website
**Category:** AI / Automation

---

## Summary

Automated the most dreaded deliverable in finance. Built a Power Pivot pulling directly from the Fabric semantic model, replacing a process that required three senior finance people working a full day. Monthly verification keeps a human in the loop.

**Website result line:** Three people, full day → one person, under an hour

---

## Challenge

The Cash Flow Statement — universally dreaded in finance, "even at EY people don't want to touch it" — required three senior finance people (CFO, Controller, and FP&A Director) working together over the course of a full day, often staying late to complete it.

---

## Solution

Built a Power Pivot that shows the change in Balance Sheet accounts over a given time period, pulling directly from the Fabric semantic model. Clean report cells are linked to the pivot output.

Adam steps in monthly for new capex accounts and to verify the output still makes sense — "the human double-checking the automation."

**Systems:** Power Pivot, Microsoft Fabric semantic model, Excel

**Design philosophy:** Not over-engineered. Power Pivot is maintainable by any competent finance person. The sophistication is in the Fabric architecture underneath, not the interface.

---

## Results

- **Three people, full day, staying late → one person, under an hour**
- 90% automated
- Completed full 2025 CFS in under an hour (Feb 2026)
- Maintainable by any competent finance person — not a black box

---

## The Real Impact: What the Saved Time Unlocked

The CFS automation didn't just save time — it changed what the close process *is.*

Before, the close was assembly (constructing reports). After, the recovered day gave the CFO and FP&A Director time to do **actual analysis before close** — reviewing WIP, catching issues, making decisions. The close went from report construction to business intelligence.

---

## Positioning Value

- **Universally relatable** — every finance person knows CFS pain
- **Demonstrates the Excel-to-Fabric bridge philosophy** applied to a specific deliverable
- **Shows the "human in the loop" positioning** — responsible automation, not blind automation
- **Proves infrastructure pays compound dividends** — CFS automation only possible because Fabric models exist
- **The strongest before/after metric** in the portfolio (3 people → 1, full day → under an hour)

---

## Gaps to Fill

- [ ] Specific example of something caught during the recovered "analysis time" that wouldn't have been caught before
- [ ] Has anyone else been trained to run the CFS process?

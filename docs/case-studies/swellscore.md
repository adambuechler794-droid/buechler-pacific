# SwellScore — Real-Time Surf Forecast System

**Status:** On website (lead case study)
**Category:** AI / Product

---

## Summary

Full-stack web application integrating NOAA buoy data, PacIOOS ERDDAP wave models, and weather APIs to deliver real-time, actionable surf forecasts for Maui. Built end-to-end: React + TypeScript frontend, Flask API backend, multi-source data pipeline, live in production.

**Website result line:** Full-stack product — live in production

---

## Why This Leads

SwellScore is the strongest proof of full-stack AI and product capability:

1. **Complete product, not a dashboard.** This isn't a report built on someone else's platform — it's a fully designed and engineered application with a frontend, backend, API layer, and data pipeline.

2. **Live in production.** It runs. People use it. It handles real-time data from multiple external sources and delivers actionable output.

3. **Technical depth.** Multi-source data integration (NOAA buoys, PacIOOS ERDDAP SWAN wave models, WRF weather models, Open-Meteo fallback, NOAA tides), real-time processing, responsive UI.

4. **Shows range.** While the Alpha case studies prove finance and data platform expertise, SwellScore proves the ability to conceive, design, build, and ship a consumer-facing product independently.

---

## Technical Architecture

### Frontend
- React + TypeScript + Vite
- Responsive design for mobile (primary use case — checking surf from the beach)
- Real-time forecast display with break-specific conditions

### Backend
- Flask (Python) API server
- Data from PacIOOS ERDDAP (SWAN wave model + WRF wind model)
- Open-Meteo as wind data fallback
- NOAA tide data integration
- Break configuration: 10 Maui surf breaks

### Data Pipeline
- Multi-source data aggregation (buoy, wave model, wind model, tides)
- ERDDAP API integration with per-variable queries (batch syntax causes 500s)
- SWAN model ~5 day forecast window, WRF ~4 days
- Graceful fallbacks when primary data sources are unavailable

### Deployment
- Separate repo: `surf-forecast-app`
- Active development on `surfline-ui` branch

---

## Positioning Value

SwellScore answers the question prospects don't ask but always wonder: "Can this person actually build things, or just talk about building things?"

The answer is a live product they can visit and use. That's the strongest possible proof point for a technology consultancy.

---

## Gaps to Fill

- [ ] Add live URL once publicly accessible
- [ ] Screenshot or demo video for the case study
- [ ] Usage metrics if available (daily users, forecasts served)
- [ ] Consider linking to the GitHub repo if made public

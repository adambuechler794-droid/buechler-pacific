import { describe, it, expect } from 'vitest'
import { caseStudies, getCaseStudy } from '../data/caseStudies'

const REQUIRED_FIELDS = ['slug', 'category', 'title', 'metaTitle', 'metaDescription', 'summary', 'challenge', 'solution', 'results', 'tech', 'resultLine']

describe('caseStudies data', () => {
  it('has exactly 5 case studies', () => {
    expect(caseStudies).toHaveLength(5)
  })

  it('every case study has all required fields', () => {
    caseStudies.forEach(cs => {
      REQUIRED_FIELDS.forEach(field => {
        expect(cs, `${cs.slug} missing field: ${field}`).toHaveProperty(field)
        expect(cs[field], `${cs.slug}.${field} is empty`).toBeTruthy()
      })
    })
  })

  it('results and tech are non-empty arrays', () => {
    caseStudies.forEach(cs => {
      expect(Array.isArray(cs.results)).toBe(true)
      expect(cs.results.length).toBeGreaterThan(0)
      expect(Array.isArray(cs.tech)).toBe(true)
      expect(cs.tech.length).toBeGreaterThan(0)
    })
  })

  it('all slugs are unique and URL-safe', () => {
    const slugs = caseStudies.map(cs => cs.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    slugs.forEach(slug => expect(slug).toMatch(/^[a-z0-9-]+$/))
  })

  it('getCaseStudy finds by slug', () => {
    const cs = getCaseStudy('swellscore')
    expect(cs).toBeDefined()
    expect(cs.slug).toBe('swellscore')
  })

  it('getCaseStudy returns undefined for unknown slug', () => {
    expect(getCaseStudy('nonexistent')).toBeUndefined()
  })

  it('all metaDescriptions are under 160 characters', () => {
    caseStudies.forEach(cs => {
      expect(cs.metaDescription.length, `${cs.slug} metaDescription too long`).toBeLessThanOrEqual(160)
    })
  })
})

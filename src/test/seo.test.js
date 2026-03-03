import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, it, expect } from 'vitest'

const html = readFileSync(resolve('index.html'), 'utf-8')

describe('SEO meta tags in index.html', () => {
  it('has a descriptive title', () => {
    expect(html).toMatch(/<title>.*Buechler Pacific.*<\/title>/)
  })

  it('has a meta description mentioning Hawaii', () => {
    expect(html).toMatch(/name="description"/)
    expect(html).toMatch(/content="[^"]*Hawaii[^"]*"/)
  })

  it('has Open Graph title', () => {
    expect(html).toMatch(/property="og:title"/)
  })

  it('has Open Graph description', () => {
    expect(html).toMatch(/property="og:description"/)
  })

  it('has Open Graph URL', () => {
    expect(html).toMatch(/property="og:url".*content="https:\/\/buechlerpacific\.com"/)
  })

  it('has Open Graph type', () => {
    expect(html).toMatch(/property="og:type".*content="website"/)
  })

  it('has Twitter card meta', () => {
    expect(html).toMatch(/name="twitter:card"/)
    expect(html).toMatch(/name="twitter:title"/)
    expect(html).toMatch(/name="twitter:description"/)
  })

  it('loads DM Sans and Outfit fonts', () => {
    expect(html).toMatch(/DM\+Sans/)
    expect(html).toMatch(/Outfit/)
  })

  it('has lang="en" on html tag', () => {
    expect(html).toMatch(/<html lang="en">/)
  })

  it('has canonical link', () => {
    expect(html).toMatch(/rel="canonical"/)
    expect(html).toMatch(/href="https:\/\/buechlerpacific\.com\/"/)
  })

  it('has Open Graph image', () => {
    expect(html).toMatch(/property="og:image"/)
    expect(html).toMatch(/og-image/)
  })

  it('has Twitter large image card', () => {
    expect(html).toMatch(/name="twitter:card".*content="summary_large_image"/)
    expect(html).toMatch(/name="twitter:image"/)
  })

  it('has JSON-LD structured data', () => {
    expect(html).toMatch(/application\/ld\+json/)
    expect(html).toMatch(/schema\.org/)
    expect(html).toMatch(/ProfessionalService/)
  })

  it('has Open Graph image alt text', () => {
    expect(html).toMatch(/property="og:image:alt"\s+content="Buechler Pacific — AI Systems for Finance"/)
  })

  it('has telephone in structured data', () => {
    expect(html).toMatch(/\+18585253076/)
  })

  it('has PostalAddress in structured data', () => {
    expect(html).toMatch(/PostalAddress/)
    expect(html).toMatch(/Uwapo/)
  })

  it('has image and priceRange in structured data', () => {
    expect(html).toMatch(/"image":\s*"https:\/\/buechlerpacific\.com\/og-image\.svg"/)
    expect(html).toMatch(/"priceRange":\s*"\$\$\$\$"/)
  })
})

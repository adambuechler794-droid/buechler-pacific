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

  it('loads Instrument Serif and Plus Jakarta Sans fonts', () => {
    expect(html).toMatch(/Instrument\+Serif/)
    expect(html).toMatch(/Plus\+Jakarta\+Sans/)
  })

  it('has lang="en" on html tag', () => {
    expect(html).toMatch(/<html lang="en">/)
  })
})

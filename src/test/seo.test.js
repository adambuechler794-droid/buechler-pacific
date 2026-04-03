import { readFileSync } from 'fs'
import { resolve } from 'path'
import { describe, it, expect } from 'vitest'

const html = readFileSync(resolve('index.html'), 'utf-8')
const sitemap = readFileSync(resolve('public/sitemap.xml'), 'utf-8')
const linkedinServiceHtml = readFileSync(resolve('public/services/linkedin-presence-os/index.html'), 'utf-8')
const demoHtml = readFileSync(resolve('public/demo/index.html'), 'utf-8')

const caseStudyStaticPages = {
  swellscore: {
    file: readFileSync(resolve('public/case-studies/swellscore/index.html'), 'utf-8'),
    title: 'SwellScore: Full-Stack Surf Forecast App | Buechler Pacific',
  },
  'ai-agents-finance': {
    file: readFileSync(resolve('public/case-studies/ai-agents-finance/index.html'), 'utf-8'),
    title: 'AI Agents for Financial Planning & Data Analysis | Buechler Pacific',
  },
  'close-transformation': {
    file: readFileSync(resolve('public/case-studies/close-transformation/index.html'), 'utf-8'),
    title: 'Month-End Close Transformation | Buechler Pacific',
  },
  'construction-analytics': {
    file: readFileSync(resolve('public/case-studies/construction-analytics/index.html'), 'utf-8'),
    title: 'Construction Project Analytics Dashboards | Buechler Pacific',
  },
  'enterprise-data-platform': {
    file: readFileSync(resolve('public/case-studies/enterprise-data-platform/index.html'), 'utf-8'),
    title: 'AI-Ready Enterprise Data Platform | Buechler Pacific',
  },
}

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

describe('sitemap.xml', () => {
  it('includes all case study URLs', () => {
    const slugs = [
      'swellscore/',
      'ai-agents-finance/',
      'close-transformation/',
      'construction-analytics/',
      'enterprise-data-platform/',
    ]
    slugs.forEach(slug => {
      expect(sitemap).toMatch(new RegExp(`/case-studies/${slug}`))
    })
  })

  it('includes the LinkedIn Presence OS service page', () => {
    expect(sitemap).toMatch(/\/services\/linkedin-presence-os\//)
  })

  it('includes the demo landing page', () => {
    expect(sitemap).toMatch(/https:\/\/buechlerpacific\.com\/demo\//)
  })
})

describe('LinkedIn Presence OS static page', () => {
  it('has a route-specific title and canonical', () => {
    expect(linkedinServiceHtml).toMatch(/<title>LinkedIn Presence OS \| Buechler Pacific<\/title>/)
    expect(linkedinServiceHtml).toMatch(/rel="canonical".*https:\/\/buechlerpacific\.com\/services\/linkedin-presence-os\//)
  })

  it('has route-specific Open Graph metadata', () => {
    expect(linkedinServiceHtml).toMatch(/property="og:title".*LinkedIn Presence OS/)
    expect(linkedinServiceHtml).toMatch(/property="og:url".*services\/linkedin-presence-os\//)
    expect(linkedinServiceHtml).toMatch(/property="og:description"/)
  })

  it('has service structured data', () => {
    expect(linkedinServiceHtml).toMatch(/"@type": "Service"/)
    expect(linkedinServiceHtml).toMatch(/"serviceType": "LinkedIn presence management"/)
  })
})

describe('case study static pages', () => {
  it('each case study has a route-specific static page with canonical metadata', () => {
    Object.entries(caseStudyStaticPages).forEach(([slug, { file, title }]) => {
      expect(file).toMatch(new RegExp(`<title>${title.replace(/[|]/g, '\\|')}<\\/title>`))
      expect(file).toMatch(new RegExp(`rel="canonical".*case-studies/${slug}/`))
      expect(file).toMatch(/property="og:title"/)
    })
  })
})

describe('demo static page', () => {
  it('has route-specific title and canonical metadata', () => {
    expect(demoHtml).toMatch(/<title>FP&A Platform Demo \| Buechler Pacific<\/title>/)
    expect(demoHtml).toMatch(/rel="canonical".*https:\/\/buechlerpacific\.com\/demo\//)
  })

  it('redirects buyers into the live interactive walkthrough', () => {
    expect(demoHtml).toMatch(/http-equiv="refresh".*url=\/demo\/live\//)
    expect(demoHtml).toMatch(/window\.location\.replace\('\/demo\/live\/'\)/)
    expect(demoHtml).toMatch(/href="\/demo\/live\/?"/)
    expect(demoHtml).toMatch(/Interactive Demo/)
    expect(demoHtml).toMatch(/Opening the FP(&|&amp;)A Platform Demo/)
  })
})

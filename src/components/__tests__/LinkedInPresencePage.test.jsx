import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import LinkedInPresencePage from '../LinkedInPresencePage'

const originalTitle = document.title
const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
const originalCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || ''

beforeEach(() => {
  if (!document.querySelector('meta[name="description"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }

  if (!document.querySelector('meta[property="og:title"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'og:title')
    document.head.appendChild(meta)
  }

  if (!document.querySelector('meta[property="og:description"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'og:description')
    document.head.appendChild(meta)
  }

  if (!document.querySelector('meta[property="og:url"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('property', 'og:url')
    document.head.appendChild(meta)
  }

  if (!document.querySelector('meta[name="twitter:title"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'twitter:title')
    document.head.appendChild(meta)
  }

  if (!document.querySelector('meta[name="twitter:description"]')) {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'twitter:description')
    document.head.appendChild(meta)
  }

  if (!document.querySelector('link[rel="canonical"]')) {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  window.scrollTo = () => {}
})

afterEach(() => {
  document.title = originalTitle
  document.querySelector('meta[name="description"]')?.setAttribute('content', originalDescription)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', originalCanonical)
})

describe('LinkedInPresencePage', () => {
  it('renders the page headline and core workflow language', () => {
    render(
      <MemoryRouter>
        <LinkedInPresencePage />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', {
        name: /LinkedIn Presence OS for people with real expertise and no time to play full-time creator/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/Most smart operators do not need help having ideas/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Relationship Radar/i })).toBeInTheDocument()
  })

  it('updates document metadata for the route', () => {
    render(
      <MemoryRouter>
        <LinkedInPresencePage />
      </MemoryRouter>
    )

    expect(document.title).toBe('LinkedIn Presence OS | Buechler Pacific')
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringContaining('high-touch LinkedIn presence system')
    )
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://buechlerpacific.com/services/linkedin-presence-os/'
    )
  })

  it('includes clear contact calls to action', () => {
    render(
      <MemoryRouter>
        <LinkedInPresencePage />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /Book a Pilot Conversation/i })).toHaveAttribute('href', '/#contact')
    expect(screen.getByRole('link', { name: /Email Adam/i })).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:adam.buechler@buechlerpacific.com')
    )
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Footer from '../Footer'

beforeEach(() => {
  window.IntersectionObserver = class {
    constructor(cb) {
      setTimeout(() => cb([{ isIntersecting: true }]), 0)
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe('Footer', () => {
  it('renders the Buechler Pacific brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Buechler Pacific')).toBeInTheDocument()
  })

  it('links to the correct LinkedIn profile', () => {
    render(<Footer />)
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adambuechler/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('links to the correct GitHub profile', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/adambuechler794-droid')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  it('links to the correct email address', () => {
    render(<Footer />)
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:adam.buechler@buechlerpacific.com')
  })

  it('shows the current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})

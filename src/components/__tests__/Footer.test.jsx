import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
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
    render(<MemoryRouter><Footer /></MemoryRouter>)
    expect(screen.getByText('Buechler Pacific')).toBeInTheDocument()
  })

  it('links to the correct LinkedIn profile', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>)
    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adambuechler/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('links to the correct GitHub profile', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>)
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/adambuechler794-droid')
    expect(githubLink).toHaveAttribute('target', '_blank')
  })

  it('links to the correct email address', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>)
    const emailLink = screen.getByRole('link', { name: /email/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:adam.buechler@buechlerpacific.com')
  })

  it('shows the current year in copyright', () => {
    render(<MemoryRouter><Footer /></MemoryRouter>)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})

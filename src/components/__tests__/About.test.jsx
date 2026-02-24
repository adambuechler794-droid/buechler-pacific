import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import About from '../About'

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

describe('About', () => {
  it('renders the name heading', () => {
    render(<About />)
    expect(screen.getByText('Adam Buechler')).toBeInTheDocument()
  })

  it('has a LinkedIn CTA linking to the correct profile', () => {
    render(<About />)
    const linkedinLink = screen.getByRole('link', { name: /connect on linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/adambuechler/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('renders bio paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/intersection of finance and engineering/i)).toBeInTheDocument()
    expect(screen.getByText(/director of fp&a at alpha inc/i)).toBeInTheDocument()
    expect(screen.getByText(/uc santa barbara/i)).toBeInTheDocument()
  })

  it('renders credential tags', () => {
    render(<About />)
    expect(screen.getByText('Director of FP&A')).toBeInTheDocument()
    expect(screen.getByText('Microsoft Fabric')).toBeInTheDocument()
    expect(screen.getByText('AI Engineering')).toBeInTheDocument()
    expect(screen.getByText('Maui, Hawaii')).toBeInTheDocument()
  })
})

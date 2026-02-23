import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import Services from '../Services'

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

describe('Services', () => {
  it('renders exactly 4 service cards', () => {
    render(<Services />)
    const titles = [
      'Financial Planning & Analysis',
      'Power BI & Data Analytics',
      'Data Architecture & Engineering',
      'AI & Custom Applications',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('marks FP&A as the featured/core service', () => {
    render(<Services />)
    expect(screen.getByText('Core')).toBeInTheDocument()
  })

  it('renders service line items', () => {
    render(<Services />)
    expect(screen.getByText(/multi-scenario planning/i)).toBeInTheDocument()
    expect(screen.getByText(/custom dashboards built/i)).toBeInTheDocument()
    expect(screen.getByText(/microsoft fabric implementation/i)).toBeInTheDocument()
    expect(screen.getByText(/custom gpt-powered/i)).toBeInTheDocument()
  })
})

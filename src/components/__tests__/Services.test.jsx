import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
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
  it('renders all 4 service cards', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    const titles = [
      'Operator AI & Workflow Automation',
      'Finance Operating Systems',
      'Reporting & Decision Support',
      'Data Foundations',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('marks AI & Intelligent Automation as the featured service', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    expect(screen.getByText('Flagship Capability')).toBeInTheDocument()
    expect(screen.getByText('What This Includes')).toBeInTheDocument()
    expect(screen.getByText(/stitching systems together by hand/i)).toBeInTheDocument()
  })

  it('renders feature pills for each service', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    expect(screen.getByText('Internal AI Tools')).toBeInTheDocument()
    expect(screen.getByText('Planning Workflows')).toBeInTheDocument()
    expect(screen.getByText('Executive Dashboards')).toBeInTheDocument()
    expect(screen.getByText('Microsoft Fabric')).toBeInTheDocument()
  })

  it('keeps the solutions section focused on the core service cards', () => {
    render(<MemoryRouter><Services /></MemoryRouter>)
    expect(screen.queryByText(/linkedin presence os/i)).not.toBeInTheDocument()
  })
})

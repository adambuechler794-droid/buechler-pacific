import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Navigation from '../Navigation'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(cb) {
        setTimeout(() => cb([{ isIntersecting: true }]), 0)
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  )
  Object.defineProperty(window, 'scrollY', {
    value: 0,
    writable: true,
    configurable: true,
  })
  window.scrollTo = vi.fn()
})

afterEach(() => {
  vi.restoreAllMocks()
  document.body.style.overflow = ''
})

describe('Navigation', () => {
  it('applies scrolled styles when page is scrolled past threshold', async () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>)

    Object.defineProperty(window, 'scrollY', {
      value: 120,
      writable: true,
      configurable: true,
    })
    fireEvent.scroll(window)

    const nav = document.querySelector('nav')
    expect(nav.className).toContain('bg-white/80')
    expect(nav.className).toContain('backdrop-blur-2xl')
  })

  it('opens and closes the mobile menu via buttons', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><Navigation /></MemoryRouter>)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const closeButtons = screen.getAllByRole('button', { name: /close menu/i })
    expect(closeButtons.length).toBeGreaterThanOrEqual(1)

    await user.click(closeButtons[0])
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const { container } = render(<MemoryRouter><Navigation /></MemoryRouter>)

    // Open menu
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getAllByRole('button', { name: /close menu/i }).length).toBeGreaterThanOrEqual(1)

    // Find the mobile overlay link directly via DOM
    const overlay = container.querySelector('.fixed.inset-0')
    const link = overlay.querySelector('a[href="#solutions"]')

    // Simulate click via native event to avoid jsdom hash navigation side effects
    act(() => {
      const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true })
      link.dispatchEvent(clickEvent)
    })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
    })
  })

  it('logo links to the home page', () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>)
    const logo = screen.getByText('Buechler Pacific').closest('a')
    expect(logo).toHaveAttribute('href', '/')
  })

  it('locks body scroll when the mobile menu is open', async () => {
    const user = userEvent.setup()
    render(<MemoryRouter><Navigation /></MemoryRouter>)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(document.body.style.overflow).toBe('hidden')

    const closeButtons = screen.getAllByRole('button', { name: /close menu/i })
    await user.click(closeButtons[0])
    expect(document.body.style.overflow).toBe('')
  })

  it('renders anchor links as bare fragments on the home route', () => {
    render(<MemoryRouter initialEntries={['/']}><Navigation /></MemoryRouter>)
    const expectedLinks = [
      { text: 'Solutions', href: '#solutions' },
      { text: 'Impact', href: '#impact' },
      { text: 'Work', href: '#work' },
      { text: 'About', href: '#about' },
    ]

    expectedLinks.forEach(({ text, href }) => {
      const links = screen.getAllByText(text)
      const link = links.find((el) => el.closest('a'))
      expect(link.closest('a')).toHaveAttribute('href', href)
    })
  })

  it('prefixes anchor links with / on non-home routes', () => {
    render(
      <MemoryRouter initialEntries={['/case-studies/swellscore']}>
        <Navigation />
      </MemoryRouter>
    )
    const expectedLinks = [
      { text: 'Solutions', href: '/#solutions' },
      { text: 'Impact', href: '/#impact' },
      { text: 'Work', href: '/#work' },
      { text: 'About', href: '/#about' },
    ]

    expectedLinks.forEach(({ text, href }) => {
      const links = screen.getAllByText(text)
      const link = links.find((el) => el.closest('a'))
      expect(link.closest('a')).toHaveAttribute('href', href)
    })
  })
})

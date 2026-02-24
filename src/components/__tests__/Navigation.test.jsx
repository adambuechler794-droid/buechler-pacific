import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
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
    render(<Navigation />)

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
    render(<Navigation />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const closeButtons = screen.getAllByRole('button', { name: /close menu/i })
    expect(closeButtons.length).toBeGreaterThanOrEqual(1)

    await user.click(closeButtons[0])
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const { container } = render(<Navigation />)

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

  it('scrolls to top when the logo is clicked', async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    const logo = screen.getByText('Buechler Pacific')
    await user.click(logo.closest('a'))

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('locks body scroll when the mobile menu is open', async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(document.body.style.overflow).toBe('hidden')

    const closeButtons = screen.getAllByRole('button', { name: /close menu/i })
    await user.click(closeButtons[0])
    expect(document.body.style.overflow).toBe('')
  })

  it('renders all nav links with correct hrefs', () => {
    render(<Navigation />)
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
})

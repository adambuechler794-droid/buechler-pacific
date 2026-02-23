import { render, screen } from '@testing-library/react'
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
  it('applies scrolled styles immediately when page loads below threshold', () => {
    Object.defineProperty(window, 'scrollY', {
      value: 120,
      writable: true,
      configurable: true,
    })

    render(<Navigation />)

    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-stone-50/90')
    expect(nav.className).toContain('py-3')
  })

  it('opens and closes the mobile menu via buttons', async () => {
    const user = userEvent.setup()
    render(<Navigation />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    // Mobile menu should be open — two close buttons exist (hamburger + overlay close)
    const closeButtons = screen.getAllByRole('button', { name: /close menu/i })
    expect(closeButtons.length).toBeGreaterThanOrEqual(1)

    // Click the first close button
    await user.click(closeButtons[0])

    // Menu should be closed
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop overlay is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Navigation />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getAllByRole('button', { name: /close menu/i }).length).toBeGreaterThanOrEqual(1)

    // Click the backdrop overlay (the outermost fixed div)
    const overlay = container.querySelector('.fixed.inset-0')
    await user.click(overlay)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()

    // Create target elements for scrollIntoView
    const section = document.createElement('section')
    section.id = 'services'
    section.scrollIntoView = vi.fn()
    document.body.appendChild(section)

    render(<Navigation />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    // Find the mobile "Services" link (inside the fixed overlay)
    const mobileLinks = screen.getAllByText('Services')
    const mobileLink = mobileLinks.find((el) => el.closest('.fixed'))
    await user.click(mobileLink)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()

    document.body.removeChild(section)
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

    // Click the hamburger button (which now shows X / "Close menu")
    const closeButtons = screen.getAllByRole('button', { name: /close menu/i })
    await user.click(closeButtons[0])
    expect(document.body.style.overflow).toBe('')
  })
})

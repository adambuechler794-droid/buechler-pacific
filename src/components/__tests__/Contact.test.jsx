import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Contact from '../Contact'

// Mock IntersectionObserver for useInView
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
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

async function fillRequired(user) {
  await user.type(screen.getByLabelText(/^name/i), 'Jane Doe')
  await user.type(screen.getByLabelText(/^company(?! size)/i), 'Acme Corp')
  await user.type(screen.getByLabelText(/^email/i), 'jane@acme.com')
  await user.type(screen.getByLabelText(/not working/i), 'Reports take forever')
}

describe('Contact form', () => {
  it('submits successfully and shows sent state', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  })

  it('shows "Sending..." and disables button during submission', async () => {
    const user = userEvent.setup()
    let resolveFetch
    vi.stubGlobal(
      'fetch',
      vi.fn().mockImplementation(
        () => new Promise((resolve) => { resolveFetch = resolve }),
      ),
    )

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const btn = screen.getByRole('button', { name: /sending/i })
    expect(btn).toBeDisabled()
    expect(screen.getByLabelText(/^name/i)).toBeDisabled()
    expect(screen.getByLabelText(/^company(?! size)/i)).toBeDisabled()
    expect(screen.getByLabelText(/^email/i)).toBeDisabled()
    expect(screen.getByLabelText(/^phone/i)).toBeDisabled()
    expect(screen.getByLabelText(/^company size/i)).toBeDisabled()
    expect(screen.getByLabelText(/not working/i)).toBeDisabled()

    // Resolve to finish
    resolveFetch({ ok: true })
    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  })

  it('prevents duplicate submit requests on rapid double-click', async () => {
    const user = userEvent.setup()
    const fetchMock = vi
      .fn()
      .mockImplementation(() => new Promise(() => {}))
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.dblClick(screen.getByRole('button', { name: /send message/i }))

    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('shows error with mailto fallback and does not auto-retry on failed response', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockResolvedValue({ ok: false })
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const errorMsg = await screen.findByText(/something went wrong/i)
    expect(errorMsg).toBeInTheDocument()
    const errorContainer = errorMsg.closest('div')
    const fallbackLink = errorContainer.querySelector('a[href^="mailto:"]')
    expect(fallbackLink).toBeTruthy()
    expect(fallbackLink).toHaveAttribute('href', 'mailto:adam.buechler@buechlerpacific.com')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('shows error with mailto fallback on network exception', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn().mockRejectedValue(new Error('Network error'))
    vi.stubGlobal('fetch', fetchMock)

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    const errorMsg = await screen.findByText(/something went wrong/i)
    expect(errorMsg).toBeInTheDocument()
    const errorContainer = errorMsg.closest('div')
    const fallbackLink = errorContainer.querySelector('a[href^="mailto:"]')
    expect(fallbackLink).toBeTruthy()
    expect(fallbackLink).toHaveAttribute('href', 'mailto:adam.buechler@buechlerpacific.com')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('auto-dismisses success message after 5 seconds', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })

    await act(async () => {
      vi.advanceTimersByTime(5000)
    })

    await waitFor(() => {
      expect(screen.queryByText(/message sent/i)).not.toBeInTheDocument()
    })
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('cleans up timer on unmount without warnings', async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    const { unmount } = render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })

    unmount()
    vi.advanceTimersByTime(6000)
  })

  it('"Send another message" returns to form', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<Contact />)
    await fillRequired(user)
    await user.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button', { name: /send another/i }))
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })
})

import TheHeadline from '@/components/TheHeadline.vue'
import { render, screen } from '@testing-library/vue'

import { describe, expect, it, vi } from 'vitest'

describe('TheHeadline', () => {
  it('displays intro action text', () => {
    vi.useFakeTimers()
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /code for everyone/i
    })

    expect(actionPhrase).toBeTruthy()
    vi.useRealTimers()
  })

  it('changes action text at an interval', () => {
    vi.useFakeTimers()
    const mock = vi.fn()

    vi.stubGlobal('setInterval', mock)
    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('changes action text at an interval', async () => {
    vi.useFakeTimers()

    render(TheHeadline)

    await vi.advanceTimersToNextTimerAsync()

    const actionPhrase = screen.getByRole('heading', {
      name: /design for everyone/i
    })

    expect(actionPhrase).toBeTruthy()
  })
})

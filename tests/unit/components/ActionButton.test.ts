import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import ActionButton from '@/components/ActionButton.vue'

describe('ActionButton', () => {
  it("renders a button with the text 'Click me'", () => {
    render(ActionButton, {
      props: {
        name: 'Click me',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', { name: /click me/i })

    expect(button).toBeDefined()
  })

  it('apliges one of the button types', () => {
    render(ActionButton, {
      props: {
        name: 'Click me',
        type: 'secondary'
      }
    })

    const button = screen.getByRole('button', { name: /click me/i })

    expect(button.classList.contains('secondary')).toBe(true)
  })
})

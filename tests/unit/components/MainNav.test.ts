import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'
import { describe, expect, it } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Career Match')
    expect(companyName).toBeDefined()
    screen.debug()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
    const menuItems = screen.getAllByRole('listitem')
    console.log(menuItems.map((item) => item.textContent))

    expect(menuItems).toHaveLength(6)
    expect(menuItems)
    screen.debug()
  })
})

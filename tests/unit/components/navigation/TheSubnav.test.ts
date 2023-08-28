import { render, screen } from '@testing-library/vue'

import TheSubNav from '@/components/Navigation/TheSubnav.vue'
import { describe, expect, it } from 'vitest'

describe('TheSubNav', () => {
  describe('when user is on jobs page', () => {
    it('displays jobs menu item as active', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        props: {
          isJobMenuActive: true
        }
      })
      const jobCount = screen.queryByText('802')
      expect(jobCount).toBeTruthy()
      screen.debug()
    })
  })

  describe('when user is not on jobs page', () => {
    it('displays jobs menu item as inactive', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        props: {
          isJobMenuActive: false
        }
      })
      const jobCount = screen.queryByText('802')
      console.log({ jobCount })
      expect(jobCount).not.toBeTruthy()
      screen.debug()
    })
  })
})

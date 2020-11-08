import { render } from '@redwoodjs/testing'

import SubscriptionPlanPage from './SubscriptionPlanPage'

describe('SubscriptionPlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubscriptionPlanPage />)
    }).not.toThrow()
  })
})

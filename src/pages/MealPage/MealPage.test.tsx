import React from 'react'
import { screen, render } from '@testing-library/react'
import MealPage from './MealPage'

jest.mock('components', () => ({
  MealDetail: () => <h1>Meal Detail</h1>
}))

it('Should render meal detail component.', () => {
  render(<MealPage />)

  const mealDetail = screen.getByRole('heading', { name: /meal detail/i })

  expect(mealDetail).toBeInTheDocument()
})

import React from 'react'
import { screen, render } from '@testing-library/react'
import MealPage from './MealPage'

jest.mock('components', () => ({
  MealDetail: () => <h1>Meal Detail</h1>,
  SEO: () => <h1>seo</h1>
}))

it('Should render MealDetail and SEO components.', () => {
  render(<MealPage />)

  const mealDetail = screen.getByRole('heading', { name: /meal detail/i })
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(mealDetail).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

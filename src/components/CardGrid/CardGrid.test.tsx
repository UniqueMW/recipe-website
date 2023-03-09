import React from 'react'
import { render, screen } from '@testing-library/react'
import type { CardMeals } from 'types'
import CardGrid from './CardGrid'

// useFetch dynamic return value
let mockFetchedData: CardMeals | undefined = { meals: null }

// mocks all the useFetch and useGridInfo
jest.mock('hooks', () => ({
  useFetch: () => mockFetchedData,
  useGridInfo: () => ({ content: 'stuff', url: 'https://testing' })
}))

// mocks the loading and grid components
jest.mock('components', () => ({
  Loading: () => <h1>Loading</h1>,
  Grid: () => <h1>Grid</h1>
}))

it('should check component return if meals is null', () => {
  render(<CardGrid gridContent="CATEGORY" amount={10} url="https://testing" />)

  const empty = screen.getByTestId('empty')
  expect(empty).toBeInTheDocument()
})

it('should check if Grid component is rendered, when fetched data is meals is defined.', () => {
  mockFetchedData = {
    meals: [
      {
        strMeal: 'Brown Stew Chicken',
        strMealThumb:
          'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
        idMeal: '52940'
      }
    ]
  }
  render(<CardGrid gridContent="CATEGORY" amount={10} url="https://testing" />)

  const gridComponent = screen.getByRole('heading', { name: /grid/i })
  expect(gridComponent).toBeInTheDocument()
})

it('Should render the loading component if fetched data is undefined.', () => {
  mockFetchedData = undefined
  render(<CardGrid gridContent="CATEGORY" amount={10} url="https://testing" />)

  const loadingComponent = screen.getByRole('heading', { name: /loading/i })
  expect(loadingComponent).toBeInTheDocument()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MealDetail from './MealDetail'

interface IMockFetchedData {
  meals: Array<{ idMeal: string; strMeal: string }>
}
// Mock useFetch hook
let mockFetchedData: IMockFetchedData | undefined = {
  meals: [
    {
      idMeal: '52567',
      strMeal: 'Nsima'
    }
  ]
}

jest.mock('hooks', () => {
  return {
    useFetch: () => mockFetchedData
  }
})

jest.mock('components', () => ({
  MealTabs: () => <h1>Meal tabs</h1>,
  Loading: () => <h1>Loading</h1>
}))

const setMealTitleMock = jest.fn()

it('Should check if component renders correct, if meal or fetched data is defined.', () => {
  render(
    <MemoryRouter>
      <MealDetail setMealTitle={setMealTitleMock} />
    </MemoryRouter>
  )

  const image = screen.getByRole('img')
  const heading = screen.getByRole('heading', { name: /nsima/i })
  const tutorialButton = screen.getByRole('button', { name: /tutorial/i })
  const bookmarkButton = screen.getByRole('button', { name: /bookmark/i })
  const mealTabs = screen.getByRole('heading', { name: /Meal tabs/i })

  expect(image).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
  expect(tutorialButton).toBeInTheDocument()
  expect(bookmarkButton).toBeInTheDocument()
  expect(mealTabs).toBeInTheDocument()
  expect(setMealTitleMock).toBeCalled()
})

it('Should check how components render, if meal or fetched data is undefined.', () => {
  mockFetchedData = undefined
  render(
    <MemoryRouter>
      <MealDetail setMealTitle={setMealTitleMock} />
    </MemoryRouter>
  )

  const loadingComponent = screen.getByRole('heading', { name: /loading/i })
  expect(loadingComponent).toBeInTheDocument()
})

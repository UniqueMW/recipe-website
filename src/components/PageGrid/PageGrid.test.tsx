import React from 'react'
import { render, screen } from '@testing-library/react'
import PageGrid from './PageGrid'

jest.mock('components', () => ({
  Loading: () => <h1>Loading</h1>,
  Grid: () => <h1>Grid</h1>,
  Empty: () => <h1>Empty</h1>
}))

let mockedFetchedData: { meals: { strMeal: string } | null } | undefined = {
  meals: { strMeal: 'nsima' }
}

jest.mock('hooks', () => ({ useFetch: () => mockedFetchedData }))

it('Should check if component render correct if fetchedData is defined', () => {
  render(<PageGrid url="https://testing" />)

  const grid = screen.getByRole('heading', { name: /Grid/i })
  expect(grid).toBeInTheDocument()
})

it('Should check if component render correct if fetchedData is undefined', () => {
  mockedFetchedData = undefined
  render(<PageGrid url="https://testing" />)

  const loadingComponent = screen.getByRole('heading', { name: /loading/i })
  expect(loadingComponent).toBeInTheDocument()
})

it('Should check if component render correct if fetchedData is undefined', () => {
  mockedFetchedData = { meals: null }
  render(<PageGrid url="https://testing" />)

  const emptyComponent = screen.getByRole('heading', { name: /Empty/i })
  expect(emptyComponent).toBeInTheDocument()
})

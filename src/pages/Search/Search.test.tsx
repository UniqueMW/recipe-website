import * as React from 'react'
import { screen, render } from '@testing-library/react'
import Search from './Search'

jest.mock('components', () => ({
  Empty: () => <h1>Empty</h1>,
  SearchForm: () => <h1>search form</h1>,
  Grid: () => <h1>grid</h1>
}))

let mockedFetchedData: undefined | { meals: string | null } = { meals: null }

it('Should render empty component if fetchedData.meals is null', () => {
  // mocks the useState return value
  jest.spyOn(React, 'useState').mockReturnValue([mockedFetchedData, jest.fn()])

  render(<Search />)

  const emptyComponent = screen.getByRole('heading', { name: /empty/i })
  const searchForm = screen.getByRole('heading', { name: /Search form/i })
  const searchHeading = screen.getByRole('heading', {
    name: /find your next cooking recipe/i
  })

  expect(emptyComponent).toBeInTheDocument()
  expect(searchForm).toBeInTheDocument()
  expect(searchHeading).toBeInTheDocument()
})

it('Should render cooking image if fetchedData is undefined', () => {
  mockedFetchedData = undefined
  // mocks the useState return value
  jest.spyOn(React, 'useState').mockReturnValue([mockedFetchedData, jest.fn()])
  render(<Search />)

  const searchForm = screen.getByRole('heading', { name: /Search form/i })
  const searchHeading = screen.getByRole('heading', {
    name: /find your next cooking recipe/i
  })
  const cookingImage = screen.getByAltText(/cooking/i)

  expect(searchForm).toBeInTheDocument()
  expect(searchHeading).toBeInTheDocument()
  expect(cookingImage).toBeInTheDocument()
})

it('Should render grid component if fetchedData is defined.', () => {
  mockedFetchedData = { meals: 'test' }
  // mocks the useState return value
  jest.spyOn(React, 'useState').mockReturnValue([mockedFetchedData, jest.fn()])
  render(<Search />)

  const searchForm = screen.getByRole('heading', { name: /Search form/i })
  const searchHeading = screen.getByRole('heading', {
    name: /find your next cooking recipe/i
  })
  const gridComponent = screen.getByRole('heading', { name: /grid/i })

  expect(searchForm).toBeInTheDocument()
  expect(searchHeading).toBeInTheDocument()
  expect(gridComponent).toBeInTheDocument()
})

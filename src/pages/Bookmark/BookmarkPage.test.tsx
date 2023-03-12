import React from 'react'
import { render, screen } from '@testing-library/react'
import BookmarkPage from './BookmarkPage'

jest.mock('components', () => ({
  Grid: () => <h1>Grid</h1>,
  Empty: () => <h1>Empty</h1>
}))

let mockedGetItemReturnValue: string | null = JSON.stringify(['bookmark'])

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: () => mockedGetItemReturnValue }
  })
})

it('It should render grid if localStorage has content.', () => {
  render(<BookmarkPage />)

  const gridComponents = screen.getByRole('heading', { name: /grid/i })

  expect(gridComponents).toBeInTheDocument()
})

it('Should render empty Component if localStorage has no content.', () => {
  mockedGetItemReturnValue = null
  render(<BookmarkPage />)

  const emptyComponent = screen.getByRole('heading', { name: /empty/i })

  expect(emptyComponent).toBeInTheDocument()
})

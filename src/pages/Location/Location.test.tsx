import React from 'react'
import { screen, render } from '@testing-library/react'
import Location from './Location'

jest.mock('components', () => ({
  PageGrid: () => <h1>Page grid</h1>,
  Filter: () => <h1>Filter</h1>,
  SEO: () => <h1>seo</h1>
}))

it('Should render SEO,PageGrid and filter components.', () => {
  render(<Location />)

  const pageGrid = screen.getByRole('heading', { name: /page grid/i })
  const filter = screen.getByRole('heading', { name: /filter/i })
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(pageGrid).toBeInTheDocument()
  expect(filter).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

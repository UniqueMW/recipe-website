import React from 'react'
import { render, screen } from '@testing-library/react'
import Category from './Category'

jest.mock('components', () => ({
  PageGrid: () => <h1>Page Grid</h1>,
  Filter: () => <h1>Filter</h1>,
  SEO: () => <h1>seo</h1>
}))

it('Should render PageGrid,SEO and Filter Components', () => {
  render(<Category />)

  const pageGrid = screen.getByRole('heading', { name: /page grid/i })
  const filter = screen.getByRole('heading', { name: /filter/i })
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(pageGrid).toBeInTheDocument()
  expect(filter).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

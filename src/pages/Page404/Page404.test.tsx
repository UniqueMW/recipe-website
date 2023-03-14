import React from 'react'
import { render, screen } from '@testing-library/react'
import Page404 from './Page404'

jest.mock('components', () => ({
  PageNotFound: () => <h1>Page not found</h1>,
  SEO: () => <h1>seo</h1>
}))

it('Should render PageNotFound and SEO components.', () => {
  render(<Page404 />)

  const pageNotFound = screen.getByRole('heading', { name: /page not found/i })
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(pageNotFound).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

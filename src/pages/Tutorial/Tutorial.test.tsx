import React from 'react'
import { screen, render } from '@testing-library/react'
import Tutorial from './Tutorial'
jest.mock('components', () => ({
  SEO: () => <h1>seo</h1>
}))
it('Should render an iframe and SEO component.', () => {
  render(<Tutorial />)

  const iframe = screen.getByTitle(/Youtube video player/i)
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(iframe).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

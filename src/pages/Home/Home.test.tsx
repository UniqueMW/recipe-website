import React from 'react'
import { screen, render } from '@testing-library/react'
import Home from './Home'

jest.mock('components', () => ({
  CardGrid: () => <h1>Card grid</h1>,
  Hero: () => <h1>Hero</h1>,
  SEO: () => <h1>seo</h1>
}))

it('Should test if SEO,CardGrid and Hero components are rendered.', () => {
  render(<Home />)

  const cardGrid = screen.getAllByRole('heading', { name: /Card grid/ })
  const hero = screen.getByRole('heading', { name: /hero/i })
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(cardGrid.length).toBeGreaterThan(0)
  expect(hero).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

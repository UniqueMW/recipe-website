import React from 'react'
import { screen, render } from '@testing-library/react'
import Home from './Home'

let mockedCardGridValue: JSX.Element | Error = <h1>Card grid</h1>

jest.mock('components', () => ({
  CardGrid: () => mockedCardGridValue,
  ErrorFallback: () => <h1>Error fallback</h1>,
  Hero: () => <h1>Hero</h1>
}))

it('Should test if CardGrid and Hero components are rendered.', () => {
  render(<Home />)

  const cardGrid = screen.getAllByRole('heading', { name: /Card grid/ })
  const hero = screen.getByRole('heading', { name: /hero/i })

  expect(cardGrid.length).toBeGreaterThan(0)
  expect(hero).toBeInTheDocument()
})

it('Should render an error fallback, if component throws an error.', () => {
  mockedCardGridValue = Error('testing')
  render(<Home />)

  const errorFallback = screen.getAllByRole('heading', {
    name: /Error fallback/i
  })

  expect(errorFallback.length).toBeGreaterThan(0)
})

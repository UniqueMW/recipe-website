import React from 'react'
import { render, screen } from '@testing-library/react'
import Page404 from './Page404'

jest.mock('components', () => ({ PageNotFound: () => <h1>Page not found</h1> }))

it('Should render PageNotFound component.', () => {
  render(<Page404 />)

  const pageNotFound = screen.getByRole('heading', { name: /page not found/i })

  expect(pageNotFound).toBeInTheDocument()
})

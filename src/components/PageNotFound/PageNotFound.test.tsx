import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PageNotFound from './PageNotFound'

it('Should render image,h1 and button', () => {
  render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  )

  const image = screen.getByRole('img')
  const heading = screen.getByRole('heading')
  const button = screen.getByRole('button')

  expect(image).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})

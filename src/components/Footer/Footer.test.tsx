import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Footer from './Footer'

it('Should render the component correctly', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  )

  const links = screen.getAllByRole('link')
  const copyright = screen.getByRole('heading', {
    name: /UniqueMW Malawi. All rights reserved/i
  })

  expect(links.length).toBe(5)
  expect(copyright).toBeInTheDocument()
})

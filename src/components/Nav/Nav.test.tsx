import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Nav from './Nav'

it('Should check if all links are rendered.', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  )

  // gets all links based on accessible name.
  const home = screen.getByRole('link', { name: /uniquemw/i })
  const category = screen.getByRole('link', { name: /category/i })
  const ingredients = screen.getByRole('link', { name: /ingredients/i })
  const location = screen.getByRole('link', { name: /location/i })
  const search = screen.getByTestId(/search/i)
  const bookmark = screen.getByTestId(/bookmark/i)

  // get all links in nav component
  const links = screen.getAllByRole('link')

  // individual assertion for each link.
  expect(home).toBeInTheDocument()
  expect(category).toBeInTheDocument()
  expect(ingredients).toBeInTheDocument()
  expect(location).toBeInTheDocument()
  expect(search).toBeInTheDocument()
  expect(bookmark).toBeInTheDocument()

  // assertion for the number of links present.
  expect(links).toHaveLength(8)
})

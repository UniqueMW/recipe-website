import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import MobileNav from './MobileNav'

const showMenuSpy = jest.fn()

function renderComponent(): void {
  render(
    <MemoryRouter>
      <MobileNav setShowMenu={showMenuSpy} />
    </MemoryRouter>
  )
}

it('Should check if Mobile nav is rendered correctly.', () => {
  renderComponent()
  const hamburgerButton = screen.getByRole('button')
  const links = screen.getAllByRole('link')
  const search = screen.getByTestId(/search/i)
  const bookmark = screen.getByTestId(/bookmark/i)
  const home = screen.getByRole('link', { name: /uniquemw/i })

  user.click(hamburgerButton)

  expect(hamburgerButton).toBeInTheDocument()
  expect(search).toBeInTheDocument()
  expect(bookmark).toBeInTheDocument()
  expect(home).toBeInTheDocument()
  expect(links).toHaveLength(3)
})

it('Should check if showMenu is called, with proper arguments.', (): void => {
  renderComponent()

  const hamburgerButton = screen.getByRole('button')
  user.click(hamburgerButton)

  expect(showMenuSpy).toBeCalledWith(true)
})

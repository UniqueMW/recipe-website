import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import SideMenu from './SideMenu'

// let showMenu = true
const setShowMenuSpy = jest.fn()

function renderComponent(): void {
  render(
    <MemoryRouter>
      <SideMenu setShowMenu={setShowMenuSpy} refs={null} />
    </MemoryRouter>
  )
}
it('Should render SideMenu.', () => {
  renderComponent()

  const home = screen.getByRole('link', { name: /uniquemw/i })
  const category = screen.getByRole('link', { name: /category/i })
  const ingredients = screen.getByRole('link', { name: /ingredients/i })
  const location = screen.getByRole('link', { name: /location/i })
  const links = screen.getAllByRole('link')

  expect(home).toBeInTheDocument()
  expect(category).toBeInTheDocument()
  expect(ingredients).toBeInTheDocument()
  expect(location).toBeInTheDocument()

  expect(links).toHaveLength(6)
})

it('Should check if showMenu state is working.', () => {
  renderComponent()

  const hideMenu = screen.getByTestId('hidemenu')
  user.click(hideMenu)

  expect(hideMenu).toBeInTheDocument()
  // expect(showMenu).toBe(false)
  expect(setShowMenuSpy).toBeCalledWith(false)
})

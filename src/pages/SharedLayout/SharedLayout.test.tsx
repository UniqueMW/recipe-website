import * as React from 'react'
import { render, screen } from '@testing-library/react'
import SharedLayout from './SharedLayout'

// mock Outlet from react-router dom
jest.mock('react-router-dom', () => ({ Outlet: () => <h1>Outlet</h1> }))

// mock components
jest.mock('components', () => ({
  Nav: () => <h1>nav pc</h1>,
  Footer: () => <h1>Footer</h1>,
  MobileNav: () => <h1>Mobile nav</h1>,
  SideMenu: () => <h1>Side Menu</h1>,
  ScrollToTop: () => <h1>Scroll to top</h1>
}))

// mock gsap library
jest.mock('gsap')

it('Should render all the components.', () => {
  jest.spyOn(React, 'useRef').mockImplementation(() => ({ current: 'test' }))
  render(<SharedLayout />)

  const navComponent = screen.getByRole('heading', { name: /nav pc/i })
  const footerComponent = screen.getByRole('heading', { name: /footer/i })
  const mobileNavComponent = screen.getByRole('heading', {
    name: /mobile nav/i
  })
  const sideMenuComponent = screen.getByRole('heading', { name: /side menu/i })
  const outlet = screen.getByRole('heading', { name: /outlet/i })
  const scrollToTop = screen.getByRole('heading', { name: /scroll to top/i })

  expect(navComponent).toBeInTheDocument()
  expect(footerComponent).toBeInTheDocument()
  expect(mobileNavComponent).toBeInTheDocument()
  expect(sideMenuComponent).toBeInTheDocument()
  expect(outlet).toBeInTheDocument()
  expect(scrollToTop).toBeInTheDocument()
})

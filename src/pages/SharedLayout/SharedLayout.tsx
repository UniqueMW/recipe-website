import * as React from 'react'
import { Nav, MobileNav, SideMenu } from 'components'
import { Outlet } from 'react-router-dom'

function SharedLayout(): JSX.Element {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <>
      <Nav />
      <MobileNav setShowMenu={setShowMenu} />
      <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Outlet />
    </>
  )
}

export default SharedLayout

import * as React from 'react'
import { Nav, MobileNav, SideMenu } from 'components'
import { Outlet } from 'react-router-dom'
import { gsap } from 'gsap'

function SharedLayout(): JSX.Element {
  const sideMenuRef = React.useRef<HTMLDivElement>(null)
  const [showMenu, setShowMenu] = React.useState(false)

  // Responsible for sideMenu slideIn and slideOut animations, using GSAP.
  React.useEffect(() => {
    if (typeof sideMenuRef.current !== 'undefined' && showMenu) {
      gsap.to(sideMenuRef.current, { x: '0', duration: 0.3 })
    } else if (typeof sideMenuRef.current !== 'undefined' && !showMenu) {
      gsap.to(sideMenuRef.current, { x: '-100vw', duration: 0.2 })
    }
  }, [showMenu])

  return (
    <>
      <Nav />
      <MobileNav setShowMenu={setShowMenu} />
      <SideMenu ref={sideMenuRef} setShowMenu={setShowMenu} />
      <Outlet />
    </>
  )
}

export default SharedLayout

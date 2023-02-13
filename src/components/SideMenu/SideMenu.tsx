import * as React from 'react'
import { Link } from 'react-router-dom'
import { Tween } from 'react-gsap'
import { gsap } from 'gsap'

// TODO implement side menu animations with GSAP.
interface sideMenuProps {
  showMenu: boolean
  setShowMenu: (check: boolean) => void
}

function SideMenu(props: sideMenuProps): JSX.Element {
  const sideMenuRef = React.useRef() as React.RefObject<HTMLDivElement>
  const handleHideMenu = (): void => {
    gsap.to(sideMenuRef.current, { x: '-100vw', duration: 5 })
    props.setShowMenu(false)
  }

  if (props.showMenu) {
    return (
      <Tween from={{ x: '-100vw' }} duration={0.2} to={{ x: '0px' }}>
        <div
          ref={sideMenuRef}
          className="flex flex-row fixed inset-0 md:hidden side"
        >
          <section className="flex flex-col space-y-10 bg-primary text-lg font-sans px-4 shadow-md min-h-screen min-w-[60vw]  py-4">
            <Link to="/" className="text-xl font-bold tracking-wider">
              UniqueMW
            </Link>
            <div className="flex flex-col space-y-4">
              <Link to="/category">Category</Link>
              <Link to="/location">Location</Link>
              <Link to="/ingredients">Ingredients</Link>
            </div>
          </section>

          <section
            className="min-w-[40vw] bg-[#d3d3d3] opacity-10"
            onClick={handleHideMenu}
            data-testid="hidemenu"
          />
        </div>
      </Tween>
    )
  } else {
    return <div className="hidden" />
  }
}

export default SideMenu

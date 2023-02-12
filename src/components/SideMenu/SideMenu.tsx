import React from 'react'
import { Link } from 'react-router-dom'

// TODO implement side menu animations with GSAP.
interface sideMenuProps {
  showMenu: boolean
  setShowMenu: (check: boolean) => void
}

function SideMenu(props: sideMenuProps): JSX.Element {
  const handleHideMenu = (): void => {
    props.setShowMenu(false)
  }

  if (props.showMenu) {
    return (
      <div className="flex flex-row fixed inset-0 md:hidden">
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
          className="min-w-[40vw] bg-[#d3d3d3] opacity-20"
          onClick={handleHideMenu}
          data-testid="hidemenu"
        />
      </div>
    )
  } else {
    return <div className="hidden" />
  }
}

export default SideMenu

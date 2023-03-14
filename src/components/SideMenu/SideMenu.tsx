import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
interface sideMenuProps {
  setShowMenu: (check: boolean) => void
  refs: React.RefObject<HTMLDivElement> | null
}

function SideMenu(props: sideMenuProps): JSX.Element {
  const { pathname } = useLocation()
  const handleHideMenu = (): void => {
    props.setShowMenu(false)
  }
  return (
    <div
      className="flex flex-row fixed inset-0 lg:hidden side z-20"
      ref={props.refs}
    >
      <section className="flex flex-col space-y-10 bg-primary text-lg font-sans px-4 shadow-md min-h-screen min-w-[60vw]  py-4">
        <div className="flex flex-row justify-between">
          <Link to="/" className="text-xl font-bold tracking-wider ">
            UniqueMW
          </Link>
          <button onClick={handleHideMenu} className="text-xl font-bold">
            <RxCross2 />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className={`${pathname === '/' ? 'text-action' : 'text-black'}`}
          >
            Home
          </Link>
          <Link
            to="/category"
            className={`${
              pathname === '/category' ? 'text-action' : 'text-black'
            }`}
          >
            Category
          </Link>
          <Link
            to="/location"
            className={`${
              pathname === '/location' ? 'text-action' : 'text-black'
            }`}
          >
            Location
          </Link>
          <Link
            to="/ingredients"
            className={`${
              pathname === '/ingredients' ? 'text-action' : 'text-black'
            }`}
          >
            Ingredients
          </Link>
          <Link
            to="/contact"
            className={`${
              pathname === '/contact' ? 'text-action' : 'text-black'
            }`}
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section
        className="min-w-[40vw] bg-[#d3d3d3] opacity-5"
        onClick={handleHideMenu}
        data-testid="hidemenu"
      />
    </div>
  )
}

export default SideMenu

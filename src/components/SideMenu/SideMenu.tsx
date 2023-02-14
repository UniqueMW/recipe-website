import * as React from 'react'
import { Link } from 'react-router-dom'
interface sideMenuProps {
  setShowMenu: (check: boolean) => void
}

const SideMenu = React.forwardRef<HTMLDivElement, sideMenuProps>(function (
  props: sideMenuProps,
  ref
) {
  const handleHideMenu = (): void => {
    props.setShowMenu(false)
  }
  return (
    <div className="flex flex-row fixed inset-0 md:hidden side" ref={ref}>
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
        className="min-w-[40vw] bg-[#d3d3d3] opacity-5"
        onClick={handleHideMenu}
        data-testid="hidemenu"
      />
    </div>
  )
})

SideMenu.displayName = 'SideMenu'

export default SideMenu

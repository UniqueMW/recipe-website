import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaRegBookmark } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
interface MobileNavProps {
  setShowMenu: (check: boolean) => void
}
function MobileNav(props: MobileNavProps): JSX.Element {
  const handleDisplayMenu = (): void => {
    props.setShowMenu(true)
  }

  return (
    <nav className="flex flex-row justify-between content-center py-4 px-2 shadow-md font-sans text-lg lg:hidden w-full fixed bg-primary z-10 top-0 left-0">
      <button className="text-lg" onClick={handleDisplayMenu}>
        <GiHamburgerMenu />
      </button>

      <Link to="/" className="text-lg font-bold tracking-wide">
        UniqueMW
      </Link>

      <section className="flex flex-row space-x-6 content-center text-lg">
        <Link to="/bookmark" data-testid="bookmark">
          <FaRegBookmark />
        </Link>
        <Link to="/search" data-testid="search">
          <FaSearch className="text-xl" />
        </Link>
      </section>
    </nav>
  )
}

export default MobileNav

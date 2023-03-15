import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaSearch, FaRegBookmark } from 'react-icons/fa'

function Nav(): JSX.Element {
  const { pathname } = useLocation()
  return (
    <nav className="bg-primary lg:flex flex-row py-4 px-20 text-lg font-normal justify-between shadow-sm content-center hidden fixed min-w-full z-10 top-0 right-0">
      <Link to="/" className="md:text-2xl text-xl font-bold tracking-wider">
        UniqueMW
      </Link>

      <section className="flex flex-row space-x-10 content-center">
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
      </section>

      <section className="flex flex-row space-x-6 content-center">
        <Link
          to="/bookmark"
          data-testid="bookmark"
          className={`${
            pathname === '/bookmark' ? 'text-action' : 'text-black'
          }`}
        >
          <FaRegBookmark />
        </Link>
        <Link
          to="/search"
          data-testid="search"
          className={`${pathname === '/search' ? 'text-action' : 'text-black'}`}
        >
          <FaSearch />
        </Link>
      </section>
    </nav>
  )
}

export default Nav

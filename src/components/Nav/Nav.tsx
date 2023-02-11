import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaRegBookmark } from 'react-icons/fa'

function Nav(): JSX.Element {
  return (
    <nav className="bg-primary flex flex-row py-4 px-20 text-lg justify-between shadow-sm content-center">
      <Link to="/" className="text-xl font-bold tracking-wider">
        UniqueMW
      </Link>

      <section className="flex flex-row space-x-10 content-center">
        <Link to="/category">Category</Link>
        <Link to="/location">Location</Link>
        <Link to="/ingredients">Ingredients</Link>
      </section>

      <section className="flex flex-row space-x-6 content-center">
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

export default Nav

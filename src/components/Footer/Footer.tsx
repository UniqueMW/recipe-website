import * as React from 'react'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className="px-2 md:px-12 font-sans flex md:flex-row flex-col bg-primary shadow-md py-6 border static left-0 bottom-0 w-full">
      <Link
        to="/"
        className="md:text-2xl text-lg font-semibold tracking-widest text-center"
      >
        UniqueMW
      </Link>
      <div className="flex flex-col justify-center space-y-4 w-full md:mt-0 mt-2">
        <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
          <section className="flex flex-row w-full justify-center md:text-xl text-base font-sans space-x-10 items-center md:ml-10">
            <Link to="about">About Me</Link>
            <Link to="contact">Contact Me</Link>
            <Link to="privacy">Privacy policy</Link>
          </section>
          <section className="flex flex-row md:justify-between justify-center text-xl font-sans space-x-4">
            <a
              href="https://github.com/UniqueMW"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://twitter.com/UniqueMW265"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </section>
        </div>
        <h2 className="flex flex-row text-center font-sans md:text-lg text-base items-center justify-center space-x-2 tracking-wider">
          <BiCopyright />
          {`${year} UniqueMW Malawi. All rights reserved.`}
        </h2>
      </div>
    </footer>
  )
}

export default Footer

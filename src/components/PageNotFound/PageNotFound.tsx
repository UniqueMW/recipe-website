import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackFill } from 'react-icons/ri'
import Image404 from 'assets/Image404.svg'

function PageNotFound(): JSX.Element {
  const navigate = useNavigate()
  const handleGoingBack = (): void => {
    navigate('/')
  }

  return (
    <section className="md:px-12 px-2 flex flex-col justify-center items-center py-20 space-y-6">
      <img
        src={Image404}
        alt="Page not found"
        className="md:max-w-sm max-w-[15rem]"
      />
      <h1 className="md:text-2xl text-lg tracking-wider font-sans font-semibold text-center">
        We couldn&#39;t find the page you were looking for....
      </h1>
      <button
        className="py-3 2xl:px-16 md:px-8 px-3 bg-action text-base md:text-lg text-primary shadow-md tracking-wider flex flex-row items-center min-w-fit"
        onClick={handleGoingBack}
      >
        <RiArrowGoBackFill className="mr-2" />
        Back Home
      </button>
    </section>
  )
}

export default PageNotFound

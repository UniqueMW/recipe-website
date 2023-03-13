import React from 'react'
import { IoMdRefresh } from 'react-icons/io'
import { GoReport } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import errorImage from 'assets/fatalerror.svg'
import type { FallbackProps } from 'react-error-boundary'

function ErrorFallback({ resetErrorBoundary }: FallbackProps): JSX.Element {
  const navigate = useNavigate()

  const handleReport = (): void => {
    navigate('contact')
  }
  const handleTryAgain = (): void => {
    resetErrorBoundary()
  }

  return (
    <section className=" space-y-4 px-2 md:px-12 mt-4">
      <section className="flex flex-col items-center justify-between py-8 space-y-4 border">
        <img src={errorImage} alt="Error" className="md:max-w-xl" />
        <h1 className="lg:text-xl text-base font-sans tracking-wider text-center md:max-w-2xl">
          Something Went Wrong, Make sure you have an internet connection or
          click try again. If the error continues please report it.
        </h1>

        <section className=" flex flex-row md:space-x-10 space-x-6">
          <button
            onClick={handleTryAgain}
            className="py-3 2xl:px-16 md:px-8 px-3 bg-action text-base md:text-lg text-primary shadow-md tracking-wider flex flex-row items-center min-w-fit"
          >
            <IoMdRefresh className="mr-2" />
            Try Again
          </button>
          <button
            onClick={handleReport}
            className="border-2 border-action 2xl:px-16 md:px-8 px-2 shadow-sm py-3 text-base md:text-lg tracking-wider flex flex-row items-center min-w-fit"
          >
            <GoReport className="mr-2" />
            Report
          </button>
        </section>
      </section>
    </section>
  )
}

export default ErrorFallback

import React from 'react'
import { IoMdRefresh } from 'react-icons/io'
import errorImage from 'assets/error-svgrepo-com.svg'
import type { FallbackProps } from 'react-error-boundary'
// TODO finish the component.
function ErrorFallback({ resetErrorBoundary }: FallbackProps): JSX.Element {
  return (
    <section className="flex flex-col items-center justify-between space-y-4 py-4">
      <img src={errorImage} alt="Error" className="lg:max-w-sm max-w-xs" />
      <h1 className="lg:text-2xl text-lg text-red-700 font-sans font-semibold">
        Ooops Something Went Wrong. Please click refresh.
      </h1>
      <button
        onClick={() => {
          resetErrorBoundary()
        }}
      >
        <IoMdRefresh className="lg:text-6xl text-3xl font-sans font-semibold text-action" />
      </button>
    </section>
  )
}

export default ErrorFallback

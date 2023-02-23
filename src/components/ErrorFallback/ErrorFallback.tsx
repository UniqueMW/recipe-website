import React from 'react'
import { IoMdRefresh } from 'react-icons/io'
import errorImage from 'assets/error.svg'
import type { FallbackProps } from 'react-error-boundary'
// TODO finish the component.
function ErrorFallback({ resetErrorBoundary }: FallbackProps): JSX.Element {
  return (
    <section className=" space-y-4 px-2 md:px-12 mt-4">
      <section className="flex flex-col items-center justify-between py-4 border">
        <img
          src={errorImage}
          alt="Error"
          className="max-w-[40%] md:max-w-[20%]"
        />
        <h1 className="lg:text-xl text-base text-red-700 font-sans font-semibold text-center">
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
    </section>
  )
}

export default ErrorFallback

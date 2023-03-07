import React from 'react'
import ClockLoader from 'react-spinners/ClockLoader'

function Loading(): JSX.Element {
  return (
    <section className="flex py-40 items-center justify-center">
      <ClockLoader size={70} color="blue" />
    </section>
  )
}

export default Loading

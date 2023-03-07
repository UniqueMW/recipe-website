import React from 'react'
import emptyPlate from 'assets/cutlery13.jpg'

function Empty(): JSX.Element {
  return (
    <section className="flex flex-col justify-center items-center min-w-full">
      <img src={emptyPlate} className="max-w-lg" />
    </section>
  )
}

export default Empty

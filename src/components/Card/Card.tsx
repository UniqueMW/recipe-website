import React from 'react'
import { Link } from 'react-router-dom'
import { handleBrokenImage } from 'utils'

interface CardProps {
  mealId: string
  meal: string
  img: string
}

function Card(props: CardProps): JSX.Element {
  return (
    <Link
      to={`/meal/:${props.mealId}`}
      className="space-y-3 border border-gray-500 min-h-full shadow-sm"
    >
      <section className="flex flex-col ">
        <img
          src={props.img}
          alt={props.meal}
          onError={handleBrokenImage}
          title={props.meal}
        />
        <h1 className="md:text-lg text-base tracking-wider font-sans px-1">
          {props.meal}
        </h1>
      </section>
    </Link>
  )
}

export default Card

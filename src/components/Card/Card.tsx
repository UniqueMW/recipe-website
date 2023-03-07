import React from 'react'
import { Link } from 'react-router-dom'
import handleBrokenImage from 'utils/handleBrokenImage/handleBrokenImage'

interface CardProps {
  mealId: string
  meal: string
  img: string
}

function Card(props: CardProps): JSX.Element {
  return (
    <Link
      to={`/meal/:${props.mealId}`}
      className="space-y-3 border border-gray-500 min-h-full"
    >
      <section className="flex flex-col ">
        <img src={props.img} alt={props.meal} onError={handleBrokenImage} />
        <h2 className="text-lg font-medium font-sans px-1">{props.meal}</h2>
      </section>
    </Link>
  )
}

export default Card

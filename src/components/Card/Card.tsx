import React from 'react'

interface CardProps {
  mealId: string
  meal: string
  img: string
}

function Card(props: CardProps): JSX.Element {
  return (
    <section className="flex flex-col max-w-fit space-y-3 border border-gray-500 min-w-full ">
      <img src={props.img} alt={props.meal} />
      <h2 className="text-lg font-medium font-sans px-1">{props.meal}</h2>
    </section>
  )
}

export default Card

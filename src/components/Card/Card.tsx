import React from 'react'

interface CardProps {
  mealId: string
  meal: string
  img: string
}

function Card(props: CardProps): JSX.Element {
  return (
    <section className="flex flex-col max-w-fit space-y-3 border border-neutral-300">
      <img src={props.img} alt={props.meal} />
      <h2 className="text-base font-medium font-sans">{props.meal}</h2>
    </section>
  )
}

export default Card

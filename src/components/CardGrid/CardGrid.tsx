import Card from 'components/Card/Card'
import * as React from 'react'
import * as _ from 'lodash'
import { useFetch, useGridInfo } from 'hooks'

import type { CardMeals } from 'types'

interface CardGridProps {
  gridContent: string
  url: string
  amount: number
}

// TODO handle fetched data if it returns {meals:null} eg Black Beans for ingredients.

const CardGrid = React.memo(function (props: CardGridProps): JSX.Element {
  // generate random data and url for cardGrid based on category,ingredient and location
  const gridInfo = useGridInfo(props.gridContent, props.url)

  // Fetch data to be rendered, from an api.
  const fetchedData = useFetch<CardMeals>(gridInfo.url)

  if (typeof fetchedData !== 'undefined') {
    // takes the first specified amount from fetched data array.
    const dataArr = _.take(fetchedData.meals, props.amount)

    // generate an array of cards.
    const cards = dataArr.map((meal) => (
      <Card
        key={meal.idMeal}
        meal={meal.strMeal}
        img={meal.strMealThumb}
        mealId={meal.idMeal}
      />
    ))

    // display the whole grid as required.
    return (
      <section className="flex flex-col md:px-10 px-2 space-y-4 mb-4 text-base md:text-xl font-sans font-normal md:font-normal tracking-wide">
        <h1 className="mt-10 text-xl md:text-2xl font-sans font-semibold border-b-2">
          {gridInfo.content}
        </h1>
        <section className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 grid-flow-row gap-4">
          {cards}
        </section>
      </section>
    )
  } else {
    // handle the loading state of the component.
    return <h1>Loading....</h1>
  }
})

CardGrid.displayName = 'CardGrid'

export default CardGrid

import * as React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import Card from 'components/Card/Card'
import { useFetch } from 'hooks'
import type { CardMeals } from 'types'

// TODO add loading and null feature
interface IPageGridProps {
  url: string
}

// TODO handle null meals
function PageGrid(props: IPageGridProps): JSX.Element {
  const fetchedData = useFetch<CardMeals>(props.url)

  if (typeof fetchedData !== 'undefined') {
    if (fetchedData.meals === null) {
      return <h1 className="text-5xl">Empty</h1>
    }
    // takes the first specified amount from fetched data array.
    // generate an array of cards.
    const cards = fetchedData.meals.map((meal) => (
      <ErrorBoundary FallbackComponent={ErrorFallback} key={meal.idMeal}>
        <Card
          meal={meal.strMeal}
          img={meal.strMealThumb}
          mealId={meal.idMeal}
        />
      </ErrorBoundary>
    ))

    // display the whole grid as required.
    return (
      <section className="flex flex-col md:px-10 px-2 space-y-4 mb-4 text-base md:text-xl font-sans font-normal md:font-normal tracking-wide">
        <section className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 grid-flow-row gap-4">
          {cards}
        </section>
      </section>
    )
  } else {
    // handle the loading state of the component.
    return <h1>Loading....</h1>
  }
}

export default PageGrid

import * as React from 'react'
import _ from 'lodash'
import { ErrorBoundary } from 'react-error-boundary'
import { Card, ErrorFallback } from 'components'
import type { CardMeal } from 'types'

interface GridProps {
  gridContent: string
  amount: number
  fetchedData: CardMeal[]
}

function Grid(props: GridProps): JSX.Element {
  const dataArr = React.useMemo(() => {
    return _.take(props.fetchedData, props.amount)
  }, [props.amount, props.fetchedData])

  // takes the first specified amount from fetched data array.
  // generate an array of cards.
  const cards = React.useMemo(
    () =>
      dataArr.map((meal) => (
        <ErrorBoundary FallbackComponent={ErrorFallback} key={meal.idMeal}>
          <Card
            meal={meal.strMeal}
            img={meal.strMealThumb}
            mealId={meal.idMeal}
          />
        </ErrorBoundary>
      )),
    [dataArr]
  )

  // display the whole grid as required.
  console.group()
  console.log('%c Heading:%o', 'color:red;', props.gridContent)
  console.log('%c Data:%o', 'color:blue;', dataArr)
  console.log('%c FetchedData', 'color:pink;', props.fetchedData)
  console.groupEnd()
  if (cards.length > 0 && props.fetchedData.length > 0) {
    return (
      <section className="flex flex-col md:px-10 px-2 space-y-4 mb-4 text-base md:text-xl font-sans font-normal md:font-normal tracking-wide">
        {props.gridContent.length > 0 ? (
          <h1 className="mt-10 text-xl md:text-2xl font-sans font-semibold border-b border-b-gray-500">
            {props.gridContent}
          </h1>
        ) : (
          <h1></h1>
        )}
        <section className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 grid-flow-row gap-4">
          {cards}
        </section>
      </section>
    )
  }

  return <h1></h1>
}

export default Grid

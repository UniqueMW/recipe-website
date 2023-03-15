import * as React from 'react'
import { useFetch, useGridInfo } from 'hooks'

import type { CardMeals, CardMeal } from 'types'
import { Grid, Loading } from 'components'
interface CardGridProps {
  gridContent: 'CATEGORY' | 'LOCATION' | 'INGREDIENT'
  url: string
  amount: number
}

const CardGrid = function (props: CardGridProps): JSX.Element {
  const [meals, setMeal] = React.useState<CardMeal[] | null>()
  // generate random data and url for cardGrid based on category,ingredient and location
  const gridInfo = useGridInfo(props.gridContent, props.url)

  // Fetch data to be rendered, from an api.
  const fetchedData = useFetch<CardMeals>(gridInfo.url)

  React.useEffect(() => {
    if (typeof fetchedData !== 'undefined') {
      setMeal(fetchedData.meals)
    }
  }, [fetchedData])

  console.log('%c CardGrid meals', 'color:green;', meals)
  console.log('%c CardGrid gridInfo', 'color:yellow;', gridInfo)

  if (meals === null) {
    // return this component if meals is null or doesn't exist on the server
    return <div data-testid="empty">{null}</div>
  } else if (typeof meals !== 'undefined') {
    return (
      <Grid
        fetchedData={meals}
        amount={props.amount}
        gridContent={gridInfo.content}
      />
    )
  } else {
    return <Loading />
  }
}

export default CardGrid

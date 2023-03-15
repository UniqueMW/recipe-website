import * as React from 'react'
import { useFetch, useGridInfo } from 'hooks'

import type { CardMeals } from 'types'
import { Grid, Loading } from 'components'
interface CardGridProps {
  gridContent: 'CATEGORY' | 'LOCATION' | 'INGREDIENT'
  url: string
  amount: number
}

const CardGrid = function (props: CardGridProps): JSX.Element {
  // generate random data and url for cardGrid based on category,ingredient and location
  const gridInfo = useGridInfo(props.gridContent, props.url)

  // Fetch data to be rendered, from an api.
  const url = typeof gridInfo !== 'undefined' ? gridInfo.url : undefined
  const fetchedData = useFetch<CardMeals>(url)

  if (fetchedData?.meals === null) {
    // return this component if meals is null or doesn't exist on the server
    return <div data-testid="empty">{null}</div>
  } else if (
    typeof fetchedData !== 'undefined' &&
    typeof gridInfo !== 'undefined'
  ) {
    return (
      <Grid
        fetchedData={fetchedData.meals}
        amount={props.amount}
        gridContent={gridInfo.content}
      />
    )
  } else {
    return <Loading />
  }
}

export default CardGrid

import * as React from 'react'
import { useFetch, useGridInfo } from 'hooks'

import type { CardMeals } from 'types'
import Grid from 'components/Grid/Grid'

interface CardGridProps {
  gridContent: 'CATEGORY' | 'LOCATION' | 'INGREDIENT'
  url: string
  amount: number
}

// TODO handle fetched data if it returns {meals:null} eg Black Beans and Borlotti Beans for ingredients.
// TODO handle image fallback if image is not available.

/**
 * Problem: make component reusable in many scenario
 * Solution: use prop url if amount is 0
 */

const CardGrid = React.memo(function (props: CardGridProps): JSX.Element {
  // generate random data and url for cardGrid based on category,ingredient and location
  const gridInfo = useGridInfo(props.gridContent, props.url)

  // Fetch data to be rendered, from an api.
  const fetchedData = useFetch<CardMeals>(gridInfo.url)

  if (typeof fetchedData !== 'undefined') {
    return (
      <Grid
        fetchedData={fetchedData?.meals}
        amount={props.amount}
        gridContent={gridInfo.content}
      />
    )
  } else {
    return <h1>Loading......</h1>
  }
})

CardGrid.displayName = 'CardGrid'

export default CardGrid

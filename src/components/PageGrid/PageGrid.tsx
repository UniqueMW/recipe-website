import * as React from 'react'
import { useFetch } from 'hooks'
import type { CardMeals } from 'types'
import Grid from 'components/Grid/Grid'
import Empty from 'components/Empty/Empty'

// TODO add loading and null feature
interface IPageGridProps {
  url: string
}

function PageGrid(props: IPageGridProps): JSX.Element {
  const fetchedData = useFetch<CardMeals>(props.url)

  if (typeof fetchedData !== 'undefined') {
    if (fetchedData.meals === null) {
      return <Empty />
    }
    return (
      <Grid
        gridContent={''}
        fetchedData={fetchedData.meals}
        amount={fetchedData.meals.length}
      />
    )
  } else {
    // handle the loading state of the component.
    return <h1>Loading....</h1>
  }
}

export default PageGrid

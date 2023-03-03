import * as React from 'react'
import { useFetch } from 'hooks'
import type { CardMeals } from 'types'
import Grid from 'components/Grid/Grid'

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

import * as React from 'react'
import { useFetch } from 'hooks'
import type { CardMeals } from 'types'
import { Loading, Grid, Empty } from 'components'

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
    return <Loading />
  }
}

export default PageGrid

import { Filter, PageGrid } from 'components'
import React from 'react'

function Category(): JSX.Element {
  const categoryUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
  return (
    <>
      <Filter />
      <PageGrid url={categoryUrl} />
    </>
  )
}

export default Category

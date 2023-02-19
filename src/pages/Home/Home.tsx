import React from 'react'
import { CardGrid, Hero } from 'components'
// import { useGridInfo } from 'hooks'

// TODO add unit test
// TODO placeholder loading
// TODO add some error boundary
// TODO Optimize and test all components before adding a new feature.

function Home(): JSX.Element {
  const categoryListUrl =
    'https:www.themealdb.com/api/json/v1/1/list.php?c=list'

  const locationListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

  const ingredientListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  return (
    <>
      <Hero />
      <CardGrid gridContent="CATEGORY" url={categoryListUrl} amount={10} />
      <CardGrid gridContent="LOCATION" url={locationListUrl} amount={10} />
      <CardGrid gridContent="INGREDIENT" url={ingredientListUrl} amount={10} />
    </>
  )
}

export default Home

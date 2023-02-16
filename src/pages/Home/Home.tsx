import React from 'react'
import { CardGrid, Hero } from 'components'

// TODO make grid content selection random
// TODO add unit test
// TODO placeholder loading
// TODO add some error boundary
// TODO Optimize and test all components before adding a new feature.

function Home(): JSX.Element {
  const categoryUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

  const locationUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'

  const ingredientUrl =
    'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'

  return (
    <>
      <Hero />
      <CardGrid gridContent="Sea Food" url={categoryUrl} amount={10} />
      <CardGrid gridContent="Canadian" url={locationUrl} amount={10} />
      <CardGrid
        gridContent="Made With Chicken Breast"
        url={ingredientUrl}
        amount={10}
      />
    </>
  )
}

export default Home

import React from 'react'
import { CardGrid, Hero } from 'components'
import { useGridInfo } from 'hooks'

// TODO make use useGridInfo inside cardGrid
// TODO add unit test
// TODO placeholder loading
// TODO add some error boundary
// TODO Optimize and test all components before adding a new feature.

function Home(): JSX.Element {
  // const categoryUrl =
  //   'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

  const categoryListUrl =
    'https:www.themealdb.com/api/json/v1/1/list.php?c=list'

  const locationListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

  const ingredientListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  // TODO optimise with useMemo
  const categoryInfo = useGridInfo('CATEGORY', categoryListUrl)
  const locationInfo = useGridInfo('LOCATION', locationListUrl)
  const ingredientInfo = useGridInfo('INGREDIENT', ingredientListUrl)

  console.log({ categoryInfo, locationInfo, ingredientInfo })

  return (
    <>
      <Hero />
      <CardGrid
        gridContent={categoryInfo.content}
        url={categoryInfo.url}
        amount={10}
      />
      <CardGrid
        gridContent={locationInfo.content}
        url={locationInfo.url}
        amount={10}
      />
      <CardGrid
        gridContent={ingredientInfo.content}
        url={ingredientInfo.url}
        amount={10}
      />
    </>
  )
}

export default Home

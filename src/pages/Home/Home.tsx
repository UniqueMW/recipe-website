import React from 'react'
import { CardGrid, ErrorFallback, Hero, SEO } from 'components'
import { ErrorBoundary } from 'react-error-boundary'
// import { useGridInfo } from 'hooks'

function Home(): JSX.Element {
  const categoryListUrl =
    'https:www.themealdb.com/api/json/v1/1/list.php?c=list'

  const locationListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'

  const ingredientListUrl =
    'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  return (
    <>
      <SEO
        title="UniqueMW Recipes"
        description="Explore and learn how to cook food based on different recipes a cross the world."
      />
      <section className="min-h-[100vh]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CardGrid gridContent="CATEGORY" url={categoryListUrl} amount={10} />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CardGrid gridContent="LOCATION" url={locationListUrl} amount={10} />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CardGrid
            gridContent="INGREDIENT"
            url={ingredientListUrl}
            amount={10}
          />
        </ErrorBoundary>
      </section>
    </>
  )
}

export default Home

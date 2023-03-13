import * as React from 'react'
import { Grid, Empty, ErrorFallback } from 'components'
import { ErrorBoundary } from 'react-error-boundary'
import type { CardMeal } from 'types'

function BookmarkPage(): JSX.Element {
  const [bookmarkedMeals, setBookmarkedMeal] = React.useState<CardMeal[]>()

  React.useEffect(() => {
    const meals = localStorage.getItem('uniqueMW_recipe_bookmark')
    console.log(meals)
    if (typeof meals === 'string') {
      setBookmarkedMeal(JSON.parse(meals))
    }
  }, [])

  if (typeof bookmarkedMeals !== 'undefined' && bookmarkedMeals.length > 0) {
    return (
      <section className="py-10 min-h-[100vh]">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Grid
            gridContent="Bookmarked"
            amount={bookmarkedMeals.length}
            fetchedData={bookmarkedMeals}
          />
        </ErrorBoundary>
      </section>
    )
  }
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center">
      <Empty />
    </section>
  )
}

export default BookmarkPage

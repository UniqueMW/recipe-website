import * as React from 'react'
import { Grid } from 'components'
import type { CardMeal } from 'types'

function BookmarkPage(): JSX.Element {
  const [bookmarkedMeals, setBookmarkedMeal] = React.useState<CardMeal[]>()
  React.useEffect(() => {
    const meals = localStorage.getItem('uniqueMW_recipe_bookmark')
    if (typeof meals === 'string') {
      setBookmarkedMeal(JSON.parse(meals))
    }
  }, [])
  if (typeof bookmarkedMeals !== 'undefined' && bookmarkedMeals.length > 0) {
    return (
      <section className="py-10">
        <Grid
          gridContent="Bookmarked"
          amount={bookmarkedMeals.length}
          fetchedData={bookmarkedMeals}
        />
      </section>
    )
  }
  return <h1 className="mt-60">Empty</h1>
}

export default BookmarkPage

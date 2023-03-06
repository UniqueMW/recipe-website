import * as React from 'react'
import { Grid } from 'components'
import emptyPlate from 'assets/cutlery13.jpg'
import type { CardMeal } from 'types'
// TODO handle empty bookmark
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
      <section className="py-10 min-h-[100vh]">
        <Grid
          gridContent="Bookmarked"
          amount={bookmarkedMeals.length}
          fetchedData={bookmarkedMeals}
        />
      </section>
    )
  }
  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center">
      <img src={emptyPlate} className="max-w-lg" />
    </section>
  )
}

export default BookmarkPage

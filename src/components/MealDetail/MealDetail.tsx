import { useFetch } from 'hooks'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import { BsJournalBookmark, BsYoutube } from 'react-icons/bs'
import type { Meal, Meals } from 'types'

/**
 * Since some instructions are long
 */

// TODO add the border style tab you thought about.
// TODO handle meals null
function MealDetail(): JSX.Element {
  const [url, setUrl] = React.useState<string>()
  const [meal, setMeal] = React.useState<Meal>()
  // get react-router param
  const { id } = useParams()

  // prepare meal detail url by id from params
  React.useEffect(() => {
    if (typeof id !== 'undefined') {
      const mealId = _.trim(id, ':')
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      setUrl(url)
    }
  }, [id])

  // Fetch meal details from param id
  const fetchedData = useFetch<Meals>(url)

  // change meal data based on fetchedData results
  React.useEffect(() => {
    if (typeof fetchedData !== 'undefined' && fetchedData.meals !== null) {
      setMeal(fetchedData.meals[0])
    }
  }, [fetchedData])

  if (typeof meal !== 'undefined') {
    return (
      <section className="md:px-12 px-2">
        <section className="flex md:flex-row flex-col md:my-20 justify-between gap-2 items-center border border-gray-500">
          <img src={meal.strMealThumb} />
          <section className="px-2 font-sans space-y-10">
            <h1 className="md:text-6xl text-3xl font-semibold tracking-wide text-center">
              {meal.strMeal}
            </h1>
            <div className="flex flex-row text-lg font-sans justify-evenly font-semibold tracking-wider">
              <button className="py-3 md:px-16 px-6 bg-action text-base md:text-lg text-primary shadow-md tracking-wider flex flex-row items-center">
                <BsYoutube className="mr-2" />
                Tutorial
              </button>
              <button className="border-2 border-action md:px-16 px-6 shadow-sm py-3 text-base md:text-lg tracking-wider flex flex-row items-center">
                <BsJournalBookmark className="mr-2" />
                Bookmark
              </button>
            </div>
            <p className="text-lg border border-gray-500 p-2 text-justify tracking-wider px-2 h-64 max-h-full overflow-auto scrollbar-thumb-action scrollbar-track-transparent scrollbar-thin">
              {meal.strInstructions}
            </p>
          </section>
        </section>
      </section>
    )
  }
  // return on loading the component
  return <h1>Loading....</h1>
}

export default MealDetail

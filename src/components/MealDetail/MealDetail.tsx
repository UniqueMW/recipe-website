import { useFetch } from 'hooks'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import { BsJournalBookmark, BsYoutube } from 'react-icons/bs'
import type { Meal, Meals } from 'types'
import { groupValues } from 'utils'
import MealTabs from 'components/MealTabs/MealTabs'

/**
 * activeTab
 * handleActiveTab
 * activeTabDisplay
 */

// TODO add the border style tab you thought about.
// TODO handle meals null
function MealDetail(): JSX.Element {
  const [url, setUrl] = React.useState<string>()
  const [meal, setMeal] = React.useState<Meal>()
  const [ingredients, setIngredients] = React.useState<string[]>()
  const [measurements, setMeasurements] = React.useState<string[]>()
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

      // create a list of ingredients values.
      const ingredientsValues = groupValues(
        fetchedData.meals[0],
        'strIngredient'
      )
      setIngredients(ingredientsValues)

      // create an array of measurements values.
      const measurementsValues = groupValues(fetchedData.meals[0], 'strMeasure')
      setMeasurements(measurementsValues)
    }
  }, [fetchedData])

  if (typeof meal !== 'undefined') {
    return (
      <section className="md:px-12 px-2">
        <section className="flex md:flex-row flex-col md:my-20 justify-between gap-2 items-center border border-gray-500 max-w-full">
          <img src={meal.strMealThumb} />

          <section className="px-2 font-sans space-y-10 max-w-full w-full mb-4 md:mb-0">
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

            <MealTabs
              ingredients={ingredients}
              measurements={measurements}
              instructions={meal.strInstructions}
            />
          </section>
        </section>
      </section>
    )
  }
  // return on loading the component
  return <h1>Loading....</h1>
}

export default MealDetail

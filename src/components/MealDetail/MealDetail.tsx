import { useFetch } from 'hooks'
import * as React from 'react'
import { useParams } from 'react-router-dom'
import _ from 'lodash'
import type { Meal, Meals } from 'types'

// TODO think about the style
/**
 * Since some instructions are long
 */
function MealDetail(): JSX.Element {
  const [url, setUrl] = React.useState<string>()

  const [meal, setMeal] = React.useState<Meal>()
  const { id } = useParams()

  React.useEffect(() => {
    if (typeof id !== 'undefined') {
      const mealId = _.trim(id, ':')
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      setUrl(url)
    }
  }, [id])

  const fetchedData = useFetch<Meals>(url)
  React.useEffect(() => {
    if (typeof fetchedData !== 'undefined' && fetchedData.meals !== null) {
      setMeal(fetchedData.meals[0])
    }
  }, [fetchedData])

  if (typeof meal !== 'undefined') {
    return (
      <section className="md:px-12 px-2">
        <section className="flex flex-col md:mt-20">
          <img src={meal.strMealThumb} />
          <section className="px-2 font-sans space-y-2">
            <h1 className="text-3xl font-extralight tracking-wide">
              {meal.strMeal}
            </h1>
            <p className="text-lg text-justify tracking-wider">
              {meal.strInstructions}
            </p>
          </section>
        </section>
      </section>
    )
  }
  return <h1>Loading....</h1>
}

export default MealDetail

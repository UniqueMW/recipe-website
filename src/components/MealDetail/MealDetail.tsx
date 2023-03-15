import { useFetch } from 'hooks'
import * as React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { BsJournalBookmark, BsYoutube } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import { groupValues, storeMeal, handleBrokenImage } from 'utils'
import { Loading, MealTabs } from 'components'

import type { Meal, Meals } from 'types'

interface IMealDetailProps {
  setMealTitle: (mealName: string) => void
}

function MealDetail(props: IMealDetailProps): JSX.Element {
  const [url, setUrl] = React.useState<string>()
  const [meal, setMeal] = React.useState<Meal>()
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>(false)
  const [ingredients, setIngredients] = React.useState<string[]>()
  const [measurements, setMeasurements] = React.useState<string[]>()
  // get react-router param
  const { id } = useParams()
  const navigate = useNavigate()

  // Check if a meal is bookmarked
  React.useEffect(() => {
    const getBookmarkedMeals = localStorage.getItem('uniqueMW_recipe_bookmark')
    if (typeof getBookmarkedMeals === 'string') {
      const bookmarkedMealsArray = JSON.parse(getBookmarkedMeals) as Meal[]
      const mealResults = bookmarkedMealsArray.find(
        (item) => item.idMeal === meal?.idMeal
      )
      setIsBookmarked(typeof mealResults !== 'undefined')
    }
  }, [meal])

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

      // sets the title of the page.
      props.setMealTitle(fetchedData.meals[0].strMeal)

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

  const handleTutorial = (): void => {
    if (typeof meal?.strYoutube !== 'undefined') {
      const splitVideoUrl = _.split(meal.strYoutube, '=', 2)
      navigate(`/tutorial/:${splitVideoUrl[1]}`)
    }
  }

  const handleBookmark = (): void => {
    if (typeof meal !== 'undefined') {
      setIsBookmarked(storeMeal(meal))
    }
  }

  if (typeof meal !== 'undefined') {
    return (
      <section className="md:px-12 px-1">
        <section className="flex xl:flex-row flex-col md:my-20 items-center border border-gray-500 max-w-full">
          <img
            src={meal.strMealThumb}
            onError={handleBrokenImage}
            alt={meal.strMeal}
            title={meal.strMeal}
            className="min-w-full md:min-w-[50%]"
          />

          <section className="px-2 font-sans space-y-10 max-w-full w-full mb-4 md:mb-0">
            <h1 className="md:text-6xl text-3xl font-semibold tracking-wide text-center">
              {meal.strMeal}
            </h1>

            <div className="grid grid-cols-2 gap-3 text-lg font-sans justify-items-center font-semibold tracking-wider">
              <button
                className="py-3 2xl:px-16 md:px-8 px-3 bg-action text-base md:text-lg text-primary shadow-md tracking-wider flex flex-row items-center min-w-fit"
                onClick={handleTutorial}
              >
                <BsYoutube className="mr-2" />
                Tutorial
              </button>
              <button
                className="border-2 border-action 2xl:px-16 md:px-8 px-2 shadow-sm py-3 text-base md:text-lg tracking-wider flex flex-row items-center min-w-fit"
                onClick={handleBookmark}
              >
                {isBookmarked ? (
                  <FaCheck className="mr-2 text-secondary" />
                ) : (
                  <BsJournalBookmark className="mr-2" />
                )}
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
  return <Loading />
}

export default MealDetail

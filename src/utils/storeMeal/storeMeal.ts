import type { Meal } from 'types'

function storeMeal(
  meal: Meal,
  key: string = 'uniqueMW_recipe_bookmark'
): boolean {
  const localStorage = window.localStorage
  const bookmarkItems = localStorage.getItem(key)

  // the code in the if block will run if local storage was already set.
  if (typeof bookmarkItems === 'string') {
    let storedArray = JSON.parse(bookmarkItems) as Meal[]

    // get the meal if it is already in local storage.
    const checkMealAvailability = storedArray.find(
      (mealItem) => mealItem.idMeal === meal.idMeal
    )

    // the code in the if block will run if checkAvailability is not undefined
    if (typeof checkMealAvailability?.idMeal === 'string') {
      // remove the meal in local storage from checkMealAvailability
      storedArray = storedArray.filter((mealItem) => {
        return mealItem.idMeal !== meal.idMeal ? mealItem : null
      })
      localStorage.setItem(key, JSON.stringify(storedArray))
      return false
    }
    // runs if checkAvailability is undefined
    else {
      storedArray.push(meal)
      //  set the local storage key and value
      localStorage.setItem(key, JSON.stringify(storedArray))
      return true
    }
  }
  // the code in the else block will run when setting local storage for the first time.
  else {
    const storedArray = []
    storedArray.push(meal)
    localStorage.setItem(key, JSON.stringify(storedArray))
    return true
  }
}

export default storeMeal

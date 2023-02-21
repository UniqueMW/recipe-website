import * as React from 'react'
// import type { Category, CategoryObject } from 'types'
import useFetch from 'hooks/useFetch/useFetch'
import { randomizeSearch } from 'utils'
import type {
  GridInfo,
  Category,
  CategoryObject,
  Location,
  LocationObject,
  Ingredient,
  IngredientObject
} from 'types'

type GridInfoObjects = CategoryObject & LocationObject & IngredientObject

function useGridInfo(contentType: string, url: string): GridInfo {
  const [gridInfo, setGridInfo] = React.useState<GridInfo>()
  const fetchedData = useFetch<GridInfoObjects>(url)

  React.useEffect(() => {
    // Stop the whole useEffect from running on undefined fetched data.
    if (typeof fetchedData === 'undefined') {
      return
    }

    // set gridInfo state based on contentType prop
    if (contentType === 'CATEGORY') {
      // choose a value from the fetched list on random.
      const randomCategory = randomizeSearch<Category>(fetchedData.meals)

      // Generate url and content on random.
      const newGridInfo = {
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory.strCategory}`,
        content: randomCategory.strCategory
      }
      setGridInfo(newGridInfo)
    } else if (contentType === 'LOCATION') {
      // choose a value from the fetched list on random.
      const randomLocation = randomizeSearch<Location>(fetchedData.meals)

      // Generate url and content on random.
      const newGridInfo = {
        url: `https:www.themealdb.com/api/json/v1/1/filter.php?a=${randomLocation.strArea}`,
        content: `${randomLocation.strArea} Dishes`
      }

      setGridInfo(newGridInfo)
    } else if (contentType === 'INGREDIENT') {
      // choose a value from the fetched list on random.
      const randomIngredient = randomizeSearch<Ingredient>(fetchedData.meals)

      // Generate url and content on random.
      const newGridInfo = {
        url: `https:www.themealdb.com/api/json/v1/1/filter.php?i=${randomIngredient.strIngredient}`,
        content: `Made with ${randomIngredient.strIngredient}`
      }

      setGridInfo(newGridInfo)
    }
  }, [url, contentType, fetchedData])

  if (typeof gridInfo !== 'undefined') {
    return gridInfo
  }

  return {
    content: '',
    url: ''
  }
}

export default useGridInfo

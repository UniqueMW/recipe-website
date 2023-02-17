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
  // fetch all list
  // 1 fetch all the list based on content type
  // pick on content on random
  // generate a new search url
  // return new url and random content
  const fetchedData = useFetch<GridInfoObjects>(url)

  React.useEffect(() => {
    // do it once on intial render
    if (typeof fetchedData !== 'undefined') {
      if (contentType === 'CATEGORY') {
        const randomCategory = randomizeSearch<Category>(fetchedData.meals)

        const newGridInfo = {
          url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${randomCategory?.strCategory}`,
          content: randomCategory?.strCategory
        }
        // return a state
        setGridInfo(newGridInfo)
      } else if (contentType === 'LOCATION') {
        const randomLocation = randomizeSearch<Location>(fetchedData.meals)
        const newGridInfo = {
          url: `https:www.themealdb.com/api/json/v1/1/filter.php?a=${randomLocation?.strArea}`,
          content: randomLocation?.strArea
        }

        // return a state
        setGridInfo(newGridInfo)
      } else if (contentType === 'INGREDIENT') {
        const randomIngredient = randomizeSearch<Ingredient>(fetchedData.meals)
        const newGridInfo = {
          url: `https:www.themealdb.com/api/json/v1/1/filter.php?i=${randomIngredient?.strIngredient}`,
          content: randomIngredient?.strIngredient
        }

        // return a state
        setGridInfo(newGridInfo)
      }
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

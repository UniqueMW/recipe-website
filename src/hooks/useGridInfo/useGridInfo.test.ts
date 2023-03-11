import { renderHook } from '@testing-library/react'
import useGridInfo from './useGridInfo'

const mockedRandomSearch = {
  strCategory: 'Breakfast',
  strArea: 'Malawian',
  strIngredient: 'Water'
}

jest.mock('utils', () => ({
  randomizeSearch: () => mockedRandomSearch
}))

jest.mock('hooks', () => ({ useFetch: () => 'stuff' }))

it('Should check return proper results based on content type CATEGORY.', () => {
  const { result } = renderHook(() =>
    useGridInfo('CATEGORY', 'https://testing')
  )

  expect(result.current.content).toBe('Breakfast')
  expect(result.current.url).toBe(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mockedRandomSearch.strCategory}`
  )
})

it('Should check return proper results based on content type LOCATION.', () => {
  const { result } = renderHook(() =>
    useGridInfo('LOCATION', 'https://testing')
  )

  expect(result.current.content).toBe('Malawian Dishes')
  expect(result.current.url).toBe(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${mockedRandomSearch.strArea}`
  )
})

it('Should check return proper results based on content type INGREDIENT.', () => {
  const { result } = renderHook(() =>
    useGridInfo('INGREDIENT', 'https://testing')
  )

  expect(result.current.content).toBe('Made with Water')
  expect(result.current.url).toBe(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mockedRandomSearch.strIngredient}`
  )
})

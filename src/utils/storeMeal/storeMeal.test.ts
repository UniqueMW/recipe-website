import storeMeal from './storeMeal'

const meal = {
  idMeal: '52772',
  strMeal: 'Teriyaki Chicken Casserole',
  strDrinkAlternate: null,
  strCategory: 'Chicken',
  strArea: 'Japanese',
  strInstructions: 'Preheat oven to 350° F.',
  strMealThumb: 'https://testing',
  strYoutube: 'https://testingyoutube',
  strIngredient1: 'flour'
}

const mealAlt = {
  idMeal: '52755',
  strMeal: 'Teriyaki Chicken Casserole',
  strDrinkAlternate: null,
  strCategory: 'Chicken',
  strArea: 'Japanese',
  strInstructions: 'Preheat oven to 350° F.',
  strMealThumb: 'https://testing',
  strYoutube: 'https://testingyoutube',
  strIngredient1: 'flour'
}

let mockedGetItemReturnValue: string | null = JSON.stringify([meal])

const setItemMockFn = jest.fn()

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: { getItem: () => mockedGetItemReturnValue, setItem: setItemMockFn }
  })
})

it('Should create a new localStorage key if the key given key is not registered.', () => {
  mockedGetItemReturnValue = null
  const results = storeMeal(meal, 'testing')

  expect(results).toBe(true)
  expect(setItemMockFn).toBeCalled()
})

it('Check if meal is removed from the localStorage if it was already in the localStorage', () => {
  mockedGetItemReturnValue = JSON.stringify([meal])
  const results = storeMeal(meal, 'testing')

  expect(results).toBe(false)
  expect(setItemMockFn).toBeCalled()
})

it('Should add a meal to the localStorage if the meal was not in the localStorage.', () => {
  mockedGetItemReturnValue = JSON.stringify([meal])
  const results = storeMeal(mealAlt, 'testing')

  expect(results).toBe(true)
  expect(setItemMockFn).toBeCalled()
})

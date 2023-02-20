import { rest } from 'msw'
import { setupServer } from 'msw/lib/node'
import fetchData from './fetchData'
import type { Meals } from 'types'

// TODO Refactor msw setups in a single place, for reuse purposes.
const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        meals: [{ idMeal: '52866', strMeal: 'Squash linguine' }]
      })
    )
  })
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('Should check if "fetchData" makes a request.', async () => {
  const result = await fetchData<Meals>(url)

  expect(result?.meals[0].idMeal).toBe('52866')
  expect(result?.meals[0].strMeal).toBe('Squash linguine')
})

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderHook, waitFor } from '@testing-library/react'
import useFetch from './useFetch'
import type { Meals } from 'types'

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

it('Should check if useFetch hook makes a request.', async () => {
  const { result } = renderHook(() => useFetch<Meals>(url))

  await waitFor(() => {
    expect(result.current?.meals[0].idMeal).toBe('52866')
    expect(result.current?.meals[0].strMeal).toBe('Squash linguine')
  })
})

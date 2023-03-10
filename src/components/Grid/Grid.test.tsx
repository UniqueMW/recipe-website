import React from 'react'
import { screen, render } from '@testing-library/react'
import Grid from './Grid'

const mockGridProps = {
  meals: [
    {
      strMeal: 'Brown Stew Chicken',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
      idMeal: '52940'
    }
  ]
}

jest.mock('components', () => {
  return {
    Card: () => <h1>grid card</h1>
  }
})

it('Should test if card are rendered.', () => {
  render(
    <Grid
      fetchedData={mockGridProps.meals}
      amount={10}
      gridContent="Malawian"
    />
  )

  const card = screen.getAllByRole('heading', { name: /grid card/i })
  const gridHeading = screen.getByRole('heading', { name: /Malawian/i })

  expect(card.length).toBe(1)
  expect(gridHeading).toBeInTheDocument()
})

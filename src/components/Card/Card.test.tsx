import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Card from './Card'

const testMeal = {
  mealId: '52772',
  meal: 'Teriyaki Chicken Casserole',
  img: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'
}

it('Should check if img and h1 render .', () => {
  render(
    <MemoryRouter>
      <Card img={testMeal.img} meal={testMeal.meal} mealId={testMeal.mealId} />
    </MemoryRouter>
  )

  const img = screen.getByRole('img')
  const heading = screen.getByRole('heading', {
    name: /Teriyaki Chicken Casserole/i
  })

  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute(
    'src',
    'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg'
  )
  expect(heading).toBeInTheDocument()
})

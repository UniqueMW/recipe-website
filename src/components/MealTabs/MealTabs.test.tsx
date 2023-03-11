import React from 'react'
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import MealTabs from './MealTabs'

const mockedMealTabsProps = {
  ingredients: ['maize flour', 'water'],
  measurements: ['2 cups of water', '2 hands of flour'],
  instructions: 'cook'
}

it('SHould render the default display.', () => {
  render(
    <MealTabs
      ingredients={mockedMealTabsProps.ingredients}
      measurements={mockedMealTabsProps.measurements}
      instructions={mockedMealTabsProps.instructions}
    />
  )

  const instructionsButton = screen.getByRole('button', {
    name: /instructions/i
  })
  const ingredientsButton = screen.getByRole('button', { name: /ingredients/i })
  const measurementsButton = screen.getByRole('button', {
    name: /measurements/i
  })
  const instructionsParagraph = screen.getByText(/cook/i)

  expect(instructionsButton).toBeInTheDocument()
  expect(ingredientsButton).toBeInTheDocument()
  expect(measurementsButton).toBeInTheDocument()
  expect(instructionsParagraph).toBeInTheDocument()
})

it('Should display ingredients if ingredients tab is active', async () => {
  render(
    <MealTabs
      ingredients={mockedMealTabsProps.ingredients}
      measurements={mockedMealTabsProps.measurements}
      instructions={mockedMealTabsProps.instructions}
    />
  )

  const ingredientsButton = screen.getByRole('button', { name: /Ingredients/i })

  user.click(ingredientsButton)

  const waterIngredient = screen.getByText('water')
  const flourIngredient = screen.getByText('maize flour')

  const list = screen.getByRole('list')

  expect(waterIngredient).toBeInTheDocument()
  expect(flourIngredient).toBeInTheDocument()
  expect(list).toBeInTheDocument()
})

it('Should display measurement if measurements tab is active', async () => {
  render(
    <MealTabs
      ingredients={mockedMealTabsProps.ingredients}
      measurements={mockedMealTabsProps.measurements}
      instructions={mockedMealTabsProps.instructions}
    />
  )

  const measurementsButton = screen.getByRole('button', {
    name: /Measurements/i
  })

  user.click(measurementsButton)

  const waterMeasurements = screen.getByText('2 cups of water')
  const flourMeasurements = screen.getByText('2 hands of flour')

  const list = screen.getByRole('list')

  expect(waterMeasurements).toBeInTheDocument()
  expect(flourMeasurements).toBeInTheDocument()
  expect(list).toBeInTheDocument()
})

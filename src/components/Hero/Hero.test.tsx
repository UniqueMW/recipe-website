import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from './Hero'

// Test if the hero component is a link
// Test heading, paragraph, image and tags

// Test for the Loading state.
interface IMeal {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
}

interface IHeroMeal {
  meals: IMeal[]
}

let mockedFetchedData: IHeroMeal | undefined = {
  meals: [
    {
      idMeal: '52979',
      strMeal: 'Nsima',
      strCategory: 'Beef',
      strArea: 'Malawian',
      strInstructions: 'instruction',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg'
    }
  ]
}

jest.mock('hooks', () => ({ useFetch: () => mockedFetchedData }))

jest.mock('components', () => {
  return { Tag: () => <h1>Tag</h1>, Loading: () => <h1>Loading</h1> }
})

it('Should test if components render if fetchedData is defined', () => {
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  )

  const link = screen.getByRole('link')
  const heroHeading = screen.getByRole('heading', { name: /nsima/i })
  const heroParagraph = screen.getByText(/instruction/i)
  const heroImage = screen.getByRole('img')
  const heroTags = screen.getAllByRole('heading', { name: /tag/i })

  expect(link).toBeInTheDocument()
  expect(heroHeading).toBeInTheDocument()
  expect(heroParagraph).toBeInTheDocument()
  expect(heroImage).toBeInTheDocument()
  expect(heroTags.length).toBe(2)
})

it('Should test component loading state if fetchedData is undefined', () => {
  mockedFetchedData = undefined
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  )

  const loadingComponent = screen.getByRole('heading', { name: /loading/i })

  expect(loadingComponent).toBeInTheDocument()
})

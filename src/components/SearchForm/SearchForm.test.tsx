import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import SearchForm from './SearchForm'

const setFetchedDataMock = jest.fn()

jest.mock('hooks', () => ({
  useFetch: () => ({ meals: [{ strMeal: 'nsima' }] })
}))

it('Should check if component is rendered.', () => {
  render(<SearchForm setFetchedData={setFetchedDataMock} />)

  const form = screen.getByRole('form')
  const input = screen.getByRole('textbox')
  const button = screen.getByRole('button')

  expect(form).toBeInTheDocument()
  expect(input).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})

it('should check if setFetchedData is called on click.', () => {
  render(<SearchForm setFetchedData={setFetchedDataMock} />)

  const button = screen.getByRole('button')

  user.click(button)

  expect(setFetchedDataMock).toBeCalled()
})

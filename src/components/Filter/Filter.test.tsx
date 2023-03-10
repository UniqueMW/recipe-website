import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import type { LocationObject } from 'types'

import Filter from './Filter'

let mockFetchedData: LocationObject | undefined
jest.mock('hooks', () => ({
  useFetch: () => mockFetchedData
}))

jest.mock('components', () => ({
  Loading: () => <h1>Loading</h1>
}))

const setOPtionEntryMock = jest.fn()

it('Should check if component renders correct if fetchedData is undefined', () => {
  render(
    <Filter
      setOptionEntry={setOPtionEntryMock}
      url="https://testing"
      valueKey="strArea"
      initial="chicken"
    />
  )

  const loadingComponent = screen.getByRole('heading', { name: /loading/i })

  expect(loadingComponent).toBeInTheDocument()
})

it('Should check if component renders correct if fetchedData is defined', () => {
  mockFetchedData = {
    meals: [
      {
        strArea: 'American'
      },
      {
        strArea: 'Malawian'
      }
    ]
  }
  render(
    <Filter
      setOptionEntry={setOPtionEntryMock}
      url="https://testing"
      valueKey="strArea"
      initial="chicken"
    />
  )

  const form = screen.getByRole('form')
  const select = screen.getByRole('listbox')
  const options = screen.getAllByRole('option')

  expect(form).toBeInTheDocument()
  expect(select).toBeInTheDocument()
  expect(options).toHaveLength(2)
})

it('Should check if setOptionEntry is called.', () => {
  mockFetchedData = {
    meals: [
      {
        strArea: 'American'
      },
      {
        strArea: 'Malawian'
      }
    ]
  }

  render(
    <Filter
      setOptionEntry={setOPtionEntryMock}
      url="https://testing"
      valueKey="strArea"
      initial="chicken"
    />
  )

  // eslint-disable-next-line
  const malawianOption = screen.getByRole('option', {
    name: /malawian/i
  }) as HTMLOptionElement

  const select = screen.getByRole('listbox')

  user.selectOptions(select, malawianOption)

  expect(malawianOption.selected).toBe(true)
  expect(setOPtionEntryMock).toBeCalled()
})

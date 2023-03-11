import React from 'react'
import { screen, render } from '@testing-library/react'
import Loading from './Loading'

jest.mock('react-spinners/ClockLoader', () => {
  return function ClockLoader() {
    return <h1>Clock</h1>
  }
})

it('Should check if loading component render.', () => {
  render(<Loading />)

  const clock = screen.getByRole('heading', { name: /clock/i })

  expect(clock).toBeInTheDocument()
})

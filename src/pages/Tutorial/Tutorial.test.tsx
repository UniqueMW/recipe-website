import React from 'react'
import { screen, render } from '@testing-library/react'
import Tutorial from './Tutorial'

it('Should render an iframe', () => {
  render(<Tutorial />)

  const iframe = screen.getByTitle(/Youtube video player/i)

  expect(iframe).toBeInTheDocument()
})

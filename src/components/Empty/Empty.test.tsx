import React from 'react'
import { render, screen } from '@testing-library/react'
import Empty from './Empty'

it('should check if component is rendered.', () => {
  render(<Empty />)

  const image = screen.getByRole('img')
  expect(image).toBeInTheDocument()
})

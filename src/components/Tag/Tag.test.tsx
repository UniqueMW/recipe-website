import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from './Tag'

it.only('Should check if tag component is render correctly.', () => {
  render(
    <Tag content="testing">
      <h1>children</h1>
    </Tag>
  )

  const content = screen.getByRole('heading', { name: /testing/i })
  const children = screen.getByRole('heading', { name: /children/i })

  expect(content).toBeInTheDocument()
  expect(children).toBeInTheDocument()
})

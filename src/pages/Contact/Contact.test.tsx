import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

jest.mock('components', () => ({ ContactForm: () => <h1>Contact form</h1> }))

it('Should render ContactForm', () => {
  render(<Contact />)

  const contactForm = screen.getByRole('heading', { name: /Contact Form/i })

  expect(contactForm).toBeInTheDocument()
})

import React from 'react'
import { screen, render } from '@testing-library/react'
import ContactForm from './ContactForm'

it('Check if component is rendered correctly.', () => {
  render(<ContactForm />)

  const form = screen.getByRole('form')
  const heading = screen.getByRole('heading', { name: /contact me/i })
  const nameInput = screen.getByPlaceholderText(/full name/i)
  const emailInput = screen.getByPlaceholderText(/email address/i)
  const messageArea = screen.getByPlaceholderText(/message/i)
  const submitButton = screen.getByRole('button', { name: /submit/i })
  const subjectInput = screen.getByDisplayValue(/from recipe web app!/i)

  expect(form).toBeInTheDocument()
  expect(heading).toBeInTheDocument()
  expect(nameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(messageArea).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
  expect(subjectInput).toBeInTheDocument()
})

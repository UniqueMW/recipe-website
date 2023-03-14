import React from 'react'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

jest.mock('components', () => ({
  ContactForm: () => <h1>Contact form</h1>,
  SEO: () => <h1>seo</h1>
}))

it('Should render ContactForm and SEO.', () => {
  render(<Contact />)

  const contactForm = screen.getByRole('heading', { name: /Contact Form/i })
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(contactForm).toBeInTheDocument()
  expect(seoComponent).toBeInTheDocument()
})

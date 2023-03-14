import React from 'react'
import { render, screen } from '@testing-library/react'
import PrivacyPolicy from './PrivacyPolicy'

jest.mock('components', () => ({
  SEO: () => <h1>seo</h1>
}))

it('Should render the privacy policy correct.', () => {
  render(<PrivacyPolicy />)

  const headings = screen.getAllByRole('heading')
  const paragraphs = screen.getAllByRole('paragraph')
  const list = screen.getAllByRole('list')
  const listItems = screen.getAllByRole('listitem')
  const links = screen.getAllByRole('link')
  const seoComponent = screen.getByRole('heading', { name: /seo/i })

  expect(headings.length).toBeGreaterThan(0)
  expect(paragraphs.length).toBeGreaterThan(0)
  expect(list.length).toBeGreaterThan(0)
  expect(listItems.length).toBeGreaterThan(0)
  expect(links.length).toBeGreaterThan(0)
  expect(seoComponent).toBeInTheDocument()
})

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Category,
  Home,
  SharedLayout,
  Location,
  Ingredients,
  MealPage,
  Tutorial,
  BookmarkPage,
  Search,
  PrivacyPolicy,
  Contact
} from 'pages/index'

// TODO add unit tests
// TODO add active page feature
// TODO add error boundaries
// TODO Image loading fallback
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/meal/:id" element={<MealPage />} />
          <Route path="/tutorial/:videoId" element={<Tutorial />} />
          <Route path="category" element={<Category />} />
          <Route path="location" element={<Location />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="bookmark" element={<BookmarkPage />} />
          <Route path="search" element={<Search />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

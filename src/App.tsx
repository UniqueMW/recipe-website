import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
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
  Contact,
  Page404
} from 'pages/index'

function App(): JSX.Element {
  return (
    <HelmetProvider>
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
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App

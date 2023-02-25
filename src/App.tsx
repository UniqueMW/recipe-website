import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Category,
  Home,
  SharedLayout,
  Location,
  Ingredients,
  MealPage
} from 'pages/index'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/meal/:id" element={<MealPage />} />
          <Route path="category" element={<Category />} />
          <Route path="location" element={<Location />} />
          <Route path="ingredients" element={<Ingredients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Category, Home, SharedLayout } from 'pages/index'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

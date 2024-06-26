import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/HomePage'
import Test from './pages/TestPage'
import Results from './pages/ResultsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </Router>
  )
}

export default App

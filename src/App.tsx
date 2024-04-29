import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Test from './pages/Test'
import Results from './pages/Results'

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

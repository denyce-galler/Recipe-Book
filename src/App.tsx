import React from 'react'
import './App.css'
import Homepage from './Homepage'
import Glossary from './components/Glossary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipes" element={<Glossary />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

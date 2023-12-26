import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './component/contact/Contact'
import Navbar from './component/navbar/Navbar'
import Footer from './component/Footer/Footer'

export default function App() {
  return (
    <Router>
      <Contact />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

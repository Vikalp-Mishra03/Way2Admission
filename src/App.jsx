import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './component/contact/Contact'
import Navbar from './component/navbar/Navbar'
import Footer from './component/Footer/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Home1 from './pages/Home1'
import OurExpert from './pages/OurExpert'
import Termsandcondition from './pages/Termsandcondition'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Career from './pages/Career'
import ContactUs from './pages/ContactUs'
import ResponsibleDisclosurePolicy from './pages/ResponsibleDisclosurePolicy'
import Colleges from './pages/Colleges'
import Blog  from './pages/Blog'

export default function App() {
  return (
    <Router>
      <Contact />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home1' element={<Home1 />} />
        <Route path='/about' element={<About />} />
        <Route path='/expert' element={<OurExpert />} />
        <Route path='/services' element={<Services />} />
        <Route path='/termsAndCondition' element={<Termsandcondition />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/career' element={<Career />} />
        <Route path='/colleges' element={<Colleges />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/responsible' element={<ResponsibleDisclosurePolicy />} />
      </Routes>
      <Footer />
    </Router>
  )
}

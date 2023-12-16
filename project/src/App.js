import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Course from './Pages/courses/Courses'
import Service from './Pages/Services/Service/Service'
import Contact from './Pages/Contact/Contact'
import Accadamic from './Pages/Accadamic/Accadamic'
import Technology from './Pages/Technology/Technology'
import Projects from './Pages/Projects/Projects'
import Supportitworks from './Pages/Supportitworks/Supportitworks'

const App = () => {
  return (
    <div className='container-fluid'>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/'  element={<Home/>} />

    <Route path="/about" element={<About/>} />

    <Route path='Acadamic' element={<Accadamic/>} />

    <Route path='/Projects' element={<Projects/>} />

    <Route path='/supportitworks' element={<Supportitworks/>} />

    <Route path='/courses' element={<Course />} />
    
    <Route path='/services' element={<Service/>} />

    <Route path='/Contact'  element={<Contact/>} />
    
    <Route path='/Technology' element={<Technology />} />
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App

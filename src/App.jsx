import React from 'react'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return  (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/about" element = {<About />}></Route>
        <Route path = "/services" element = {<Services />}></Route>
        <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App

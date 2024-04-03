import React, { useEffect, useState } from 'react'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  const [ records, setRecords ] = useState("");
  // call records.json file
  const getData =  () => {
    fetch('records/records.json',{headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }}).then((response) => {
      return response.json()
    }).then((data) => {
      setRecords(data);
    })
  }

  useEffect(()=>{
    getData()
  }, [])

  const websitecontent = records.website_content; 
  const homepage = records.homepage;

  return  (
      <BrowserRouter>
        <Header sitecontent={websitecontent} />
        <Routes>
          <Route path = "/" element = {<Home homepage={homepage} />}></Route>
          <Route path = "/about" element = {<About />}></Route>
          <Route path = "/services" element = {<Services />}></Route>
          <Route path = "/contact" element = {<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App

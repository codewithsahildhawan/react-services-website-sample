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

  return  (
      <BrowserRouter>
        <Header records={records} />
        <Routes>
          <Route path = "/" element = {<Home records={records} />}></Route>
          <Route path = "/about" element = {<About records={records} />}></Route>
          <Route path = "/services" element = {<Services records={records} />}></Route>
          <Route path = "/contact" element = {<Contact records={records} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App

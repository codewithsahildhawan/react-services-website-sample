import React from 'react'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'

const App = () => {
  const theme = {
    colors: {
      heading : "#000",
      dark_text: "#000",
      light_text: "#fff",
      bg: "#ebe4e4",
      btn: "green"

    },
  }
  return  (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
}

export default App

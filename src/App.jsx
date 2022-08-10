import React, { Component } from 'react'
import Nav from './components/nav/nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Yasmin from './components/yasmin/Yasmin'

import Contact from './components/contact/Contact'

const App = () => {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <App />
      break
      case '/yasmin':
        component = <Yasmin />
      break
      case '/about':
        component = <About />
      break
      case '/contact':
        component = <Contact />
      break 
  }
  return (
    <>
  
    <Nav />
    {component}
    
   
    </>

  )
}

export default App
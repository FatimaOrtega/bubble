import React from 'react'
import './nav.css'

const nav = () => {
  return (
    <nav className="nav">
      <a href='/' className='site-title'>
        BubbleGum Gemz
      </a>
      <ul>
        <li>
          <a href='/yasmin'>Yasmin</a> 
        </li>
        <li>
        <a href='/about'>About Us</a> 
        </li>
        <li>
        <a href='/contact'>Contact Information</a> 
        </li>
      </ul>
      </nav>
  )
}

export default nav
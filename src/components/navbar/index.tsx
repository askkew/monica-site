import React from 'react'
import { Navbarbuttons, Navbarcontainer, Navlink } from './navbarstyles'
import './navbarindex.css'

const Navbar = () => {
  return (
    <Navbarcontainer>
      <Navbarbuttons>
        <Navlink id="custombutton" to='/'>Home</Navlink>
        <Navlink id="custombutton" to='/about'>About</Navlink>
        <Navlink id="custombutton" to='/services'>Services</Navlink>
        <Navlink id="custombutton" to='/results'>Results</Navlink>
        <Navlink id="custombutton" to='/faq'>FAQ</Navlink>
        <Navlink id="custombutton" to='/contact'>Contact</Navlink>
      </Navbarbuttons>
    </Navbarcontainer>
  )
}

export default Navbar
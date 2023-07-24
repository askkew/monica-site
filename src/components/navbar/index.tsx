import React from 'react'
import { MobileNavContainer, NavContainer, Navbarbuttons, Navbarcontainer, Navlink, StyledDrawer, StyledExitButton, StyledExitIcon, StyledIconButton, StyledMenuIcon } from './navbarstyles'
import './navbarindex.css'

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Navbarcontainer>
      <NavContainer>
        <StyledIconButton onClick={toggleOpen}>
          <StyledMenuIcon />
        </StyledIconButton>
        <StyledDrawer open={open} onClose={toggleOpen} anchor="top">
          <MobileNavContainer>
            <StyledExitButton onClick={toggleOpen}>
              <StyledExitIcon />
            </StyledExitButton>
            <Navlink onClick={toggleOpen} id="custombutton" to='/'>Home</Navlink>
            <Navlink onClick={toggleOpen} id="custombutton" to='/about'>About</Navlink>
            <Navlink onClick={toggleOpen} id="custombutton" to='/services'>Services</Navlink>
            <Navlink onClick={toggleOpen} id="custombutton" to='/results'>Results</Navlink>
            <Navlink onClick={toggleOpen} id="custombutton" to='/contact'>Contact</Navlink>
          </MobileNavContainer>
        </StyledDrawer>
        <Navbarbuttons>
          <Navlink id="custombutton" to='/'>Home</Navlink>
          <Navlink id="custombutton" to='/about'>About</Navlink>
          <Navlink id="custombutton" to='/services'>Services</Navlink>
          <Navlink id="custombutton" to='/results'>Results</Navlink>
          <Navlink id="custombutton" to='/contact'>Contact</Navlink>
        </Navbarbuttons>
      </NavContainer>
    </Navbarcontainer>
  )
}

export default Navbar
import React from 'react'
import { FooterText, StyledFooter } from './footerstyles'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>Built and designed by <a style={{textDecoration: 'underline', color: 'white'}} href='https://lucasoverbey.dev'>Lucas Overbey</a></FooterText>
      <FooterText>© 2023</FooterText>
    </StyledFooter>
  )
}

export default Footer
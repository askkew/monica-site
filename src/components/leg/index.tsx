import React from 'react'
import { Legstyles, Linksection1, StyledLink } from './legstyles'

const Explorelinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Services',
    link: '/services'
  },
  {
    name: 'Results',
    link: '/results'
  },
  {
    name: 'Shop',
    link: '/shop'
  },
  {
    name: 'Contact',
    link: '/contact'
  },
]

const Servicelinks = [
  {
    name: 'Services',
    link: '/services'
  },
  {
    name: 'Results',
    link: '/results'
  }
]

const Shoplinks = [
  {
    name: 'Merch',
    link: 'https://www.redbubble.com/people/monicamedellin/shop'
  },
  {
    name: 'Purchase my art!',
    link: 'https://www.etsy.com/shop/MonicaMedellinArt'
  }
]

const Leg = () => {
  return (
    <Legstyles>
      <Linksection1>
        <h1>Services</h1>
        {Servicelinks.map((link) => (
          <StyledLink href={link.link}>{link.name}</StyledLink>
        ))}
      </Linksection1>
      <Linksection1>
        <h1>Explore the site!</h1>
        {Explorelinks.map((link) => (
          <StyledLink href={link.link}>{link.name}</StyledLink>
        ))}
      </Linksection1>
      <Linksection1>
        <h1>Stores</h1>
        {Shoplinks.map((link) => (
          <StyledLink href={link.link}>{link.name}</StyledLink>
        ))}
      </Linksection1>
      <Linksection1>
        <h1>Contact us!</h1>
        <StyledLink href="mailto:login@gmail.com" target="_blank">email</StyledLink>
        <StyledLink href="https://www.instagram.com/MonicaMedellinArt/" target="_blank">instagram</StyledLink>
        <StyledLink href="https://www.facebook.com/MonicaMedellinArt/" target="_blank">facebook</StyledLink>
        <StyledLink href="https://twitter.com/1MonicaMedellin" target="_blank">twitter</StyledLink>
      </Linksection1>
    </Legstyles>
  )
}

export default Leg
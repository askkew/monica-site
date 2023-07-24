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

const handleClick = (link: string) => {
  // Handle link navigation here, e.g., using React Router or window.location
  // For demonstration purposes, we'll use window.location to navigate to the link
  window.location.href = link;
};

const Leg = () => {
  return (
    <Legstyles>
      <Linksection1>
        <h1>Services</h1>
        {Servicelinks.map((link) => (
          <StyledLink key={link.link} onClick={() => handleClick(link.link)}>
            {link.name}
          </StyledLink>
        ))}
      </Linksection1>
      <Linksection1>
        <h1>Explore the site!</h1>
        {Explorelinks.map((link) => (
          <StyledLink key={link.link} onClick={() => handleClick(link.link)}>
            {link.name}
          </StyledLink>
        ))}
      </Linksection1>
      <Linksection1>
        <h1>Contact us!</h1>
        <StyledLink onClick={() => handleClick('mailto:critartconsulting@gmail.com')} target="_blank">
          email
        </StyledLink>
        <StyledLink onClick={() => handleClick('https://www.instagram.com/monicasrodeo/')} target="_blank">
          instagram
        </StyledLink>
      </Linksection1>
    </Legstyles>
  )
}

export default Leg
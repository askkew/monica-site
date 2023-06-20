import React from 'react'
import { Aboutcontainer, Firstcard, Secondcard } from './aboutstyles'
import { Card, Typography } from '@mui/material'
import Leg from '../../components/leg'

const About = () => {
  return (
    <Aboutcontainer>
      {/* <Typography>WORK IN PROGRESS</Typography> */}
      {/* <Firstcard>
        <Card>
          <Typography>WORK IN PROGRESS</Typography>
          <Secondarydescription>
          I've been a Houstonian for the past 34 years and along the way snagged a BA at the University of Houston. In between overseeing the Arts and being a mom, I paint. I've been recognized as edgy, relevant, and Contemporary in regards to my art. I love that.
          I also partake in photography embodied by Texas and the love I have for it. Encounter my "Texas Rustic Series." 
          Lastly, my ultimate goal is to become an art curator in a national museum. Showcasing modern art, and spotlighting the present day artist.
          </Secondarydescription>
        </Card>
        <img src="https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Monica%20Medellin%20Art.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" alt="Image" width="50%"/>
      </Firstcard> */}
      <Leg />
    </Aboutcontainer>
  )
}

export default About
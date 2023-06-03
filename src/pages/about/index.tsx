import React from 'react'
import { Aboutcontainer, Firstcard, Secondcard } from './aboutstyles'
import { Card, Typography } from '@mui/material'

const About = () => {
  return (
    <Aboutcontainer>
      <Firstcard>
        <Card>
          <Typography>Title</Typography>
          <Typography>Text content goes here.</Typography>
        </Card>
        <img src="https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Monica%20Medellin%20Art.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" alt="Image" width="50%"/>
      </Firstcard>
    </Aboutcontainer>
  )
}

export default About
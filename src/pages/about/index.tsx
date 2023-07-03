import React from 'react'
import { Aboutcontainer, Firstcard, Secondcard } from './aboutstyles'
import { Card, Typography } from '@mui/material'
import Leg from '../../components/leg'
import Secondimage from '../services/SecondImage'
import { ContactForm } from '../contact'
import Separator from '../../components/separator'
import primary from './milkyway.jpg';
import secondary from './secondary2.png';

const data = {
  image: primary,
  text: 'About me',
};

const dataTwo = {
  image: secondary,
  text: 'Get in contact with me!',
};

const About = () => {
  return (
    <Aboutcontainer>
      <Separator data={data} />
      <Typography>Background</Typography>
      <Typography>Monica has been a middle school and high school art teacher for the past 11 years where she specialized in having students qualify for the Houston Livestock Show & Rodeo's Art Auction on an annual basis.</Typography>
      <Typography>Throughout her many years in Art instruction, Monica has become a resourceful and imaginative professional who is highly trained in a wide array of artistic mediums and approaches. Monica has a special talent for instilling art appreciation, while promoting creativity and open-mindedness. She has a proven ability to maintain well-disciplined and highly motivated environments while offering individualized support and positive inspiration.
      </Typography>
      <img src="https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Monica%20Medellin%20Art.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25" alt="Image" width="20%" style={{marginBottom: '20px'}}/>
      <Separator data={dataTwo} />
      <ContactForm />
      <Leg />
    </Aboutcontainer>
  )
}

export default About
import React from 'react'
import { AboutTypographyDesc, AboutTypographyDescTwo, AboutTypographyTitle, Aboutcontainer, Aboutdetails, Aboutdetailstext, Aboutimage, Firstcard } from './aboutstyles'
import { Card, Divider, Typography } from '@mui/material'
import Leg from '../../components/leg'
import Secondimage from '../services/SecondImage'
import { ContactForm } from '../contact'
import Separator from '../../components/separator'
import primary from './milkyway.jpg';
import secondary from './secondary2.png';
import aboutmain from './aboutmain.png';

const data = {
  image: primary,
  text: 'About me',
};

const dataTwo = {
  image: secondary,
  text: 'Get in contact with me!',
};

const aboutInfo = [
  {
    title: 'Background',
    description: 'Monica has been a middle school and high school art teacher for the past 13 years where she specialized in having students qualify for the Houston Livestock Show & Rodeo\'s Art Auction on an annual basis.',
    descriptionTwo: 'Throughout her many years in Art instruction, Monica has become a resourceful and imaginative professional who is highly trained in a wide array of artistic mediums and approaches. Monica has a special talent for instilling art appreciation, while promoting creativity and open-mindedness. She has a proven ability to maintain well-disciplined and highly motivated environments while offering individualized support and positive inspiration.',
  }
]

const About = () => {
  return (
    <Aboutcontainer>
      <Separator data={data} />
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgb(234,234,234)'}}/>
      <Aboutdetails>
        <Aboutimage src={aboutmain} alt="Image" width="30%"/>
        <Aboutdetailstext>
          <AboutTypographyTitle>{aboutInfo[0].title}</AboutTypographyTitle>
          <Divider />
          <AboutTypographyDesc>{aboutInfo[0].description}</AboutTypographyDesc>
          <AboutTypographyDescTwo>{aboutInfo[0].descriptionTwo}</AboutTypographyDescTwo>
          <Divider />
        </Aboutdetailstext>
      </Aboutdetails>
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgb(234,234,234)'}}/>
      <Separator data={dataTwo} />
      <ContactForm />
      <Leg />
    </Aboutcontainer>
  )
}

export default About
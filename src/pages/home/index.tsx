import React from 'react'
import { Homecontainer, Secondarydescription, Secondarytitle, Subbar, Subbarbackground, Subbarbutton, SubbarbuttonText, Wordsection } from './homestyles'
import Leg from '../../components/leg'
import HomeBanner from './HomeBanner'
import { ContactForm } from '../contact'
import InfoBanner from './InfoBanner'
import { AboutTypographyDesc, AboutTypographyTitle, Aboutdetails, Aboutdetailstext } from '../about/aboutstyles'
import { Divider } from '@mui/material'

const homeInfo = [
  {
    title: 'My mission',
    description: "As a highly accomplished professional and astute observer of human behavior, Crit Art's founder, Monica Arratia is positioned to make a significant impact ensuring that students and staff benefit from a strong art program.",
  }
]

const Home = () => {
  return (
    <Homecontainer>
      <HomeBanner />
      <Subbarbackground>
        <Subbar>
          <Subbarbutton to="/about" style={{  backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Blue%20Crab.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800)',}}><SubbarbuttonText>About</SubbarbuttonText></Subbarbutton>
          <Subbarbutton to="/services" style={{  backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Caine%20Lawson%20800.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800)',}}><SubbarbuttonText>Services</SubbarbuttonText></Subbarbutton>
          <Subbarbutton to="/results" style={{  backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Stay.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800)',}}><SubbarbuttonText>Results</SubbarbuttonText></Subbarbutton>
          {/* <Subbarbutton to="/shop" style={{  backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Houston%20Texans%20Andre.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800)',}}><SubbarbuttonText>Shop</SubbarbuttonText></Subbarbutton> */}
          <Subbarbutton to="/contact" style={{  backgroundImage: 'url(https://img1.wsimg.com/isteam/ip/8290d3ac-ca9d-4737-ad0b-b2a72ebfe6f7/Sleigh%20Monica%20Medellin%20600%20Cropped.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800)',}}><SubbarbuttonText>Contact</SubbarbuttonText></Subbarbutton>
        </Subbar>
      </Subbarbackground>
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgb(234,234,234)', marginTop: '5rem'}}/>
      <Aboutdetails style={{minHeight: '30vh', width: '100vw', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Aboutdetailstext style={{textAlign: 'center'}}>
          <AboutTypographyTitle>{homeInfo[0].title}</AboutTypographyTitle>
          <Divider />
          <AboutTypographyDesc>{homeInfo[0].description}</AboutTypographyDesc>
          <Divider />
        </Aboutdetailstext>
      </Aboutdetails>
      <div style={{width: '100%', height: '50px', backgroundColor: 'rgb(234,234,234)'}}/>
      {/* <Wordsection>
        <Secondarytitle>my mission</Secondarytitle>
        <Secondarydescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti et placeat soluta architecto libero similique, repudiandae cum nostrum minus officia totam perspiciatis id facilis quae, aut iusto repellat facere?</Secondarydescription>
      </Wordsection> */}
      <InfoBanner />
      <ContactForm />
      <Leg />
    </Homecontainer>
  )
}

export default Home
import React from 'react'
import { Homecontainer, Subbar, Subbarbackground, Subbarbutton, SubbarbuttonText, Wordsection } from './homestyles'
import Leg from '../../components/leg'
import HomeBanner from './HomeBanner'
import Contact from '../contact'

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
      <Wordsection>
        <h1>Private lessons</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore deleniti et placeat soluta architecto libero similique, repudiandae cum nostrum minus officia totam perspiciatis id facilis quae, aut iusto repellat facere?
        Veniam repellat quibusdam fugiat voluptatem, voluptate asperiores ex similique illum quod voluptas ullam error aperiam distinctio tempora dolorum id itaque libero voluptatibus totam ipsam quo. Adipisci alias aliquam provident minima.
        Tenetur doloremque culpa, sunt perferendis deleniti eligendi tempora quae rem similique facilis libero atque nostrum officiis est, dolor cupiditate praesentium iusto sed odit consequatur dolorum quis porro animi totam. Amet.</p>
      </Wordsection>
      <Contact />
      <Leg />
    </Homecontainer>
  )
}

export default Home
import React from 'react'
import { Linkbox, Shopcontainer, Shoplink } from './shopstyles'
import { SiRedbubble, SiEtsy } from 'react-icons/si'
import Leg from '../../components/leg'
import Footer from '../../components/footer'
import Donate from '../../components/donate'

const Shop = () => {
  return (
    <Shopcontainer>
      <Linkbox>
        <Shoplink 
        onClick={() =>
          window.open('https://www.redbubble.com/people/monicamedellin/shop', '_blank')
        }
        >
          <h1>Merch</h1>
          <SiRedbubble size={200}/>
        </Shoplink>
        <Shoplink
        onClick={() =>
          window.open('https://www.etsy.com/shop/MonicaMedellinArt', '_blank')
        }
        >
          <h1>Art</h1>
          <SiEtsy size={200}/>
        </Shoplink>
      </Linkbox>
      <Donate />
      <Leg />
    </Shopcontainer>
  )
}

export default Shop
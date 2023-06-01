import React from 'react'
import { Linkbox, Shopcontainer, Shoplink } from './shopstyles'
import { SiRedbubble, SiEtsy } from 'react-icons/si'

const Shop = () => {
  return (
    <Shopcontainer>
      <Linkbox>
        <Shoplink>
          <h1>Merch</h1>
          <SiRedbubble size={200}/>
        </Shoplink>
        <Shoplink>
          <h1>Art</h1>
          <SiEtsy size={200}/>
        </Shoplink>
      </Linkbox>
    </Shopcontainer>
  )
}

export default Shop
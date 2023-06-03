import React from 'react'
import { Homecontainer } from './homestyles'
import { Parallax } from 'react-parallax'
import main from './banner.jpg'
import '../../index.css'

const Home = () => {
  return (
    <Parallax className='image' blur={0} bgImage={main} strength={800} bgImageStyle={{minHeight:"100vh"}}>
      <div className='content'>
        <span className="img-txt">a trip to Space</span>
      </div>
    </Parallax>
  )
}

export default Home
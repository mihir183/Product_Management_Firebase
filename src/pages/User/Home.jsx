import React from 'react'
import Navbar from '../../Components/Navbar'
import Slider from '../../Components/Slider'
import { Images } from '../../Components/data'
import Products from '../../Components/Products'
import Foooter from '../../Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Slider/>
      {/* <h1>hello</h1> */}
      <marquee behavior="" direction="top">
        {
            Images.map(ele => 
                <img src={ele} alt="" width={200} className=''/>
            )
        }
      </marquee>
      <Products/>

      <Foooter/>
    </>
  )
}

export default Home

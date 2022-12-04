import React from 'react'
import Announcement from '../View/Announcement'
import { Catagories } from '../View/Catagories'
import Footer from '../View/Footer'
import Navbar from '../View/Navbar'
import Newsletter from '../View/Newsletter'
import Products from '../View/Products'
import Slider from '../View/Slider'

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Catagories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
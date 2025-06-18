import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Main2 from '../Components/Main2'
import Cap from  '../Components/Cap'
import ProductCard from '../Components/Productcard'
import Card22 from '../Components/Card22'
import Cap5 from '../Components/Cap5'



const Shop = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Main2 />
      <Cap />
      <Card22 />
      <Cap5 />
      <ProductCard />
s      <Footer />
    </div>
  )
}

export default Shop


import React from 'react'
import About from '../Components/About/About'
import CategoryHome from '../Components/CategoryHome/CategoryHome'
import Footer from '../Components/Footer/Footer'
import Container from '../Components/ItemSlider/Container'
import Navbar from '../Components/Navigation/Navbar'
import ProductHome from '../Components/Product/ProductHome'

function Home() {
  return (
    <>
      <Navbar />
      <Container />
      <br /><br /><br />
      <CategoryHome />
      <ProductHome />
      <About />
      <Footer />
    </>
  )
}

export default Home

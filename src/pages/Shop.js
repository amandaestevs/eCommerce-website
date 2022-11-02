import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ProductsContainer from '../components/ProductsContainer'

function Delivery() {
  return (
    <div className='w-full flex flex-col items-center overflow-x-hidden'>
    <NavBar page={'shop'}/>
    <ProductsContainer />
    <Footer />
    </div>
  )
}

export default Delivery
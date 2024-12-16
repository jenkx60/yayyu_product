import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1>This is the new homepage 
      </h1>
      <Carousel />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page
"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import cheackouthead from '../public/Frame 23 checkout.svg';
import shophead from '../public/Frame 23 shopping.svg';
import model from '../public/model.svg';
import ProductTabs from '../components/ProductTabs';

const Shopping = () => {
  return (
    <div className='bg-white text-black'>
        <div>
            <Navbar />
        </div>

        <main>
            <div>
                <Image 
                    src={shophead}
                    alt='shop Head'
                />
            </div>

            <div>
                <ProductTabs />
            </div>
        </main>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Shopping
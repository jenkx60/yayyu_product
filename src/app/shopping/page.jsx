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

        <div>
            <Image 
                src={shophead}
                alt='shop Head'
            />
        </div>

        <main className=' container mt-20'>
            <div>
                <div>
                    <Image
                        src={model}
                        alt='model'
                        width={470}
                        height={600}
                        className='border-2'
                    />
                </div>
                <div className='flex gap-2.5 mt-1.5'>
                    <div>
                        <Image 
                            src={model}
                            alt='model'
                            width={150}
                            height={200}
                            className='border-2'
                        />
                    </div>
                    <div>
                        <Image 
                            src={model}
                            alt='model'
                            width={150}
                            height={200}
                            className='border-2'
                        />
                    </div>
                    <div>
                        <Image 
                            src={model}
                            alt='model'
                            width={150}
                            height={200}
                            className='border-2'
                        />
                    </div>
                </div>
                <div>
                    
                </div>
            </div>

            {/* <div>
                <ProductTabs />
            </div> */}
        </main>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Shopping
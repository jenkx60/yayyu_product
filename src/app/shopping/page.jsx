"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import cheackouthead from '../public/Frame 23 checkout.svg';
import shophead from '../public/Frame 23 shopping.svg';
import model from '../public/model.svg';
import ProductTabs from '../components/ProductTabs';
import { FaRegStar, FaStar } from 'react-icons/fa6';

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

        <main className='container mt-20 flex'>
            <div className='w-full'>
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
            </div>

            <div className=' w-full'>
                <div className='font-dmSans font-medium text-3xl leading-9 mb-4'>
                    <h1>GOWN</h1>
                </div>
                    
                <div className='flex gap-5'>
                    <div className='flex gap-1'>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>                            
                        <button><FaStar /></button>
                        <button><FaRegStar /></button>
                    </div>

                    <div className='font-dmSans font-medium text-xs leading-4'>
                        <p>29 Reviews</p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='font-dmSerifDis font-normal text-5xl leading-10 mt-5'>₦150,000.00</h1>

                    <p className='font-dmSans font-medium text-base leading-5 mt-5'>
                        Embrace the vibrant beauty if African culture with our stunning African print design gown.
                        This eye-catching piece features a bold, colorful pattern that celebrate traditional artistry while offeriing a 
                        modern silhouette.
                    </p>
                </div>

                <hr className='mt-5'/>
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
"use client"
import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import model from "../public/svg/model.svg";
import catimg from '@/app/public/svg/catimg.svg';
import { BiAbacus } from 'react-icons/bi';
import { FaAngleDown, FaMinus } from 'react-icons/fa6';
import Link from 'next/link';

const Category = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const images = Array(1).fill(model);

    const products = [
        {
            id: 1, 
            image: model.src,
            name: "THE ADIRE ATTIRE",
            price: 150000.0,
        },
    ];

    const productItems = () => {
        return products.map((item) => {
            const { id, name, price } = item;
            return (
                <li key={id} className='text-black'>
                    {images.map((img, index) => (
                        <div key={index} className='overflow-hidden'>
                            <Link href='/shopping'>
                                <Image 
                                    src={img}
                                    alt={`Images of ${index + 1}`}
                                    width={350}
                                    height={300}
                                    className='transition-transform duration-500 hover:scale-110'
                                />
                            </Link>
                            
                        </div>
                    ))}
                    <h3 className='flex justify-center font-dmSans text-sm leading-4 mt-4'>
                        {name}
                    </h3>
                    <p className='flex justify-center font-dmSerifDis text-xl leading-6'>
                        ₦{price.toLocaleString()}.00
                    </p>
                </li>
            );
        });
    };
  return (
    <div className='bg-white text-black'>
        <nav>
            <Navbar />
        </nav>

        <main className='flex'>
            {/* Sidebar */}
            <Sidebar
                className={`fixed top-0 left-0 h-full w-1/4 transform transition-transform duration-300 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`} 
                toggleSidebar={toggleSidebar} // Pass the toogle function
            />
            <div className='flex-1'>
                <div>
                    <Image 
                        src={catimg}
                        alt="categories Background"
                        className='w-full'
                    />
                </div>

                <div className='container mt-10'>
                    <div className='font-dmSans font-semibold text-5xl leading-10'>
                        <h1>Adire</h1>
                    </div>

                    <div className='flex justify-between mt-14'>
                        {/* Toggle Sidebar on click */}
                        <div
                            onClick={toggleSidebar}
                            className='flex cursor-pointer gap-3'>
                            <div>
                                <BiAbacus />
                            </div>
                            <div className='font-dmSans font-normal text-base leading-5'>
                                <h2>SHOW FILTER</h2>
                            </div>
                        </div>
                        
                        <div className='flex gap-2'>
                            <h2>SORT BY </h2> <FaAngleDown />
                        </div>
                    </div>

                    <div className='mt-32'>
                        <div>
                            <ul className='flex mb-16'>
                                {productItems()}
                                {productItems()}
                                {productItems()}
                                {productItems()}
                            </ul>
                        </div>

                        <div>
                            <ul className='flex mb-16'>
                                {productItems()}
                                {productItems()}
                                {productItems()}
                                {productItems()}
                            </ul>
                        </div>

                        <div>
                            <ul className='flex mb-16'>
                                {productItems()}
                                {productItems()}
                                {productItems()}
                                {productItems()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Category
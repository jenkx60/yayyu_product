"use client"
import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import catimg from '@/app/public/svg/catimg.svg';
import { BiAbacus } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa6';

const Categories = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className='bg-white text-black'>
        <nav>
            <Navbar />
        </nav>

        {/* Blurred Background */}
        {/* {isSidebarOpen && (
            <div></div>
        )} */}

        <main className='flex'>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
            >

            </button>
            {/* Sidebar */}
            <Sidebar
                className={`fixed top-0 left-0 h-full w-1/4 transform transition-transform duration-300 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`} 
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

                    <div className='flex justify-between'>
                        {/* Toggle Sidebar on click */}
                        <div
                            onClick={toggleSidebar}
                            className='flex cursor-pointer'>
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
                </div>
            </div>
            
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Categories
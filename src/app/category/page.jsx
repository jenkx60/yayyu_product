"use client"
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import model from "../public/svg/model.svg";
import catimg from '@/app/public/svg/catimg.svg';
import { BiAbacus } from 'react-icons/bi';
import { FaAngleDown, FaArrowLeft, FaArrowRight, FaAngleUp } from 'react-icons/fa6';
import Link from 'next/link';

const Category = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const drop = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen((dropdownOpen) => !dropdownOpen);
    }

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

    useEffect(() => {
        const handleDropdown = (e) => {
            if (drop.current && !drop.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleDropdown);
        return () => {
            document.removeEventListener('mousedown', handleDropdown);
        };
    }, []);
  return (
    <div className='bg-white text-black'>
        <nav>
            <Navbar />
        </nav>

        <main className='flex mb-24'>
            {/* Sidebar */}
            <Sidebar
                className={`fixed top-0 left-0 h-full w-1/3 transform transition-transform duration-300 ${
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

                <div className='container mt-10 px-4 sm:px-6 lg:px-8'>
                    <div className='font-dmSans font-semibold text-3xl sm:text-4xl lg:text-5xl leading-10'>
                        <h1>Adire</h1>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-between mt-14'>
                        {/* Toggle Sidebar on click */}
                        <div
                            onClick={toggleSidebar}
                            className='flex cursor-pointer gap-3 mb-4 sm:mb-0'>
                            <div>
                                <BiAbacus />
                            </div>
                            <div className='font-dmSans font-normal text-base leading-5'>
                                <h2>SHOW FILTER</h2>
                            </div>
                        </div>
                        
                        <div className='flex gap-2'>
                            <h2>SORT BY </h2>
                            <button className='transition-transform duration-300' onClick={toggleDropdown}>
                                {dropdownOpen ?  <FaAngleUp /> : <FaAngleDown />}
                            </button>
                            {/* Sort Dropdown */}
                            {dropdownOpen && (
                                <div
                                    ref={drop}
                                    className="flex flex-col gap-3 bg-white absolute w-48 mt-7 p-4 border border-t-activehover border-t-4 shadow-sm right-12 z-0"
                                >
                                    <Link href='/'>NEWEST</Link>
                                    <Link href='/'>OLDEST</Link>
                                    <Link href='/'>A - Z</Link>
                                    <Link href='/'>PRICE (LOW - HIGH)</Link>
                                    <Link href='/'>PRICE (HIGH - LOW)</Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='mt-32'>
                        <div>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mb-10'>
                                {productItems()}
                                {productItems()}
                                {productItems()}
                                {productItems()}
                            </ul>
                        </div>

                        <div>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mb-10'>
                                {productItems()}
                                {productItems()}
                                {productItems()}
                                {productItems()}
                            </ul>
                        </div>

                        <div>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mb-10'>
                                {productItems()}
                                {productItems()}
                                {productItems()}
                                {productItems()}
                            </ul>
                        </div>
                    </div>

                    <div className='flex sm:justify-center md:justify-end justify-end gap-3 font-dmSans font-normal'>
                        <div className='flex gap-2 text-previous'>
                            <FaArrowLeft className='text-sm mt-1.5'/>
                            <h2 className='text-base py-0.5'>Previous</h2>
                        </div>
                        <div className='flex gap-5 cursor-pointer '>
                            <h2 className='bg-black hover:bg-slate-800 px-3 py-0.5 text-white rounded-lg'>1</h2>
                            <h2 className='py-0.5'>2</h2>
                            <h2 className='py-0.5'>3</h2>
                            <h2 className='py-0.5'>...</h2>
                            <h2 className='py-0.5'>67</h2>
                            <h2 className='py-0.5'>68</h2>
                            <h2 className='text-base py-0.5'>Next</h2>
                        </div>
                        <div className='flex gap-2 py-0.5'>
                            <FaArrowRight className='text-sm mt-1'/>
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
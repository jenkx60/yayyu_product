"use client"
import React, { useEffect, useState, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaMinus, FaPlus } from 'react-icons/fa6';
import SizeTabs from './SizeTabs';
import ColorTabs from './ColorTabs';
import PriceRange from './PriceRange';
import Link from 'next/link';
import CategoryAccordion from './CategoryAccordion';

const Sidebar = ({ className, toggleSidebar }) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ isCategoryDropdownOpen, setCategoryDropdownOpen ] = useState(false);
    const drop = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen((dropdownOpen) => !dropdownOpen);
    }

    const toggleCategoryOpen = () => {
        setCategoryDropdownOpen((isCategoryDropdownOpen) => !isCategoryDropdownOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (drop.current && !drop.current.contains(e.target)) {
                setDropdownOpen(false);
                setCategoryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
  return (
    <div className={`w-1/2 bg-white p-6 ${className}`}>
        {/* Close Icon */}
        <div className='flex justify-between font-dmSans font-medium text-lg leading-5 mb-6'>
                <div>
                    <h1>FILTERS</h1>
                </div>
            <button 
                onClick={toggleSidebar}
                className='text-gray-500 hover:text-gray-700'
            >
                <FaTimes />
            </button>
        </div>

        <hr />

        <div className='font-dmSans '>
            <CategoryAccordion title='CATEGORY'>
            <ul className='space-y-2 font-normal text-base leading-5'>
                <Link href='/categories'>
                    <li className='mb-4 pl-6'>KAFTAN</li>
                </Link>

                <Link href='/categories'>
                    <li className='mb-4 pl-6'>SUIT</li>
                </Link>

                <Link href='/categories'>
                    <li className='mb-4 pl-6'>GOWN</li>
                </Link>

                <Link href='/categories' >
                    <li className='pl-6'>ADIRE</li>
                </Link>
            </ul>
            </CategoryAccordion>
        </div>

        <hr />

        <div className='font-dmSans font-medium my-6'>
            <div className='mb-3 text-lg'>
                <h1>SIZE</h1>
            </div>

            <div>
                <SizeTabs />
            </div>
        </div>

        <hr />

        <div className='font-dmSans font-medium my-6'>
            <div className='mb-3 text-lg'>
                <h1>COLORS</h1>
            </div>

            <div>
                <ColorTabs />
            </div>
        </div>

        <div className='font-dmSans font-medium my-6'>
            <div className='mb-3 text-lg'>
                <h1>PRICE</h1>
            </div>

            <div>
                <PriceRange />
            </div>
        </div>
    </div>
  )
}

export default Sidebar
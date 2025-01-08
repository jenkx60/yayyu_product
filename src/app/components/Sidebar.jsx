import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa6';
import SizeTabs from './SizeTabs';
import ColorTabs from './ColorTabs';
import PriceRange from './PriceRange';

const Sidebar = ({ className, toggleSidebar }) => {
    // const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    
    // const toggleSidebar = () => {
    //     setIsSidebarOpen(!isSidebarOpen);
    // }
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
                <div>
                    <FaTimes className='text-xl' />
                </div>
            </button>
        </div>

        <hr />

        <div>
            <div className='flex justify-between font-dmSans font-medium text-lg leading-5 my-6'>
                <div>
                    <h1>CATEGORY</h1>
                </div>
                <div>
                    <FaMinus />
                </div>
            </div>
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
"use client"
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CategoryAccordion = ({ title, children }) => {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className='my-4'>
        <div 
            className='flex justify-between items-center cursor-pointer'
            onClick={handleToggle}
            >
            
            <h2 className='font-dmSans font-medium'>{title}</h2>
            <span className={`w-4 h-4 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0' }`}>
                {isOpen ? <FaMinus className='rotate-180' /> : <FaPlus className='rotate-0' />} 
            </span>
        </div>
        {isOpen && <div className='p-4'>{children}</div>}
    </div>
  );
};

export default CategoryAccordion
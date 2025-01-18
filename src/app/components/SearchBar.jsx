import React, { useEffect, useRef, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ className, toggleSearchbar }) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ isSearchbar, setIsSearchbar ] = useState(false);
    const drop = useRef(null);

    const toggleSearchDropdown = () => {
        setDropdownOpen((dropdownOpen) => !dropdownOpen);
    };

    const toggleSearchBarOpen = () => {
        setIsSearchbar((isSearchbar) => !isSearchbar);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (drop.current && !drop.current.contains(e.target)) {
                setDropdownOpen(false);
                setIsSearchbar(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
  return (
    <div className={`flex justify-end w-1/2 h-full bg-white ${className}`}>
        {/* Close Icon */}
        <div className='flex justify-end font-dmSans font-medium text-lg leading-5 mb-6'>
            <button
                onClick={toggleSearchBarOpen}
                className='text-black hover:text-gray-900'
            >
                <FaTimes />
            </button>
        </div>

        {/* Searchbar */}
        <div>
            <div className={``}>
                <button
                    onClick={toggleSearchbar}
                    className='text-black hover:text-gray-900'
                >
                    <FaTimes />
                </button>
            </div>
            {/* <div className={`flex justify-center w-full h-12 ${isSearchbar ? 'block
            ' : 'hidden'}`}> */}
            <div className={`flex justify-center w-full h-12 ${isSearchbar ? 'block' : 'hidden'}`}>
                <input
                    type="text"
                    placeholder='Search'
                    className='w-3/4 h-10 p-2 rounded-lg'
                />
            </div>
        </div>
    </div>
  )
}

export default SearchBar
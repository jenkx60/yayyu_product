import React, { useEffect, useRef, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ className, toggleSearchbar }) => {
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ isSearchbar, setIsSearchbar ] = useState(false);
    const drop = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen((dropdownOpen) => !dropdownOpen);
    };

    const toggleSearchBar = () => {
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
    <div ref={drop} className={className}>
        {/* Close Icon */}
        <div className={`flex justify-end w-1/2 h-full bg-white ${className}`}>
            <button
                onClick={toggleSearchbar}
                className='text-black hover:text-gray-900'
            >
                <FaTimes />
            </button>
        </div>

        {/* Searchbar */}
        <div>
            <div className={`flex justify-center w-full bg-white p-6 ${className}`}>
                <input
                    type="text"
                    placeholder='Search'
                    className='w-3/4 h-10 p-2 rounded-lg'
                />
                <button
                onClick={toggleSearchBar}
                className='text-black hover:text-gray-900'
                >
                    <FaSearch />
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
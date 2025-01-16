import React, { useEffect, useRef, useState } from 'react'

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
    <div>SearchBar</div>
  )
}

export default SearchBar
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import yayyuLogo from "../public/svg/Home 1.svg";
import bagIcon from "../public/image/BAG BAG ICON.png";
import model from "../public/svg/model.svg";
import {
  FaAngleDown,
  FaAngleUp,
  FaRegUser,
  FaRegHeart,
  FaSistrix,
  FaBars,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import {
  FaFacebook,
  FaSquareInstagram,
  FaTiktok,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownUserOpen, setDropdownUserOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchBar, setIsSearchBar] = useState(false);
  const drop = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((dropdownOpen) => !dropdownOpen);
  };

  const toggleUserOpen = () => {
    setDropdownUserOpen((dropdownUserOpen) => !dropdownUserOpen);
  };

  const toggleWishlistOpen = () => {
    setIsWishlistOpen((isWishlistOpen) => !isWishlistOpen);
  };

  useEffect(() => {
    const handleDropdown = (e) => {
      if (drop.current && !drop.current.contains(e.target)) {
        setDropdownOpen(false);
        setDropdownUserOpen(false);
        setIsWishlistOpen(false);
      }
    };
    document.addEventListener("mousedown", handleDropdown);
    return () => {
      document.removeEventListener("mousedown", handleDropdown);
    };
  }, []);
  return (
    <div className="">
      <nav>
        <div className=" bg-white w-full h-auto flex justify-between items-center p-5 absolute z-50">
          {/* <div className='container '> */}
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-black text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation */}
          <div className=" text-black font-dmSans text-sm font-normal">
            <div className="container sm:hidden lg:flex gap-5">
              <Link href="/home">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <div className="flex gap-1 relative">
                <Link href="/shop">SHOP</Link>
                <button className="pt-0.5" onClick={toggleDropdown}>
                  {dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {/* Shop Dropdown Menu */}
                {dropdownOpen && (
                  <div
                    ref={drop}
                    className="flex flex-col gap-3 bg-white absolute w-36 p-4 border border-t-activehover border-t-4 shadow-sm top-5 left-0 z-0"
                  >
                    <Link href="/signup">COLLECTION</Link>
                    <Link href="/login">CATEGORY</Link>
                  </div>
                )}
              </div>
              <Link href="/contact">CONTACT</Link>
            </div>
          </div>

          {/* logo */}
          <div className="flex md:flex md:justify-center lg:justify-center items-center">
            <Link href="/home" className="cursor-pointer">
              <Image src={yayyuLogo} alt="Yayyu Logo" />
            </Link>
          </div>

          {/* icon section */}
          <div className=" flex text-black text-2xl gap-5">
            <div className="container sm:hidden lg:flex gap-5 justify-between">
              <div className="flex gap-1 relative">
                <button onClick={toggleUserOpen}>
                  <FaRegUser />
                </button>
                {/* User Dropdown Menu */}
                {dropdownUserOpen && (
                  <div
                    ref={drop}
                    className="flex flex-col gap-3 bg-white absolute w-36 p-4 border border-t-activehover border-t-4 shadow-sm top-7 right-0 text-sm"
                  >
                    <Link href="/signup">SIGN UP</Link>
                    <Link href="/login">LOGIN</Link>
                  </div>
                )}
              </div>

              <div className="flex gap-1 relative">
                <button onClick={toggleWishlistOpen}>
                  <FaRegHeart />
                </button>
                {/* Wishlist Dropdown */}
                {isWishlistOpen && (
                  <div
                    ref={drop}
                    className="flex flex-col gap-3 bg-white absolute w-96 h-auto p-4 border border-t-activehover border-t-4 shadow-sm top-7 right-0 text-sm"
                  >
                    <div className="flex justify-end">
                      <FaTimes />
                    </div>
                    {/* <div className='flex flex-col gap-3 justify-center items-center mt-24'>
                                            <h1 className='text-2xl'>Your cart is empty</h1>
                                            <button className='bg-black text-white text-xs px-6 py-3 hover:bg-activehover'>CONTINUE SHOPPING</button>
                                        </div> */}
                    <div className="flex gap-4">
                      <Image
                        src={model}
                        alt="Yayyu Model"
                        width={85}
                        // height={75}
                        className="border-2 border-gray-300 rounded-lg"
                      />

                      <div className="text-gray-500 w-36 flex place-items-center font-dmSans text-sm leading-6">
                        <p>The Adire Attire with colour variaties</p>
                      </div>
                    </div>

                    <hr />

                    <div className="flex gap-4">
                      <Image
                        src={model}
                        alt="Yayyu Model"
                        width={85}
                        className="border-2 border-gray-300 rounded-lg"
                      />

                      <div className="text-gray-500 w-36 flex place-items-center font-dmSans text-sm leading-6">
                        <p>The Adire Attire with colour variaties</p>
                      </div>
                    </div>

                    <hr />
                  </div>
                )}
              </div>

              <div className="flex gap-1 relative">
                <button onClick={() => setIsSearchBar(!isSearchBar)}>
                  <FaSistrix />
                </button>
              </div>

              {/* <div className='-pt-2'><Image src={bagIcon} alt='Cart Empty' width={28} height={30} className=''/></div> */}
            </div>
            <div className="-pt-2">
              <Image
                src={bagIcon}
                alt="Cart Empty"
                width={28}
                height={30}
                className=""
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-black p-5">
          <div className="relative">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="block w-full border-0 px-3.5 py-4 mb-7 text-black ring-1 ring-inset ring-black placeholder:font-dmSans placeholder:text-lg placeholder:text-black placeholder:font-medium focus:ring-2 focus:ring-inset sm:text-sm"
            />
            <span className="absolute top-4 right-5">
              <FaSistrix className="text-2xl" />
            </span>
          </div>

          <div className="lg:hidden flex flex-col items-center gap-3">
            <Link href="/home" onClick={toggleMobileMenu}>
              HOME
            </Link>
            <Link href="/about" onClick={toggleMobileMenu}>
              ABOUT
            </Link>
            <Link href="/shop" onClick={toggleMobileMenu}>
              SHOP
            </Link>
            <div className="flex gap-1 relative">
              <Link href="/shop" onClick={toggleMobileMenu}>
                SHOP
              </Link>
              <button
                className="pt-0.5"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FaAngleDown />
              </button>
              {/* Shop Dropdown Menu */}
              {dropdownOpen && (
                <div className="flex flex-col gap-3 bg-white">
                  <Link href="/signup">COLLECTION</Link>
                  <Link href="/login">CATEGORY</Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={toggleMobileMenu}>
              CONTACT
            </Link>
            <Link href="/wishlists" onClick={toggleMobileMenu}>
              YOUR WISHLISTS
            </Link>
          </div>

          <div>
            <div className="flex gap-3 justify-center items-center my-8">
              <Link href="facebook.com" className="rounded-xl text-2xl">
                <FaFacebook />
              </Link>
              <Link href="instagram.com" className="rounded-xl text-2xl">
                <FaSquareInstagram />
              </Link>
              <Link href="tiktok.com" className="rounded-xl text-2xl">
                <FaTiktok />
              </Link>
              <Link href="x.com" className="rounded-xl text-2xl">
                <FaXTwitter />
              </Link>
              <Link href="LinkedIn.com" className="rounded-xl text-2xl">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

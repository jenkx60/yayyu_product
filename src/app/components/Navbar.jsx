"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import yayyuLogo from '../public/Home 1.svg';
import bagIcon from '../public/BAG BAG ICON.png';
import model from '../public/model.svg'
import { FaAngleDown, FaAngleUp, FaRegUser, FaRegHeart, FaSistrix, FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { FaFacebook, FaSquareInstagram, FaTiktok, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Navbar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const [ dropdownUserOpen, setDropdownUserOpen ] = useState(false);
    const [ isWishlistOpen, setIsWishlistOpen ] = useState(false);
    const [ isSearchBar, setIsSearchBar ] = useState(false);
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
            if(drop.current && !drop.current.contains(e.target)) {
                setDropdownOpen(false);
                setDropdownUserOpen(false);
                setIsWishlistOpen(false);
            }
        }
        document.addEventListener('mousedown', handleDropdown);
        return () => {
            document.removeEventListener('mousedown', handleDropdown);
        }
    },[]);
  return (
    <div>
        <nav>
            <div className=' bg-white w-full h-auto flex justify-between items-center p-5'>
                {/* <div className='container '> */}
                    {/* Mobile Menu Button */}
                    <button onClick={toggleMobileMenu} className='lg:hidden text-black text-2xl'>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    
                    {/* Navigation */}
                        <div className=' text-black font-dmSans text-sm font-normal'> 
                            <div className='container sm:hidden lg:flex gap-5'>
                                <Link href='/home'>HOME</Link>
                                <Link href='/about'>ABOUT</Link>
                                <div className='flex gap-1 relative' >
                                    <Link href='/shop'>SHOP</Link>
                                    <button className='pt-0.5' onClick={toggleDropdown}>{dropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</button>
                                        {/* Shop Dropdown Menu */}
                                        {dropdownOpen && (
                                            <div ref={drop} className='flex flex-col gap-3 bg-white absolute w-36 p-4 border border-t-activehover border-t-4 shadow-sm top-5 left-0'>
                                                <Link href='/signup'>COLLECTION</Link>
                                                <Link href='/login'>CATEGORY</Link>
                                            </div>
                                        )}
                                </div>
                                <Link href='/contact'>CONTACT</Link>
                            </div>
                        </div>

                    {/* logo */}
                    <div className='flex md:flex md:justify-center lg:justify-center items-center'>
                        <Link href='/home' className='cursor-pointer'>
                            <Image 
                                src={yayyuLogo}
                                alt='Yayyu Logo'
                            />
                        </Link>
                    </div>


                    {/* icon section */}
                    <div className=' flex text-black text-2xl gap-5'>
                        <div className='container sm:hidden lg:flex gap-5 justify-between'>
                            <div className='flex gap-1 relative'>
                                <button onClick={toggleUserOpen}><FaRegUser /></button>
                                {/* User Dropdown Menu */}
                                {dropdownUserOpen && (
                                        <div ref={drop} className='flex flex-col gap-3 bg-white absolute w-36 p-4 border border-t-activehover border-t-4 shadow-sm top-7 right-0 text-sm'>
                                            <Link href='/signup'>SIGN UP</Link>
                                            <Link href='/login'>LOGIN</Link>
                                        </div>
                                    )}
                            </div>

                            <div className='flex gap-1 relative'>
                                <button onClick={toggleWishlistOpen}><FaRegHeart /></button>
                                {/* Wishlist Dropdown */}
                                {isWishlistOpen && (
                                    <div ref={drop} className='flex flex-col gap-3 bg-white absolute w-96 h-auto p-4 border border-t-activehover border-t-4 shadow-sm top-7 right-0 text-sm'>
                                        <div className='flex justify-end'><FaTimes /></div>
                                        {/* <div className='flex flex-col gap-3 justify-center items-center mt-24'>
                                            <h1 className='text-2xl'>Your cart is empty</h1>
                                            <button className='bg-black text-white text-xs px-6 py-3 hover:bg-activehover'>CONTINUE SHOPPING</button>
                                        </div> */}
                                        <div className='flex gap-4'>
                                            <Image
                                                src={model}
                                                alt='Yayyu Model'
                                                width={85}
                                                // height={75}
                                                className='border-2 border-gray-300 rounded-lg'
                                            />

                                            <div className='text-gray-500 w-36 flex place-items-center font-dmSans text-sm leading-6'>
                                                <p>The Adire Attire with colour variaties</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className='flex gap-4'>
                                            <Image
                                                src={model}
                                                alt='Yayyu Model'
                                                width={85}
                                                className='border-2 border-gray-300 rounded-lg'
                                            />

                                            <div className='text-gray-500 w-36 flex place-items-center font-dmSans text-sm leading-6'>
                                                <p>The Adire Attire with colour variaties</p>
                                            </div>
                                        </div>

                                        <hr />
                                    </div>
                                )}
                            </div>
                            
                            <div className='flex gap-1 relative'>
                                <button onClick={() => setIsSearchBar(!isSearchBar)}><FaSistrix /></button>
                            </div>
                            
                            {/* <div className='-pt-2'><Image src={bagIcon} alt='Cart Empty' width={28} height={30} className=''/></div> */}

                        </div>
                        <div className='-pt-2'><Image src={bagIcon} alt='Cart Empty' width={28} height={30} className=''/></div>

                    </div>
                {/* </div> */}
            </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className='lg:hidden bg-white text-black p-5'>
                <div className='relative'>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search'
                        className='block w-full border-0 px-3.5 py-4 mb-7 text-black ring-1 ring-inset ring-black placeholder:font-dmSans placeholder:text-lg placeholder:text-black placeholder:font-medium focus:ring-2 focus:ring-inset sm:text-sm' 
                    />
                    <span className='absolute top-4 right-5'><FaSistrix className='text-2xl'/></span>
                </div>
                
                <div className='lg:hidden flex flex-col items-center gap-3'>
                    <Link href='/home' onClick={toggleMobileMenu}>HOME</Link>
                    <Link href='/about' onClick={toggleMobileMenu}>ABOUT</Link>
                    <Link href='/shop' onClick={toggleMobileMenu}>SHOP</Link>
                    <div className='flex gap-1 relative'>
                        <Link href='/shop' onClick={toggleMobileMenu}>SHOP</Link>
                        <button className='pt-0.5' onClick={() => setDropdownOpen(!dropdownOpen)}><FaAngleDown /></button>
                            {/* Shop Dropdown Menu */}
                            {dropdownOpen && (
                                <div className='flex flex-col gap-3 bg-white'>
                                    <Link href='/signup'>COLLECTION</Link>
                                    <Link href='/login'>CATEGORY</Link>
                                </div>
                            )}
                    </div>

                    <Link href='/contact' onClick={toggleMobileMenu}>CONTACT</Link>
                    <Link href='/wishlists' onClick={toggleMobileMenu}>YOUR WISHLISTS</Link>
                </div>

                <div>
                <div className='flex gap-3 justify-center items-center my-8'>
                        <Link href='facebook.com' className='rounded-xl text-2xl'><FaFacebook /></Link>
                        <Link href='instagram.com' className='rounded-xl text-2xl'><FaSquareInstagram /></Link>
                        <Link href='tiktok.com' className='rounded-xl text-2xl'><FaTiktok /></Link>
                        <Link href='x.com' className='rounded-xl text-2xl'><FaXTwitter /></Link>
                        <Link href='LinkedIn.com' className='rounded-xl text-2xl'><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
        )}
    </div>
  
  );
}

export default Navbar;

// 'use client'

// import { useState } from 'react'
// import {
//   Dialog,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
// } from '@headlessui/react'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
// import Image from 'next/image';
// import Link from 'next/link';
// import yayyuLogo from '../public/Home 1.svg';
// import bagIcon from '../public/BAG BAG ICON.png';

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white">
//       <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img
//               alt=""
//               src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8 w-auto"
//             />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon aria-hidden="true" className="size-6" />
//           </button>
//         </div>
//         <PopoverGroup className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
//               Product
//               <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
//             </PopoverButton>

//             <PopoverPanel
//               transition
//               className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
//             >
//               <div className="p-4">
//                 {products.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
//                   >
//                     <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                       <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
//                     </div>
//                     <div className="flex-auto">
//                       <a href={item.href} className="block font-semibold text-gray-900">
//                         {item.name}
//                         <span className="absolute inset-0" />
//                       </a>
//                       <p className="mt-1 text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                 {callsToAction.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
//                   >
//                     <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </PopoverPanel>
//           </Popover>

//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Features
//           </a>
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Marketplace
//           </a>
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Company
//           </a>
//         </PopoverGroup>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <a href="#" className="text-sm/6 font-semibold text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//         <div className="fixed inset-0 z-10" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 alt=""
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//                 className="h-8 w-auto"
//               />
//             </a>
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
//                     Product
//                     <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
//                   </DisclosureButton>
//                   <DisclosurePanel className="mt-2 space-y-2">
//                     {[...products, ...callsToAction].map((item) => (
//                       <DisclosureButton
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
//                       >
//                         {item.name}
//                       </DisclosureButton>
//                     ))}
//                   </DisclosurePanel>
//                 </Disclosure>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Features
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Marketplace
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Company
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   )
// }

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import yayyuLogo from '../public/yayyu_logo.png';
import bagIcon from '../public/BAG BAG ICON.png';
import { FaFacebook, FaSquareInstagram, FaTiktok, FaXTwitter, FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div>
        <footer className='bg-footer text-black font-dmSans py-7'>
            <div className='flex justify-evenly'>
                <Link href='/' >
                    <Image 
                        src={yayyuLogo}
                        alt='Yayyu Logo'
                        className='cursor-pointer'
                    />
                </Link>

                <div className='flex gap-10'>
                    <div>
                        <h1 className='font-medium text-base leading-5 pb-2'>QUICK LINK</h1>
                        <ul className='leading-7 font-medium text-sm'>
                            <li>Home</li>
                            <li>Categories</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-medium text-base leading-5 pb-2'>LEGAL</h1>
                        <ul className='leading-7 font-medium text-sm'>
                            <li>Privacy Policy</li>
                            <li>Shipping Policy</li>
                            <li>Delivery Policy</li>
                            <li>Return Policy</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className='font-medium text-base leading-5 pb-2'>FOLLOW US ON</h1>
                    <div className='flex gap-3'>
                        <Link href='facebook.com' className='rounded-xl text-2xl'><FaFacebook /></Link>
                        <Link href='instagram.com' className='rounded-xl text-2xl'><FaSquareInstagram /></Link>
                        <Link href='tiktok.com' className='rounded-xl text-2xl'><FaTiktok /></Link>
                        <Link href='x.com' className='rounded-xl text-2xl'><FaXTwitter /></Link>
                        <Link href='LinkedIn.com' className='rounded-xl text-2xl'><FaLinkedin /></Link>
                    </div>
                </div>

                <div>
                    <h1 className='font-medium text-base leading-5 pb-2'>JOIN OUR COMMUNITY</h1>
                    <form>
                        <input type='email' placeholder='Email Address' className='py-4 w-96 mb-2 placeholder:pl-4' required/>
                    </form>
                    <button className='bg-black text-white py-4 w-96 hover:bg-news'>Subscribe</button>
                    <p className='mt-2 font-medium leading-4 text-sm text-news w-96'>Join the Yayyu community for exclusive access, special offers, and early notifications about our new collections!</p>
                </div>
            </div>

            <hr className='border-black border-1 mt-12 mb-6'/>

            <div className='text-center font-medium text-sm leading-4'>
                <p>Copyright &copy; 2024 Yayyu LifeStyle</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
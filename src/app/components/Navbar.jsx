import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import yayyuLogo from '../public/yayyu_logo.png';
import bagIcon from '../public/BAG BAG ICON.png';
import { FaAngleDown, FaRegUser, FaRegHeart, FaSistrix } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div>
        <nav className='bg-white w-full h-auto flex justify-between p-5'>
            <div className='flex gap-5 text-black font-dmSans text-sm font-normal p-5 ml-5'>
                <Link href='/'>HOME</Link>
                <Link href='/about'>ABOUT</Link>
                <Link href='/Shop' className='flex gap-1'>SHOP <div className='pt-0.5'><FaAngleDown /></div></Link>
                <Link href='/contact'>CONTACT</Link>
            </div>

            <Link href='/' className='cursor-pointer'>
                <Image 
                    src={yayyuLogo}
                    alt='Yayyu Logo'
                />
            </Link>

            <div className='text-black text-2xl flex gap-5 p-5 mr-7'>
                <FaRegUser />
                <FaRegHeart />
                <FaSistrix />
                <div className='-pt-2'><Image src={bagIcon} alt='Cart Empty' width={28} height={30} /></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdListAlt, MdLogout } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import { HiOutlineInbox } from 'react-icons/hi';
import { TbLockPassword, TbUserEdit } from 'react-icons/tb';
import Image from 'next/image';
import account from '../public/Frame 22 account.svg';
import emptycart from '../public/empty-cart 1.svg';

const Page = () => {
  return (
    <div className='bg-gray-100'>
        <nav>
            <Navbar />
            <div>
                <Image 
                    src={account}
                    alt='account'
                />
            </div>
        </nav>

        <main className='bg-red-300 flex w-full'>

            <div className='grid grid-cols-2 container'>
                <div className='grid bg-white w-1/2 h-auto mt-16'>
                    <ul className='flex flex-col text-black font-dmSans font-medium text-sm pb-24'>
                        <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><MdListAlt /> Order List</li>
                        <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><FaRegHeart />Wish List</li>
                        <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><HiOutlineInbox />Inbox</li>
                        <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><TbUserEdit />Edit Account</li>
                        <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><TbLockPassword />Change Password</li>
                    </ul>
                    <hr />
                    <div className='text-black flex gap-1 place-items-center justify-center py-3 font-dmSans font-semibold text-sm active:bg-gray-100 hover:bg-gray-100'><MdLogout />Logout</div>
                </div>
            </div>
            <div className='grid grid-row bg-white'>
                <div>
                    <Image 
                        src={emptycart}
                        alt='emptycart'
                    />
                </div>
            </div>
        </main>
        
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Page
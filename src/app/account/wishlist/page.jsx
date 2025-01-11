import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { MdListAlt, MdLogout } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa6';
import { HiOutlineInbox } from 'react-icons/hi';
import { TbLockPassword, TbUserEdit } from 'react-icons/tb';
import Image from 'next/image';
import account from '@/app/public/svg/Frame 22 account.svg';
import wishlist from '@/app/public/svg/wishlist 1.svg';
import Link from 'next/link';

const Wishlist = () => {
  return (
    <div className='bg-gray-100'>
        <nav>
            <Navbar />
            <div>
                <Image 
                    src={account}
                    alt='account'
                    className='w-full'
                />
            </div>
        </nav>

        <main className=''>
            <div className='flex flex-row gap-5 mx-12'>
                <div className='w-3/12 h-full'>
                    <div className=' bg-white w-full h-auto mt-16 mb-28'>
                        <ul className='flex flex-col text-black font-dmSans font-medium text-sm pb-24'>
                            <Link href='/account'>
                                <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><MdListAlt /> Order List</li>
                            </Link>
                            <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><FaRegHeart />Wish List</li>
                            <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><HiOutlineInbox />Inbox</li>
                            <Link href='/account/edit-account'>
                                <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><TbUserEdit />Edit Account</li>
                            </Link>
                            <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><TbLockPassword />Change Password</li>
                        </ul>
                        <hr />
                        <div className='text-black flex gap-1 place-items-center justify-center py-3 font-dmSans font-semibold text-sm active:bg-gray-100 hover:bg-gray-100'><MdLogout />Logout</div>
                    </div>
                </div>
                <div className=' bg-white w-full h-auto flex justify-center place-items-center mt-16 mb-28'>
                    <div className='flex flex-col justify-center place-items-center gap-3'>
                        <div className='flex'>
                            <Image 
                                src={wishlist}
                                alt='emptycart'
                                className='flex place-items-center'
                            />
                        </div>
                        <div className='text-black text-base font-dmSans font-medium'>
                            <p>You havent placed any orders yet</p>
                        </div>

                            <button className='font-dmSans font-normal leading-4 text-sm bg-black px-10 py-4 hover:bg-activehover'>CONTINUE SHOPPING</button>
                    </div>
                </div>
            </div>
            
        </main>
        
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Wishlist;
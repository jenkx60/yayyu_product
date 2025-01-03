import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-white'>
      <nav className='shadow-lg mb-10'>
        <Navbar />
      </nav>

      <main className='container mx-auto my-32 text-center'>
        <div className='text-black text-4xl font-normal font-dmSerif leading-10'>
          <h1>Thank you for the <span className='italic'>order</span></h1>
        </div>

        <div>
          <p className='text-md text-news font-medium font-dmSans mt-10 leading-5'>YOUR ORDER NUMBER IS #234556</p>
          <p className='text-center text-news text-xs w-1/4 mx-auto mt-2 leading-4'>
            we will contact you to confirm your contatc information. <br />
            If you have any questions, please write to us at:
            info@yayyulifestles.com
          </p>
        </div>

        <Link href='/home' >
          <button className='py-3 px-12 bg-black text-white text-xs mt-10'>Go Back Home</button>
        </Link>

        <div className='mt-10 flex justify-between text-black'>
          <div className='text-2xl font-dmsans font-medium leading-9'>
            <h1>BEST SELLER</h1>
          </div>
          <div>
            <Link href='/shop'>
              <p className='font-dmSans text-base leading-6'>See all</p>
            </Link>
          </div>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default page
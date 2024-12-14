import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import frameContact from '../public/Framecontact.png';


const page = () => {

    let handleSubmit = (e) => {
        e.preventDefault()
    };

  return (
    <div className='bg-white'>
        <nav>
            <Navbar />
        </nav>

        <main>
            <div>
                <Image 
                    src={frameContact}
                    alt='Contact Image 1'
                />
            </div>

            <div className='flex my-28'>
                <div className=' container flex flex-col gap-8 w-full'>
                    <div className=''>
                        <label className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Name</label>
                        <div className='w-full'>
                            <input 
                                required
                                type='text'
                                name='name'
                                placeholder='name'
                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                            />
                        </div>
                    </div>

                    <div className=''>
                        <label className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Email</label>
                        <div className='w-full'>
                            <input 
                                required
                                type='email'
                                name='email'
                                placeholder='email'
                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                            />
                        </div>
                    </div>

                    <div className=''>
                        <label className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Enquiry</label>
                        <div className='w-full'>
                            <textarea
                                required
                                name='enquiry'
                                placeholder='Enquiry'
                                rows={5}
                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                            ></textarea>
                        </div>
                    </div>

                    <div className='text-black flex flex-col items-center justify-center'>
                        <button className='bg-black text-white w-full flex justify-center text-center py-4 font-dmSans font-medium hover:bg-activehover'>Send</button>
                    </div>
                </div>

                <div className='w-full text-black flex flex-col font-dmSans font-normal leading-8'>
                    <p>Gbagada</p>
                    <a href='tel:+23481200000000'>+234 812 0000 0000</a>
                    <a href='mailto:info@yayyulifestyle.com'>info@yayyulifestyle.com</a>
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
"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from 'react-icons/fc';

const Page = () => {
    const [ firstname, setFirstName ] = useState('');
    const [ lastname, setLastName ] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className='bg-white'>
        <nav className='shadow-lg mb-10'>
            <Navbar />
        </nav>

        <main>
            <div>
                <div className='text-black font-dmSerifDis text-5xl font-semibold text-center leading-10 mb-8'>
                    <h1>Register your account</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <div className='w-1/2'>
                            <label className='block text-black font-dmSans'>First Name</label>
                            <div className='w-full'>
                                <input 
                                    required
                                    type='text'
                                    name='firstname'
                                    placeholder='Last Name'
                                    // value={firstname}
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    className='block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                />
                            </div>
                        </div>
                       
                        <div className='w-1/2'>
                            <label className='block text-black font-dmSans'>Last Name</label>
                            <div className='w-full'>
                                <input 
                                    required
                                    type='text'
                                    name='lastname'
                                    placeholder='First name'
                                    // value={lastname}
                                    // onChange={(e) => setLastName(e.target.value)}
                                    className='block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                />
                            </div>
                        </div>

                        <div className='w-1/2'>
                            <label className='block text-black font-dmSans'>Email</label>
                            <div className='w-full'>
                                <input 
                                    required
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    // value={firstname}
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    className='block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                />
                            </div>
                        </div>

                        <div className='w-1/2'>
                            <label className='block text-black font-dmSans'>Password</label>
                            <div className='w-full'>
                                <input 
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    // value={firstname}
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    className='block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                />
                            </div>
                        </div>

                        <div className='w-1/2'>
                                <input 
                                    required
                                    type='password'
                                    name='password'
                                    placeholder='Confirm Password'
                                    // value={firstname}
                                    // onChange={(e) => setFirstName(e.target.value)}
                                    className='block w-full border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='flex w-1/2 text-black font-dmSans text-sm leading-5 font-medium justify-start gap-16'>
                            <p>By clicking, signup you agree to yayyu <span className='underline'>Terms of Use</span> and <span className='underline'>Privacy Policy</span></p>

                            <p className='flex justify-end'>Forget password?</p>
                        </div>
                    </div>

                    <div className='text-black bg-red-300 w-1/2 flex flex-col items-center justify-center'>
                        {/* <div className='bg-black text-white w-full flex justify-center'> */}
                            <button className='bg-black text-white w-full flex justify-center text-center'>Signup</button>
                        {/* </div> */}

                            <h1 className='text-center'>OR</h1>

                        {/* <div className='inline-flex flex-col justify-center bg-black text-white w-full'> */}
                            <button className='inline-flex flex-col justify-center bg-black text-white w-full'><div><FcGoogle />Sign up with google</div></button>
                        {/* </div> */}
                    </div>
                </form>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Page
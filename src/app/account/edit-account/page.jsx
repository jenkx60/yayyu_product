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
import * as yup from 'yup';
import { Formik, FormikProvider } from 'formik';

const Edit = () => {

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
  };

  const validationSchema = yup.object({
    firstname: yup
        .string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must not exceed 50 characters')
        .matches(/^[A-Za-z]+$/, 'First name must contain only alphabets'),
    
    lastname: yup
        .string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must not exceed 50 characters')
        .matches(/^[A-Za-z]+$/, 'Last name must contain only alphabets'),
            
    email: yup
        .string()
        .required('Email is required')
        .email('Email is invalid'),
  });

  const handleSubmission = (values) => {
    alert('Account Edit Successful', values);
  };

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
                            <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><TbUserEdit />Edit Account</li>
                            <li className='flex gap-1 place-items-center pl-2 py-4 active:bg-gray-100 hover:bg-gray-100 active:border-r-4 hover:border-r-4 border-r-activehover'><TbLockPassword />Change Password</li>
                        </ul>
                        <hr />
                        <div className='text-black flex gap-1 place-items-center justify-center py-3 font-dmSans font-semibold text-sm active:bg-gray-100 hover:bg-gray-100'><MdLogout />Logout</div>
                    </div>
                </div>

                <div className=' bg-white w-full h-auto flex justify-center place-items-center mt-16 mb-28'>
                    {/* <div className='flex flex-col justify-center place-items-center gap-3'>
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
                    </div> */}
                    <div>
                      
                      {/* <Formik
                        initialValues={{initialValues}}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmission}
                      >
                        {() => (
                          <Form>
                            <div className='mb-6'>
                               <label 
                                  htmlFor='name' 
                                  className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>First Name
                                </label>
                                  <div className='w-full'> */}
                                    {/* <Field 
                                      type='text'
                                      name='firstname'
                                      placeholder='First Name'
                                      className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                    />
                                    <ErrorMessage name='name' component='div' className='text-red-500' /> */}
                                  {/* </div>
                            </div>
                          </Form>
                        )}

                      </Formik> */}
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

export default Edit;
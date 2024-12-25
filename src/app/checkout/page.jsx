"use client"
import React from 'react';
import Image from 'next/image';
import checkoutbg from '../public/svg/Frame 23 checkout.svg';
import Navbar from '../components/Navbar';
import { Link } from 'next/link';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const checkout = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
    }

    const validationSchema = yup.object({
        firstName: yup
            .string()
            .required('First name is required')
            .min(2, 'First name must be at least 2 characters')
            .max(50, 'First name must not exceed 50 characters')
            .matches(/^[A-Za-z]+$/, 'First name must contain only alphabets'),

        lastName: yup
            .string()
            .required('Last name is required')
            .min(2, 'Last name must be at least 2 characters')
            .max(50, 'Last name must not exceed 50 characters')
            .matches(/^[A-Za-z]+$/, 'Last name must contain only alphabets'),
        
        email: yup
            .string()
            .required('Email is required')
            .email('Email is invalid'),
        
        phone: yup
            .string()
            .required('Phone number is required')
            .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
            .min(11, 'Phone number must be at least 11 characters')
            .max(11, 'Phone number must not exceed 11 characters'),

        address: yup
            .string()
            .required('Address is required')
            .min(10, 'Address must be at least 10 characters')
            .max(100, 'Address must not exceed 100 characters'),

        city: yup
            .string()
            .required('City is required')
            .min(2, 'City must be at least 2 characters')
            .max(50, 'City must not exceed 50 characters')
            .matches(/^[A-Za-z]+$/, 'City must contain only alphabets'),

        postalCode: yup
            .string()
            .required('Postal code is required')
            .matches(/^[0-9]+$/, 'Postal code must contain only numbers')
            .min(6, 'Postal code must be at least 6 characters')
            .max(6, 'Postal code must not exceed 6 characters'),

    });

    const handleSubmission = (values) => {
        alert('Form Submitted Successfully', values);
    }

  return (
    <div className='bg-white'>
        <nav>
            <Navbar />
        </nav>

        <main>
            <div>
                <Image 
                    src={checkoutbg}
                    alt="checkout Background"
                    className='w-full'
                />
            </div>

            <div className='container flex'>
                <div className='w-1/2 pr-4'>
                    {/* delivery details */}
                    <div className='flex justify-between text-black'>
                        <h1 className='font-dmSans font-semibold text-xl leading-9 '>Contact</h1>
                        <a href="/login" className='font-dmSans font-medium text-sm leading-5 underline'>Log in</a>
                    </div>          
                    <div>
                        <Formik initialValues={{initialValues}} validationSchema={validationSchema} onSubmit={handleSubmission}>
                            {() => (
                                <Form>
                                    <div>
                                        <div>
                                            <Field
                                                type='text'
                                                name='enail'
                                                placeholder='Email'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                        </div>
                                    </div>
                                </Form>
                            )}

                        </Formik>
                    </div>          
                </div>

                <hr className='border-2 border-black'/>

                <div>
                    <div></div>             {/*shipping total */}
                </div>
            </div>

        </main>


        

    </div>
  )
}

export default checkout
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
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        postalcode: '',
        shippingmethod: '',
        signupterms: '',
    }

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

        apartment: yup
            .string()
            .required('Apartment is required')
            .min(2, 'Apartment must be at least 2 characters')
            .max(50, 'Apartment must not exceed 50 characters'),

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
        
        shippingmethod: yup
            .string()
            .required('Shipping method is required'),

        signupterms: yup
            .boolean()
            .oneOf([true], 'You must accept the terms and conditions')

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
                <div className='w-1/2 mr-6 mt-32'>
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

                                    <div>
                                        <div>
                                            <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                                <Field 
                                                    type='checkbox'
                                                    name='checked'
                                                    className='mr-1'
                                                />
                                                Sign up for order updates, exclusive offers and news on WhatsApp and/or Email
                                            </label>
                                            
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div> 
                    <div>
                        <h1 className='font-dmSans font-semibold text-black text-xl leading-9 mt-7'>Delivery</h1>
                    </div>

                    <div>
                        <Formik initialValues={{initialValues}} validationSchema={validationSchema} onSubmit={handleSubmission}>
                            {() => (
                                <Form>
                                    <div>
                                        <Field

                                        />
                                    </div>

                                    <div className='flex w-full gap-2 mb-3'>
                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='firstname'
                                                placeholder='First Name'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                            <ErrorMessage name='firstName' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>

                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='lastname'
                                                placeholder='Last Name'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm'
                                            />
                                            <ErrorMessage name='lastName' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='address'
                                            placeholder='Address'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='address' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='apartment'
                                            placeholder='Apartment'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='apartment' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='city'
                                            placeholder='City'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='city' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div className='flex w-full gap-2 mb-3'>
                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='state'
                                                placeholder='State'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                            <ErrorMessage name='state' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>
                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='postalcode'
                                                placeholder='Postal Code'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                            <ErrorMessage name='postalCode' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='phone'
                                            placeholder='Phone'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='phone' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div>
                                        <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                            <Field 
                                                type='checkbox'
                                                name='checked'
                                                className='mr-1'
                                            />
                                            Sign up for order updates, exclusive offers and news on WhatsApp and/or Email
                                        </label>
                                    </div>

                                    <div>
                                        <h1 className='font-dmSans font-semibold text-black text-xl leading-9 mt-6 mb-3'>Contact</h1>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='address'
                                            placeholder='Enter your shipping address'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='address' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div>
                                        <h1 className='font-dmSans font-semibold text-black text-xl leading-9 mt-6 mb-3'>Shipping Method</h1>
                                    </div>

                                    <div>
                                        <div className='flex justify-between border border-gray-300 p-4'>
                                            <div>
                                                <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                                    <Field 
                                                        type='radio'
                                                        name='shippingmethod'
                                                        className='mr-3 custom-radio'
                                                    />
                                                    Standard (within Lagos 3 - 7 working days)
                                                </label>
                                            </div>
                                            <div className='font-dmSans font-medium text-lg leading-5 text-black'>
                                                <p>₦5,000</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex justify-between border border-gray-300 p-4'>
                                                <div>
                                                    <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                                        <Field 
                                                            type='radio'
                                                            name='shippingmethod'
                                                            className='mr-3 custom-radio'
                                                        />
                                                        Standard (within Nigeria 3 - 7 working days)
                                                    </label>
                                                </div>
                                                <div className='font-dmSans font-medium text-lg leading-5 text-black'>
                                                    <p>₦10,000</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className='flex justify-between border border-gray-300 p-4'>
                                                <div>
                                                    <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                                        <Field 
                                                            type='radio'
                                                            name='shippingmethod'
                                                            className='mr-3 custom-radio'
                                                        />
                                                        Standard (Outside Nigeria 3 - 7 working days)
                                                    </label>
                                                </div>
                                                <div className='font-dmSans font-medium text-lg leading-5 text-black'>
                                                    <p>₦15,000</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </div>         
                </div>
                
                <vr className='border border-gray-300'/>
                
                <div>
                    <div></div>             {/*shipping total */}
                </div>
            </div>

        </main>


        

    </div>
  )
}

export default checkout
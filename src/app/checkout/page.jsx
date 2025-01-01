"use client"
import React from 'react';
import Image from 'next/image';
import checkoutbg from '../public/svg/Frame 23 checkout.svg';
import amex from '../public/svg/american-express.svg';
import mastercard from '../public/svg/mastercard.svg';
import visa from '../public/svg/visa.svg';
import union from '../public/svg/unionpay.svg';
import verve from '../public/svg/Group.svg';
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
        cardnumber: '',
        cardexpiry: '',
        cvv: '',
        cardholdername: '',
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
            .oneOf([true], 'You must accept the terms and conditions'),

        cardnumber: yup
            .string()
            .required('Card number is required')
            .matches(/^[0-9]+$/, 'Card number must contain only numbers')
            .min(16, 'Card number must be at least 16 characters')
            .max(16, 'Card number must not exceed 16 characters'),

        cardexpiry: yup
            .string()
            .required('Card expiry is required')
            .matches(/^[0-9]+$/, 'Card expiry must contain only numbers')
            .min(4, 'Card expiry must be at least 4 characters')
            .max(4, 'Card expiry must not exceed 4 characters'),

        cvv: yup
            .string()
            .required('CVV is required')
            .matches(/^[0-9]+$/, 'CVV must contain only numbers')
            .min(3, 'CVV must be at least 3 characters')
            .max(3, 'CVV must not exceed 3 characters'),

        cardholdername: yup
            .string()
            .required('Card holder name is required')
            .min(2, 'Card holder name must be at least 2 characters')
            .max(50, 'Card holder name must not exceed 50 characters')
            .matches(/^[A-Za-z]+$/, 'Card holder name must contain only alphabets'),

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
            <div className=''>
                <Image 
                    src={checkoutbg}
                    alt="checkout Background"
                    className='w-full'
                />
            </div>

            <div className='container flex sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                <div className='w-1/2 mr-6 mt-32 sm:mt-10 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>  {/* checkout details */}
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
                                                    name='signupterms'
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
                                                name='signupterms'
                                                className='mr-1 custom-checkbox'
                                            />
                                            Sign up for order updates, exclusive offers and news on WhatsApp and/or Email
                                        </label>
                                        <ErrorMessage name='signupterms' component='div' className='text-red-500 text-sm font-dmSans'/>
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
                                        <div className='flex justify-between border border-gray-300 p-4 hover:border-activehover'>
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
                                            <div className='flex justify-between border border-gray-300 p-4 hover:border-activehover'>
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
                                            <div className='flex justify-between border border-gray-300 p-4 hover:border-activehover'>
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

                                    {/* Payment */}
                                    <div>
                                        <h1 className='font-dmSans font-semibold text-black text-xl leading-9 mt-6 mb-2'>Payment</h1>
                                        <p className='font-dmSans font-medium text-smalltextcolor text-sm leading-5'>All transaction are secure and encrypted</p>
                                    </div>

                                    {/* Payment form */}
                                    <div className='bg-paycolor p-4 w-full'>
                                        <div className='bg-red-300 border border-activehover p-4 flex justify-between w-full'>
                                            <div>
                                                <p className='font-dmSans font-semibold text-smalltextcolor text-sm leading-6'>Credit Card</p>
                                            </div>

                                            <div className='flex'>
                                                <div>
                                                    <Image
                                                        src={verve}
                                                        alt='Verve'
                                                        // width={5}
                                                        // height={5}
                                                        className='bg-blue-950 w-8 h-5' 
                                                    />
                                                </div>
                                            
                                                <div>
                                                    <Image
                                                        src={mastercard}
                                                        alt='Mastercard'
                                                        // width={5}
                                                        // height={5}
                                                        className='w-8 h-5'  
                                                    />
                                                </div>
                                                <div>
                                                    <Image
                                                        src={visa}
                                                        alt='Visa'
                                                        // width={5}
                                                        // height={5}
                                                        className='w-8 h-5'  
                                                    />
                                                </div>
                                                <div>
                                                    <Image
                                                        src={union}
                                                        alt='Union Pay'
                                                        // width={5}
                                                        // height={5}
                                                        className='w-8 h-5' 
                                                    />
                                                </div>
                                                <div>
                                                    <Image
                                                        src={amex}
                                                        alt='American Express'
                                                        // width={5}
                                                        // height={5}
                                                        className='w-8 h-5'  
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <Field
                                                name='cardNumber'
                                            />
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
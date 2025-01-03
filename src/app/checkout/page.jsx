"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import checkoutbg from '../public/svg/Frame 23 checkout.svg';
import amex from '../public/svg/american-express.svg';
import mastercard from '../public/svg/mastercard.svg';
import visa from '../public/svg/visa.svg';
import union from '../public/svg/unionpay.svg';
import verve from '../public/svg/Group.svg';
import model from '../public/svg/model.svg';
import Navbar from '../components/Navbar';
import { Link } from 'next/link';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from '../components/Footer';
import OrderSummary from '../components/OrderSummary';

const checkout = () => {

    const initialValues = {
        country: '',
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
        discount: '',
    }

    const validationSchema = yup.object({
        country: yup
            .string()
            .required('Country is required'),
        
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

        discount: yup
            .string()
            .matches(/^[0-9]+$/, 'Discount must contain only numbers')
            .min(2, 'Discount must be at least 2 characters')
            .max(50, 'Discount must not exceed 50 characters'),
    });

    const handleSubmission = (values) => {
        alert('Form Submitted Successfully', values);
    };

    const countryOptions = [
        { value: 'Nigeria', place: 'Nigeria' },
        { value: 'USA', place: 'USA' },
        { value: 'Canada', place: 'Canada' },
        { value: 'UK', place: 'UK' },
        { value: 'Australia', place: 'Australia' },
        { value: 'Ghana', place: 'Ghana' },
        { value: 'South Africa', place: 'South Africa' },
        { value: 'India', place: 'India' },
        { value: 'China', place: 'China' },
        { value: 'Japan', place: 'Japan' },
        { value: 'Brazil', place: 'Brazil' },
    ]

    const images = Array(1).fill(model);
    const order = [
        {
            id: 1,
            image: model.src,
            name: 'The Adire Attire with colour variaties',
            price: 150000.0,
            number: 1,
        },
        {
            id: 2,
            image: model.src,
            name: 'The Adire Attire with colour variaties',
            price: 150000.0,
            number: 1,
        },
    ];

    const orderItems = () => {
        return order.map((item) => {
            const { id, name, image, price, number } = item;
            return (
                // <div >
                    <li key={id} className='text-black flex font-dmSans'>
                        {images.map((img, index) => (
                            <div key={index} className='relative mb-3'>
                                <Image
                                    src={img}
                                    alt={`Images of ${index + 1}`}
                                    width={70}
                                    height={80}
                                    className='border border-gray-300 rounded-lg'
                                />
                                <div className='text-white bg-gray-500 rounded-full h-5 p-1 flex place-items-center font-dmSans text-sm leading-6 absolute -top-2 -right-2'>
                                    <p className='p-1'>{number}</p>
                                </div>
                            </div>
                        ))}
                        <div className='flex gap-20 w-full place-items-center justify-between'>
                            <div className=' w-full text-news font-dmSans font-medium text-xs leading-4 pb-4 pl-3 pr-6 mr-10'>
                                <h3>{name}</h3>
                            </div>
                            <div className=' w-full font-dmSans font-normal text-xl leading-6 pb-4'>
                                <p>₦{price.toLocaleString()}.00</p>
                            </div>
                        </div>
                    </li>
                // </div>
            );
        });
    };

    const [ shippingCosts, setShippingCost ] = useState(0);

    // Calculate Subtotal
    const subtotal = order.reduce((acc, item) => acc + item.price, 0);

    // Calculate Shipping Cost
    const shippingCost = 0;

    // Calculate Total
    const total = subtotal + shippingCosts;


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
                {/* checkout details */}
                <div className='w-1/2 mr-10 my-32 sm:mt-10 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>  
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
                                                name='email'
                                                placeholder='Email'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                            />
                                            <ErrorMessage name='email' component='div' className='text-red-500 text-sm font-dmSans'/>
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
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmission}>
                            {() => (
                                <Form>
                                    <div className='mb-3'>
                                        <label className='font-dmSans font-medium text-sm leading-5 text-black'>Country/Region</label>
                                        <Field
                                            name='country'
                                            as='select'
                                            className='block w-full border-0 px-3.5 py-4 bg-transparent text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm'
                                        >
                                            <option value='Nigeria' >Nigeria</option>
                                            {countryOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.place}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>

                                    <div className='flex w-full gap-2 mb-3'>
                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='firstname'
                                                placeholder='First Name'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                            />
                                            <ErrorMessage name='firstName' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>

                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='lastname'
                                                placeholder='Last Name'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm'
                                            />
                                            <ErrorMessage name='lastName' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='address'
                                            placeholder='Address'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                        />
                                        <ErrorMessage name='address' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='apartment'
                                            placeholder='Apartment'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                        />
                                        <ErrorMessage name='apartment' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='city'
                                            placeholder='City'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                        />
                                        <ErrorMessage name='city' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div className='flex w-full gap-2 mb-3'>
                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='state'
                                                placeholder='State'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                            />
                                            <ErrorMessage name='state' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>
                                        <div className='w-1/2'>
                                            <Field
                                                type='text'
                                                name='postalcode'
                                                placeholder='Postal Code'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                            />
                                            <ErrorMessage name='postalCode' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <Field
                                            type='text'
                                            name='phone'
                                            placeholder='Phone'
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
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
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm' 
                                        />
                                        <ErrorMessage name='address' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div>
                                        <h1 className='font-dmSans font-semibold text-black text-xl leading-9 mt-6 mb-3'>Shipping Method</h1>
                                    </div>

                                    {/* Shipping Method */}
                                    <div>
                                        <div className='flex justify-between border border-gray-300 p-4 hover:border-activehover'>
                                            <div>
                                                <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                                    <Field 
                                                        type='radio'
                                                        name='shippingmethod'
                                                        value='5000'
                                                        onChange={(e) => setShippingCost(parseInt(e.target.value))}
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
                                                            value='10000'
                                                            onChange={(e) => setShippingCost(parseInt(e.target.value))}
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
                                                            value='15000'
                                                            onChange={(e) => setShippingCost(parseInt(e.target.value))}
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
                                    <div className='bg-paycolor border border-activehover p-4 flex justify-between w-full'>
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
                                    <div className='bg-paycolor border p-4'>
                                            <div>
                                                <Field
                                                    type='text'                                           
                                                    name='cardNumber'
                                                    placeholder='Card Number'
                                                    className='block w-full bg-transparent mb-3 rounded-md border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover sm:text-sm'
                                                />
                                                <ErrorMessage name='cardNumber' component='div' className='text-red-500 text-sm font-dmSans'/>
                                            </div>

                                            <div className='w-full flex gap-2'>
                                                <div className='w-1/2'>
                                                    <Field
                                                        type='text'
                                                        name='cardexpiry'
                                                        placeholder='Expiration Date (MM/YY)'
                                                        className='block w-full bg-transparent mb-3 rounded-md border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover sm:text-sm'
                                                    />
                                                    <ErrorMessage name='cardexpiry' component='div' className='text-red-500 text-sm font-dmSans'/>
                                                </div>
                                                <div className='w-1/2'>
                                                    <Field
                                                        type='text'
                                                        name='cvv'
                                                        placeholder='Security Code (CVV)'
                                                        className='block w-full bg-transparent mb-3 rounded-md border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover sm:text-sm' 
                                                    />
                                                    <ErrorMessage name='cvv' component='div' className='text-red-500 text-sm font-dmSans'/>
                                                </div>
                                            </div>

                                            <div>
                                                <Field
                                                    type='text'
                                                    name='cardholdername'
                                                    placeholder='Name On Card'
                                                    className='block w-full bg-transparent rounded-md border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-activehover sm:text-sm' 
                                                />
                                            </div>
                                    </div>

                                    <div className='my-5'>
                                        <label className='font-dmSans font-medium text-sm leading-5 text-black'>
                                            <Field 
                                                type='checkbox'
                                                name='signupterms'
                                                className='mr-1 custom-checkbox'
                                            />
                                            Use shipping address as billing address
                                        </label>
                                        <ErrorMessage name='signupterms' component='div' className='text-red-500 text-sm font-dmSans'/>
                                    </div>

                                    <div>
                                        <button className='bg-black text-white w-full text-center text-2xl font-dmSans font-medium py-4 hover:bg-activehover rounded-md'>PAY</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>         
                </div>
                
                <vr className='border border-gray-300'/>
                
                {/* order summary */}
                <div className='w-1/2 my-32 sm:mt-10 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2'>  
                    <div className=' container flex justify-between text-black'>
                        <div >
                            <ul>
                                {orderItems()}
                            </ul>
                        </div>
                    </div>   

                    <div className='container my-8'>
                        <Formik initialValues={{initialValues}} validationSchema={validationSchema} onSubmit={handleSubmission}>
                            {() => (
                                <Form>
                                    <div className='flex text-black'>
                                        <div className='w-full'>
                                            <Field
                                                type='text'
                                                name='discount'
                                                placeholder='Discount Code or Gift Card'
                                                className='block w-80 border-0 px-3.5 py-4 bg-gray-100 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-activehover rounded-md sm:text-sm'
                                            />
                                            <ErrorMessage name='discount' component='div' className='text-red-500 text-sm font-dmSans'/>
                                        </div>

                                        <div className='w-1/4 bg-gray-200 hover:bg-gray-400 flex place-items-center justify-center cursor-pointer rounded-md'>
                                            <button className='font-dmSans font-medium text-sm leading-5 text-gray-500 '>Apply</button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    {/* Display Total */}
                    <div className='container font-dmSans '>
                        <div className='flex justify-between text-black mb-3 '>
                            <p className='font-medium text-sm leading-5'>Subtotal</p>
                            <p className='font-normal text-xl leading-5'>₦{subtotal.toLocaleString()}.00</p>
                        </div>
                        <div className='flex justify-between text-black mb-6'>
                            <p className='font-medium text-sm leading-5'>Shipping</p>
                            <p className='font-normal text-xl leading-5'>₦{shippingCosts.toLocaleString()}.00</p>
                        </div>
                        <div className='flex justify-between text-black'>
                            <p className='font-medium text-sm leading-5'><strong>Total</strong></p>
                            <p className='font-normal text-xl leading-5'>₦{total.toLocaleString()}.00</p>
                        </div>
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

export default checkout
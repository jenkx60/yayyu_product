"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import frameContact from '../public/image/Framecontact.png';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';


const Contact = () => {

    const initialValues = {
        name: '',
        email: '',
        message: '',
    }

    const validationSchema = yup.object({
        name: yup
            .string()
            .required('Name is required')
            .max(50, 'Name must not be more than 50 charaters long'),

        email: yup
            .string()
            .required('Email required')
            .email('Please enter a valid email address'),

        message: yup
            .string()
            .max(200, 'Minimum of 200 charaters required'),
    })

    const handleSubmission = (values) => {
        alert('Form Submitted', values);
    }

    // let handleSubmit = (e) => {
    //     e.preventDefault()
    // };

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
                    className='w-full'
                />
            </div>

            {/* Contact Form and Details */}
            <div className='container flex my-28 sm:block md:flex'>
                <div className='container flex flex-col lg:flex-row gap-8'>
                    {/* Contact Form */}
                    <Formik 
                        initialValues={initialValues}  
                        validationSchema={validationSchema} 
                        onSubmit={handleSubmission}>
                            {() => (
                                <Form className='w-full '>
                                    <div className='mb-6'>
                                        <label 
                                            htmlFor='name' 
                                            className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Name</label>
                                        <div className='w-full'>
                                            <Field 
                                                type='text'
                                                name='name'
                                                placeholder='name'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                            <ErrorMessage name='name' component='div' className='text-red-500' />
                                        </div>
                                    </div>

                                    <div className='mb-6'>
                                        <label 
                                            htmlFor='email' 
                                            className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Email</label>
                                        <div className='w-full'>
                                            <Field 
                                                type='email'
                                                name='email'
                                                placeholder='email'
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                            <ErrorMessage name='email' component='div' className='text-red-500' />
                                        </div>
                                    </div>

                                    <div className='mb-6'>
                                        <label 
                                            htmlFor='message' 
                                            className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Enquiry</label>
                                        <div className='w-full'>
                                            <Field
                                                as='textarea'
                                                name='message'
                                                placeholder='Enquiry'
                                                rows={5}
                                                className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                            />
                                            <ErrorMessage name='message' component='div' className='text-red-500' />
                                        </div>
                                    </div>

                                    <div className='text-black flex flex-col items-start justify-start mt-10'>
                                        <button
                                            type='submit' 
                                            className='bg-black text-white w-full flex justify-center text-center py-4 font-dmSans font-medium hover:bg-activehover'>Send</button>
                                    </div>
                                </Form>
                            )} 
                    </Formik>
                </div>
                
            

                <div className='w-1/2 sm:w-full text-black flex flex-col font-dmSans font-normal leading-8 pl-16 mt-6'>
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

export default Contact
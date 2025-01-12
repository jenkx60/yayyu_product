"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from 'react-icons/fc';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';

// const Forms = () => {
//     let initialValues = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     }

//     let validatePassword = /!@#$%^&*()_+=-{}|\[]:;'"<>/;
// }

const Signup = () => {
    // const [ firstname, setFirstName ] = useState('');
    // const [ lastname, setLastName ] = useState('');

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = yup.object({
        firstname: yup
            .string()
            .required('Please enter your first name')
            .min(2, 'First name must be at least 2 characters')
            .max(50, 'First name must be at most 50 characters')
            .matches(/^[a-zA-Z]+$/, 'First name must be alphabetic'),
        
        lastname: yup
            .string()
            .required('Please enter your last name')
            .min(2, 'Last name must be at least 2 characters')
            .max(50, 'Last name must be at most 50 characters')
            .matches(/^[a-zA-Z]+$/, 'Last name must be alphabetic'),
        
        email: yup
            .string()
            .email('Invalid email address')
            .required('Please enter your email'),
        
        password: yup
            .string()
            .required('Please enter your password')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ ,               
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        
        confirmPassword: yup
            .string()
            .required('Please confirm your password')
            .oneOf([yup.ref('password')], 'Passwords must match'),
    });

    const handleSubmission = (values) => {
        alert('Form Submitted', values);
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

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmission}>
                    {() => (
                        <Form className='mb-28'>
                            <div className='flex flex-col justify-center items-center gap-8'>
                                <div className='w-1/2'>
                                    <label htmlFor='firstname' className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>First Name</label>
                                    <div className='w-full'>
                                        <Field 
                                            type='text'
                                            name='firstname'
                                            placeholder='First Name'
                                            // value={firstname}
                                            // onChange={(e) => setFirstName(e.target.value)}
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='firstname' component='div' className='text-red-500' />
                                    </div>
                                </div>
                                           
                                <div className='w-1/2'>
                                    <label htmlFor='lastname' className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Last Name</label>
                                    <div className='w-full'>
                                        <Field 
                                            type='text'
                                            name='lastname'
                                            placeholder='Last name'
                                            // value={lastname}
                                            // onChange={(e) => setLastName(e.target.value)}
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='lastname' component='div' className='text-red-500' />
                                    </div>
                                </div>
                    
                                <div className='w-1/2'>
                                    <label htmlFor='email' className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Email</label>
                                    <div className='w-full'>
                                        <Field 
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            // value={firstname}
                                            // onChange={(e) => setFirstName(e.target.value)}
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='email' component='div' className='text-red-500' />
                                    </div>
                                </div>
                    
                                <div className='w-1/2'>
                                    <label htmlFor='password' className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Password</label>
                                    <div className='w-full'>
                                        <Field 
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            // value={firstname}
                                            // onChange={(e) => setFirstName(e.target.value)}
                                            className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                        />
                                        <ErrorMessage name='password' component='div' className='text-red-500' />
                                    </div>
                                </div>
                    
                                <div className='w-1/2'>
                                    <Field 
                                        type='password'
                                        name='confirmPassword'
                                        placeholder='Confirm password'
                                        // value={firstname}
                                        // onChange={(e) => setFirstName(e.target.value)}
                                        className='block w-full border-0 px-3.5 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:font-dmSans placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-coloring sm:text-sm' 
                                    />
                                    <ErrorMessage name='confirmPassword' component='div' className='text-red-500' />
                                </div>
                            </div>
                    
                            <div className='flex flex-col items-center justify-center'>
                                <div className='w-1/2 flex my-4'>
                                    <div className='flex w-full text-black font-dmSans text-sm leading-5 font-medium justify-start gap-16'>
                                        <p className='flex justify-start items-start'>By clicking, signup you agree to yayyu <span className='underline px-1 cursor-pointer'>Terms of Use</span> and <span className='underline px-1 cursor-pointer'>Privacy Policy</span></p>
                                    </div>
                    
                                    <div className='flex items-end justify-end w-1/2 text-black font-dmSans text-sm leading-5 font-medium hover:text-gray-600'>
                                        <p>Forget password?</p>
                                    </div>
                                </div>
                    
                                <div className='text-black w-1/2 flex flex-col items-center justify-center'>
                                    {/* <div className='bg-black text-white w-full flex justify-center'> */}
                                    <Link href='/login' className='bg-black hover:bg-activehover text-white w-full flex justify-center text-center py-4 font-dmSans font-medium'>
                                        <button >Signup</button>
                                    </Link>
                                    {/* </div> */}
                    
                                    <h1 className='text-center font-dmSans my-4'>OR</h1>
                                </div>
                    
                                <div className='flex gap-2 items-center justify-center bg-black text-white w-1/2 hover:bg-activehover'>
                                    <FcGoogle className='text-2xl'/><button className='flex justify-center gap-3 bg-black hover:bg-activehover text-white py-4 font-dmSans font-medium'>Sign up with Google</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Signup
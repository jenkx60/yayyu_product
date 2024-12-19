"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from 'react-icons/fc';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Login = () => {

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = yup.object({
        email: yup
            .string()
            .required('Email required')
            .email('Please enter a valid email address'),

        password: yup
            .string()
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .required('Password is required')
            .matches(
                "^(?=.*[A-Za-z](?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
    })

    const handleSubmission = (values) => {
        alert('Form submitted', values)
    }

    // let handleSubmit = (e) => {
    //     e.preventDefault()
    // }
  return (
    <div className='bg-white'>
        <nav className='shadow-lg mb-10'>
            <Navbar />
        </nav>
        
        <main>
            <div className='pb-28'>
                <div className='text-black font-dmSerifDis text-5xl font-semibold text-center leading-10 mb-8'>
                    <h1>Login your account</h1>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmission} className='mb-28'>
                    {() => (
                        <Form className='flex flex-col justify-center items-center gap-8'>
                            <div className='w-1/2'>
                                <label className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Email</label>
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
                                <label className='block text-black font-dmSans text-sm leading-6 font-medium pb-2'>Your Password</label>
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
                    

                            <div className='flex flex-col items-center justify-center w-full -mt-9'>
                                <div className='w-1/2 flex my-4'>
                                    <div className='flex w-full text-black font-dmSans text-sm leading-5 font-medium justify-start gap-10'>
                                        <p className='flex justify-start items-start'>By clicking, signup you agree to yayyu <span className='underline px-1 cursor-pointer'>Terms of Use</span> and <span className='underline px-1 cursor-pointer'>Privacy Policy</span></p>
                                    </div>

                                    <div className='flex items-end justify-end w-1/2 text-black font-dmSans text-sm leading-5 font-medium hover:text-gray-600'>
                                        <p>Forget password?</p>
                                    </div>
                                </div>

                                <div className='text-black w-1/2 flex flex-col items-center justify-center'>
                                    {/* <div className='bg-black text-white w-full flex justify-center'> */}
                                        <button className='bg-black text-white w-full flex justify-center text-center py-4 font-dmSans font-medium'>Log in</button>
                                    {/* </div> */}

                                        <h1 className='text-center font-dmSans my-4'>OR</h1>
                                </div>

                                <div className='flex flex-col items-center justify-center bg-black text-white w-1/2'>
                                    <button className='flex justify-center gap-3 bg-black text-white py-4 font-dmSans font-medium'><div><FcGoogle className='text-2xl'/></div>Log in with Google</button>
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

export default Login
"use client"
import Image from 'next/image'
import heroimg1 from '../public/Frame 27.svg';
import heroimg2 from '../public/Frame 28.svg';
import heroimg3 from '../public/Frame 29.svg';
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Carousel = () => {
    const display = [
        {
            id: 1,
            name: 'Classic and Premium',
            description: 'Collection',
            image: heroimg1.src
        },
        {
            id: 2,
            name: 'Classic and Premium',
            description: 'Collection',
            image: heroimg2.src
        },
        {
            id: 3,
            name: 'Classic and Premium',
            description: 'Collection',
            image: heroimg3.src
        }
    ];

    const CarouselSection = ({ items, autoSlide = false }) => {
        const [ currentSlide, setCurrentSlide ] = useState(0);
        const [ isPaused, setIsPaused ] = useState(false);

        useEffect(() => {
            if (autoSlide && !isPaused) {
                const interval = setInterval(() => {
                    handleNext();
                }, 5000);
                return () => clearInterval(interval);
            }
        }, [ currentSlide, isPaused, autoSlide ]);

        const handlePrevious = () => {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + items.length) % items.length);
        };

        const handleNext = () => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
        };

        const renderContent = () => {
            return (
                <div className='relative w-full h-full'>
                        <Image 
                            src={items[currentSlide].image}
                            alt='Hero Image'
                            width={200}
                            height={200}
                            className='w-full h-full object-fill rounded-lg'
                        />
                    <div className='absolute inset-0 bg-opacity-40 rounded-lg flex flex-col justify-center place-items-center p-6'>
                        <h3 className='text-5xl font-normal text-white font-dmSans leading-10 mb-4'>{items[currentSlide].name}</h3>
                        <h3 className='text-5xl font-normal text-white font-dmSans leading-10'>{items[currentSlide].description}</h3>
                        <button className='bg-black text-white font-dmSans text-xs p-3 mt-4 hover:bg-activehover'>SHOP COLLECTION NOW</button>
                    </div>
                </div>
            );
        };
        return (
            <div className='relative w-full max-w-full mx-auto my-8'>
                <div className='overflow-hidden'>
                    {renderContent()}
                </div>
                <button
                    onClick={handlePrevious}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4  p-2 rounded-full shadow-lg hover:bg-activehover focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
                    aria-label='previous slide'
                ><FaChevronLeft className='w-6 h-6 text-gray-600' /></button>

                <buton
                    onClick={handleNext}
                    className='absolute -right-7 top-1/2 transform -translate-y-1/2 -translate-x-4 p-2 rounded-full shadow-lg hover:bg-activehover focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
                    aria-label='next slide'
                ><FaChevronRight className='w-6 h-6 text-gray-600' /></buton>
            </div>
        );
    };
  return (
    <CarouselSection items={display} autoSlide={true} />
  );
}

export default Carousel
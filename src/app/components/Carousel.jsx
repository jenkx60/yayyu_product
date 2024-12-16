// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import Image from 'next/image';
// import heroimg1 from '../public/Frame 27.svg';
// import heroimg2 from '../public/Frame 28.svg';
// import heroimg3 from '../public/Frame 29.svg';

// const UncontrolledCarousel = () => {
//   return (
//     <div>
//         <Carousel>
//             <Carousel.Item>
//                 <Image 
//                     src={heroimg1}
//                     alt='Bag by a Lady'
//                     // width={100}
//                     // height={100}
//                     text="First slide" 
//                 />
//                 <Carousel.Caption>
//                     <h3>Classic and Premium <br /> Collection</h3>
//                     <button>SHOP COLLECTION NOW</button>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <Image 
//                     src={heroimg2}
//                     alt='Cloth on a rack'
//                     text="Second slide" 
//                 />
//                 <Carousel.Caption>
//                     <h3>Classic and Premium <br /> Collection</h3>
//                     <button>SHOP COLLECTION NOW</button>
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <Image 
//                     src={heroimg3}
//                     alt='Lady standing'
//                     text="Third slide" 
//                 />
//                 <Carousel.Caption>
//                     <h3>Classic and Premium <br /> Collection</h3>
//                     <button>SHOP COLLECTION NOW</button>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     </div>
//   )
// }

// export default UncontrolledCarousel
// 

"use client"
import Image from 'next/image'
import heroimg1 from '../public/Frame 27.svg';
import heroimg2 from '../public/Frame 28.svg';
import heroimg3 from '../public/Frame 29.svg';
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Carousel = () => {
    const products = [
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
                }, 3000);
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
                <div className='relative'>
                    <Image 
                        src={items[currentSlide].image}
                        alt='Hero Image'
                        width={100}
                        height={100}
                        className='w-full h-64 object-cover rounded-lg'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col justify-end p-6'>
                        <h3 className='text-xl font-bold text-white'>{items[currentSlide].name}</h3>
                        <h3 className='text-xl font-bold text-white'>{items[currentSlide].description}</h3>
                        <button className='bg-black text-white'>SHOP COLLECTION NOW</button>
                    </div>
                </div>
            );
        };
        return (
            <div className='relative w-full max-w-3xl mx-auto my-8'>
                <div className='overflow-hidden'>
                    {renderContent()}
                </div>
                <button
                    onClick={handlePrevious}
                    className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    aria-label='previous slide'
                ><FaChevronLeft className='w-6 h-6 text-gray-600' /></button>

                <buton
                    onClick={handleNext}
                    className='absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    aria-label='next slide'
                ><FaChevronRight className='w-6 h-6 text-gray-600' /></buton>
            </div>
        );
    };
  return (
    <CarouselSection items={products} autoSlide={true} />
  );
}

export default Carousel
import React from 'react';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaChevronRight } from 'react-icons/fa6';
import Image from 'next/image';
import model from '../public/model.svg';

const page = () => {
  const products = [
    {
      id: 1,
      image: model.src,
      name: 'THE ADIRE ATTIRE',
      price: 150000.00
    }
  ];

  const productItems = () => {
      return products.map((item) => {
        const { id, name, image, price } = item;
        return (
          <li key={id}>
              <Image src={image} alt='model' width={50} height={50} />
              <h3>{name}</h3>
              <p>₦{price.toLocaleString()}</p>
          </li>
        );
      });
  };
  return (
    <div>
      <Navbar />
      
      <main className='bg-white'>
        <Carousel />

        <div>
          <div className='container flex justify-between text-black font-dmSans'>
            <h3 className='font-normal leading-6 text-sm tracking-wide'>ABOUT US</h3>
            <p className='flex text-xs font-medium'>Learn More <FaChevronRight className='text-xs mt-0.5 pl-1'/></p>
          </div>

          <div className='container font-dmSerifDis font-normal text-2xl italic w-1/2 mt-7 text-black'>
            <h1>To provide sustainable clothing for both <br /> formal and informal occasions.</h1>
          </div>

          <div className='container font-normal text-base leading-6 font-dmSans text-smalltextcolor mt-7 flex justify-between '>
            <p className='w-2/4'>We are dedicated to crafting garments using only the finest materials, emphasizing durability and elegance. Each piece in our collection is thoughtfully designed with exceptional craftmanship, allowing you to 
              express your individuality while feeling confident and comfortable.</p>

            <div className='text-end font-dmSans font-normal text-base leading-6'>
              <p>DISCOVER THE <br /> POWER OF BEAUTY</p>
            </div>
          </div>

          <div>
            <p className='container flex text-sm font-medium font-dmSans text-black mt-7'>Learn More <FaChevronRight className='text-xs mt-1 pl-1'/></p>
          </div>
        </div>

      <div>
        <ul>
          {productItems()}
        </ul>
      </div>
      </main>
      

      <Footer />
    </div>
  )
}

export default page
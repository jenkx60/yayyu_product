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
          <li key={id} className='text-black'>
              <Image src={image} alt='model' width={300} height={250} />
              <h3 className='flex justify-center font-dmSans text-sm leading-4 mt-4'>{name}</h3>
              <p className='flex justify-center font-dmSerifDis text-xl leading-6'>₦{price.toLocaleString()}.00</p>
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

        <div className='container font-dmSans mt-12 mb-8'>
          <h1 className='font-normal leading-7 text-xl tracking-wide text-black'>NEW ARRIVALS</h1>
        </div>
        <div className='container'>
          <ul className='flex mb-10'>
            {productItems()}
            {productItems()}
            {productItems()}
            {productItems()}
          </ul>
        </div>

        <div className='container'>
          <ul className='flex mb-8'>
            {productItems()}
            {productItems()}
            {productItems()}
            {productItems()}
          </ul>
        </div>

        <div className='container flex justify-center'>
          <button className='bg-black hover:bg-activehover font-dmSans font-normal text-sm leading-4 w-2/12 align-middle flex justify-center items-center py-4'>VIEW ALL</button>
        </div>

        <div className='container font-dmSans mt-12 mb-8'>
          <h1 className='font-normal leading-7 text-xl tracking-wide text-black'>EXPLORE MORE</h1>
        </div>

        
      </main>
      

      <Footer />
    </div>
  )
}

export default page
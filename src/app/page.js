"use client"
import React, { Suspense, useContext } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import model from "./public/svg/model.svg";
import suit from "./public/svg/component6.svg";
import adire from "./public/svg/component7.svg";
import kaftan from "./public/svg/component8.svg";
import gown from "./public/svg/component9.svg";
import Link from "next/link";
// import CartButton from "./components/CartButton";

const Carousel = React.lazy(() => import( "./components/Carousel"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"))

const HomePage = () => {
  const images = Array(1).fill(model);

  const products = [
    {
      id: 1,
      image: model.src,
      name: "THE ADIRE ATTIRE",
      price: 150000.0,
    },
  ];

  // const handleAddToCart = (product) => {
  //   const updatedCart = [...cartItems, product];
  //   setCartItems(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // };


  const productItems = () => {
    return products.map((item) => {
      const { id, name, price } = item;
      return (
        <li key={id} className="text-black">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden">
              <Link href='/category'>
                <Image
                  src={img}
                  alt={`Images of ${index + 1}`}
                  width={300}
                  height={250}
                  className='transition-transform duration-500 hover:scale-110'
                  // loading="lazy"
                />
              </Link>
            </div>
          ))}
          <h3 className="flex justify-center font-dmSans text-sm leading-4 mt-4">
            {name}
          </h3>
          <p className="flex justify-center font-dmSerifDis text-xl leading-6">
            ₦{price.toLocaleString()}.00
          </p>

          {/* <button
            className="bg-black hover:bg-activehover text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => handleAddToCart(item)}
          >Add to Cart</button> */}
          {/* <CartButton /> */}
        </li>
      );
    });
  };
  return (
    <div className="bg-white">
      <Suspense fallback={<div className="text-5xl text-black">Loading Navbar</div>}>
        <Navbar />
      </Suspense>

      <main className="bg-white">
      <Suspense fallback={<div>Loading Carousel</div>}>
        <Carousel />
      </Suspense>

        <div>
          <div className="container flex justify-between text-black font-dmSans">
            <h3 className="font-normal leading-6 text-sm tracking-wide">
              ABOUT US
            </h3>
            <p className="flex text-xs font-medium">
              Learn More <FaChevronRight className="text-xs mt-0.5 pl-1" />
            </p>
          </div>

          <div className="container font-dmSerifDis font-normal text-xl md:text-2xl italic w-full mt-7 text-black">
            <h1>
              To provide sustainable clothing for both <br /> formal and
              informal occasions.
            </h1>
          </div>

          <div className="container font-normal text-sm md:text-base leading-6 font-dmSans text-smalltextcolor mt-7 flex flex-col md:flex-row justify-between ">
            <p className="w-full md:w-2/4">
              We are dedicated to crafting garments using only the finest
              materials, emphasizing durability and elegance. Each piece in our
              collection is thoughtfully designed with exceptional craftmanship,
              allowing you to express your individuality while feeling confident
              and comfortable.
            </p>

            <div className="text-end font-dmSans font-normal text-base leading-6">
              <p>
                DISCOVER THE <br /> POWER OF BEAUTY
              </p>
            </div>
          </div>

          <div>
            <p className="container flex text-sm font-medium font-dmSans text-black mt-7">
              Learn More <FaChevronRight className="text-xs mt-1 pl-1" />
            </p>
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="container px-4 md:px-0 font-dmSans mt-12 mb-8">
          <h1 className="container font-normal leading-7 text-xl tracking-wide text-black">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="container">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {productItems()}
            {productItems()}
            {productItems()}
            {productItems()}
          </ul>
        </div>

        <div className="container">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {productItems()}
            {productItems()}
            {productItems()}
            {productItems()}
          </ul>
        </div>

        <div className="container flex justify-center mt-8">
          <button className="bg-black hover:bg-activehover font-dmSans font-normal text-sm leading-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 align-middle flex justify-center items-center py-4">
            VIEW ALL
          </button>
        </div>

        {/* Explore More Section */}
        <div className="container px-4 md:px-0 font-dmSans mt-12 mb-8">
          <h1 className="container font-normal leading-7 text-lg md:text-xl tracking-wide text-black">
            EXPLORE MORE
          </h1>
        </div>

        <div className="container grid grid-cols-1 sm:grid-col lg:grid-cols-2 gap-3 mb-10">
          <div className="relative">
            <Image 
              src={suit} 
              alt="suit" 
              width={612} 
              height={475}
              className="w-full h-auto object-cover"
              // loading="lazy" 
            />
            <div className="absolute bg-black inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer bg-opacity-50">
              <Link href="/shopping">
                <button className="bg-black text-white font-dmSans text-xs md:text-sm p-2 md:p-3 hover:bg-activehover">SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image 
              src={adire} 
              alt="adire" 
              width={612} 
              height={475}
              className="w-full h-auto object-cover"
              // loading="lazy"
            />
            <div className="absolute bg-black inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer bg-opacity-50">
              <Link href="/shopping">
                <button className="bg-black text-white font-dmSans text-xs md:text-sm p-2 md:p-3 hover:bg-activehover">SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image 
              src={kaftan} 
              alt="kaftan" 
              width={612} 
              height={475}
              className="w-full h-auto object-cover"
              // loading="lazy"
            />
            <div className="absolute bg-black inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer bg-opacity-50">
              <Link href="/shopping">
                <button className="bg-black text-white font-dmSans text-xs md:text-sm p-2 md:p-3 hover:bg-activehover">SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image 
              src={gown} 
              alt="gown" 
              width={612} 
              height={475}
              className="w-full h-auto object-cover"
              // loading="lazy"
            />
            <div className="absolute bg-black inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer bg-opacity-50">
              <Link href="/shopping">
                <button className="bg-black text-white font-dmSans text-xs md:text-sm p-2 md:p-3 hover:bg-activehover">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Suspense fallback={<div>Loading Footer</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default HomePage;

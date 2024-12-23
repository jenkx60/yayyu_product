import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import model from "../public/svg/model.svg";
import suit from "../public/svg/component6.svg";
import adire from "../public/svg/component7.svg";
import kaftan from "../public/svg/component8.svg";
import gown from "../public/svg/component9.svg";
import Link from "next/link";

// const model = require("../public/svg/model.svg");
// const suit = require("../public/svg/component6.svg");
// const adire = require("../public/svg/component7.svg");
// const kaftan = require("../public/svg/component8.svg");
// const gown = require("../public/svg/component9.svg");
{
  /* <Image src={image} alt="model" width={300} height={250} />; */
}
const page = () => {
  const images = Array(8).fill(model);

  const products = [
    {
      id: 1,
      image: model.src,
      name: "THE ADIRE ATTIRE",
      price: 150000.0,
    },
  ];

  const productItems = () => {
    return products.map((item) => {
      const { id, name, image, price } = item;
      return (
        <li key={id} className="text-black">
          {images.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                alt={`Images of ${index + 1}`}
                width={300}
                height={250}
              />
            </div>
          ))}
          <h3 className="flex justify-center font-dmSans text-sm leading-4 mt-4">
            {name}
          </h3>
          <p className="flex justify-center font-dmSerifDis text-xl leading-6">
            ₦{price.toLocaleString()}.00
          </p>
        </li>
      );
    });
  };
  return (
    <div className="bg-white">
      <Navbar />

      <main className="bg-white">
        <Carousel />

        <div>
          <div className="container flex justify-between text-black font-dmSans">
            <h3 className="font-normal leading-6 text-sm tracking-wide">
              ABOUT US
            </h3>
            <p className="flex text-xs font-medium">
              Learn More <FaChevronRight className="text-xs mt-0.5 pl-1" />
            </p>
          </div>

          <div className="container font-dmSerifDis font-normal text-2xl italic w-1/2 mt-7 text-black">
            <h1>
              To provide sustainable clothing for both <br /> formal and
              informal occasions.
            </h1>
          </div>

          <div className="container font-normal text-base leading-6 font-dmSans text-smalltextcolor mt-7 flex justify-between ">
            <p className="w-2/4">
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

        <div className="container font-dmSans mt-12 mb-8">
          <h1 className="font-normal leading-7 text-xl tracking-wide text-black">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="container">
          <ul className="flex mb-10">
            {productItems()}
            {productItems()}
            {productItems()}
            {productItems()}
          </ul>
        </div>

        <div className="container">
          <ul className="flex mb-8">
            {productItems()}
            {productItems()}
            {productItems()}
            {productItems()}
          </ul>
        </div>

        <div className="container flex justify-center">
          <button className="bg-black hover:bg-activehover font-dmSans font-normal text-sm leading-4 w-2/12 align-middle flex justify-center items-center py-4">
            VIEW ALL
          </button>
        </div>

        <div className="container font-dmSans mt-12 mb-8">
          <h1 className="font-normal leading-7 text-xl tracking-wide text-black">
            EXPLORE MORE
          </h1>
        </div>

        <div className="container grid grid-cols-2 w-full gap-3 mb-10">
          <div className="relative">
            <Image src={suit} alt="suit" width={612} height={475} />
            <div className="absolute bg-black inset-44 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer">
              <Link href="/shopping">
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image src={adire} alt="adire" width={612} height={475} />
            <div className="absolute bg-black inset-44 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer">
              <Link href="/shopping">
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image src={kaftan} alt="kaftan" width={612} height={475} />
            <div className="absolute bg-black inset-44 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer">
              <Link href="/shopping">
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image src={gown} alt="gown" width={612} height={475} />
            <div className="absolute bg-black inset-44 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer">
              <Link href="/shopping">
                <button>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;

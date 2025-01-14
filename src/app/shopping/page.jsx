"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
// import cheackouthead from "../public/Frame 23 checkout.svg";
import shophead from "../public/svg/Frame 23 shopping.svg";
import model from "../public/svg/model.svg";
// import ProductTabs from "../components/ProductTabs";
import { FaBagShopping, FaMinus, FaPlus, FaRegStar, FaStar } from "react-icons/fa6";
import SizeTabs from "../components/SizeTabs";
import ColorTabs from "../components/ColorTabs";
import CartCounter from "../components/CartCounter";
import { FaShoppingBag } from "react-icons/fa";
import { CiCreditCard1, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import ProductTabs from "../components/ProductTabs";

const Shopping = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="bg-white text-black">
      <div>
        <Navbar />
      </div>

      <div>
        <Image 
          src={shophead} 
          alt="shop Head"
          className="w-full" 
        />
      </div>

      <main className="container mt-20 flex">
        <div className="w-full">
          <div>
            <Image
              src={model}
              alt="model"
              width={470}
              height={600}
              className="border-2"
            />
          </div>
          <div className="flex gap-2.5 mt-1.5">
            <div>
              <Image
                src={model}
                alt="model"
                width={150}
                height={200}
                className="border-2"
              />
            </div>
            <div>
              <Image
                src={model}
                alt="model"
                width={150}
                height={200}
                className="border-2"
              />
            </div>
            <div>
              <Image
                src={model}
                alt="model"
                width={150}
                height={200}
                className="border-2"
              />
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="font-dmSans font-medium text-3xl leading-9 mb-4">
            <h1>GOWN</h1>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-1">
              <button>
                <FaStar />
              </button>
              <button>
                <FaStar />
              </button>
              <button>
                <FaStar />
              </button>
              <button>
                <FaStar />
              </button>
              <button>
                <FaRegStar />
              </button>
            </div>

            <div className="font-dmSans font-medium text-xs leading-4">
              <p>29 Reviews</p>
            </div>
          </div>

          <div className="">
            <h1 className="font-dmSerifDis font-normal text-5xl leading-10 mt-5">
              ₦150,000.00
            </h1>

            <p className="font-dmSans font-medium text-base leading-5 mt-5">
              Embrace the vibrant beauty if African culture with our stunning
              African print design gown. This eye-catching piece features a
              bold, colorful pattern that celebrate traditional artistry while
              offeriing a modern silhouette.
            </p>
          </div>

          <hr className="mt-5" />

          <div className="mt-5">
            <div className="font-dmSans font-medium text-xl leading-6 mb-3">
              <h1>SIZE</h1>
            </div>
            <SizeTabs />
          </div>

          <hr className="mt-5" />

          <div className="mt-5">
            <div className="font-dmSans font-medium text-xl leading-6 mb-3">
              <h1>COLOURS</h1>
            </div>
            <ColorTabs />
          </div>

          <hr className="mt-5"/>

          <div className="mt-5">
            <div className="flex gap-3 font-dmSans font-medium text-xl leading-6 mb-3">
              <div className=" w-1/4">
                <CartCounter />
              </div>
              
              <div className="bg-black text-white flex gap-3 w-full justify-center place-items-center hover:bg-activehover cursor-pointer">
                <button className="flex gap-3 ">
                  <h1 className="font-dmSans text-lg leading-4">ADD TO BAG</h1>
                  <HiOutlineShoppingBag className="text-white"/>
                </button>
              </div>

              <div className="bg-gray-200 text-black p-4 w-1/6 flex gap-3 justify-center font-dmSans font-normal text-xl">
                <CiHeart className="text-2xl place-items-center"/>
              </div>
            </div>
          </div>

          <div>
            <Link href='/checkout' className="border-2 border-black w-full flex gap-2 justify-center p-5">
              <button className="font-dmSans text-lg leading-4">BUY NOW</button>
              <CiCreditCard1 className="text-xl"/>
            </Link>
          </div>

          <div className="mt-5">
            <ProductTabs />
          </div>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Shopping;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import yayyuLogo from "../public/svg/Home 1.svg";
// import bagIcon from "../public/image/BAG BAG ICON.png";
import {
  FaFacebook,
  FaSquareInstagram,
  FaTiktok,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-footer text-black font-dmSans py-7">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 ">
            {/* Logo Section */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-start">
              <Link href="/home">
                <Image
                  src={yayyuLogo}
                  alt="Yayyu Logo"
                  className="cursor-pointer w-32 h-auto"
                />
              </Link>
            </div>

            {/* Quick Links and Legal Section */}
            <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-auto">
              <div className="w-full sm:w-1/2 lg:w-auto">
                <h1 className="font-medium text-base leading-5 pb-2">
                  <strong>QUICK LINK</strong>
                </h1>
                <ul className="leading-7 font-medium text-sm">
                  <Link href='/home'>
                    <li>Home</li>
                  </Link>

                  <Link href='/category'>
                    <li>Categories</li>
                  </Link>

                  <Link href='/about'>
                    <li>About Us</li>
                  </Link>

                  <Link href='/contact'>
                    <li>Contact</li>
                  </Link>
                  
                  <Link href='/policy/faqs'>
                    <li>FAQs</li>
                  </Link>
                </ul>
              </div>

              <div className="w-full sm:w-1/2 lg:w-auto">
                <h1 className="font-medium text-base leading-5 pb-2"><strong>LEGAL</strong></h1>
                <ul className="leading-7 font-medium text-sm">
                  <Link href='/policy/privacy'>
                    <li>Privacy Policy</li>
                  </Link>

                  <Link href='/policy/shipping-policy'>
                    <li>Shipping Policy</li>
                  </Link>

                  <Link href='/policy/delivery'>
                    <li>Delivery Policy</li>
                  </Link>
                  
                  <Link href='/policy/return'>
                    <li>Return Policy</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="w-full lg:w-auto">
              <h1 className="font-medium text-base leading-5 pb-3">
                FOLLOW US ON
              </h1>
              <div className="flex gap-3">
                <Link href="facebook.com" className="rounded-xl text-2xl">
                  <FaFacebook />
                </Link>
                <Link href="instagram.com" className="rounded-xl text-2xl">
                  <FaSquareInstagram />
                </Link>
                <Link href="tiktok.com" className="rounded-xl text-2xl">
                  <FaTiktok />
                </Link>
                <Link href="x.com" className="rounded-xl text-2xl">
                  <FaXTwitter />
                </Link>
                <Link href="LinkedIn.com" className="rounded-xl text-2xl">
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="w-full lg:w-auto">
              <h1 className="font-medium text-base leading-5 pb-2">
                JOIN OUR COMMUNITY
              </h1>
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="py-3 w-full lg:w-96 mb-2 placeholder:text-sm placeholder:text-gray-500"
                  required
                />
              </form>
              <button className="bg-black text-white py-2 px-4 w-full lg:w-full hover:bg-activehover">
                Subscribe
              </button>
              <p className="mt-2 font-medium leading-4 sm:text-xs text-sm text-news sm:w-80 w-full">
                Join the Yayyu community for exclusive access, special offers, and
                early notifications about our new collections!
              </p>
            </div>
          </div>

          <hr className="border-black border-1 mt-12 mb-6" />

          <div className="text-center font-medium text-sm leading-4">
            <p>Copyright &copy; 2024 Yayyu LifeStyle</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

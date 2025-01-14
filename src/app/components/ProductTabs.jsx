import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6';

const ProductTabs = () => {
    const [ activeTab, setActiveTab ] = useState(() => {
      return localStorage.getItem('activeTab') || 'description';
    });

    useEffect(() => {
      localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const renderContent = () => {
      switch (activeTab) {
        case 'description':
          return (
            <div className='font-dmSans font-medium text-sm leading-6 w-full'>
              <p className='mt-6'>Embrace the vibrant beauty of African culture with our stunning African print design gown. This eye-catching piece features a bold, colorful pattern that celebrates traditional artistry while offering a mordern silhouette.</p>
            </div>
          );
        case 'details':
          return (
            <div className='mt-6'>
              <h3 className='font-dmSans font-medium text-sm' >PRODUCT SPECIFICATION</h3>
                <ul className='list-disc pl-7 font-dmSans font-medium text-sm leading-5 pt-2' >
                  <li>Style</li>
                  <li>Lined</li>
                  <li>Weaved</li>
                  <li>and so on</li>
                </ul>
            </div>
          );
        case 'reviews':
          return (
            <div className='mt-6'>
              <div className='flex flex-col justify-center gap-2'>
                <p className='text-center'>Give a rating on this product</p>
                <div className='text-center'>
                  <button><FaRegStar /></button>
                  <button><FaRegStar /></button>
                  <button><FaRegStar /></button>
                  <button><FaRegStar /></button>
                  <button><FaRegStar /></button>
                </div>
              </div>
              

              <div >
                <textarea 
                  type="message"
                  placeholder="Tell your experience"
                  className='w-3/4 border border-gray-100 placeholder:text-sm'
                  rows={4}
                ></textarea>

                <div className='flex justify-end w-3/4 mt-2'>
                  <button className='bg-black py-2 px-8 text-white hover:bg-activehover'>SEND</button>
                </div>
              </div>

              
            </div>
          );
        default:
          return null;
      }
    };
  return (
    <div>
      <div className='flex gap-5'>
        <button 
          onClick={() => setActiveTab('description')} 
          className={`border-b-2 w-36 text-black pb-4 ${activeTab === 'description' ? 'border-black' : 'border-gray-200'} font-dmSans font-medium text-xl leading-6 `}>Description</button>
        <button 
          onClick={() => setActiveTab('details')} 
          className={`border-b-2 w-32 text-black pb-4 ${activeTab === 'details' ? 'border-black' : 'border-gray-200'} font-dmSans font-medium text-xl leading-6 `}>Details</button>
        <button 
          onClick={() => setActiveTab('reviews')} 
          className={`border-b-2 w-32 text-black pb-4 ${activeTab === 'reviews' ? 'border-black' : 'border-gray-200'} font-dmSans font-medium text-xl leading-6 `}>Reviews</button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs
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
            <div className='font-dmSans font-medium text-sm leading-6 w-1/3'>
              <p>Embrace the vibrant beauty of African culture with our stunning African print design gown. This eye-catching piece features a bold, colorful pattern that celebrates traditional artistry while offering a mordern silhouette.</p>
            </div>
          );
        case 'details':
          return (
            <div>
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
            <div>
              <p>Give a rating on this product</p>
              <div>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaRegStar /></button>
              </div>

              <div>
                <textarea 
                  type="message"
                  placeholder="Tell your experience"
                ></textarea>

                <button>SEND</button>
              </div>
            </div>
          );
        default:
          return null;
      }
    };
  return (
    <div>
      <div className='flex gap-9'>
        <button 
          onClick={() => setActiveTab('description')} 
          className={`border-b-4 w-36 text-black pb-4 ${activeTab === 'description' ? 'border-black' : 'border-gray-200'} font-dmSans font-medium text-2xl leading-6 `}>Description</button>
        <button 
          onClick={() => setActiveTab('details')} 
          className={`border-b-4 w-32 text-black pb-4 ${activeTab === 'details' ? 'border-black' : 'border-gray-200'} font-dmSans font-medium text-2xl leading-6 `}>Details</button>
        <button 
          onClick={() => setActiveTab('reviews')} 
          className={`border-b-4 w-32 text-black pb-4 ${activeTab === 'reviews' ? 'border-black' : 'border-gray-200'} font-dmSans font-medium text-2xl leading-6 `}>Reviews</button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs
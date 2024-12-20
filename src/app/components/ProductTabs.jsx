import React, { useState } from 'react'

const ProductTabs = () => {
    const [ activeTab, setActiveTab ] = useState('details');

    const renderContent = () => {
      switch (activeTab) {
        case 'description':
          return (
            <div>
              <p>Embrace the vibrant beauty of African culture with our stunning African print design gown. This eye-catching piece features a bold, colorful pattern that celebrates traditional artistry while offering a mordern silhouette.</p>
            </div>
          );
        case 'details':
          return (
            <div>
              <h3>PRODUCT SPECIFICATION</h3>
                <ul>
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
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
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
      <div>
        <button onClick={() => setActiveTab('description')}>Description</button>
        <button onClick={() => setActiveTab('details')}>Details</button>
        <button onClick={() => setActiveTab('reviews')}>Reviews</button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs
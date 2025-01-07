import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import deliveryimg from '@/app/public/svg/deliveryimg.svg';
import React from 'react';

const delivery = () => {
  return (
    <div className='bg-white'>
      <nav>
        <Navbar />
      </nav>

      <main className='text-black'>
        <div>
          <Image 
            src={deliveryimg}
            alt='Delivery Background'
            className='w-full'
          />
        </div>

        <div className='container mx-auto mt-10 mb-36 w-4/5 font-dmSans text-sm leading-6'>
          <div className='mb-8 font-bold'>
            <h1><strong>Return Policy</strong></h1>
          </div>

          <div className='mb-4 font-medium'>
            <h3>
              <strong>Delivery Policy</strong>
            </h3>

            <p>At yayyu lifestyle, we want to ensure that your order reaches you quickly and safely. Please review our delivery policy below for detailed information about how we handle shipping, delivery timelines, and any special considerations.</p>
          </div>

          <div className='mb-5'>
            <h3 className='mb-3'>
              <strong>Delivery Timeframes</strong>
            </h3>

            <p>We strive to deliver your order as quickly as possible! Our delivery times depend on the shipping method you select and your delivery location.</p>

            <div className='mb-6'>
              <h3>
                <strong>1. Standard Delivery</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: 5-7 business days from the date your order is shipped.</li>
                <li>Available for: Domestic orders within [Country].</li>
              </ol>
            </div>

            <div className='mb-6'>
              <h3>
                <strong>2. Expedited Delivery</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: 2-3 business days from the date your order is shipped.</li>
                <li>Available for: Domestic orders within [Country].</li>
              </ol>
            </div>

            <div className='mb-6'>
              <h3>
                <strong>3. Express Delivery</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: 1 business day (Next-Day Delivery).</li>
                <li>Available for: Orders placed before [cutoff time, e.g., 2 PM] within [Country].</li>
              </ol>
            </div>

            <div className='mb-7'>
              <h3>
                <strong>4. International Delivery</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: Typically 7-14 business days, depending on your location.</li>
                <li>Available for: International orders.</li>
                <li>Note: Delivery times may vary due to customs processing and local shipping conditions.</li>
              </ol>
            </div>
          </div>

          <div className='mb-6'>
              <h3>
                <strong>Shipping Cutoff Times</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Orders placed before 2:00 PM EST on business days will be processed and shipped the same day (subject to product availability).</li>
                <li>Orders placed after 2:00 PM EST will be processed the following business day.</li>
                <li>Orders placed on weekends or public holidays will be processed on the next business day.</li>
              </ol>
            </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default delivery
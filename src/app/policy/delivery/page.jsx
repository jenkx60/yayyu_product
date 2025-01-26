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
            <h1 className='text-lg'><strong>Return Policy</strong></h1>
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

          <div className='mb-6'>
              <h3>
                <strong>Order Tracking</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Once your order ships, you will receive a tracking number via email, allowing you to track the progress of your delivery.</li>
                <li>You can track your order through the courier’s website, and you will receive updates on the estimated delivery date.</li>
              </ol>
          </div>

          <div className='mb-6'>
              <h3>
                <strong>Shipping Carrier</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>We partner with reliable shipping carriers such as [Carrier Names, e.g., UPS, FedEx, USPS, DHL] to ensure your package arrives on time and in perfect condition.</li>
              </ol>
          </div>

          <div className='mb-6'>
              <h3>
                <strong>Shipping Restrictions</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>We do not deliver to P.O. Boxes, APO/FPO addresses, or international forwarding addresses.</li>
                <li>Remote Areas: Some rural or remote areas may experience longer delivery times, depending on the courier&apos;s coverage.</li>
              </ol>
          </div>

          <div>
            <h3>
              <strong>Delivery Issues</strong>
            </h3>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>1. Incorrect Address</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Please double-check the shipping address during checkout to avoid delays. If you need to update your address, contact us as soon as possible at [Customer Service Email]. Once an order has been processed, we cannot change the shipping address.</li>
              </ol>
            </div>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>2. Missing or Lost Packages</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>If your package is marked as <span>delivered</span> but you have not received it, please first check with neighbors or your local postal service. We are not responsible for lost or stolen packages once they are marked as delivered by the carrier.</li>
                <li>If you believe your package was lost, please contact our Customer Service team at [Customer Service Email] and we will assist you with the claims process.</li>
              </ol>
            </div>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>3. Damaged Items</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>If your order arrives damaged or defective, please contact us immediately at [Customer Service Email] with photos of the damaged items and packaging. We will process your claim promptly and send you a replacement or issue a refund, depending on your preference.</li>
              </ol>
            </div>
          </div>

          <div className='mb-6 font-medium'>
            <h3 className='mb-3'>
              <strong>Delivery Delays</strong>
            </h3>

            <p>While we make every effort to ensure timely delivery, please be aware that delays may occur due to unforeseen circumstances, such as:</p>
            <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
              <li>Weather conditions or natural disasters</li>
              <li>Shipping carrier delays</li>
              <li>Customs processing for international orders</li>
            </ol>
          </div>

          <div className='mb-4 font-medium'>
            <p>In case of any significant delays, we will notify you via email and work to resolve the issue as quickly as possible.</p>
          </div>

          <div className='mb-8 font-medium'>
              <h3>
                <strong>Contact Us</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <p>If you have any questions or concerns about your delivery, please reach out to our Customer Service team at [Customer Service Email] or [Phone Number]. We are here to assist you!</p>
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
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import shippolicy from '@/app/public/svg/ShippingPolicyHearderimg.svg';
import React from 'react';

const shippingPolicy = () => {
  return (
    <div className='bg-white'>
      <nav>
        <Navbar />
      </nav>

      <main className='text-black'>
        <div>
          <Image 
            src={shippolicy}
            alt='Shipping Policy Background'
            className='w-full'
          />
        </div>

        <div className='container mx-auto mt-10 mb-36 w-4/5 font-dmSans text-sm leading-6'>
          <div className='mb-8 font-bold'>
              <h1><strong>Privacy Policy</strong></h1>
          </div>

          <div className='mb-8 font-medium'>
            <p>At yayyu lifestyle, we’re committed to delivering your order as quickly and efficiently as possible. Please review our shipping policy below to learn about processing times, shipping options, and delivery details.</p>
          </div>

          <div className='mb-8 font-medium'>
            <h3>
              <strong>Order Processing</strong>
            </h3>

            <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
              <li>Order Processing Time: All orders are processed within 1-3 business days of receiving your order (excluding weekends and holidays).</li>
              <li>Orders placed after 2:00 PM EST may be processed the following business day.</li>
              <li>You will receive an email with tracking information once your order has been shipped.</li>
            </ol>
          </div>

          <div className='mb-8 font-medium'>
            <h3>
              <strong>Shipping Methods & Rates</strong>
            </h3>

            <p>We offer a variety of shipping options to suit your needs. Shipping rates are calculated at checkout based on your location, order size, and shipping method.</p>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>1. Standard Shipping</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: 5-7 business days</li>
                <li>Shipping Rate: Based on your location and order size. Calculated at checkout.</li>
              </ol>
            </div>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>2. Expedited Shipping</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: 2-3 business days</li>
                <li>Shipping Rate: Based on your location and order size. Calculated at checkout.</li>
              </ol>
            </div>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>3. Express Shipping</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Delivery Time: 1 business day (Next-Day Delivery)</li>
                <li>Shipping Rate: Based on your location and order size. Calculated at checkout.</li>
              </ol>
            </div>

            <div className='mb-6 font-medium'>
              <h3>
                <strong>4. Free Shipping</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>We offer free standard shipping on orders over $[X] within [Country/Region]. The discount will be automatically applied at checkout.</li>
              </ol>
            </div>

            <div className='mb-8 font-medium'>
              <h3>
                <strong>International Shipping</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>We ship to most countries worldwide!</li>
                <li>International orders may be subject to customs fees, import duties, or taxes, which are the responsibility of the customer. Please check with your local customs office for more information before placing your order.</li>
                <li>Delivery times for international orders vary depending on the destination, but typically take between 7-14 business days.</li>
              </ol>
            </div>

            <div className='mb-8 font-medium'>
              <h3>
                <strong>Order Tracking</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Once your order ships, you’ll receive a tracking number via email. You can track the progress of your order through the courier's website.</li>
                <li>If you haven’t received tracking information within 3 business days, please reach out to our Customer Service team for assistance.</li>
              </ol>
            </div>

            <div className='mb-8 font-medium'>
              <h3>
                <strong>Shipping Restrictions</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>We do not ship to P.O. Boxes, APO/FPO addresses, or international forwarding addresses. Please ensure that you provide a valid street address for shipping.</li>
                <li>Some remote locations may have longer shipping times.</li>
              </ol>
            </div>

            <div className='mb-8 font-medium'>
              <h3>
                <strong>Missing or Lost Packages</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>We’re not responsible for lost or stolen packages once the tracking shows they have been delivered. However, if your package is marked as delivered but you haven't received it, please contact the shipping carrier to initiate an investigation.</li>
                <li>If you need help, feel free to contact our Customer Service team at [Customer Service Email] and we will assist you.</li>
              </ol>
            </div>

            <div className='mb-8 font-medium'>
              <h3>
                <strong>Damaged Items</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>If your order arrives damaged, please contact us at [Customer Service Email] immediately with photos of the damaged items and packaging. We will work with you to resolve the issue as quickly as possible, whether that’s by sending a replacement or issuing a refund.</li>
              </ol>
            </div>

            <div className='mb-8 font-medium'>
              <h3>
                <strong>Contact Us</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <p>If you have any questions or need assistance with your order, feel free to contact our Customer Service team at [Phone Number] or [Customer Service Email]. We’re here to help!</p>
              </ol>
            </div>
          </div>







        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default shippingPolicy
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import returnimg from '@/app/public/svg/returnbgimg.svg';
import React from 'react';

const returnPolicy = () => {
  return (
    <div className='bg-white'>
      <nav>
        <Navbar />
      </nav>

      <main className='text-black'>
        <div>
          <Image 
            src={returnimg}
            alt='return policy background'
            className='w-full'
          />
        </div>

        <div className='container mx-auto mt-10 mb-36 w-4/5 font-dmSans text-sm leading-6'>
          <div className='mb-8 font-bold'>
            <h1 className='text-lg'><strong>Return Policy</strong></h1>
          </div>

          <div className='mb-4 font-medium'>
            <p>At yayyu lifestyle, we want you to love your purchase! If you’re not completely satisfied with your order, we offer an easy and hassle-free return process. Please review our policy below for all the details.</p>
          </div>

          <div>
            <h3>
              <strong>Returns</strong>
            </h3>

            <p>You can return your item(s) within 30 days from the date of delivery for a full refund or exchange, subject to the following conditions:</p>

            <div className='pl-2 mb-4'>
              <h3>
                <strong>1. Eligibility</strong>
              </h3>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Items must be in new, unused condition, with all original tags, labels, and packaging intact.</li>
                <li>Items must be returned within 30 days of receiving your order. After this period, we can no longer accept returns or exchanges.</li>
              </ol>
            </div>

            <div className='pl-2 mb-4'>
              <h3>
                <strong>2. Non-Returnable Items</strong>
              </h3>

              <p className='pl-2'>The following items are final sale and cannot be returned:</p>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Sale or clearance items</li>
                <li>Underwear, swimwear, or intimate apparel (for hygiene reasons)</li>
                <li>Customized or personalized items</li>
              </ol>
            </div>
          </div>

          <div className='mb-5'>
            <h3>
              <strong>How to Return Your Item(s)</strong>
            </h3>

            <ol style={{listStyleType: 'decimal', paddingLeft: '2.5rem'}}>
                <li>
                  <p>Step 1: Contact Us</p>
                  <p>Reach out to our Customer Service team at [Customer Service Email] with your order number and the item(s) you wish to return. We will provide you with a Return Authorization (RA) number and detailed instructions.</p>
                </li>
                <li>
                  <p>Step 2: Pack Your Return</p>
                  <p>Carefully package your items to avoid damage during transit. Please include the RA number and your original order receipt in the package.</p>
                </li>
                <li>
                  <p>Step 3: Ship the Item(s) Back</p>
                  <p>You are responsible for the return shipping costs, unless the item is defective or the return is due to an error on our part. We recommend using a trackable shipping method to ensure the safe return of your item(s).</p>
                </li>
              </ol>
          </div>

          <div className='mb-4'>
              <h3>
                <strong>Refunds & Processing</strong>
              </h3>

              <p className='pl-2'>Once we receive your returned item(s), we will inspect it to ensure it meets the return criteria. If everything is in order, we will process your refund to the original payment method within 7-10 business days.</p>

              <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                <li>Refunds will exclude the original shipping fees unless the return is due to a defect or error on our part.</li>
                <li>If you opted for an exchange, we will ship your replacement item(s) as soon as the return is processed.</li>
              </ol>
          </div>

          <div className='mb-4'>
            <h3>
              <strong>Exchanges</strong>
            </h3>
            <p>We are happy to offer exchanges on most items within the return window. To exchange an item, please follow the same return steps above, and once we receive your returned item, we’ll send out the replacement.</p>
          </div>

          <div className='mb-4'>
            <h3>
              <strong>Damaged or Defective Items</strong>
            </h3>
            <p>If you receive a damaged or defective item, please contact us immediately at [Customer Service Email]. We will arrange a return at no additional cost to you, and offer a full refund or replacement.</p>
          </div>

          <div className='mb-4'>
            <h3>
              <strong>International Returns</strong>
            </h3>
            <p>For international orders, please contact our Customer Service team for assistance with the return process. Customers are responsible for any return shipping fees, customs duties, and taxes.</p>
          </div>

          <div className='mb-4'>
            <h3>
              <strong>Contact Us</strong>
            </h3>
            <p>If you have any questions or need further assistance, feel free to reach out to our Customer Service team at [Phone Number] or [Customer Service Email]. We’re here to help!</p>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default returnPolicy
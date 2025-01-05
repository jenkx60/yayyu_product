import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';
import faqsimg from '@/app/public/svg/faqs.svg';

const faqs = () => {
  return (
    <div className='bg-white'>
        <nav>
            <Navbar />
        </nav>

        <main className='text-black'>
            <div>
                <Image 
                    src={faqsimg}
                    alt='faqs'
                    className='w-full'
                />
            </div>

            <div className='container mx-auto mt-10 mb-36 w-4/5 font-dmSans text-sm leading-6'>
                <div className='mb-8 font-bold'>
                    <h1><strong>FAQs</strong></h1>
                </div>

                <div className='mb-8 font-medium'> 
                    <p>Welcome to our FAQ section! Here, you'll find answers to the most common questions about 
                        our products, ordering process, shipping, returns, and more. If you don't find the answer you are looking for,
                        feel free to contact our customer service team at [Customer Service Email].  </p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>1. How do I place an order?</strong>
                    </h3>
                    <p>Placing an order is simple! Just follow these steps:</p>

                    <ol style={{listStyleType: 'decimal', paddingLeft: '2rem'}}>
                        <li>Browse our collection and select the items you want to purchase.</li>
                        <li>Choose your size, color, and any other relevant options.</li>
                        <li>Add your items to the cart.</li>
                        <li>Go to the checkout page, enter your shipping information, and select your preferred payment method.</li>
                        <li>Review your order and click "Place Order" to complete your purchase.</li>
                    </ol>

                    <p>You'll recieve an email confirmation once your order is successfully placed!</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>2. What payment methods do you accept?</strong>
                    </h3>
                    <p>We accept the follow payment methods:</p>

                    <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                        <li>Credit/Debit Cards: Visa, MasterCard, American Express, Discover</li>
                        <li>PayPal</li>
                        <li>Apple Pay</li>
                        <li>Google Pay</li>
                        <li>Klarna (for installment payments)</li>
                    </ol>

                    <p>All payments are securely processed through our payment gateway.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>3. How can I track my order?</strong>
                    </h3>
                    <p>Once your order ships, you will recieve an email with a tracking number and a link to the carrier's website. You can use this to track the status of your delivery in real time.</p>

                    <p>If you haven't recieved tracking information within 3 business days of placing your order, please reach out to our customer service team.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>4. Can I change or cancel my order after placing it?</strong>
                    </h3>

                    <p>We process orders quickly to ensure prompt delivery, so once your order is confirmed, we cannot make changes or cancel it. However, if you notice an issue right after placing your order, please contact us immediately at [Customer Service Email] and we will try our best to assist you.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>5. What if I receive a damaged or defective item?</strong>
                    </h3>
                    <p>We're sorry if your order arrivedd damaged or defective! Please contact us within 7 days of receiving your item with the following information:</p>

                    <ol style={{listStyleType: 'disc', paddingLeft: '2rem'}}>
                        <li>Your order number</li>
                        <li>A photo of the damaged or defective item</li>
                        <li>A photo of the packaging (if applicable)</li>
                    </ol>

                    <p>All payments are securely processed through our payment gateway.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>6. What is your return policy?</strong>
                    </h3>
                    <p>We offer hassle-free returns within 30 days of receiving your order. To be eligible for a return, the item(s) must be in new, unworn condition with all original tags attached. To start a return, please follow these steps:</p>

                    <ol style={{listStyleType: 'decimal', paddingLeft: '2rem'}}>
                        <li>Contact us at [Customer Service Email] to request a Return Authorization (RA) number.</li>
                        <li>Ship the item(s) back to us using a trackable shipping method.</li>
                        <li>Once your return is processed, we will issue a refund to your original payment method.</li>
                    </ol>

                    <p>Please note, certain items like sale or clearance products, intimate wear, and personalized items may not be eligible for return. Refer to our full return 
                    policy for more details.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>7. Do you offer exchanges?</strong>
                    </h3>

                    <p>Yes! We offer exchanges for items that are the wrong size, color, or style, as long as they meet our return criteria. To exchange an item, please follow the same return process, and once we receive your returned item(s), we’ll ship out the replacement at no extra cost.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>8. How much does shipping cost?</strong>
                    </h3>
                    <p>Shipping rates depend on the size and weight of your order, as well as your shipping location. At checkout, you will be able to see the available shipping options and the associated costs.</p>

                    <p>We offer free standard shipping on orders over $[X] within [Country/Region].</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>9. Do you ship internationally?</strong>
                    </h3>

                    <p>Yes! We ship to most countries worldwide. International orders may take between 7-14 business days to arrive, depending on the destination. Additional customs fees, import duties, and taxes may apply depending on your country’s regulations and are the responsibility of the customer.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>10. I entered the wrong shipping address. Can I change it?</strong>
                    </h3>

                    <p>If you realize you’ve entered an incorrect address, please contact us immediately at [Customer Service Email]. If your order hasn’t been shipped yet, we can make the necessary corrections. Once your order has shipped, we are unable to modify the address.</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>11. My order hasn’t arrived yet. What should I do?</strong>
                    </h3>
                    <p>If your order hasn’t arrived within the expected delivery timeframe, please:</p>

                    <ol style={{listStyleType: 'decimal', paddingLeft: '2rem'}}>
                        <li>Check the tracking information to see the status of your delivery.</li>
                        <li>Verify with your local carrier or postal service to check if the package is being held.</li>
                        <li>Contact our customer service team at [Customer Service Email] for assistance if you still haven’t received your order after the estimated delivery date.</li>
                    </ol>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>12. How do I care for my items to keep them in great condition?</strong>
                    </h3>

                    <p>For care instructions, we recommend following the labels attached to each item. In general, we suggest washing delicate fabrics in cold water and air drying or laying flat to dry to avoid shrinking. If you need more detailed care instructions, feel free to reach out!</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>13. How do I sign up for your newsletter?</strong>
                    </h3>

                    <p>To stay updated on new arrivals, exclusive offers, and sales, simply enter your email address at the bottom of our website or sign up on our Newsletter Sign-Up Page. You’ll receive updates straight to your inbox!</p>
                </div>

                <div className='mb-8 font-medium'>
                    <h3>
                        <strong>Contact Us</strong>
                    </h3>

                    <p>If you still have questions, our customer service team is here to help! Reach out to us at [Customer Service Email] or call us at [Phone Number].</p>
                </div>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default faqs
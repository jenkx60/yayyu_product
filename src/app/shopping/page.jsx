import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import cheackouthead from '../public/Frame 23 checkout.svg';
import shophead from '../public/Frame 23 shopping.svg';
import model from '../public/model.svg';

const Shopping = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>

        <main>
            <div>
                <Image 
                    src={shophead}
                    alt='shop Head'
                />
            </div>
        </main>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Shopping
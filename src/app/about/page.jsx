import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import frame23 from '../public/svg/Frame 23.svg';
import frame46 from '../public/svg/Frame 46.svg';

const about = () => {
  return (
    <div className='bg-white'>
        <nav>
            <Navbar />
        </nav>
        <main>
            <div>
                <Image 
                    src={frame23}
                    alt='About Image 1'
                    className='w-full'
                />
            </div>

            <div className='container'>
                
                <div className='w-full relative'>
                    <div style={{
                        position: 'relative',
                        width: '80%',
                        maxWidth: '100%',
                        aspectRatio: '70/45',
                        margin: '2rem auto',
                    }}>
                        <Image 
                            src={frame46}
                            alt='About Image 2'
                            objectFit='cover'
                            priority
                            fill
                        />
                    </div>
                </div>

            </div>

            <div className='text-black font-dmSans mb-40 text-base text-center font-normal leading-8'>
                <div className='w-3/5 mx-auto'>
                    <p className='text-left mb-5'>
                        At YAYYU, we believe that every woman deserves to feel both comfortable and stylish, no matter the occasion. <br />
                        Our mission is to provide sustainable clothing options that blend elegance with modern design, suitable for <br />
                        both formal and informal settings.
                    </p>
                </div>

                <div className='w-3/5 mx-auto'>
                    <p className='text-left mb-5'>
                        We are committed to using only the finest materials and delivering exceptional designs that reflect our <br /> dedication to quality. Our collections feature modest yet fashionable styles with clean cuts, ensuring that each <br /> piece enhances your wardrobe.
                    </p>
                </div>

                <div className='w-3/5 mx-auto'>
                    <p className='text-left'>
                        As a socially empowered team, we strive to make shopping easy and enjoyable through our thoughtfully crafted <br />
                        designs and fase, seamless delivery. We aim to inspire women across the globe to embrace their unique style <br /> and wear pieces that make them feel their best, always.
                    </p>
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default about
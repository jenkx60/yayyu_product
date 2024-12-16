import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'next/image';
import heroimg1 from '../public/Property 1=Frame 27.png';
// src/app/public/Property 1=Frame 27.png
// src/app/public/Property 1=Frame 28.png
// src/app/public/Property 1=Frame 29.png
import heroimg2 from '../public/Property 1=Frame 28.png';
import heroimg3 from '../public/Property 1=Frame 29.png';

const UncontrolledCarousel = () => {
  return (
    <div>
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage 
                    src={heroimg1}
                    alt='Bag by a Lady'
                    width={100}
                    height={100}
                    text="First slide" 
                />
                <Carousel.Caption>
                    <h3>Classic and Premium <br /> Collection</h3>
                    <button>SHOP COLLECTION NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage 
                    src={heroimg2}
                    alt='Cloth on a rack'
                    text="Second slide" 
                />
                <Carousel.Caption>
                    <h3>Classic and Premium <br /> Collection</h3>
                    <button>SHOP COLLECTION NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage 
                    src={heroimg3}
                    alt='Lady standing'
                    text="Third slide" />
                <Carousel.Caption>
                    <h3>Classic and Premium <br /> Collection</h3>
                    <button>SHOP COLLECTION NOW</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default UncontrolledCarousel
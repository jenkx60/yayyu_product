import React, { useState } from 'react'
import ReactSlider from 'react-slider';

const PriceRange = () => {
    const [ priceRange, setPricerange ] = useState([50000, 150000]);

  return (
    <div>
        <div className='p-4'>
            <div className='flex justify-between font-dmSerifDis text-xs leading-3 pb-3'>
                <span>₦ {priceRange[0]}.00</span>
                <span>₦ {priceRange[1]}.00</span>
            </div>

            <ReactSlider
                className='horizontal-slider'
                thumbClassName='slider-thumb'
                trackClassName='slider-track'
                defaultValue={[50000, 1000000]}
                value={priceRange}
                onChange={value => setPricerange(value)}
                min={50000}
                max={150000}
                pearling
                minDistance={5000}
            />
        </div>
    </div>
  )
}

export default PriceRange
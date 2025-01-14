import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const CartCounter = () => {
    const [count, setCount] = useState(1);
    
    const increment = () => {
        setCount(count + 1);
    };
    
    const decrement = () => {
        setCount(Math.max(0, count - 1));
    };
  return (
    <div>
        <div className='bg-gray-200 text-black p-4 w-full flex gap-3 justify-center font-dmSans font-normal text-xl'>
            <button onClick={decrement}><FaMinus className='text-sm'/></button>
            <span>{count}</span>
            <button onClick={increment}><FaPlus className='text-sm'/></button>
        </div>
    </div>
  )
}

export default CartCounter
// "use client"
// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [ cartItems, setCartItems ] = useState([]);

//     const addToCart = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//     };

//     const removeFromCart = (item) => {
//         setCartItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== item.id));
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

import React from 'react'

const CartContext = () => {
  return (
    <div>CartContext</div>
  )
}

export default CartContext
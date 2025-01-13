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

// "use client"
// import React, { useState } from 'react'
// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   const updateCart = (newCart) => {
//     setCartItems(newCart);
//     localStorage.setItem('cart', JSON.stringify(newCart));
//   }
//   return (
//     <CartContext.Provider value={{ cartItems, updateCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export { CartContext, CartProvider };
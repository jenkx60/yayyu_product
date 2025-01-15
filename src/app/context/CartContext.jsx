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

// import React, { createContext, useState } from 'react';

// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [wishlist, setWishlist] = useState([]);
//     const [counter, setCounter] = useState(0);

//     const addToCart = (product) => {
//         setCart([...cart, product]);
//         setCounter(counter + 1);
//     };

//     const removeFromCart = (productId) => {
//         setCart([...cart, product]);
//         setCounter(counter - 1);
//     };

//     const addToWishlist = (product) => {
//         setWishlist([...wishlist, product]);
//     };

//     const removeFromWishlist = (productId) => {
//         setWishlist(wishlist.filter((product) => product.id === productId));
//     }
//   return (
//     <CartContext.Provider value={{ cart, wishlist, counter, addToCart, removeFromCart, addToWishlist, removeFromWishlist }}>
//         {children}
//     </CartContext.Provider>
//   );
// };

// export {CartProvider, CartContext};
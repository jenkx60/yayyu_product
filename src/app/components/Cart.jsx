// import Link from 'next/link';
// import React, { useEffect, useState, useContext } from 'react'
// import { CartContext } from '../context/CartContext';

// const Cart = () => {
//     const [ cartItems, setCartItems ] = useState([]);
//     const [ total, setTotal ] = useState(0);
//     const { cartAddItems, updateCart } = useContext(CartContext);

//     useEffect(() => {
//         const storedCart = localStorage.getItem('cart');
//         if (storedCart) {
//             setCartItems(JSON.parse(storedCart));
//             calculateTotal();
//         }
//     }, []);

//     const calculateTotal = () => {
//         const total = cartItems.reduce((acc, item) => acc + item.price, 0);
//         setTotal(total);
//     };

//     const handleRemoveItem = (id) => {
//         const updateCart = cartItems.filter((item) => item.id === id);
//         setCartItems(updateCart);
//         localStorage.setItem('cart', JSON.stringify(updateCart));
//         calculateTotal();
//     };
//   return (
//     <div className='container p-4'>
//         <h1 className='text-black font-bold text-lg'>Cart</h1>
//         <ul>
//             {cartItems.map((item) => (
//                 <li key={item.id} className='py-2'>
//                     <div className='flex justify-between'>
//                         <span>{item.name}</span>
//                         <span>₦{item.price.toLocaleString()}</span>
//                     </div>
//                     <button
//                         className='bg-black hover:bg-activehover text-white font-bold py-2 px-4 rounded'
//                         onClick={() => handleRemoveItem(item.id)}
//                     >Remove</button>
//                 </li>
//             ))}
//         </ul>
//         <div className='flex justify-between'>
//             <span className='text-black font-bold text-lg'>Total:</span>
//             <span className='text-black font-bold text-lg'>₦{cartItems.reduce((acc, item) => acc + item.price, 0).toLocaleString()}</span>
//         </div>
//         <Link href='/checkout'>
//             <a className='bg-black hover:bg-activehover text-white font-bold py-2 px-4 rounded'></a>
//         </Link>
//     </div>
//   )
// }

// export default Cart
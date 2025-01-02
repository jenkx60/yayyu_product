// import React, { useContext } from 'react'
// import { CartContext } from '../context/CartContext'
// import Image from 'next/image';

// const OrderSummary = () => {
//     const { cartItems, removeFromCart } = useContext(CartContext);

//     const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div>
//         <h1>Order Summary</h1>
//         <ul>
//             {cartItems.map((item) => (
//                 <li key={item.id}>
//                     <Image
//                         src={item.image}
//                         alt={item.name}
//                         width={50}
//                         height={50}
//                     />
//                     <div>
//                         <p>{item.name}</p>
//                     </div>
//                     <p>₦{item.price.toLocalString()}.00</p>
//                     <button onClick={() => removeFromCart(item)}>Remove</button>
//                 </li>
//             ))}
//         </ul>
//         <div>
//             <h2>Total: ₦{totalAmount.toLocalString()}.00</h2>
//         </div>
//     </div>
//   )
// }

// export default OrderSummary

import React from 'react'

const OrderSummary = () => {
  return (
    <div>OrderSummary</div>
  )
}

export default OrderSummary
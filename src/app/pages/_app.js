import React from 'react'
import { CartProvider } from '../context/cartcontext'
import Shopping from '../shopping/page'

const App = () => {
  return (
    <CartProvider>
        <Shopping />
    </CartProvider>
  );
};

// export default App
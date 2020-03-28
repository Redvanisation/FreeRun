import React, { useState, createContext } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  
  const [products, setProducts] = useState([]);

  const addToCart = item => setProducts(prevState => [...prevState, item]);

  const productsWithQuantity = products => {
    return products.reduce((acc, product) => {
      const found = acc.find(foundProduct => foundProduct.title === product.title);

      if (found) {
        found.quantity++;
      } else {
        acc.push({
          quantity: 1,
          ...product,
        })
      }
      return acc
    }, []);
  }

  return (
    <CartContext.Provider
      value={{
        products: productsWithQuantity(products),
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
      
  )
}

export default CartProvider;

import React, { useState, createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { saveToStorage } from '../../helpers/helpers';


export const CartContext = createContext(null);

const CartProvider = ({ children }) => {

  // const [storeCart, setStoreCart] = useLocalStorage('Cart', {})
  
  // const [cart, setCart] = useLocalStorage([]);

  // const reduceCart = () => {
    
  // }

  const addToCart = item => {
    if (item.quantity) {
      item.quantity++;
    } else {
      item.quantity = 1
    }
    setCart(prevState => [...prevState, item]);

    console.log({cart, item})
  };

  const addMore = item => {
    const found = cart.find(pro => pro.title === item.title);

    if (found) {
      found.quantity++;
      setCart(prev => [...prev, found])
    }
  }

  const subtractFromCart = item => {
    const found = cart.find(pro => pro.title === item.title);
    const ind = cart.indexOf(found);

    if (found && found.quantity >= 1) {
      found.quantity--;
      setCart(prev => [...prev.slice(0, ind), ...prev.slice(ind+1)])
    } else {
      return setCart(cart.filter(product => item.title !== product.title));
    }
  };

  const removeFromCart = item => setCart(cart.filter(product => item.title !== product.title));



  const cartWithQuantity = cart => {
    
    return cart.reduce((acc, product) => {
      
      const found = acc.find(foundProduct => foundProduct.title === product.title);

      if (found) {
          return acc;
      } else {
        acc.push({
          quantity: 1,
          ...product,
        })
      }
      return acc
    }, []);
  }

  // const storeTheCart = item => {
  //     setStoreCart(item)

  // }

  // const boo = cartWithQuantity(cart);

  // setStoreCart(boo)


  return (
    <CartContext.Provider
      value={{
        cart: cartWithQuantity(cart),
        cartCount: cart.length,
        addToCart,
        removeFromCart,
        subtractFromCart,
        addMore,
        // storeTheCart,
      }}
    >
      {/* {storeTheCart(cartWithQuantity(cart))} */}
      {/* {console.log(cart)} */}
      {children}
    </CartContext.Provider>
      
  )
}

export default CartProvider;

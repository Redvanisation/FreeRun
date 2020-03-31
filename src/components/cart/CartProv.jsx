import React, { useState, createContext } from 'react';
import { saveToStorage } from '../../helpers/helpers';
import useLocalStorage from '../../hooks/useLocalStorage';



export const CartContext = createContext(null);


const CartProv = ({ children }) => {

  const [cart, setCart] = useLocalStorage('Cart', []);
  const [quantity, setQuantity] = useState(0);

  const addToCart = item => {
    if (cart.includes(item)) {
      item.quantity++;
      setCart(prevState => {
        const ind = prevState.indexOf(item);
        prevState[ind] = item;
        return prevState;
      });
    } else {
      item.quantity = 1;
      setCart(prevState => [...prevState, item]);
    }
  }

  
  const quantityCount = (action, item) => {
    switch(action) {
      case '+':
        return setQuantity(prev => prev + 1);
      case '-':
        return setQuantity(prev => prev - 1);
      case 'remove':
        return setQuantity(prev => prev - item.quantity);
      default:
        throw Error();
    }
    // });
  }


  
  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: quantity,
        addToCart,
        quantityCount,
      }}
    >
    {children}
  </CartContext.Provider>
  );
}

export default CartProv;

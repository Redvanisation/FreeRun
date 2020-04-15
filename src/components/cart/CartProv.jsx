/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';


export const CartContext = createContext(null);


const CartProv = ({ children }) => {
  const [cart, setCart] = useLocalStorage('Cart', []);
  // const [, setQuantity] = useLocalStorage('quantity', 0);
  const [, setQuantity] = useState(0);


  const quantityCount = (action) => {
    switch (action) {
      case '+':
        return setQuantity((prev) => prev + 1);
      case '-':
        return setQuantity((prev) => prev - 1);
      // case 'REMOVE':
      //   return setQuantity((prev) => prev - item.quantity);
      default:
        throw Error();
    }
  };

  const addToCart = (item) => {
    if (cart.some((product) => product.name === item.name)) {

      if (item.quantity < item.stock) {
        item.quantity += 1;
        setCart((prevState) => {
          // const ind = prevState.indexOf(item);
          // prevState[ind] = item;
          quantityCount('+');
          return prevState;
        });
      } else {
        alert(`Sorry! we only have ${item.stock} units of this item...`);
      }
    } else {
      item.quantity = 1;
      setCart((prevState) => [...prevState, item]);
      // quantityCount('+');
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product.name !== item.name));
    // quantityCount('REMOVE', item);
  };

  const subtractFromCart = (item) => {
    if (cart.includes(item) && item.quantity > 1) {
      item.quantity -= 1;
      setCart((prevState) => {
        // const ind = prevState.indexOf(item);
        // prevState[ind] = item;
        quantityCount('-');
        return prevState;
      });
    } else {
      return removeFromCart(item);
    }
  };

  const clearCart = () => {
    setCart([]);
    // setQuantity(0);
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        addToCart,
        subtractFromCart,
        removeFromCart,
        quantityCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProv.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default CartProv;

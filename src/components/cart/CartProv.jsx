import React, { createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';



export const CartContext = createContext(null);


const CartProv = ({ children }) => {

  const [cart, setCart] = useLocalStorage('Cart', []);
  const [quantity, setQuantity] = useLocalStorage('quantity', 0);

  const addToCart = item => {
    if (cart.includes(item)) {
      if (item.quantity < item.stock) {
        item.quantity++;
        setCart(prevState => {
          const ind = prevState.indexOf(item);
          prevState[ind] = item;
          quantityCount('+');
          return prevState;
        });
      } else {
        alert(`Sorry! we only have ${item.stock} units of this item...`);
      }
    } else {
      item.quantity = 1;
      setCart(prevState => [...prevState, item]);
      quantityCount('+');
    }
  }

  const removeFromCart = item => {
    setCart(cart.filter(product => product.name !== item.name));
    quantityCount('REMOVE', item);
  }

  const subtractFromCart = item => {
    if (cart.includes(item) && item.quantity > 1) {
      item.quantity--;
      setCart(prevState => {
        const ind = prevState.indexOf(item);
        prevState[ind] = item;
        quantityCount('-');
        return prevState;
      });
    } else {
      return removeFromCart(item);
    }
  }

  const clearCart = () => {
    setCart([]);
    setQuantity(0);
  }

  
  const quantityCount = (action, item) => {
    switch(action) {
      case '+':
        return setQuantity(prev => prev + 1);
      case '-':
        return setQuantity(prev => prev - 1);
      case 'REMOVE':
        return setQuantity(prev => prev - item.quantity);
      default:
        throw Error();
    }
  }


  
  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: quantity,
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
}

export default CartProv;

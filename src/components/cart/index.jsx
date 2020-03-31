import React, { useContext } from 'react';
import products from '../../helpers/products.json';
import { PayPalButton } from "react-paypal-button-v2";
import { CartContext } from './CartProv';
// import useLocalStorage from '../../hooks/useLocalStorage';




const formatPrice = price => (
  `$${(price * 0.1).toFixed(2)}`
);

const totalPrice = items => {
  const boo = items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
  return (boo * 0.1).toFixed(2);
}

const Cart = () => {

  const cartCtx = useContext(CartContext);


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          {/* <th>Image</th> */}
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          cartCtx.cart.map(product => <tr key={product.id}>
            <td>{ product.title }</td>
            <td>{ product.description }</td>
            <td>{ product.quantity }</td>
            <td>{ formatPrice(product.price * product.quantity) }</td>
            <button onClick={() => cartCtx.addToCart(product)}>+</button>
            <button onClick={() => cartCtx.subtractFromCart(product)}>-</button>
            <button onClick={() => cartCtx.removeFromCart(product)}>remove from Cart</button>
          </tr>)
        }
        <tr>
          <td colSpan={3}>Total:</td>
          <td>{`$${totalPrice(cartCtx.cart)}`}</td>
        </tr>
        <tr>
          <td colSpan={4}>

          <PayPalButton
            amount={totalPrice(cartCtx.cart)}
            shippingPreference='NO_SHIPPING'
            onSuccess={(details, data) => {
              console.log("Transaction completed by " + details.payer.name.given_name)
              console.log('address' + details.payer.address)
            }
            }
          />
          {/* {console.log(cartCtx.cart)} */}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Cart;

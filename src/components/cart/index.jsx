import React, { useContext } from 'react';
import { CartContext } from './CartProv';
import { PayPalButton } from "react-paypal-button-v2";
import { formatPrice, totalPrice } from '../../helpers/';


const Cart = () => {

  const cartCtx = useContext(CartContext);


  return (
    <>
    { cartCtx.cart.length > 0 ?
          <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              cartCtx.cart.map(product => <tr key={product.id}>
                <td>
                  <img src={product.image.url} alt="" width="100" />
                </td>
                <td>{ product.name }</td>
                <td>{ product.description }</td>
                <td>{ product.stock }</td>
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
              <td>
                <button onClick={() => cartCtx.clearCart()}>Clear Cart</button>
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
    
              <PayPalButton
                amount={totalPrice(cartCtx.cart)}
                shippingPreference='NO_SHIPPING'
                onSuccess={(details, data) => {
                  console.log("Transaction completed by " + details.payer.name.given_name)
                }
                }
              />
              </td>
            </tr>
          </tbody>
        </table>
        :
        <h2>Your Cart is empty</h2>
    }
    </>

  );
}

export default Cart;

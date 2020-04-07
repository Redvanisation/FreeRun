import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartProv';
import { PayPalButton } from "react-paypal-button-v2";
import { formatPrice, totalPrice } from '../../helpers/';
import axios from 'axios';


const Cart = ({ history }) => {

  const cartCtx = useContext(CartContext);

  const updateItemStock = item => {
    item.stock = item.stock - item.quantity;
    axios({
      method: 'put',
      url: `http://localhost:3000/api/products/${item.id}`,
      data: {
        id: item.id,
        stock: item.stock,
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  const updateCartStock = cart => {
    cart.forEach(item => {
      updateItemStock(item);
    })
  }


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
              {/* <button onClick={() => {
                updateCartStock(cartCtx.cart)
                cartCtx.clearCart();
                history.push('/');
              }}>PAY!</button> */}
              <PayPalButton
                amount={totalPrice(cartCtx.cart)}
                shippingPreference='NO_SHIPPING'
                onSuccess={(details, data) => {
                  updateCartStock(cartCtx.cart);
                  console.log("Transaction completed by " + details.payer.name.given_name)
                  cartCtx.clearCart();
                  history.push('/');
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

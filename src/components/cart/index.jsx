import React, { useContext, useState } from 'react';
import { CartContext } from './CartProv';
import { PayPalButton } from "react-paypal-button-v2";
import { formatPrice, totalPrice } from '../../helpers/';
import axios from 'axios';
import Quantity from '../Quantity';


const Cart = ({ history }) => {

  const cartCtx = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const updateItemStock = item => {    
    setIsLoading(true);
    
    axios({
      method: 'put',
      url: `http://localhost:3000/api/products/${item.id}`,
      data: {
        ...item,
        stock: item.stock - item.quantity,
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    })
      .then(res => {
        setIsLoading(false);
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  const updateCartStock = cart => {
    cart.forEach(item => {
      updateItemStock(item);
    })
  }

  const success = () => {
    cartCtx.clearCart();
    history.push('/');
  }


  return (
    <div className="columns">
      <div className="column has-rows is-two-thirds">
      <h3 className="column title is-3">My Cart</h3>
        {cartCtx.cart.length > 0 ?
          (cartCtx.cart.map(product => 
            <div className="column columns cart__card" key={product.id}>
              <div className="column">
                <img src={product.image.url} alt={product.name} />
              </div>
              <div className="column has-text-centered">
                <h4 className="title is-5">{product.name}</h4>
                <h4 className="title is-6">{formatPrice(product.price * product.quantity)}</h4>
                <Quantity product={product} add={cartCtx.addToCart} subtract={cartCtx.subtractFromCart} 
                  remove={cartCtx.removeFromCart} />
{/* 
                <h5 className="title is-6">{product.quantity}</h5>
                <button className="button" onClick={() => cartCtx.addToCart(product)}>+</button>
                <button className="button" onClick={() => cartCtx.subtractFromCart(product)}>-</button> */}
                {/* <button className="button" onClick={() => cartCtx.removeFromCart(product)}>remove from Cart</button> */}
              </div>
            </div>
            )
          
          
          )
          :
          <h2>Your Cart is empty</h2>
        }
      </div>


      <div className="column  has-text-centered ">
        <h3 className="column title ">Summary</h3>
        <div className=" is-flex">
          <h5 className="title is-6 left-half">Subtotal</h5>
          <p className="right-half">...$</p>
        </div>
        <div className="is-flex">
          <h5 className="title is-6 left-half">Shipping</h5>
          <p className="right-half">...$</p>
        </div>
        <div className="is-flex">
          <h5 className="title is-6 left-half">Tax</h5>
          <p className="right-half">...$</p>
        </div>
        <div className="is-flex">
          <h5 className="title is-5">Total</h5>
          <p className="title is-5 right-half">{`$${totalPrice(cartCtx.cart)}`}</p>
        </div>
        <div className="column">
          <div className="is-4">
            <button className="button" onClick={() => cartCtx.clearCart()}>Clear Cart</button>
            <PayPalButton
                  amount={totalPrice(cartCtx.cart)}
                  shippingPreference='NO_SHIPPING'
                  onSuccess={(details, data) => {
                    updateCartStock(cartCtx.cart)
                    
                    isLoading ? 
                      console.log('PROCESSING.....')
                    :
                      setTimeout(() => {
                          alert("Transaction completed by " + details.payer.name.given_name)
                          success();
                        }, 1000)
                    }
                  }
              />
          </div>
        </div>
      </div>

              {/* <button onClick={() => {
                updateCartStock(cartCtx.cart)
                cartCtx.clearCart();
                history.push('/');
              }}>PAY!</button> */}



    
    </div>

  );
}

export default Cart;

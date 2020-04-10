import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartProv';
import { PayPalButton } from "react-paypal-button-v2";
import { formatPrice, calculateTax, calculateSubtotal, calculateTotalPrice } from '../../helpers/';
import axios from 'axios';
import Quantity from '../Quantity';


const Cart = ({ history }) => {

  const cartCtx = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateSubtotal(cartCtx.cart);
    calculateTax();
    calculateTotalPrice();
  })

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

  const calculateSubtotal = items => {
    const result = items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
    setSubtotal(result);
  };
  
  const calculateTax = () => (
    setTax((subtotal * 8.49 / 100).toFixed(2))
  );
  
  const calculateTotalPrice = () => {
    setTotal(Number(subtotal) + Number(tax));
  };

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
                <h4 className="title is-4">{product.name}</h4>
                <h4 className="title is-6">{formatPrice(product.price * product.quantity)}</h4>
                <Quantity product={product} add={cartCtx.addToCart} subtract={cartCtx.subtractFromCart} 
                  remove={cartCtx.removeFromCart} />
              </div>
            </div>
            )
          
          
          )
          :
          <h2>Your Cart is empty</h2>
        }
      </div>


      <div className="column has-text-centered">
        <h3 className="column title">Summary</h3>
        <div className="is-flex cart__summary">
          <h5 className="is-bold is-6">Subtotal</h5>
          <p className="">{formatPrice(subtotal)}</p>
        </div>
        <div className="is-flex">
          <h5 className="is-bold is-6">Shipping</h5>
          <p className="">FREE</p>
        </div>
        <div className="is-flex">
          <h5 className="is-bold is-6">Tax</h5>
          <p className="">{`$${tax}`}</p>
        </div>
        <hr className="cart__hr"/>
        <div className="is-flex">
          <h5 className="title is-5 cart__total">Total</h5>
          <p className="title is-5 ">{formatPrice(total)}</p>
        </div>
        <div className="column">
          <div className="is-4">
            <button className="button cart__btn" onClick={() => cartCtx.clearCart()}>Clear Cart</button>
            <PayPalButton
                  amount={total}
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
                  color='black'
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

import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { PayPalButton } from 'react-paypal-button-v2';
import axios from 'axios';
import PropTypes from 'prop-types';
import { CartContext } from './CartProv';
import { formatPrice } from '../../helpers';
import Quantity from '../Quantity';
import 'react-toastify/dist/ReactToastify.css';


const Cart = ({ history }) => {
  const cartCtx = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);


  const updateItemStock = (item) => {
    setIsLoading(true);

    axios({
      method: 'put',
      url: `https://free-run-api.herokuapp.com/api/products/${item.id}`,
      data: {
        ...item,
        stock: item.stock - item.quantity,
      },
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const updateCartStock = (cart) => {
    cart.forEach((item) => {
      updateItemStock(item);
    });
  };

  const calculateSubtotal = (items) => {
    const result = items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
    setSubtotal(result);
  };

  const calculateTax = () => (
    setTax(((subtotal * 8.49) / 100).toFixed(2))
  );

  const calculateTotalPrice = () => {
    setTotal(Number(subtotal) + Number(tax));
  };

  useEffect(() => {
    calculateSubtotal(cartCtx.cart);
    calculateTax();
    calculateTotalPrice();
  });

  const success = () => {
    cartCtx.clearCart();
    history.push('/');
  };

  const notify = () => toast('Transaction completed successfully!', {
    onClose: () => success(),
  });


  return (
    <div className="columns">
      <div className="column has-rows is-two-thirds">
        <h3 className="column title is-3">My Cart</h3>
        {cartCtx.cart.length > 0
          ? (cartCtx.cart.map((product) => (
            <div className="column columns cart__card" key={product.id}>
              <div className="column">
                <img src={product.image.url} alt={product.name} />
              </div>
              <div className="column has-text-centered">
                <h4 className="title is-4">{product.name}</h4>
                <h4 className="title is-6">{formatPrice(product.price * product.quantity)}</h4>
                <Quantity
                  product={product}
                  add={cartCtx.addToCart}
                  subtract={cartCtx.subtractFromCart}
                  remove={cartCtx.removeFromCart}
                />
              </div>
            </div>
          ))
          )
          : <h2 className="has-text-centered subtitle is-6">Your Cart is empty</h2>}
      </div>


      <div className="column has-text-centered">
        <h3 className="column title">Summary</h3>
        <ToastContainer autoClose={3000} hideProgressBar position="top-right" />
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
        <hr className="cart__hr" />
        <div className="is-flex">
          <h5 className="title is-5 cart__total">Total</h5>
          <p className="title is-5 ">{formatPrice(total)}</p>
        </div>
        <div className="column">
          <div className="is-4">
            <button className="button cart__btn" type="button" onClick={() => cartCtx.clearCart()}>Clear Cart</button>
            <PayPalButton
              amount={total}
              shippingPreference="NO_SHIPPING"
              onSuccess={() => {
                updateCartStock(cartCtx.cart);
                notify();
              }}
              // onCancel={() => {
              //   console.log('canceled');
              // }}
              style={{
                label: 'checkout',
                color: 'black',
                size: 'responsive',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Cart;

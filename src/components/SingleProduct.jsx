import React, { useContext } from 'react';
import {CartContext} from './cart/CartProv';
import { formatPrice } from '../helpers/';


const SingleProduct = ({ product }) => {

  const cartCtx = useContext(CartContext);

  const handleClick = (product, ctx) => {
    ctx.addToCart(product);
  }


  return (
    <div className="columns">
      <div className="column is-half is-offset-1">
        <img src={product.image.url} alt="product image" />
      </div>

      <div className="column has-text-centered is-vertical-center-col">
        <h3 className="title is-4">{product.name}</h3>
        <p className="subtitle">{product.description}</p>
        <p className="subtitle">{formatPrice(product.price)}</p>
        <div>
          <button className="button" onClick={() => handleClick(product, cartCtx)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

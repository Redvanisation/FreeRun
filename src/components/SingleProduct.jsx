import React, { useContext } from 'react';
import {CartContext} from './cart/CartProv';
import { formatPrice } from '../helpers/';


const SingleProduct = ({ product }) => {

  const cartCtx = useContext(CartContext);

  const handleClick = (product, ctx) => {
    ctx.addToCart(product);
  }


  return (
    <div className="columns single-product">
      <div className="column is-three-fifths single-product__image-div">
        <img src={product.image.url} alt={product.name} />
      </div>

      <div className="column has-text-centered is-vertical-center-col single-product__text-div">
        <h3 className="title is-4 single-product__text-div--item">{product.name}</h3>
        <hr/>
        <p className="subtitle single-product__text-div--item">{product.description}</p>
        <p className="subtitle single-product__text-div--item"><span className="subtitle is-bold">Stock:</span> {product.stock}</p>
        <p className="title is-4 single-product__text-div--item">{formatPrice(product.price)}</p>
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

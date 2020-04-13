import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from './cart/CartProv';
import { formatPrice } from '../helpers';


const SingleProduct = ({ product }) => {
  const cartCtx = useContext(CartContext);

  const handleClick = (item, ctx) => {
    ctx.addToCart(item);
  };


  return (
    <div className="columns single-product">
      <div className="column is-three-fifths single-product__image-div">
        <img src={product.image.url} alt={product.name} />
      </div>

      <div className="column has-text-centered is-vertical-center-col single-product__text-div">
        <h3 className="title is-4 single-product__text-div--item">{product.name}</h3>
        <hr />
        <p className="subtitle single-product__text-div--item">{product.description}</p>
        <p className="title is-4 single-product__text-div--item">{formatPrice(product.price)}</p>
        <p className="subtitle single-product__text-div--item">
          <span className="subtitle is-bold">Stock: </span>
          {product.stock > 0 ? product.stock : 'OUT OF STOCK'}
        </p>
        {
          product.stock <= 0 ? null
            : (
              <div>
                <button className="button" type="button" onClick={() => handleClick(product, cartCtx)}>
                  Add to cart
                </button>
              </div>
            )
        }
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default SingleProduct;

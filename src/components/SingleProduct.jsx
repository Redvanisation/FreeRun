import React, { useContext } from 'react';
import {CartContext} from './cart/CartProv';


const SingleProduct = ({ product }) => {

  const cartCtx = useContext(CartContext);

  const handleClick = (product, ctx) => {
    ctx.addToCart(product);
  }


  return (
    <>
      {/* <img src={product.image.url} alt="product image" width="400" height="400" /> */}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <div>
        <button onClick={() => handleClick(product, cartCtx)}>
          Add to cart
        </button>
      </div>
    </>
  );
}

export default SingleProduct;

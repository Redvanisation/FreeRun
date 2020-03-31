import React, { useState, useContext } from 'react';
// import { CartContext } from '../cart/CartProvider';
import { CartContext } from '../cart/CartProv';
import products from '../../helpers/products.json';


const Store = () => {
  
  const cartCtx = useContext(CartContext);
  
  const handleClick = (product, ctx) => {
      ctx.addToCart(product);
      ctx.quantityCount('+')
    
    }

  return (
    <div>
      {
        products.map(product => 
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* <p>{product.description}</p> */}
          <div>
            <button onClick={() => handleClick(product, cartCtx)}>
              Add to cart
            </button>
          </div>
        </div>)
      }
    </div>
  );
}


export default Store;

import React, { useContext } from 'react';
import { CartContext } from '../cart/CartProvider';
import products from '../../helpers/products.json';

const Store = () => {

  const cartCtx = useContext(CartContext);

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
            <button onClick={() => cartCtx.addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>)
      }
    </div>
  );
}


export default Store;

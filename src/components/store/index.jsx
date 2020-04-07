import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../cart/CartProv';
import axios from 'axios';


const Store = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // fetch('http://localhost:3000/api/products')
    // fetch('https://free-run-api.herokuapp.com/api/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data));
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    }
    
    setIsLoading(false);
    fetchData();
  }, []);
  
  // const handleClick = (product, ctx) => {
  //   ctx.addToCart(product);
  // }

  return (
      <div>
        {isLoading ? null :
          products.map(product => 
          <Link to={{pathname: `/products/${product.id}`, product: product}} className="product-card" key={product.id}>
            {
              product.image ?
              <img src={product.image.url} alt="product image" width="400" height="400" />
              : null
            }
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* <div>
              <button onClick={() => handleClick(product, cartCtx)}>
                Add to cart
              </button>
            </div> */}
          </Link>)
        }
      </div>
  );
}


export default Store;

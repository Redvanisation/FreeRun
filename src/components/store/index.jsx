import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../cart/CartProv';
import axios from 'axios';
import { formatPrice } from '../../helpers/';


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


  return (
      <div>
        {isLoading ? null :
          products.map(product => {
              if (product.stock > 0) {
                return (
                  <Link to={{pathname: `/products/${product.id}`, product: product}} className="product-card" key={product.id}>
                    {
                      product.image ?
                      <img src={product.image.url} alt="product image" width="400" />
                      : null
                    }
                    <h3>{product.name}</h3>
                    <p>{formatPrice(product.price)}</p>

                  </Link>
                )
              }
          })
        }
      </div>
  );
}


export default Store;

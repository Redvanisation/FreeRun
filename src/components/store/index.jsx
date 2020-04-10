import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from '../cart/CartProv';
import axios from 'axios';
import { formatPrice, fetchData } from '../../helpers/';


const Store = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // fetch('http://localhost:3000/api/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data));
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    }
    // fetchData('http://localhost:3000/api/products',  setProducts);
    
    setIsLoading(false);
    fetchData();
  }, []);






  return (
      <div className="columns is-multiline is-vcentered is-centered">
        {isLoading ? null :
            products.map(product => {
                if (product.stock > 0) {
                  return (
                  <div class="card column is-one-quarter">
                    <Link to={{pathname: `/products/${product.id}`, product: product}} key={product.id}>
                      <div class="card-image">
                        <figure class="image is-4by3">
                          <img src={product.image.url} alt={product.name} style={{'max-width': '100%'}} />
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="media">

                          <div class="media-content has-text-centered">
                            <p class="title is-5">{product.name}</p>
                            <p class="subtitle is-6 is-bold">{formatPrice(product.price)}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  )
                }
            })}
    </div>
  );
}


export default Store;

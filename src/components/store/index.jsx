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
    <>
      <h2 className="title is-1 has-text-centered is-uppercase big-title" id="store">Our Sneakers</h2>
      <div className="columns is-multiline is-vcentered is-centered card-container">
        {isLoading ? null :
            products.map(product => {
                if (product.stock > 0) {
                  return (
                  <div className="card column is-one-quarter" key={product.id}>
                    <Link to={{pathname: `/products/${product.id}`, product: product}} key={product.id}>
                      <div className="card-image">
                        <figure className="image">
                          <img src={product.image.url} alt={product.name} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="media">

                          <div className="media-content has-text-centered">
                            <p className="title is-5">{product.name}</p>
                            <p className="subtitle is-6 is-bold">{formatPrice(product.price)}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  )
                }
            })}
      </div>
    </>
  );
}


export default Store;

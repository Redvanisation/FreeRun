/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'react-bulma-components';
import { formatPrice, baseUrl } from '../../helpers';
import SearchBar from '../SearchBar';


const Store = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}api/products`);

      setProducts(response.data);
      setLoading(false);
    };

    fetchData();

    return (() => {
      setProducts({});
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    if (search.toLowerCase() === 'all') {
      return products;
    }
    return product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });


  const setContent = () => {
    if (loading) {
      return (
        <Loader className="loader" />
      );
    }

    return (
      filteredProducts.length > 0
        ? filteredProducts.map((product) => (
          <div className="card column is-one-quarter" key={product.id}>
            <Link to={{ pathname: `/products/${product.id}`, product }} key={product.id}>
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
        ))
        : (
          <div className="wrong-search-div has-text-centered">
            <h2 className="title is-4">Please try different keywords...</h2>
          </div>
        )
    );
  };

  return (
    <>
      <h2 className="title is-1 has-text-centered is-uppercase big-title" id="store">Our Sneakers</h2>
      <SearchBar setSearch={setSearch} />
      <div className="columns is-multiline is-vcentered is-centered card-container">
        {setContent()}
      </div>
    </>
  );
};


export default Store;

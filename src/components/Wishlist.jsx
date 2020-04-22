import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Loader } from 'react-bulma-components';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../containers/UsersProvider';
import { baseUrl, formatPrice } from '../helpers';


const Wishlist = () => {
  const userCtx = useContext(UserContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios({
      method: 'get',
      url: `${baseUrl}api/wishlist?user_id=${userCtx.cookies.user.user_id}`,
      withCredentials: true,
    })
      .then((res) => setWishlist(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [userCtx.cookies.user.user_id]);

  const deleteWishedItem = (item) => {
    axios({
      method: 'delete',
      url: `${baseUrl}api/wishlist/${item.id}`,
      data: {
        wished_product_id: item.id,
        user_id: userCtx.cookies.user.user_id,
      },
      withCredentials: true,
    });

    history.push('/');
  };

  const setContent = () => {
    if (loading) {
      return <Loader className="loader" />;
    }

    return (
      wishlist.map((product) => (
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
          <button type="button" className="button btn-delete" onClick={() => deleteWishedItem(product)}>Delete</button>
        </div>
      ))
    );
  };


  return (
    <>
      <h2 className="title is-2 has-text-centered has-margin-top-2">Wish List</h2>
      <div className="columns is-multiline is-vcentered is-centered card-container">
        {setContent()}
      </div>
    </>
  );
};

export default Wishlist;

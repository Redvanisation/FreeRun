import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'react-bulma-components';
import { baseUrl, formatPrice } from '../helpers';
import { UserContext } from '../containers/UsersProvider';
import Layout from '../containers/Layout';


const OrderShowPage = ({ location }) => {
  const history = useHistory();
  const userCtx = useContext(UserContext);
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}api/orders/${location.order.id}
    ?user_id=${userCtx.cookies.user.user_id}`)
      .then((res) => setOrderProducts(res.data.products))
      .catch((err) => console.log(err));
  }, [location.order.id, userCtx.cookies.user.user_id]);


  const formatOrdersProducts = () => (
    orderProducts ? (
      orderProducts.map((product) => (
        <div key={product.id} className="orders__products-div">
          <p className="orders__product">
            <span className="title is-6 orders__product--title">Name&nbsp;</span>
            {product.name}
          </p>
          <p className="orders__product">
            <div className="title is-6 orders__product--title">Details&nbsp;</div>
            {product.description}
          </p>
          <p className="orders__product">
            <span className="title is-6 orders__product--title">Price&nbsp;</span>
            {formatPrice(product.price)}
          </p>
        </div>
      ))
    )
      : (
        <Loader className="loader" />
      )
  );

  return (
    <>
      {
        location.order
          ? (
            <Layout title={`Order Number: ${location.order.id}`}>
              <div className="container orders">
                <h3 className="title is-4 is-centered">{`Order ${location.order.id} Products`}</h3>
                {
                  formatOrdersProducts()
                }
              </div>
            </Layout>
          ) : history.push('/')
      }
    </>
  );
};

OrderShowPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default OrderShowPage;

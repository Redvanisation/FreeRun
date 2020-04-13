import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout';
import Cart from '../components/cart';

const CartPage = ({ history }) => (
  <Layout title="Your Cart">
    <Cart history={history} />
  </Layout>
);

CartPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default CartPage;

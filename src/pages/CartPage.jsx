import React from 'react';
import Layout from '../containers/Layout';
import Cart from '../components/cart';

const CartPage = (props) => {
  return (
    <Layout title='Your Cart'>
        <Cart history={props.history} />
    </Layout>
  );
}

export default CartPage;

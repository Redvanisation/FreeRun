import React from 'react';
import Layout from '../containers/Layout';
import Cart from '../components/cart';

const CartPage = () => {
  return (
    <Layout title='Your Cart'>
        <Cart  />
    </Layout>
  );
}

export default CartPage;

import React from 'react';
import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import Store from '../components/store';


const ProductsPage = () => {
  return (
    <Layout title='Products Page'>
      <Hero />
      <Store />
    </Layout>
  );
}

export default ProductsPage;

import React from 'react';
import Layout from '../containers/Layout';
import SingleProduct from '../components/SingleProduct';


const ProductShowPage = ({ location }) => {
  return (
    <Layout title={location.product.name}>
      <SingleProduct product={location.product} />
    </Layout>
  );
}

export default ProductShowPage;

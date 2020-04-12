import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout';
import SingleProduct from '../components/SingleProduct';


const ProductShowPage = ({ location }) => (
  <Layout title={location.product.name}>
    <SingleProduct product={location.product} />
  </Layout>
);

ProductShowPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ProductShowPage;

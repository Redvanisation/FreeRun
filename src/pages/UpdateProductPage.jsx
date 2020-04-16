import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout';
import UpdateProduct from '../components/UpdateProduct';

const UpdateProductPage = ({ location }) => (
  <Layout title="Add Product">
    <UpdateProduct location={location} />
  </Layout>
);

UpdateProductPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default UpdateProductPage;

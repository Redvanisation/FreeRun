import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import SingleProduct from '../components/SingleProduct';


const ProductShowPage = ({ location }) => {
  const history = useHistory();

  return (
    <>
      {
        location.product
          ? (
            <Layout title={location.product.name}>
              <SingleProduct product={location.product} />
            </Layout>
          ) : history.push('/')
      }
    </>
  );
};

ProductShowPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default ProductShowPage;

import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import UpdateProduct from '../components/UpdateProduct';
import { UserContext } from '../containers/UsersProvider';

const UpdateProductPage = ({ location }) => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userCtx.cookies.user || !userCtx.cookies.user.admin) {
      history.push('/');
    }
  });

  return (
    <Layout title="Add Product">
      <UpdateProduct location={location} />
    </Layout>
  );
};

UpdateProductPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default UpdateProductPage;

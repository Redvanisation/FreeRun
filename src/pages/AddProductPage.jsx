import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import CreateProduct from '../components/CreateProduct';
import { UserContext } from '../containers/UsersProvider';

const AddProductPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userCtx.cookies.user || !userCtx.cookies.user.admin) {
      history.push('/');
    }
  });


  return (
    <Layout title="Add Product">
      <CreateProduct />
    </Layout>
  );
};

export default AddProductPage;

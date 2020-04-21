import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import Orders from '../components/Orders';
import { UserContext } from '../containers/UsersProvider';

const OrdersPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  return (
    <>
      {
        userCtx.cookies.user
          ? (
            <Layout title={`${userCtx.cookies.user.username}'s purchases history page`}>
              <Orders />
            </Layout>
          ) : history.push('/')
      }
    </>
  );
};

export default OrdersPage;

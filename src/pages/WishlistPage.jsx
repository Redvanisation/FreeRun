import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import Wishlist from '../components/Wishlist';
import { UserContext } from '../containers/UsersProvider';

const WishlistPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  return (
    <>
      {
        userCtx.cookies.user
          ? (
            <Layout title="Wishlist Page">
              <Wishlist />
            </Layout>
          ) : history.push('/')
      }
    </>
  );
};

export default WishlistPage;

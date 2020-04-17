import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../components/Login';
import { UserContext } from '../containers/UsersProvider';

const LoginPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (userCtx.cookies.user) {
      history.push('/');
    }
  });

  return (
    <Layout title="Login">
      <Login />
    </Layout>
  );
};

export default LoginPage;

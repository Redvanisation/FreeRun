import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../containers/UsersProvider';
import Layout from '../containers/Layout';
import Signup from '../components/Signup';

const SignupPage = () => {
  const userCtx = useContext(UserContext);
  const history = useHistory();


  useEffect(() => {
    if (userCtx.cookies.user) {
      history.push('/');
    }
  });

  return (
    <Layout title="Signup">
      <Signup />
    </Layout>
  );
};

export default SignupPage;

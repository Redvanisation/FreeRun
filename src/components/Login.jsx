import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../containers/UsersProvider';
import { baseUrl } from '../helpers';

const Login = () => {
  const userCtx = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    axios({
      method: 'post',
      url: `${baseUrl}auth/login`,
      data,
      withCredentials: true,
    })
      .then((res) => userCtx.setCookie('user', res.data))
      .catch((err) => console.log(err));
  };


  return (
    <div className="form-container has-text-centered">
      <h2 className="title is-3 is-centered">Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <input type="email" name="email" className="input" placeholder="Email" />
        <input type="password" name="password" className="input" placeholder="Password" autoComplete="off" />
        <input type="submit" className="button" value="Login" />
      </form>

      <div>
        Don&apos;t have an account?
        <Link to="/signup"> Sign up!</Link>
      </div>
    </div>
  );
};

export default Login;

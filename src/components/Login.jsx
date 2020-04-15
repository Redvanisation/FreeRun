import React, { useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../containers/UsersProvider';

const Login = () => {

  const userCtx = useContext(UserContext);
  const history = useHistory();


  const loginRedirect = (ctx, res) => {
    ctx.setUser(res.data);
    if (ctx.user) {
      history.push('/');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    axios({
      method: 'post',
      url: 'http://localhost:3000/auth/login',
      data,
      withCredentials: true,
    })
      .then((res) => loginRedirect(userCtx, res))
      .catch((err) => console.log(err));
  };

  // console.log('admin? ', userCtx.user.admin)
  const handleLogout = () => {
    axios({
      method: 'delete',
      url: 'http://localhost:3000/auth/logout',
      withCredentials: true,
    }).then(res => {
      if (res.status === 200) {
        userCtx.setUser({});
        localStorage.removeItem('User');
        console.log(res.data);
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <>
    <form className="form" onSubmit={handleLogin}>
      <input type="email" name="email" className="input" placeholder="Email" />
      <input type="password" name="password" className="input" placeholder="Password" autoComplete="off" />
      <input type="submit" className="button" />
    </form>

    <button onClick={handleLogout}>logout</button>
    </>
  );
};

export default Login;

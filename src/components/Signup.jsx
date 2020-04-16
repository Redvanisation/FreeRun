import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../containers/UsersProvider';

const Signup = () => {
  const userCtx = useContext(UserContext);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and Confirmation do not match!');

    } else {
      const data = new FormData(e.target);
      axios({
        method: 'post',
        url: 'http://localhost:3000/auth/register',
        data,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    e.target.reset();
  };


  return (
    <div className="form-container has-text-centered">
      <h2 className="title is-3 is-centered">Sign up</h2>
      <form className="form" onSubmit={handleSignup}>
        <input type="text" name="username" className="input" placeholder="Username" />
        <input type="email" name="email" className="input" placeholder="Email" />
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" autoComplete="off" />
        <input type="password" className="input" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Password Confirmation" autoComplete="off" />
        <input type="text" name="address" className="input" placeholder="Address" />
        <input type="submit" className="button" value="Sign up!" />
      </form>

      <div>
        You have an account?
        <Link to="/auth"> Login!</Link>
      </div>
    </div>
  );
};

export default Signup;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import { FiShoppingCart } from 'react-icons/fi';
import axios from 'axios';
import { CartContext } from './cart/CartProv';
import { UserContext } from '../containers/UsersProvider';


const TopBar = () => {
  const [showHide, setShowHide] = useState(false);
  const userCtx = useContext(UserContext);
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.cartCount;

  const handleLogout = () => {
    axios({
      method: 'delete',
      url: 'http://localhost:3000/auth/logout',
      withCredentials: true,
    }).then((res) => {
      if (res.status === 200) {
        userCtx.setUser({});
        console.log(res.data);
      }
    })
      .catch((err) => console.log(err));
  };


  return (

    <Navbar
      fixed="top"
      active={showHide}
      transparent={false}
      className="top-bar"
    >
      <Navbar.Brand>
        <Link to="/" className="title white-title is-4 top-bar__title">
          FREE RUN
        </Link>
        <Navbar.Burger className="top-bar__link--burger" onClick={() => setShowHide(!showHide)} />
      </Navbar.Brand>

      <Navbar.Menu>
        {
          Object.keys(userCtx.user).length > 0
            ? (
              <Navbar.Container>
                <div>
                  <h5>
                    Logged in as:
                    {userCtx.user.email}
                  </h5>
                  {
                    userCtx.user.admin === true ? <h5>Admin</h5> : null
                  }
                </div>
              </Navbar.Container>
            )
            : null
        }

        <Navbar.Container className="top-bar__link-container" position="end">
          <div className="top-bar__link-div">
            <Link to="/" className="top-bar__link is-bold">
              Home
            </Link>
          </div>

          <div className="top-bar__link-div">
            <Link to="/cart" className="top-bar__link is-bold">
              <FiShoppingCart className="top-bar__icon" />
              <span className="top-bar__icon--number">
                (
                {numItems}
                )
              </span>
            </Link>
          </div>

          <div className="top-bar__link-div">
            <Link to="/add" className="top-bar__link is-bold">
              Add
            </Link>
          </div>

          <div className="top-bar__link-div">
            { Object.keys(userCtx.user).length < 1
              ? (
                <Link to="/auth" className="top-bar__link is-bold">
                  Login
                </Link>
              )
              : (
                <Link to="/" className="top-bar__link is-bold" onClick={handleLogout}>
                  Logout
                </Link>
              )}
          </div>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default TopBar;

import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import { FiShoppingCart } from 'react-icons/fi';
import axios from 'axios';
import { CartContext } from './cart/CartProv';
import { UserContext } from '../containers/UsersProvider';
import { baseUrl } from '../helpers';


const TopBar = () => {
  const [showHide, setShowHide] = useState(false);
  const userCtx = useContext(UserContext);
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.cartCount;
  const history = useHistory();

  const handleLogout = () => {
    if (userCtx.cookies.user) {
      axios({
        method: 'delete',
        url: `${baseUrl}auth/logout`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            userCtx.removeCookie('user');
            history.push('/auth');
            console.log(res.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('login first');
    }
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
          (userCtx.cookies.user)
            ? (
              <Navbar.Container>
                <div className="top-bar__user-div">
                  <h5 className="top-bar__user-div--text">
                    Logged in as:&nbsp;
                    <span className="is-inline-block is-bold has-capital-fletter">{userCtx.cookies.user.username}</span>
                  </h5>
                  {
                    userCtx.cookies.user.admin === true ? <h5 className="top-bar__user-div--text is-bold">Admin</h5> : null
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
          {
            (userCtx.cookies.user && userCtx.cookies.user.admin)
              ? (
                <div className="top-bar__link-div">
                  <Link to="/add" className="top-bar__link is-bold">
                    Add
                  </Link>
                </div>
              )
              : null
          }

          { (!userCtx.cookies.user)
            ? (
              <div className="top-bar__link-div">
                <Link to="/auth" className="top-bar__link is-bold">
                  Login
                </Link>
              </div>
            )
            : (
              <>
                <div className="top-bar__link-div">
                  <Link to="/orders" className="top-bar__link is-bold">
                    Orders
                  </Link>
                </div>

                <div className="top-bar__link-div">
                  <Link to="/wishlist" className="top-bar__link is-bold">
                    Wishlist
                  </Link>
                </div>

                <div className="top-bar__link-div">
                  <Link to="/" className="top-bar__link is-bold" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              </>
            )}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default TopBar;

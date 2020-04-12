import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from './cart/CartProv';


const TopBar = () => {
  const [showHide, setShowHide] = useState(false);
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.cartCount;

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
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default TopBar;

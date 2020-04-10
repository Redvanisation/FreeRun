import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/cart/CartProv';
import { Navbar } from 'react-bulma-components';
import { FiShoppingCart } from "react-icons/fi";


const TopBar = () => {

  const [showHide, setShowHide] = useState(false);
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.cartCount;

  return (

    <Navbar
    // color='dark'
    fixed='top'
    active={showHide}
    transparent={false}
    className="top-bar"
  >
    <Navbar.Brand>
      <Navbar.Item>
        <Link to='/' className="title white-title is-4 top-bar__title">
          FREE RUN
        </Link>
      </Navbar.Item>
      <Navbar.Burger className="top-bar__link--burger" onClick={() => setShowHide(!showHide)} />
    </Navbar.Brand>

    <Navbar.Menu >
      <Navbar.Container position="end">
        <Navbar.Item className="top-bar__item">
          <Link to='/' className="top-bar__link is-bold">
            Home
          </Link>
        </Navbar.Item>
        <Navbar.Item className="top-bar__item">
          <Link to='/cart' className="top-bar__link is-bold">
            <FiShoppingCart className="top-bar__icon" /> 
            <span className="top-bar__icon--number">({numItems})</span>
          </Link>
        </Navbar.Item>
        <Navbar.Item className="top-bar__item">
          <Link to='/add' className="top-bar__link is-bold">
            Add
          </Link>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
  )
};

export default TopBar;

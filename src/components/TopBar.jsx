import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/cart/CartProv';
import { Navbar } from 'react-bulma-components';


const TopBar = () => {

  const [showHide, setShowHide] = useState(false);
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.cartCount;

  return (

    <Navbar
    color='dark'
    fixed='top'
    active={showHide}
    transparent={false}
    className="top-bar"
  >
    <Navbar.Brand>
      <Navbar.Item>
        <Link to='/' className="title white-title is-4">
          FREE RUN
        </Link>
      </Navbar.Item>
      <Navbar.Burger onClick={() => setShowHide(!showHide)} />
    </Navbar.Brand>

    <Navbar.Menu >
      <Navbar.Container position="end">
        <Navbar.Item >
          <Link to='/' className="white-title">
            Home
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to='/cart' className="white-title">
            Cart ({numItems})
          </Link>
        </Navbar.Item>
        <Navbar.Item>
          <Link to='/add' className="white-title">
            Add
          </Link>
        </Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>
  </Navbar>
  )
};

export default TopBar;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProv from './components/cart/CartProv';
// import CartProvider from './components/cart/CartProvider';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './stylesheets/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <CartProv>
      <Switch>
        <Route exact path='/' component={ProductsPage} />
        <Route exact path='/cart' component={CartPage} />
        {/* <Route path="/cart" render={(props) => <CartPage {...props} />} /> */}
      </Switch>
    </CartProv>
  </BrowserRouter>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

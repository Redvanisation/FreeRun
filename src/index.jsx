import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProv from './components/cart/CartProv';
import ProductsPage from './pages/ProductsPage';
import ProductShowPage from './pages/ProductShowPage';
import CartPage from './pages/CartPage';
import AddProductPage from './pages/AddProductPage';
import './stylesheets/main.scss';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <CartProv>
          <Route exact path='/' component={ProductsPage} />
          <Route exact path='/products/:id' component={ProductShowPage} />
          {/* <Route exact path='/products/:id' render={(props) => <ProductShowPage {...props} />}/> */}
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/add' component={AddProductPage} />
        </CartProv>
        {/* <Route path="/cart" render={(props) => <CartPage {...props} />} /> */}
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

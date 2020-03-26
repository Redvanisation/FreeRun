import React from 'react';
import products from '../../helpers/products.json';


const Cart = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(product => <tr>
            <td>{ product.title }</td>
            <td>{ product.description }</td>
            <td>{ product.price }</td>
            <td>{ product.quantity }</td>
          </tr>)
        }
      </tbody>
    </table>
  );
}

export default Cart;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../containers/UsersProvider';
import { baseUrl } from '../helpers';
import ProductsPage from '../pages/ProductsPage';

const Orders = () => {
  const userCtx = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${baseUrl}api/orders?user_id=${userCtx.cookies.user.user_id}`,
      withCredentials: true,
    })
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(orders);
  return (
    <div>
      {
        orders
          ? orders.map((order) => (
            <div key={order.id}>
              <p>
                Total Paid:
                {order.total}
              </p>
              <p>
                Status:
                {order.delivered}
              </p>

              <div>
                {/* {ProductsPage.map(product => (
                  <ul>
                    <li>{product.name}</li>
                    <li>{product.price}</li>
                  </ul>
                ))} */}
                {order.products}
              </div>
            </div>
          ))
          : 'NOTHING!'
      }
    </div>
  );
};

export default Orders;

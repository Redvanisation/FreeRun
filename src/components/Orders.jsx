import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../containers/UsersProvider';
import { baseUrl, formatPrice } from '../helpers';


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
    <div className="container has-text-centered orders">
      <h2 className="title is-3">Orders History</h2>
      {
        orders
          ? orders.map((order) => (
            <div className="orders__order" key={order.id}>
              <Link className="orders__order--link" to={{ pathname: `/orders/${order.id}`, order }}>
                <p>
                  <span className="title is-6">Order Number:&nbsp;</span>
                  {order.id}
                </p>
                <p>
                  <span className="title is-6">Total Paid:&nbsp;</span>
                  {formatPrice(order.total)}
                </p>
                <p>
                  <span className="title is-6">Status:&nbsp;</span>
                  {order.delivered ? 'Yes' : 'Not yet'}
                </p>
                <time dateTime={order.updated_at}>
                  <span className="title is-6">Date:&nbsp;</span>
                  {order.updated_at}
                </time>
              </Link>
            </div>
          ))
          : 'NOTHING!'
      }
    </div>
  );
};

export default Orders;

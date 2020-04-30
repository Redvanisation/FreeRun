import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from './cart/CartProv';
import { formatPrice, baseUrl } from '../helpers';
import { ModalContext } from './Modal';
import { UserContext } from '../containers/UsersProvider';

const SingleProduct = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);
  const userCtx = useContext(UserContext);


  const handleAdd = (action, type, item, modal) => {
    action(item);
    modal.setType(type);
    modal.setShow(true);
  };

  const checkItem = (ctx, item) => ctx.cart.some((CartItem) => CartItem.name === item.name);

  const handleDelete = (modal, item) => {
    modal.setShow(true);
    modal.setProduct(item);
    modal.setType('delete');
  };

  const addToWishlist = (item) => {
    axios({
      method: 'post',
      url: `${baseUrl}api/wishlist`,
      data: {
        wished_product_id: item.id,
        user_id: userCtx.cookies.user.user_id,
      },
      withCredentials: true,
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className="columns single-product">
      <div className="column is-three-fifths single-product__image-div">
        <img src={product.image.url} alt={product.name} />
      </div>

      <div className="column has-text-centered is-vertical-center-col single-product__text-div">
        <h3 className="title is-4 single-product__text-div--item">{product.name}</h3>
        {
          userCtx.cookies.user && userCtx.cookies.user.admin
            ? (
              <div className="single-product__admin-buttons-div">
                <Link to={{ pathname: '/update', product }} className="button single-product__admin-buttons-div--button">
                  Update
                </Link>
                <button type="button" className="button single-product__admin-buttons-div--button" onClick={() => handleDelete(modalCtx, product)}>Delete</button>
              </div>
            )
            : null
        }
        <hr />
        <p className="subtitle single-product__text-div--item">{product.description}</p>
        <p className="title is-4 single-product__text-div--item">{formatPrice(product.price)}</p>
        <p className="subtitle single-product__text-div--item">
          <span className="subtitle is-bold">Stock: </span>
          {product.stock > 0 ? product.stock : 'OUT OF STOCK'}
        </p>
        <div className="single-product__btns-div">
          {
            userCtx.cookies.user
              ? (
                <button type="button" className="button single-product__btns-div--btn" onClick={() => handleAdd(addToWishlist, 'wishlist', product, modalCtx)}>Add to Wishlist</button>
              )
              : null
          }
          {
            (product.stock <= 0) || checkItem(cartCtx, product) ? null
              : (
                <button type="button" className="button single-product__btns-div--btn" onClick={() => handleAdd(cartCtx.addToCart, 'product', product, modalCtx)}>
                  Add to cart
                </button>
              )
          }
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default SingleProduct;

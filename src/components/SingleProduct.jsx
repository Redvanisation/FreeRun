import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartContext } from './cart/CartProv';
import { formatPrice } from '../helpers';
import { ModalContext } from './Modal';
import { UserContext } from '../containers/UsersProvider';

const SingleProduct = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const modalCtx = useContext(ModalContext);
  const userCtx = useContext(UserContext);


  const handleClick = (ctx, item, modal) => {
    ctx.addToCart(item);
    modal.setType('product');
    modal.setShow(true);
  };

  const checkItem = (ctx, item) => ctx.cart.some((CartItem) => CartItem.name === item.name);

  const handleDelete = (modal, item) => {
    modal.setShow(true);
    modal.setProduct(item);
    modal.setType('delete');
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
        {
          (product.stock <= 0) || checkItem(cartCtx, product) ? null
            : (
              <div>
                <button className="button" type="button" onClick={() => handleClick(cartCtx, product, modalCtx)}>
                  Add to cart
                </button>
              </div>
            )
        }
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default SingleProduct;

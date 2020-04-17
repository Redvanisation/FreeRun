import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../containers/UsersProvider';
// import { ModalContext } from './Modal';
import { baseUrl } from '../helpers';


const UpdateProduct = ({ location }) => {
  const userCtx = useContext(UserContext);
  const [, setSelectedImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  // const modalCtx = useContext(ModalContext);
  const { product } = location;
  const history = useHistory();

  useEffect(() => {
    if (!product) {
      history.push('/');
    }
  }, [product, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append('user', userCtx.cookies.user.email);
    axios({
      method: 'put',

      url: `${baseUrl}api/products/${product.id}`,
      data,
      withCredentials: true,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  const handleImage = (e) => {
    const img = e.target.files[0];
    if (img.type === 'image/png' || img.type === 'image/jpg' || img.type === 'image/jpeg') {
      setSelectedImage(e.target.files[0]);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      alert('Please upload an image of type PNG or JPG');
    }
  };


  return (
    <div className="form-container has-text-centered">
      {
        product
          ? (
            <>
              <h2 className="title is-3 is-centered">Update Product</h2>
              <form onSubmit={handleSubmit} className="form create-product">
                <input type="text" className="input create-product__input" name="name" placeholder={product.name} defaultValue={product.name} />
                <textarea className="textarea create-product__textarea" name="description" defaultValue={product.description} cols="40" rows="10" />
                <input type="number" className="input create-product__input" name="price" placeholder={product.price} defaultValue={product.price} />
                <input type="text" className="input create-product__input" name="category" placeholder={product.category} defaultValue={product.category} />
                <input type="number" className="input create-product__input" name="stock" placeholder={product.stock} defaultValue={product.stock} />
                <input type="file" className="input create-product__input" name="image" onChange={handleImage} />
                <input type="submit" className="button" value="Update" disabled={isDisabled} />
              </form>
            </>
          )
          : null
      }
    </div>
  );
};

UpdateProduct.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default UpdateProduct;

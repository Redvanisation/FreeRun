import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../containers/UsersProvider';


const CreateProduct = () => {

  const userCtx = useContext(UserContext);
  const [, setSelectedImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    data.append('user', userCtx.user.email);
    // axios.post('https://free-run-api.herokuapp.com/api/products', data);
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/products',
      data,
      withCredentials: true,
    });
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
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
  }

  return (
    <div className="form-container has-text-centered">
      <h2 className="title is-3 is-centered">Add Product</h2>
      <form onSubmit={handleSubmit} className="form create-product">
        <input type="text" className="input create-product__input" name="name" placeholder="Name" required />
        <textarea className="textarea create-product__textarea" name="description" placeholder="Description..." cols="40" rows="10" />
        <input type="number" className="input create-product__input" name="price" placeholder="Price" required />
        <input type="text" className="input create-product__input" name="category" placeholder="Category" required />
        <input type="number" className="input create-product__input" name="stock" placeholder="Stock" required />
        <input type="file" className="input create-product__input" name="image" onChange={handleImage} required />
        <input type="submit" className="button" value="Create" disabled={isDisabled} />
      </form>
    </div>
  );
}

export default CreateProduct;
